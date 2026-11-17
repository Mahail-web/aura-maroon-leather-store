import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura Leather Studio | Affordable Women's Maroon Leather Jackets in Pakistan",
  description: "Explore handcrafted women's maroon leather jackets in Pakistan at honest, middle-class affordable PKR pricing (Rs. 5,490 - Rs. 8,950). Biker, Bomber, Shearling & Trench styles with Cash on Delivery and Open-Parcel Inspection.",
  keywords: "womens maroon leather jackets pakistan, affordable leather jacket pkr, the jacket maker pakistan alternative, womens biker jacket lahore karachi islamabad, sialkot leather jackets for women",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-beige-50 text-brand-purple-950 min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
