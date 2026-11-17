import { Product, Review } from "@/types";

export const MAROON_PRODUCTS: Product[] = [
  {
    id: "prod-01",
    name: "Flashback Maroon Asymmetrical Leather Biker Jacket",
    slug: "flashback-maroon-leather-biker-jacket",
    style: "Biker",
    finish: "Semi-Aniline",
    leatherType: "Supple Milled Sheepskin & Vegan Nappa Blend",
    lining: "Breathable Quilted Viscose Satin in Royal Beige",
    hardware: "Rust-Proof Antiqued Silver YKK Zippers",
    closure: "Asymmetrical Diagonal Front Zip",
    description: "An iconic double-rider silhouette crafted in a rich, velvety maroon finish. Features wide notch lapels with snap-down studs, waist-cinching adjustable side buckles, and zippered sleeve cuffs. Engineered for Pakistani winter climates with lightweight thermal quilted lining.",
    features: [
      "Signature asymmetrical moto collar with silver snap buttons",
      "Two zippered hand pockets & one slanted chest utility pocket",
      "Supple butter-soft leather touch with weather-resistant coating",
      "Tailored feminine cut that accentuates the waistline",
      "100% Rust-proof heavy duty YKK zippers throughout"
    ],
    originalPricePKR: 13900,
    salePricePKR: 6850,
    discountPercent: 51,
    rating: 4.9,
    reviewsCount: 142,
    badge: "BESTSELLER",
    isBestSeller: true,
    estimatedDeliveryDays: "2-3 Days via TCS Express",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "Custom Made"],
    primaryImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Deep Royal Maroon", hex: "#6b1426", class: "bg-[#6b1426]" },
      { name: "Velvet Burgundy", hex: "#4a0e17", class: "bg-[#4a0e17]" },
      { name: "Plum Mahogany", hex: "#561d25", class: "bg-[#561d25]" },
    ]
  },
  {
    id: "prod-02",
    name: "Sherilyn B-3 Maroon Faux-Shearling Aviator Bomber",
    slug: "sherilyn-maroon-shearling-bomber",
    style: "Shearling",
    finish: "Matte Nappa",
    leatherType: "High-Density Milled Leather with Plush Ivory Sherpa",
    lining: "Full Warm Plush Faux-Shearling Lining",
    hardware: "Matte Burnished Brass Twin Buckle Straps",
    closure: "Heavy Gauge Central Zip with Double Throat Latches",
    description: "Built for Northern Pakistan chills and cold Islamabad/Quetta evenings. Combines rich deep maroon grain leather with contrast warm cream shearling collar, roll-up cuffs, and hem belt straps for ultimate winter warmth and statement runway style.",
    features: [
      "Ultra-cozy plush cream shearling collar with double buckle strap",
      "Heavy insulation designed for temperatures down to 2°C",
      "Deep fleece-lined handwarmer welt pockets",
      "Reinforced contrast seam taping across front and back yoke",
      "Sialkot hand-stitched craft with lifetime seam integrity"
    ],
    originalPricePKR: 17500,
    salePricePKR: 8450,
    discountPercent: 52,
    rating: 4.95,
    reviewsCount: 98,
    badge: "WINTER HIT",
    isBestSeller: true,
    estimatedDeliveryDays: "3-4 Days via Leopard Courier",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    primaryImage: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Rich Maroon & Cream", hex: "#731c2c", class: "bg-[#731c2c]" },
      { name: "Dark Cherry Sherpa", hex: "#50121d", class: "bg-[#50121d]" },
    ]
  },
  {
    id: "prod-03",
    name: "Kelsee Quilted Shoulder Maroon Moto Jacket",
    slug: "kelsee-quilted-shoulder-maroon-jacket",
    style: "Quilted",
    finish: "Semi-Aniline",
    leatherType: "Fine Grain Lamb-Touch Soft Finished Leather",
    lining: "Lightweight Silk Touch Viscose in Champagne Gold",
    hardware: "Gunmetal Polished Zippers and Snap Closures",
    closure: "Straight Front Zip with Snap-Tab Mandarin Collar",
    description: "Features intricate padded diamond-quilt detailing across the shoulders and upper sleeves. Sleek, streamlined silhouette that transitions seamlessly from university lectures in Lahore to weekend dinners in Karachi.",
    features: [
      "Ergonomic padded diamond quilting on shoulder caps",
      "Minimalist stand collar with dual metallic press studs",
      "Slimming vertical princess seams on front and back",
      "Interior phone pocket with cable pass-through port",
      "Treated with spill-resistant protective sealant"
    ],
    originalPricePKR: 13200,
    salePricePKR: 6490,
    discountPercent: 51,
    rating: 4.85,
    reviewsCount: 84,
    badge: "POPULAR",
    estimatedDeliveryDays: "2-3 Days via TCS Express",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "Custom Made"],
    primaryImage: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Maroon Crimson", hex: "#7a1a2d", class: "bg-[#7a1a2d]" },
      { name: "Mulberry Wine", hex: "#5c1020", class: "bg-[#5c1020]" },
    ]
  },
  {
    id: "prod-04",
    name: "Rumy Deep Wine Double-Rider Biker Jacket",
    slug: "rumy-deep-wine-double-rider-biker",
    style: "Biker",
    finish: "Distressed Vintage",
    leatherType: "Hand-Waxed Burnished Maroon Leather",
    lining: "Heavy Weight Crimson Rose Paisley Lining",
    hardware: "Antiqued Brass Heavy Duty Hardware",
    closure: "Off-Center Zipper with Integrated Waist Belt",
    description: "A bold, rebellious classic inspired by heritage motorcycle gear with a feminine twist. Hand-burnished edges create a rich two-tone patina that deepens with every wear. Includes an attached full waist belt with heavy metallic roller buckle.",
    features: [
      "Full removable front buckle belt with chrome eyelets",
      "Hand-rubbed vintage edges around lapels and pockets",
      "Snap-down epaulettes on shoulders for military flair",
      "Dual sleeve zipper vents for easy glove wear",
      "Pre-conditioned leather that feels broken-in from day one"
    ],
    originalPricePKR: 14800,
    salePricePKR: 7200,
    discountPercent: 51,
    rating: 4.88,
    reviewsCount: 76,
    badge: "HERITAGE",
    estimatedDeliveryDays: "2-3 Days via Trax Courier",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    primaryImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Deep Vintage Wine", hex: "#54121d", class: "bg-[#54121d]" },
      { name: "Burnished Oxblood", hex: "#480914", class: "bg-[#480914]" }
    ]
  },
  {
    id: "prod-05",
    name: "Reida Minimalist Maroon Band-Collar Jacket",
    slug: "reida-minimalist-maroon-leather-jacket",
    style: "Bomber",
    finish: "Matte Nappa",
    leatherType: "Ultra-Lightweight Glove-Tanned Calfskin Feel",
    lining: "Breathable Modal Satin in Warm Sand Beige",
    hardware: "Concealed Matte Black YKK Hardware",
    closure: "Clean Hidden Placket Front Zipper",
    description: "The epitome of quiet luxury for the modern Pakistani professional. Clean lines without excessive hardware, featuring a low mandarine band collar, concealed zipper, and hidden magnet-fastened waist pockets.",
    features: [
      "Ultra-clean silhouette with concealed front zipper",
      "Featherlight construction suitable for 15°C to 25°C weather",
      "Supple matte texture that never creases or wrinkles",
      "Discreet hidden side pockets with magnetic closure",
      "Pairs effortlessly with Shalwar Kameez, Jeans, or Kurtis"
    ],
    originalPricePKR: 11900,
    salePricePKR: 5850,
    discountPercent: 51,
    rating: 4.92,
    reviewsCount: 115,
    badge: "AFFORDABLE LUXE",
    isBestSeller: true,
    estimatedDeliveryDays: "2-3 Days via TCS Express",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "Custom Made"],
    primaryImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Maroon Rose", hex: "#7a2035", class: "bg-[#7a2035]" },
      { name: "Rich Berry", hex: "#5e1425", class: "bg-[#5e1425]" }
    ]
  },
  {
    id: "prod-06",
    name: "Bliss Detachable Hooded Maroon Street Jacket",
    slug: "bliss-detachable-hooded-maroon-jacket",
    style: "Hooded",
    finish: "Semi-Aniline",
    leatherType: "Water-Repellent Milled Poly-Leather & Cotton Fleece",
    lining: "Dual Thermal Quilted Lining + Heather Grey Fleece Hood",
    hardware: "Gunmetal Chunky Zips & Metallic Drawstring Aglets",
    closure: "Double-Layer Front: Inner Fleece Zip + Outer Leather Snap",
    description: "Versatility meets urban streetwear. Features an innovative detachable heather grey fleece hood and bib that zips out in seconds, turning a casual hoodie-jacket hybrid into a sharp standalone maroon leather racer.",
    features: [
      "2-in-1 Design: Removable cotton fleece hood and inner zip panel",
      "Double wind-shield zipper mechanism to block cold draft",
      "Ribbed knit wind-cuffs and flexible side stretch panels",
      "Four functional utility exterior pockets",
      "Perfect for college students and active daywear"
    ],
    originalPricePKR: 14200,
    salePricePKR: 6950,
    discountPercent: 51,
    rating: 4.87,
    reviewsCount: 63,
    badge: "2-IN-1 HOOD",
    estimatedDeliveryDays: "3-4 Days via TCS Express",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    primaryImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Maroon with Grey Hood", hex: "#6c1a2c", class: "bg-[#6c1a2c]" },
      { name: "Crimson with Charcoal", hex: "#4e101f", class: "bg-[#4e101f]" }
    ]
  },
  {
    id: "prod-07",
    name: "Savant Maroon & Cream Hybrid Varsity Jacket",
    slug: "savant-maroon-cream-varsity-jacket",
    style: "Varsity",
    finish: "Matte Nappa",
    leatherType: "Maroon Melton Wool Body with Cream Leather Sleeves",
    lining: "Padded Diamond Quilted Polyester Lining",
    hardware: "Color-Matched Maroon Enamel Snap Buttons",
    closure: "Classic Varsity Heavy Snap Front",
    description: "A chic, sporty collegiate statement piece. Blends rich maroon insulating wool body with supple cream leather sleeves and striped knit ribbing at collar, cuffs, and hem. High-energy aesthetic loved by fashion influencers in Islamabad and Karachi.",
    features: [
      "Authentic athletic varsity silhouette with striped rib trims",
      "Two leather-trimmed slant pockets + internal valuables pocket",
      "Comfortable relaxed fit allowing layering over hoodies or sweaters",
      "Heavyweight thermal warmth without uncomfortable stiffness",
      "Contrasting beige-cream sleeves for striking visual pop"
    ],
    originalPricePKR: 11000,
    salePricePKR: 5490,
    discountPercent: 50,
    rating: 4.82,
    reviewsCount: 57,
    badge: "COLLEGIATE",
    estimatedDeliveryDays: "2-3 Days via Leopard Courier",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    primaryImage: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Maroon & Cream", hex: "#751829", class: "bg-[#751829]" }
    ]
  },
  {
    id: "prod-08",
    name: "Nexi Diamond-Quilted Burgundy Biker Jacket",
    slug: "nexi-diamond-quilted-burgundy-biker",
    style: "Quilted",
    finish: "Pull-Up Glow",
    leatherType: "High-Gloss Treated Waxed Semi-Aniline Leather",
    lining: "Smooth Floral Satin Jacquard Lining",
    hardware: "Mirror Polished Silver Tone Zippers & Rivets",
    closure: "Asymmetrical Zip with Expansion Gussets",
    description: "Every square inch of this jacket screams artisanal mastery. Features all-over precision diamond quilting on front, back, and sleeve panels, creating an opulent three-dimensional texture that catches evening lights gorgeously.",
    features: [
      "Full 360-degree precision geometric quilting",
      "Expanding side zipper gussets for an adaptable hourglass fit",
      "Sleek zippered sleeves with wind-seal baffles",
      "Rich deep burgundy hue that pairs exquisitely with beige trousers",
      "Stain-resistant coating for easy wipe-clean maintenance"
    ],
    originalPricePKR: 15200,
    salePricePKR: 7490,
    discountPercent: 51,
    rating: 4.96,
    reviewsCount: 110,
    badge: "TOP RATED",
    isBestSeller: true,
    estimatedDeliveryDays: "2-3 Days via TCS Express",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "Custom Made"],
    primaryImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Burgundy Gloss", hex: "#631323", class: "bg-[#631323]" },
      { name: "Black Cherry", hex: "#440a15", class: "bg-[#440a15]" }
    ]
  },
  {
    id: "prod-09",
    name: "Allura Long Maroon Belted Leather Trench Duster",
    slug: "allura-long-maroon-leather-trench",
    style: "Trench",
    finish: "Matte Nappa",
    leatherType: "Draping Soft Calfskin Hand-Feel Poly-Blend Leather",
    lining: "Full Length Beige Houndstooth Check Lining",
    hardware: "Horn Pattern Tortoise Buttons & Covered Buckle",
    closure: "Double-Breasted Front with Removable Tie Belt",
    description: "A dramatic mid-calf duster trench that exudes high-fashion sophistication. Features storm storm flaps, epaulettes, and a wide matching leather sash belt that clinches the waist for an unforgettable cinematic silhouette.",
    features: [
      "Mid-calf length (42 inches) for maximum elegance and coverage",
      "Double-breasted buttoning with interior anchor button",
      "Removable sash belt with adjustable rectangular buckle",
      "Deep side pockets large enough for pro-max smartphones",
      "Rear walking vent allows effortless movement"
    ],
    originalPricePKR: 18500,
    salePricePKR: 8950,
    discountPercent: 52,
    rating: 4.93,
    reviewsCount: 48,
    badge: "STATEMENT",
    estimatedDeliveryDays: "3-4 Days via TCS Express",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "Custom Made"],
    primaryImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Maroon Mahagony", hex: "#6d1828", class: "bg-[#6d1828]" },
      { name: "Deep Plum", hex: "#4b0d1a", class: "bg-[#4b0d1a]" }
    ]
  },
  {
    id: "prod-10",
    name: "Zarina Maroon Suede Velvet Trucker Jacket",
    slug: "zarina-maroon-suede-trucker-jacket",
    style: "Bomber",
    finish: "Suede Velvet Touch",
    leatherType: "Plush Napped Microsuede with Velvet Undertones",
    lining: "Pure Silk-Touch Breathable Viscose in Champagne",
    hardware: "Embossed Silver Shank Buttons",
    closure: "Center Shank Button Front Closure",
    description: "The casual classic denim trucker silhouette completely reimagined in ultra-velvety maroon suede. Supple, tactile, and luxuriously soft to touch, this jacket adds warmth and rich depth to any everyday outfit.",
    features: [
      "Soft napped velvet touch with subtle light play",
      "Point collar with classic dual flap chest pockets",
      "Adjustable button tabs at back waist for customized drape",
      "Lightweight feel with warm insulating back panel",
      "Non-fading color treatment tested in Pakistani sunshine"
    ],
    originalPricePKR: 12800,
    salePricePKR: 6250,
    discountPercent: 51,
    rating: 4.81,
    reviewsCount: 39,
    badge: "VELVET SUEDE",
    estimatedDeliveryDays: "2-3 Days via Trax Courier",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    primaryImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Velvet Maroon Suede", hex: "#761b2e", class: "bg-[#761b2e]" }
    ]
  },
  {
    id: "prod-11",
    name: "Farah High-Neck Cafe Racer Maroon Jacket",
    slug: "farah-high-neck-cafe-racer-maroon",
    style: "Biker",
    finish: "Semi-Aniline",
    leatherType: "Clean Grain Hand-Sorted Sheepskin Feel Leather",
    lining: "Lightly Padded Diamond Thermal Viscose in Sand",
    hardware: "Gunmetal Zippers with Leather Pull Tabs",
    closure: "Straight Front Zip with Snap Mandarin Choker Collar",
    description: "Sleek, aerodynamic cafe racer design featuring clean vertical lines, padded arm accents, and a distinctive snap-tab throat latch. A modern staple that looks equally stunning over eastern or western wear.",
    features: [
      "Band collar with dual-position snap closure",
      "Two vertical zip chest pockets and two zipped waist pockets",
      "Side stretch expansion ribs for ergonomic mobility",
      "Pre-curved sleeves designed to eliminate bulk",
      "Premium smooth glide YKK zippers with leather tags"
    ],
    originalPricePKR: 13500,
    salePricePKR: 6650,
    discountPercent: 51,
    rating: 4.89,
    reviewsCount: 71,
    badge: "MODERN RACER",
    estimatedDeliveryDays: "2-3 Days via TCS Express",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "Custom Made"],
    primaryImage: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Cafe Maroon", hex: "#681324", class: "bg-[#681324]" },
      { name: "Deep Ruby", hex: "#520d1a", class: "bg-[#520d1a]" }
    ]
  },
  {
    id: "prod-12",
    name: "Noor Tailored Maroon Leather Evening Blazer",
    slug: "noor-tailored-maroon-leather-blazer",
    style: "Blazer",
    finish: "Matte Nappa",
    leatherType: "Butter-Soft Tailored Poly-Leather",
    lining: "Pure Lilac Satin Lining with Interior Pocket",
    hardware: "Single Tortoise Front Button & Matching 3-Button Cuffs",
    closure: "Single Breasted Front One-Button Fastening",
    description: "Power dressing redefined with a feminine purple-beige palette touch. Features structured peak lapels, soft padded shoulders, flap welt pockets, and a gently nipped-in waist that creates an empowering, statuesque profile.",
    features: [
      "Sharp tailored peak lapels with subtle pick stitching",
      "Light structured shoulder pads for commanding posture",
      "Double flap pockets and decorative breast welt pocket",
      "Flattering nipped waistline cut for eastern and western tops",
      "Stain-resistant and easily cleaned with a damp microfiber cloth"
    ],
    originalPricePKR: 16000,
    salePricePKR: 7850,
    discountPercent: 51,
    rating: 4.97,
    reviewsCount: 124,
    badge: "EXECUTIVE LUXE",
    isBestSeller: true,
    estimatedDeliveryDays: "2-3 Days via TCS Express",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "Custom Made"],
    primaryImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85"
    ],
    colors: [
      { name: "Executive Maroon", hex: "#6f1627", class: "bg-[#6f1627]" },
      { name: "Royal Wine", hex: "#4d0d1b", class: "bg-[#4d0d1b]" }
    ]
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Zainab Fatima",
    city: "Lahore (DHA Phase 5)",
    rating: 5,
    date: "14 November 2026",
    title: "Unbelievable quality for Rs. 6,850! Exactly like Jacket Maker",
    comment: "I was looking at The Jacket Maker which wanted Rs. 42,000 for a maroon biker. I took a chance on Aura Leather Studio and I'm blown away! The leather is so soft, smells amazing, and TCS allowed me to open the box before paying cash. Best winter purchase!",
    verifiedBuyer: true,
    productName: "Flashback Maroon Asymmetrical Biker",
    avatarBg: "bg-purple-600"
  },
  {
    id: "rev-2",
    author: "Ayesha Malik",
    city: "Islamabad (F-7/2)",
    rating: 5,
    date: "10 November 2026",
    title: "Super warm Sherpa bomber for Islamabad cold",
    comment: "The Sherilyn B-3 in Maroon is gorgeous! Islamabad evenings get freezing in November and December. The cream shearling collar against the maroon leather looks so high-end. Everyone at my office asked where I bought it.",
    verifiedBuyer: true,
    productName: "Sherilyn B-3 Maroon Faux-Shearling Aviator Bomber",
    avatarBg: "bg-amber-600"
  },
  {
    id: "rev-3",
    author: "Hira Naveed",
    city: "Karachi (Clifton Block 4)",
    rating: 5,
    date: "06 November 2026",
    title: "Lightweight, stylish & fast COD delivery in Karachi",
    comment: "Karachi winters are mild, so I ordered the Reida Minimalist band collar jacket for Rs. 5,850. It's light, breathable, and doesn't make me sweat. Arrived in 3 days via Leopard courier.",
    verifiedBuyer: true,
    productName: "Reida Minimalist Maroon Band-Collar Jacket",
    avatarBg: "bg-purple-700"
  },
  {
    id: "rev-4",
    author: "Dr. Mahnoor Tariq",
    city: "Faisalabad",
    rating: 5,
    date: "02 November 2026",
    title: "The Noor Leather Blazer is pure elegance",
    comment: "Wore this Noor Blazer to an academic conference. The tailoring and purple-beige lining details look like a Rs. 25,000 designer piece. Fitting guide was 100% accurate.",
    verifiedBuyer: true,
    productName: "Noor Tailored Maroon Leather Evening Blazer",
    avatarBg: "bg-rose-700"
  }
];

export const PAKISTANI_CITIES = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Gujranwala",
  "Hyderabad",
  "Bahawalpur",
  "Sargodha",
  "Abbottabad",
  "Sahiwal",
  "Jhelum",
  "Sukkur",
  "Mardan"
];
