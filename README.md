# Aura Leather Studio — Women's Maroon Leather Jackets
### E-Commerce Store & AI Styling Chatbot in Next.js (Shop.co Layout Edition)
**Live Demo:** [https://leather-jacket.vercel.app/](https://leather-jacket.vercel.app/)

An export-grade e-commerce web application inspired by [The Jacket Maker Pakistan Women's Maroon Leather Jackets Collection](https://www.thejacketmaker.pk/collections/womens-maroon-leather-jackets), specifically engineered with **reasonable, highly affordable pricing in PKR for the Pakistani middle class** and styled in an elegant **feminine Bright Purple and Warm Velvet Beige** palette.

---

## 🌟 Key Highlights & Comparison with The Jacket Maker

| Feature | The Jacket Maker / Export Boutiques | **Aura Leather Studio (This Project)** |
| :--- | :--- | :--- |
| **Price Point** | **PKR 35,000 – PKR 65,000+** (Dollar-pegged export rates) | **PKR 5,490 – PKR 8,950** (Affordable middle-class pricing) |
| **Middleman Markup** | 300% agency & mall overheads | **0% Markup** (Direct Sialkot artisan workshop) |
| **Theme & Aesthetic** | Standard dark/neutral masculine theme | **Feminine Bright Royal Purple (`#9333ea`) & Warm Velvet Beige (`#fdfbf7`)** |
| **Payment Options** | Mostly advance credit card | **Cash on Delivery (COD)**, JazzCash, EasyPaisa, Raast & Card |
| **Parcel Policy** | Blind delivery | **Open-Parcel Inspection Allowed** before paying courier |
| **Sizing Assistance** | Static foreign chart | **Interactive Pakistani Size Guide & Fit Calculator** + **AI Stylist Chatbot** |
| **Courier Times** | 7–14 days custom queue | **2–3 Business Days** via TCS & Leopard Express nationwide |

---

## 🎨 Theme Palette (Bright Purple & Warm Beige)

- **Primary Bright Purple**: `#9333EA` (Vibrant royal purple)
- **Secondary Purple Glow**: `#A855F7` & `#F3E8FF` (Lavender mist)
- **Deep Velvet Plum**: `#3B0764` & `#581C87`
- **Warm Velvet Beige (Background)**: `#FDFBF7` (Soft alabaster cream)
- **Rich Camel/Tan Beige Accents**: `#F5EFEB`, `#EFE4D6`, `#CDB296`
- **Deep Maroon Highlights**: `#8B1E3F` & `#590D22` (Honoring the maroon leather collection)

---

## 🧥 Complete Women's Maroon Jacket Catalog (12 Styles)

1. **Flashback Maroon Asymmetrical Leather Biker Jacket** — `Rs. 6,850` *(Was Rs. 13,900 — 51% OFF)*
2. **Sherilyn B-3 Maroon Faux-Shearling Aviator Bomber** — `Rs. 8,450` *(Was Rs. 17,500 — 52% OFF)*
3. **Kelsee Quilted Shoulder Maroon Moto Jacket** — `Rs. 6,490` *(Was Rs. 13,200 — 51% OFF)*
4. **Rumy Deep Wine Double-Rider Biker Jacket** — `Rs. 7,200` *(Was Rs. 14,800 — 51% OFF)*
5. **Reida Minimalist Maroon Band-Collar Jacket** — `Rs. 5,850` *(Was Rs. 11,900 — 51% OFF)*
6. **Bliss Detachable Hooded Maroon Street Jacket** — `Rs. 6,950` *(Was Rs. 14,200 — 51% OFF)*
7. **Savant Maroon & Cream Hybrid Varsity Jacket** — `Rs. 5,490` *(Was Rs. 11,000 — 50% OFF)*
8. **Nexi Diamond-Quilted Burgundy Biker Jacket** — `Rs. 7,490` *(Was Rs. 15,200 — 51% OFF)*
9. **Allura Long Maroon Belted Leather Trench Duster** — `Rs. 8,950` *(Was Rs. 18,500 — 52% OFF)*
10. **Zarina Maroon Suede Velvet Trucker Jacket** — `Rs. 6,250` *(Was Rs. 12,800 — 51% OFF)*
11. **Farah High-Neck Cafe Racer Maroon Jacket** — `Rs. 6,650` *(Was Rs. 13,500 — 51% OFF)*
12. **Noor Tailored Maroon Leather Evening Blazer** — `Rs. 7,850` *(Was Rs. 16,000 — 51% OFF)*

---

## 🤖 Integrated AI Shopping & Sizing Chatbot ("Aura Assistant")

- **Floating Widget**: Elegant purple and beige floating button with live status indicator.
- **Bust/Chest Fit Prediction**: Enter your measurements (e.g. `36 inches`) to get instantaneous size advice with winter layering allowances.
- **Budget Recommendations**: Ask for jackets under `Rs. 7,000` to receive instant curated suggestions with direct clickable filter pills.
- **Delivery & Cash on Delivery (COD) FAQ**: Answers delivery schedules for Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, Faisalabad, etc.
- **Styling Advice**: Tips on pairing maroon leather with Pakistani shalwar kameez, kurtis, mom jeans, or evening slip dresses.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Quick Start
```bash
# 1. Clone or navigate to the project folder:
cd "d:\Datacrumbs assignments\Ecommerce website and chatbot"

# 2. Run the development server:
npm run dev

# 3. Open in your browser:
http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

---

## 📦 Project Structure

```
├── app/
│   ├── api/chat/route.ts      # AI shopping assistant API route
│   ├── globals.css            # Tailwind + Google Fonts (Playfair + Jakarta)
│   ├── layout.tsx             # Root layout with SEO metadata
│   └── page.tsx               # Main store page with state orchestration
├── components/
│   ├── Navbar.tsx             # Announcement bar, logo, search, cart/wishlist
│   ├── HeroBanner.tsx         # Collection title, breadcrumbs, style chips
│   ├── PriceComparisonBanner.tsx # Visual breakdown: Export vs Direct Sialkot
│   ├── FilterSidebar.tsx      # Filter by style, price in PKR, size, finish
│   ├── ProductGrid.tsx        # Responsive grid with sorting controls
│   ├── ProductCard.tsx        # High-res image hover, badges, PKR prices
│   ├── QuickViewModal.tsx     # Deep specs, city delivery calculator, WhatsApp
│   ├── SizeGuideModal.tsx     # Interactive Pakistani size measurement tool
│   ├── CartDrawer.tsx         # Free shipping progress, coupons (MAROON15)
│   ├── CheckoutModal.tsx      # COD, JazzCash, EasyPaisa, Confetti celebration
│   ├── WishlistDrawer.tsx     # Saved jackets drawer
│   ├── Chatbot.tsx            # Floating AI shopping stylist widget
│   ├── ReviewsSection.tsx     # Verified reviews from Lahore, Karachi, etc.
│   └── Footer.tsx             # Sialkot heritage, customer support, badges
├── data/
│   └── products.ts            # 12 maroon jackets, customer reviews, cities
├── types/
│   └── index.ts               # TypeScript interfaces
├── tailwind.config.ts         # Custom bright purple, beige & maroon palettes
└── package.json               # Dependencies (Next.js 14, Lucide, Tailwind)
```
