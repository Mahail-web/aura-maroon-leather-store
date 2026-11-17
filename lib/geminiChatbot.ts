import fs from 'fs';
import path from 'path';

interface ProductInfo {
  name: string;
  category: string;
  originalTJMPricePKR: number;
  affordableAuraPricePKR: number;
  stockStatus: string;
  description: string;
}

// Read catalog derived from client's spreadsheet
export function getCatalogProducts(): ProductInfo[] {
  try {
    const catalogPath = path.join(process.cwd(), 'data', 'sheetCatalog.json');
    if (fs.existsSync(catalogPath)) {
      const content = fs.readFileSync(catalogPath, 'utf8');
      const data = JSON.parse(content);
      return data.products || [];
    }
  } catch (err) {
    console.error('Failed to read sheetCatalog.json:', err);
  }
  return [];
}

async function fetchGeminiWithTimeout(url: string, payload: any, timeoutMs: number = 2200) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timer);
    return response;
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

export async function queryGemini(
  userMessage: string,
  chatHistory: { sender: 'user' | 'assistant'; text: string }[] = []
) {
  const apiKey = process.env.GEMINI_API_KEY || '';
  const catalog = getCatalogProducts();

  // Concise grounded catalog context to minimize TTFT (time-to-first-token)
  const catalogSummary = catalog
    .map(
      (p) =>
        `• ${p.name} (${p.category}): Real sheepskin. The Jacket Maker was Rs. ${p.originalTJMPricePKR.toLocaleString()}, Aura Studio price is Rs. ${p.affordableAuraPricePKR.toLocaleString()} (${p.stockStatus}). Features: ${p.description}.`
    )
    .join('\n');

  const systemPrompt = `You are Aura, the personal AI Fashion Stylist for Aura Leather Studio (Sialkot, Pakistan).
Theme: Feminine Bright Purple (#9333EA) & Warm Beige.
Tone: Warm, genial, polite, concise, customer-driven.
Catalog:
${catalogSummary}
Policies:
- Genuine sheepskin leather, quilted lining, YKK zippers.
- Middle-class pricing: Rs. 5,490 to Rs. 8,950 (vs Rs. 36k-50k at The Jacket Maker).
- Open-Parcel Inspection allowed before paying Cash on Delivery (COD). Free delivery on Rs. 4,999+.
- Sizes: XS (32-33"), S (34-35"), M (36-37"), L (38-40"), XL (41-43"), 2XL (44-46"). 7-day free exchange.
Keep responses concise (2-4 bullet points), friendly, and directly helpful.`;

  const contents: any[] = [];
  for (const turn of chatHistory.slice(-2)) {
    contents.push({
      role: turn.sender === 'user' ? 'user' : 'model',
      parts: [{ text: turn.text }],
    });
  }

  contents.push({
    role: 'user',
    parts: [{ text: `${systemPrompt}\n\nCustomer: ${userMessage}` }],
  });

  const payload = {
    contents,
    generationConfig: {
      temperature: 0.6,
      maxOutputTokens: 250,
    },
  };

  // Primary model: gemini-3.6-flash, with quick gemini-3.8-flash fallback
  const preferredModels = ['gemini-3.6-flash', 'gemini-3.8-flash'];

  for (const model of preferredModels) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetchGeminiWithTimeout(url, payload, 2200);

      if (response && response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return {
            reply: text.trim(),
            modelUsed: model,
            source: 'gemini',
          };
        }
      }
    } catch (err: any) {
      // If timeout or error, continue to immediate local fallback
      console.warn(`Model ${model} timeout or unavailable:`, err?.message || err);
    }
  }

  // Instant sub-millisecond grounded reply if external network/model is slow
  return {
    reply: generateSmartGroundedReply(userMessage, catalog),
    modelUsed: 'instant-grounded-catalog',
    source: 'local',
  };
}

function generateSmartGroundedReply(query: string, catalog: ProductInfo[]): string {
  const q = query.toLowerCase();

  if (q.includes('size') || q.includes('measurement') || q.includes('bust') || q.includes('chest') || q.includes('fit')) {
    return `📏 **Pakistani Standard Sizing Guide**:\n• **XS**: Bust 32-33" (Snug moto fit)\n• **S**: Bust 34-35" (Tailored everyday)\n• **M**: Bust 36-37" (Most popular in Pakistan, allows light sweater)\n• **L**: Bust 38-40" (Comfortable winter layering)\n• **XL**: Bust 41-43" | **2XL**: Bust 44-46"\n\n✨ All orders include **FREE 7-Day Doorstep Size Exchanges** via TCS! Would you like me to open the interactive Size Guide?`;
  }

  if (q.includes('price') || q.includes('budget') || q.includes('cheap') || q.includes('affordable') || q.includes('under') || q.includes('cost')) {
    const items = catalog.map(p => `• **${p.name}** — **Rs. ${p.affordableAuraPricePKR.toLocaleString()}** *(The Jacket Maker was Rs. ${p.originalTJMPricePKR.toLocaleString()})*`).join('\n');
    return `💰 **Affordable Middle-Class Pricing (Direct Sialkot Craft)**:\nWe eliminate foreign export markups so you can own genuine sheepskin leather for under Rs. 10,000:\n\n${items}\n\nAll orders include **Cash on Delivery (COD)** with open-parcel inspection before payment!`;
  }

  if (q.includes('biker') || q.includes('flashback') || q.includes('kelsee')) {
    return `🏍️ **Women's Maroon Biker Jackets (Genuine Sheepskin)**:\n• **Flashback Maroon Leather Biker** — **Rs. 6,850** (Classic notch collar, asymmetrical zip, quilted lining)\n• **Kelsee Maroon Leather Moto** — **Rs. 6,490** (Band collar, diamond quilted shoulder accents)\n\nBoth feature supple semi-aniline sheepskin leather and rust-proof YKK zippers!`;
  }

  if (q.includes('bomber') || q.includes('sherilyn') || q.includes('warm') || q.includes('winter') || q.includes('cold') || q.includes('shearling')) {
    return `❄️ **Cozy Winter Bombers**:\n• **Sherilyn B-3 Maroon Leather Bomber** — **Rs. 8,450** (Faux-shearling fleece collar & lining, heavy insulation for Islamabad/Murree winters)\n• **Reida Maroon Leather Bomber** — **Rs. 5,850** (Clean aniline finish, minimalist varsity collar)\n\nBoth include deep handwarmer pockets and wind-resistant zipper closures!`;
  }

  if (q.includes('delivery') || q.includes('cod') || q.includes('cash') || q.includes('shipping') || q.includes('tcs') || q.includes('open')) {
    return `🚚 **Delivery & Cash on Delivery Policy**:\n• **Open-Parcel Inspection**: You can open and inspect the jacket before handing cash to the TCS rider!\n• **Delivery Timeline**: 2–3 business days in Lahore, Karachi, and Islamabad (3–4 days nationwide).\n• **Shipping Fee**: FREE on all orders above Rs. 4,999!`;
  }

  return `Assalam-o-Alaikum! I am Aura, your personal stylist here to make your leather shopping effortless. 🌸\n\nHow can I help you discover your perfect maroon jacket or ideal fit today? Feel free to ask about sizes, prices in PKR, or Cash on Delivery terms!`;
}
