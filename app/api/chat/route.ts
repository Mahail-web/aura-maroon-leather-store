import { NextResponse } from 'next/server';
import { queryGemini } from '@/lib/geminiChatbot';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { message, chatHistory } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ reply: 'Please provide a question or inquiry.' }, { status: 400 });
    }

    const { reply, modelUsed, source } = await queryGemini(message, chatHistory || []);

    // Determine relevant action button
    const lower = message.toLowerCase();
    let suggestedAction = undefined;

    if (lower.includes('size') || lower.includes('measurement') || lower.includes('fit') || lower.includes('bust')) {
      suggestedAction = {
        type: 'open_size_guide',
        label: 'Open Interactive Size Guide',
      };
    } else if (lower.includes('budget') || lower.includes('cheap') || lower.includes('price') || lower.includes('affordable') || lower.includes('under') || lower.includes('7000')) {
      suggestedAction = {
        type: 'filter',
        payload: 'under7000',
        label: 'Filter Jackets Under Rs. 7,000',
      };
    } else if (lower.includes('biker') || lower.includes('flashback') || lower.includes('moto')) {
      suggestedAction = {
        type: 'filter',
        payload: 'Biker',
        label: 'Show Biker Jackets',
      };
    } else if (lower.includes('shearling') || lower.includes('sherilyn') || lower.includes('winter') || lower.includes('cold')) {
      suggestedAction = {
        type: 'filter',
        payload: 'Shearling',
        label: 'View Shearling & Winter Jackets',
      };
    }

    return NextResponse.json({
      reply,
      modelUsed,
      source,
      suggestedAction,
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      {
        reply: "Assalam-o-Alaikum! I am Aura, your personal stylist here to make your leather shopping effortless. 🌸\nHow can I help you discover your perfect maroon jacket or ideal fit today?",
        modelUsed: 'local-fallback',
      },
      { status: 200 }
    );
  }
}
