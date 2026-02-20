// HIVY - Place for Celebrations - Surat Configuration
// Main configuration file for the HIVY website

export interface SetupPackage {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  cakeIncluded: boolean; // true for Setup 1-3, false for Setup 4-8 (extra cost)
  features: string[];
  perfectFor: string[];
  thumbnail: string;
  images: string[];
  hidden?: boolean; // If true, package won't show on website but data is preserved
}

export interface ServiceCategory {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: ServiceKeyword[];
}

export interface ServiceKeyword {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

export interface AreaConfig {
  slug: string;
  name: string;
}

// ==================== SITE CONFIG ====================
export const siteConfig = {
  name: "HIVY - Birthday Surprise Planners",
  tagline: "Create Magical Birthday Memories in Surat",
  description: "Premium birthday surprise venue in Surat for couples. Romantic birthday decorations, cakes, and private rooftop celebrations.",
  phone: "+91 9727027278",
  whatsapp: "919727027278",
  email: "hello@birthdaysurprisesurat.com",
  address: "252/253, 2nd Floor, The Boulevard, Near Pratham Circle, Galleria Street, Green City Road, Adajan, Pal Gam, Surat, Gujarat 394510",
  city: "Surat",
  website: "https://birthdaysurprisesurat.com",
  colors: {
    primary: "#BE123C", // Romantic Rose
    secondary: "#FB7185", // Light Rose
    accent: "#9F1239",
    gradient: "from-rose-700 to-rose-600",
    gradientHover: "from-rose-800 to-rose-700",
    lightBg: "bg-rose-50",
    darkBg: "bg-rose-900",
    text: "text-rose-700"
  },
  socialLinks: {
    instagram: "https://www.instagram.com/hivy_placeforcelebration/?hl=en",
    facebook: "https://www.facebook.com/p/Hivy-placeforcelebration-61553052747625/",
    youtube: ""
  }
};

// ==================== SETUP PACKAGES (6 Setups) ====================
export const packages: SetupPackage[] = [
  {
    id: "setup-1",
    slug: "tent-of-romance",
    name: "Tent of Romance",
    emoji: "⛺💕✨",
    shortDescription: "Step into a cozy romantic tent where love blooms under soft lights and dreamy décor ✨",
    fullDescription: `⛺💕✨ Tent of Romance @ ₹6500/- only — where intimacy meets elegance, and every moment feels wrapped in love

Experience the ultimate romantic celebration at Surat's best candlelight dinner venue ✨. Tent of Romance is designed for couples who want a cozy, intimate, and unforgettable celebration.

🎂 Cake / Champagne / Photography
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)
• Book Photography: ₹2700/-
  - 10 to 15 Photos
  - 30 to 45 seconds Reel
  - Same day delivery of all pictures and video after your date complete

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

⛺ Trending Tent
From personalized messages written in real rose petals on the floor to a complete transformation of the space, we design every detail to match your unique vision. The entire area is beautifully decorated, from the ceiling to the floor, with stunning props, vibrant accents, and custom touches that bring your idea to life.

🌸 Curtains, Flowers, and Lights
The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

🌹 Floor Decorations
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. You can also customize according to your need.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🍽️ Mouth-Watering Dishes
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Valentine's Day Special

📍 Best romantic tent setup Surat | Candlelight dinner Gotri | Couple-friendly venue`,
    price: 6500,
    cakeIncluded: true,
    features: [
      "3 Hours Private Romantic Tent Celebration ⛺",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Photography Package Available: ₹2700/-",
      "7kg Real Rose Petals Floor Decoration 🌹",
      "Trending Tent Setup with Curtains & Lights 💡",
      "Unique Vintage Props & Bohemian Décor",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Ambiance 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Instagram-worthy Setup 📸"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Valentine's Day"],
    thumbnail: "/hivy-images/6500/cover.webp",
    images: [
      "/packages/tent-of-romance/images/12.webp",
      "/packages/tent-of-romance/images/13.webp",
      "/packages/tent-of-romance/images/14.webp",
      "/packages/tent-of-romance/images/15.webp",
      "/packages/tent-of-romance/images/16.webp",
      "/packages/tent-of-romance/images/17.webp",
      "/packages/tent-of-romance/images/18.webp",
      "/packages/tent-of-romance/images/19.webp",
      "/packages/tent-of-romance/images/20.webp",
      "/packages/tent-of-romance/images/21.webp",
      "/packages/tent-of-romance/images/22.webp",
      "/packages/tent-of-romance/images/23.webp",
      "/packages/tent-of-romance/images/24.webp",
      "/packages/tent-of-romance/images/25.webp",
      "/packages/tent-of-romance/images/26.webp",
      "/packages/tent-of-romance/images/62.webp",
      "/packages/tent-of-romance/images/63.webp",
      "/packages/tent-of-romance/images/64.webp",
      "/packages/tent-of-romance/images/65.webp",
      "/packages/tent-of-romance/images/66.webp",
      "/packages/tent-of-romance/images/67.webp",
      "/packages/tent-of-romance/images/68.webp",
      "/packages/tent-of-romance/images/69.webp",
      "/packages/tent-of-romance/images/70.webp",
      "/packages/tent-of-romance/images/71.webp",
      "/packages/tent-of-romance/images/72.webp",
      "/packages/tent-of-romance/images/73.webp",
      "/packages/tent-of-romance/images/74.webp",
      "/packages/tent-of-romance/images/75.webp",
      "/packages/tent-of-romance/images/76.webp"
    ]
  },
  {
    id: "setup-2",
    slug: "fairy-tale-proposals",
    name: "Fairy Tale Proposals",
    emoji: "🧚✨💍",
    shortDescription: "Step into a magical fairytale where dreams come true and love stories begin ✨",
    fullDescription: `🧚✨💍 Fairy Tale Proposals @ ₹6300/- — where every moment feels like a dream, and love stories get their perfect beginning

Step into a magical fairytale setting where romance meets enchantment at Surat's premier proposal venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

⛺ Trending Tent
We turn your proposal into a magical experience. Our expert team creates a stunning atmosphere with a floor adorned in real rose petals, an intimate tent draped in elegant curtains, and twinkling fairy lights that set the perfect romantic mood. Every detail is designed to make your moment unforgettable, ensuring your proposal is as enchanting as your love story.

🌸 Curtains, Flowers, and Lights
The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

🌹 Floor Decorations
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. You can also customize according to your need.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🍽️ Mouth-Watering Dishes
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Marriage Proposal

📍 Best fairytale proposal venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 6300,
    cakeIncluded: true,
    features: [
      "3 Hours Private Fairytale Celebration ✨",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Magical Tent with Elegant Curtains",
      "7kg Real Rose Petals Floor Art 🌹",
      "Twinkling Fairy Lights Setup 💡",
      "Unique Vintage Props & Décor",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Romantic Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Perfect for Proposals 💍"
    ],
    perfectFor: ["Marriage Proposal", "Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot"],
    thumbnail: "/hivy-images/6300/Cover.webp",
    images: [
      "/packages/fairy-tale-proposals/2.webp",
      "/packages/fairy-tale-proposals/3.webp",
      "/packages/fairy-tale-proposals/4.webp",
      "/packages/fairy-tale-proposals/5.webp",
      "/packages/fairy-tale-proposals/6.webp",
      "/packages/fairy-tale-proposals/7.webp",
      "/packages/fairy-tale-proposals/8.webp",
      "/packages/fairy-tale-proposals/9.webp",
      "/packages/fairy-tale-proposals/10.webp"
    ]
  },
  {
    id: "setup-3",
    slug: "swing-of-love",
    name: "Swing of LOVE",
    emoji: "🪽💕",
    shortDescription: "Float in love on a dreamy swing setup where romance meets playfulness ✨",
    fullDescription: `🪽💕 Swing of LOVE @ ₹5100/- — where love takes flight, moments feel lighter, and hearts swing together in perfect harmony

Experience the magic of romance on a beautifully decorated swing setup at Surat's most unique romantic venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

🪽 Swing Of LOVE
"Swing of Love" is a beautifully designed decorative piece that symbolizes romance, harmony, and elegance. Featuring a gracefully crafted swing adorned with delicate embellishments, it creates a dreamy and charming ambiance. Perfect for special occasions, this piece adds a touch of love and serenity to any space.

🌸 Curtains, Flowers, and Lights
The space is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Also Comfortable Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful space.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. These intricate designs add a touch of romance and elegance to the space.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Date Night

📍 Best swing setup venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 5100,
    cakeIncluded: true,
    features: [
      "3 Hours Private Swing Setup Celebration 🪽",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Beautiful Decorated Swing of Love",
      "Flowing Curtains & Twinkling Lights 💡",
      "7kg Real Rose Petals Floor Décor 🌹",
      "Unique Props & Vintage Lanterns",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Instagram-worthy Photo Spots 📸"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Date Night"],
    thumbnail: "/hivy-images/5100/Cover photo.webp",
    images: [
      "/hivy-images/5100/2.webp",
      "/hivy-images/5100/3.webp",
      "/hivy-images/5100/4.webp",
      "/hivy-images/5100/5.webp",
      "/hivy-images/5100/6.webp",
      "/hivy-images/5100/7.webp",
      "/hivy-images/5100/8.webp",
      "/hivy-images/5100/9.webp",
      "/hivy-images/5100/10.webp",
      "/hivy-images/5100/12.webp"
    ]
  },
  {
    id: "setup-4",
    slug: "boho-chic",
    name: "BoHo Chic",
    emoji: "🌾🪶✨",
    shortDescription: "Embrace free-spirited romance in a bohemian paradise filled with warmth and elegance ✨",
    fullDescription: `🌾🪶✨ BoHo Chic @ ₹5700/- — where bohemian vibes meet romantic elegance, and every moment feels effortlessly beautiful

Step into a boho-inspired wonderland where rustic charm meets modern romance at Surat's premier bohemian venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

🌾 Boho Styled Tent
Our tent is a work of art, with its intricate details and bohemian flair. Step inside and feel the cares of the world melt away as you immerse yourself in its cozy embrace.

🌸 Curtains, Flowers, and Lights
The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. These intricate designs add a touch of romance and elegance to the space.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Boho Theme Party

📍 Best bohemian venue Surat | Boho celebration cafe Gotri | Couple-friendly venue`,
    price: 5700,
    cakeIncluded: true,
    features: [
      "3 Hours Private Bohemian Celebration 🌾",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Artistic Boho Styled Tent",
      "Flowing Curtains & Twinkling Lights 💡",
      "7kg Real Rose Petals Floor Art 🌹",
      "Vintage Lanterns & Bohemian Rugs 🪴",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Intimate Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Open Roof Experience with Wind 🌙"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Boho Theme Party"],
    thumbnail: "/hivy-images/5700/Cover.webp",
    images: [
      "/hivy-images/5700/2.webp",
      "/hivy-images/5700/3.webp",
      "/hivy-images/5700/4.webp",
      "/hivy-images/5700/5.webp",
      "/hivy-images/5700/6.webp",
      "/hivy-images/5700/7.webp",
      "/hivy-images/5700/8.webp",
      "/hivy-images/5700/9.webp",
      "/hivy-images/5700/10.webp",
      "/hivy-images/5700/11.webp",
      "/hivy-images/5700/12.webp",
      "/hivy-images/5700/13.webp",
      "/hivy-images/5700/14.webp",
      "/hivy-images/5700/15.webp"
    ]
  },
  {
    id: "setup-5",
    slug: "twin-heart",
    name: "TwinHeart",
    emoji: "💕💕",
    shortDescription: "Celebrate love with twin hearts symbolizing two souls becoming one ✨",
    fullDescription: `💕💕 TwinHeart @ ₹4700/- only — where two hearts beat as one, and love is celebrated in its purest form

Experience the magic of togetherness in a beautifully decorated twin heart setup at Surat's most romantic venue ✨.

🎂 Cake & Champagne
• Cake: ₹500/-
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

❤️ Elegant Tent
Combining Red and White color to realm of elegance and luxury, where white curtains softly frame the scene, gentle lighting dances in the air, combined with Red Rose Petals.

🌸 Curtains, Flowers, and Lights
Decorating the floor with Red Roses giving twin heart shapes, enhanced by carefully selected props. The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
Immerse yourselves in the romance of a love story told through petals. Our Twin Hearts Rose Petal Decoration is designed to capture the essence of your connection. A beautiful arrangement of delicate rose petals forms two intertwined hearts, symbolizing the bond that ties you and your partner together. Surrounded by soft, fragrant petals, this stunning setup creates a breathtaking moment—perfect for a proposal, anniversary, or any celebration of love.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Couple Date Night

📍 Best heart-themed venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Twin Heart Celebration 💕",
      "Cake Available: ₹500/-",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Elegant Red & White Tent Setup",
      "Twin Heart Rose Petal Floor Art 🌹",
      "Flowing Curtains & Twinkling Lights 💡",
      "Unique Props & Vintage Lanterns",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Romantic Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Open Roof with Gentle Breeze 🌙"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Couple Date Night"],
    thumbnail: "/hivy-images/5400/2.webp",
    images: [
      "/hivy-images/5400/2.webp",
      "/hivy-images/5400/3.webp",
      "/hivy-images/5400/4.webp",
      "/hivy-images/5400/5.webp",
      "/hivy-images/5400/6.webp",
      "/hivy-images/5400/7.webp",
      "/hivy-images/5400/8.webp",
      "/hivy-images/5400/9.webp",
      "/hivy-images/5400/10.webp",
      "/hivy-images/5400/11.webp"
    ],
    hidden: true // Hidden from website but data preserved
  },
  {
    id: "setup-6",
    slug: "the-elite-group-setup",
    name: "Elite Group Setup",
    emoji: "💍✨",
    shortDescription: "Create a one-of-a-kind proposal experience tailored just for your love story ✨",
    fullDescription: `💍✨ Elite Group Setup — where your unique love story gets the perfect setting it deserves

Make your proposal truly unforgettable with a customized setup designed around your love story at Surat's best elite group setup venue ✨.

📦 Package Includes
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 2 Mesmerizing Hours
2 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

✨ What Makes This Experience Special?
• A fully decorated private setup with rose petals, warm fairy lights, and aesthetic details
• Lower seating arrangement for a relaxed and intimate vibe
• Exclusive reservation — the space is yours alone
• Background music to enhance the mood
• Ideal for photography & videography to capture your special moments
• Neon LED message to add to your mood
• Perfect for proposals, birthdays, bride-to-be celebrations, or any personal milestone

⚠️ This experience focuses on ambience and celebration. Food is not included in this package.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, and Neon LED light message, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

📌 Important Notes
• This package does not include food or beverages
• Ideal for couples or small groups accompanying the celebration
• Advance booking recommended due to limited availability

🎉 Perfect For
Marriage Proposal Surat | Birthday Celebration | Bride-to-Be Party | Anniversary Surprise | Personal Milestones | Pre-Wedding Photoshoot

📍 Best elite group setup venue Surat | Custom celebration cafe Gotri | Couple-friendly venue`,
    price: 5400,
    cakeIncluded: true,
    features: [
      "2 Hours Private Elite Group Celebration 💍",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Fully Decorated Private Setup ✨",
      "Rose Petals & Warm Fairy Lights",
      "Neon LED Custom Message 💡",
      "Exclusive Reservation - Space is Yours",
      "Lower Seating for Intimate Vibe 💑",
      "Candle-Lit Ambiance 🕯️",
      "Romantic Background Music 🎶",
      "Perfect for Photography & Videography 📸",
      "⚠️ Food NOT included in this package"
    ],
    perfectFor: ["Marriage Proposal", "Birthday Celebration", "Bride-to-Be Party", "Anniversary Surprise", "Personal Milestones", "Pre-Wedding Photoshoot"],
    thumbnail: "/hivy-images/5400/2.webp",
    images: [
      "/packages/Elite Group Setup/78.webp",
      "/packages/Elite Group Setup/79.webp",
      "/packages/Elite Group Setup/80.webp",
      "/packages/Elite Group Setup/81.webp",
      "/packages/Elite Group Setup/82.webp",
      "/packages/Elite Group Setup/83.webp",
      "/packages/Elite Group Setup/84.webp",
      "/packages/Elite Group Setup/85.webp",
      "/packages/Elite Group Setup/86.webp",
      "/packages/Elite Group Setup/87.webp",
      "/packages/Elite Group Setup/88.webp",
      "/packages/Elite Group Setup/89.webp",
      "/packages/Elite Group Setup/90.webp",
      "/packages/Elite Group Setup/91.webp",
      "/packages/Elite Group Setup/92.webp",
      "/packages/Elite Group Setup/93.webp",
      "/packages/Elite Group Setup/94.webp",
      "/packages/Elite Group Setup/95.webp",
      "/packages/Elite Group Setup/96.webp",
      "/packages/Elite Group Setup/97.webp",
      "/packages/Elite Group Setup/98.webp",
      "/packages/Elite Group Setup/99.webp",
      "/packages/Elite Group Setup/100.webp",
      "/packages/Elite Group Setup/101.webp",
      "/packages/Elite Group Setup/102.webp",
      "/packages/Elite Group Setup/103.webp",
      "/packages/Elite Group Setup/104.webp",
      "/packages/Elite Group Setup/105.webp",
      "/packages/Elite Group Setup/106.webp",
      "/packages/Elite Group Setup/107.webp",
      "/packages/Elite Group Setup/108.webp",
      "/packages/Elite Group Setup/109.webp",
      "/packages/Elite Group Setup/110.webp"
    ]
  }
];

// Get visible packages (excluding hidden ones) in specific order: 5100, 5700, 6300, 6500, 5400
export const getVisiblePackages = (): SetupPackage[] => {
  const priceOrder = [5100, 5700, 6300, 6500, 5400];
  return packages
    .filter(pkg => !pkg.hidden)
    .sort((a, b) => {
      const aIndex = priceOrder.indexOf(a.price);
      const bIndex = priceOrder.indexOf(b.price);
      // If price not in order array, put at end
      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
};

// ==================== MENU ITEMS ====================
export const menuItems = {
  starters: [
    { name: "Welcome Drink", description: "A refreshing welcome to begin your romantic experience", emoji: "🥤" },
    { name: "Cheese Fondue", description: "A rich, velvety cheese fondue served with cheese balls, wedges, and nachos", emoji: "🧀" },
    { name: "Paneer Tortilla", description: "Soft tortilla filled with spicy paneer and the chef's special seasoning", emoji: "🌯" },
    { name: "Peri Peri Fries with Mac & Cheese", description: "Creamy mac & cheese paired with peri-peri fries", emoji: "🍟" },
    { name: "Tangy Loaf", description: "Warm loaf served with cheesy garlic sauce", emoji: "🍞" }
  ],
  desserts: [
    { name: "Dessert with Chocolate Bite", description: "A sweet ending with rich chocolate indulgence", emoji: "🍫" }
  ],
  addOns: [
    { name: "Cake", description: "Free in select packages, ₹350 for others", price: "Free / ₹350", emoji: "🍰" },
    { name: "Champagne", description: "Non-Alcoholic Fruit Flavour", price: "₹500", emoji: "🥂" }
  ]
};

// ==================== SERVICE CATEGORIES ====================
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "birthday-surprise",
    name: "Birthday Surprise",
    emoji: "🎂",
    description: "Create magical birthday celebrations with beautiful decorations, cakes, and intimate private setups.",
    metaTitle: "Birthday Surprise in Surat | HIVY - Place for Celebrations",
    metaDescription: "Plan the perfect birthday surprise in Surat at HIVY - Place for Celebrations. Romantic decorations, celebration cake, and intimate rooftop celebration for couples.",
    keywords: [
      { slug: "birthday-surprise-for-boyfriend-surat", title: "Birthday Surprise for Boyfriend", h1: "Best Birthday Surprise for Boyfriend in Surat", metaTitle: "Birthday Surprise for Boyfriend Surat | HIVY - Place for Celebrations", metaDescription: "Plan the perfect birthday surprise for your boyfriend in Surat. Romantic decorations, cake, and intimate celebration at HIVY - Place for Celebrations." },
      { slug: "birthday-surprise-for-girlfriend-surat", title: "Birthday Surprise for Girlfriend", h1: "Romantic Birthday Surprise for Girlfriend in Surat", metaTitle: "Birthday Surprise for Girlfriend Surat | Make Her Day Special", metaDescription: "Create unforgettable birthday memories for your girlfriend in Surat with balloon decorations, cake, flowers and romantic setup at HIVY - Place for Celebrations." },
      { slug: "birthday-surprise-for-husband-surat", title: "Birthday Surprise for Husband", h1: "Special Birthday Surprise for Husband in Surat", metaTitle: "Birthday Surprise for Husband Surat | Romantic Celebration", metaDescription: "Surprise your husband with a romantic birthday celebration in Surat. Private rooftop setup, decorations, and memorable moments at HIVY - Place for Celebrations." },
      { slug: "birthday-surprise-for-wife-surat", title: "Birthday Surprise for Wife", h1: "Romantic Birthday Surprise for Wife in Surat", metaTitle: "Birthday Surprise for Wife Surat | Make Her Feel Special", metaDescription: "Plan a dreamy birthday surprise for your wife in Surat with elegant decorations, flowers, and romantic ambiance at HIVY - Place for Celebrations." },
      { slug: "romantic-birthday-surprise-surat", title: "Romantic Birthday Surprise", h1: "Romantic Birthday Surprise in Surat", metaTitle: "Romantic Birthday Surprise Surat | Couple Celebration", metaDescription: "Book a romantic birthday surprise in Surat with candlelight setup, decorations, and intimate celebration for couples at HIVY - Place for Celebrations." },
      { slug: "birthday-celebration-for-couples-surat", title: "Birthday Celebration for Couples", h1: "Birthday Celebration for Couples in Surat", metaTitle: "Couple Birthday Celebration Surat | Private Venue", metaDescription: "Celebrate your special day as a couple in Surat with exclusive birthday packages and romantic rooftop setups at HIVY - Place for Celebrations." },
      { slug: "birthday-room-decoration-surat", title: "Birthday Room Decoration", h1: "Birthday Room Decoration in Surat", metaTitle: "Birthday Room Decoration Surat | Balloon & Flower Setup", metaDescription: "Beautiful birthday room decoration in Surat with balloons, flowers, and romantic themes for couples at HIVY - Place for Celebrations." },
      { slug: "birthday-balloon-decoration-surat", title: "Birthday Balloon Decoration", h1: "Birthday Balloon Decoration in Surat", metaTitle: "Birthday Balloon Decoration Surat | Creative Setups", metaDescription: "Stunning birthday balloon decoration in Surat for romantic celebrations. Heart shapes, arches, and more at HIVY - Place for Celebrations." },
      { slug: "surprise-birthday-party-surat", title: "Surprise Birthday Party", h1: "Surprise Birthday Party in Surat", metaTitle: "Surprise Birthday Party Surat | Private Celebration", metaDescription: "Plan a surprise birthday party in Surat with romantic setup and private ambiance at HIVY - Place for Celebrations rooftop." },
      { slug: "midnight-birthday-surprise-surat", title: "Midnight Birthday Surprise", h1: "Midnight Birthday Surprise in Surat", metaTitle: "Midnight Birthday Surprise Surat | 12 AM Celebration", metaDescription: "Book midnight birthday surprise in Surat to celebrate at 12 AM with cake, decorations, and romantic moments at HIVY - Place for Celebrations." },
      { slug: "birthday-party-places-surat", title: "Birthday Party Places", h1: "Best Birthday Party Places in Surat", metaTitle: "Birthday Party Places Surat | Romantic Venues", metaDescription: "Find the best birthday party places in Surat for couples. HIVY - Place for Celebrations offers private rooftop celebrations." },
      { slug: "birthday-party-venues-surat", title: "Birthday Party Venues", h1: "Birthday Party Venues for Couples in Surat", metaTitle: "Birthday Party Venues Surat | Couple-Friendly", metaDescription: "Discover couple-friendly birthday party venues in Surat. Book HIVY - Place for Celebrations for intimate celebrations." },
      { slug: "best-birthday-surprise-surat", title: "Best Birthday Surprise", h1: "Best Birthday Surprise Ideas in Surat", metaTitle: "Best Birthday Surprise Surat | Top Rated", metaDescription: "Looking for the best birthday surprise in Surat? HIVY - Place for Celebrations offers premium decorations and romantic setups." },
      { slug: "birthday-surprise-planners-surat", title: "Birthday Surprise Planners", h1: "Birthday Surprise Planners in Surat", metaTitle: "Birthday Surprise Planners Surat | Professional Setup", metaDescription: "Expert birthday surprise planners in Surat. We handle decorations, cake, and everything at HIVY - Place for Celebrations." },
      { slug: "unique-birthday-celebration-surat", title: "Unique Birthday Celebration", h1: "Unique Birthday Celebration Ideas in Surat", metaTitle: "Unique Birthday Celebration Surat | Creative Ideas", metaDescription: "Plan a unique birthday celebration in Surat with creative themes and personalized romantic setups at HIVY - Place for Celebrations." }
    ]
  }
];

// ==================== SURAT AREAS ====================
export const suratAreas: AreaConfig[] = [
  { slug: "adajan-surat", name: "Adajan" },
  { slug: "athwa-surat", name: "Athwa" },
  { slug: "vesu-surat", name: "Vesu" },
  { slug: "piplod-surat", name: "Piplod" },
  { slug: "city-light-surat", name: "City Light" },
  { slug: "pal-surat", name: "Pal" },
  { slug: "ghod-dod-road-surat", name: "Ghod Dod Road" },
  { slug: "ring-road-surat", name: "Ring Road" },
  { slug: "vip-road-surat", name: "VIP Road" },
  { slug: "dumas-road-surat", name: "Dumas Road" },
  { slug: "katargam-surat", name: "Katargam" },
  { slug: "varachha-surat", name: "Varachha" },
  { slug: "udhna-surat", name: "Udhna" },
  { slug: "pandesara-surat", name: "Pandesara" },
  { slug: "sachin-surat", name: "Sachin" },
  { slug: "sarthana-surat", name: "Sarthana" },
  { slug: "magdalla-surat", name: "Magdalla" },
  { slug: "althan-surat", name: "Althan" },
  { slug: "bhatar-surat", name: "Bhatar" },
  { slug: "rander-surat", name: "Rander" },
  { slug: "jahangirpura-surat", name: "Jahangirpura" },
  { slug: "hajira-surat", name: "Hajira" },
  { slug: "olpad-surat", name: "Olpad" },
  { slug: "kadodara-surat", name: "Kadodara" },
  { slug: "kim-surat", name: "Kim" },
  { slug: "amroli-surat", name: "Amroli" },
  { slug: "limbayat-surat", name: "Limbayat" },
  { slug: "kapodra-surat", name: "Kapodra" },
  { slug: "bamroli-surat", name: "Bamroli" },
  { slug: "parvat-patiya-surat", name: "Parvat Patiya" },
  { slug: "majura-gate-surat", name: "Majura Gate" },
  { slug: "nanpura-surat", name: "Nanpura" },
  { slug: "gopipura-surat", name: "Gopipura" },
  { slug: "begumpura-surat", name: "Begumpura" },
  { slug: "mahidharpura-surat", name: "Mahidharpura" },
  { slug: "sagrampura-surat", name: "Sagrampura" },
  { slug: "dindoli-surat", name: "Dindoli" },
  { slug: "mota-varachha-surat", name: "Mota Varachha" },
  { slug: "new-city-light-surat", name: "New City Light" },
  { slug: "parle-point-surat", name: "Parle Point" }
];

// Helper functions
export function getPackageBySlug(slug: string): SetupPackage | undefined {
  const pkg = packages.find(p => p.slug === slug);
  // Return undefined if package is hidden (treat as not found)
  if (pkg?.hidden) return undefined;
  return pkg;
}

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(s => s.slug === slug);
}

export function getKeywordBySlug(serviceSlug: string, keywordSlug: string): ServiceKeyword | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.keywords.find(k => k.slug === keywordSlug);
}

export function getAreaBySlug(slug: string): AreaConfig | undefined {
  return suratAreas.find(a => a.slug === slug);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}.00`;
}

// ==================== BLOG POSTS ====================
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-10-birthday-surprise-ideas-surat",
    title: "Top 10 Birthday Surprise Ideas in Surat",
    excerpt: "Discover creative and romantic birthday surprise ideas to make your loved one's special day unforgettable in Surat.",
    metaTitle: "Top 10 Birthday Surprise Ideas in Surat 2026 | Best Ideas",
    metaDescription: "Looking for birthday surprise ideas in Surat? Discover 10 creative ways to surprise your partner, from rooftop dinners to midnight celebrations.",
    coverImage: "/packages/tent-of-romance/images/12.png",
    publishedAt: "2026-01-15",
    readTime: "5 min",
    category: "Birthday",
    tags: ["birthday", "surprise", "surat", "celebration"]
  },
  {
    slug: "how-to-plan-perfect-proposal-surat",
    title: "How to Plan a Perfect Proposal in Surat",
    excerpt: "A complete guide to planning a romantic and memorable marriage proposal in Surat that she'll never forget.",
    metaTitle: "How to Plan a Perfect Proposal in Surat | Complete Guide",
    metaDescription: "Planning to propose in Surat? Learn how to plan the perfect proposal with our step-by-step guide. Best locations, timing & decoration ideas.",
    coverImage: "/packages/fairy-tale-proposals/2.png",
    publishedAt: "2026-01-12",
    readTime: "7 min",
    category: "Proposal",
    tags: ["proposal", "engagement", "romantic", "surat"]
  },
  {
    slug: "best-candlelight-dinner-spots-surat",
    title: "Best Candlelight Dinner Spots in Surat 2026",
    excerpt: "Explore the most romantic candlelight dinner restaurants and cafes in Surat for an unforgettable date night.",
    metaTitle: "Best Candlelight Dinner Spots in Surat 2026 | Top Picks",
    metaDescription: "Find the best candlelight dinner spots in Surat. Romantic restaurants, rooftop cafes & private dining options for couples.",
    coverImage: "/packages/swing-of-love/images/28.png",
    publishedAt: "2026-01-10",
    readTime: "6 min",
    category: "Date Night",
    tags: ["candlelight dinner", "romantic", "restaurants", "surat"]
  },
  {
    slug: "anniversary-celebration-ideas-couples",
    title: "Anniversary Celebration Ideas for Couples in Surat",
    excerpt: "Creative and romantic ways to celebrate your wedding anniversary in Surat and make it truly special.",
    metaTitle: "Anniversary Celebration Ideas Surat | Romantic Ideas",
    metaDescription: "Looking for anniversary celebration ideas in Surat? From intimate dinners to surprise parties, discover the best ways to celebrate your love.",
    coverImage: "/packages/boho-chic/images/46.png",
    publishedAt: "2026-01-08",
    readTime: "6 min",
    category: "Anniversary",
    tags: ["anniversary", "couples", "celebration", "surat"]
  },
  {
    slug: "romantic-date-night-ideas-surat",
    title: "Romantic Date Night Ideas in Surat",
    excerpt: "Spice up your relationship with these creative and romantic date night ideas perfect for Surat couples.",
    metaTitle: "Romantic Date Night Ideas in Surat 2026 | Best Dates",
    metaDescription: "Need date night inspiration in Surat? Discover romantic ideas from rooftop dinners to stargazing experiences for couples.",
    coverImage: "/packages/tent-of-romance/images/13.png",
    publishedAt: "2026-01-05",
    readTime: "5 min",
    category: "Date Night",
    tags: ["date night", "romantic", "couples", "surat"]
  },
  {
    slug: "best-rooftop-restaurants-surat-couples",
    title: "Best Rooftop Restaurants in Surat for Couples",
    excerpt: "Discover the most romantic rooftop restaurants in Surat perfect for date nights and special celebrations.",
    metaTitle: "Best Rooftop Restaurants in Surat for Couples 2026",
    metaDescription: "Looking for rooftop restaurants in Surat? Find the best sky-high dining spots for romantic dinners and couple celebrations.",
    coverImage: "/packages/Elite Group Setup/78.png",
    publishedAt: "2026-01-03",
    readTime: "5 min",
    category: "Restaurants",
    tags: ["rooftop", "restaurants", "couples", "surat"]
  },
  {
    slug: "surprise-birthday-party-wife-guide",
    title: "How to Plan a Surprise Birthday Party for Your Wife",
    excerpt: "A complete guide to planning the perfect surprise birthday party that will make your wife feel truly special.",
    metaTitle: "Surprise Birthday Party for Wife | Complete Planning Guide",
    metaDescription: "Want to surprise your wife on her birthday? Learn how to plan a memorable surprise party with decorations, cake & romantic setup.",
    coverImage: "/packages/tent-of-romance/images/14.png",
    publishedAt: "2025-12-28",
    readTime: "8 min",
    category: "Birthday",
    tags: ["birthday", "wife", "surprise party", "planning"]
  },
  {
    slug: "creative-anniversary-gift-ideas-experiences",
    title: "Creative Anniversary Gift Ideas: Experience Over Things",
    excerpt: "Why experience gifts make the best anniversary presents and how to create lasting memories together.",
    metaTitle: "Anniversary Gift Ideas | Why Experiences Beat Material Gifts",
    metaDescription: "Looking for unique anniversary gifts? Discover why experience gifts like romantic dinners create better memories than material presents.",
    coverImage: "/packages/fairy-tale-proposals/3.png",
    publishedAt: "2025-12-25",
    readTime: "5 min",
    category: "Anniversary",
    tags: ["anniversary", "gifts", "experiences", "couples"]
  },
  {
    slug: "pre-wedding-photoshoot-locations-surat",
    title: "Best Pre-Wedding Photoshoot Locations in Surat",
    excerpt: "Stunning pre-wedding photoshoot locations in Surat including rooftops, gardens, and heritage sites.",
    metaTitle: "Best Pre-Wedding Photoshoot Locations Surat 2026",
    metaDescription: "Planning your pre-wedding shoot in Surat? Discover the best locations from rooftops to heritage sites for stunning photos.",
    coverImage: "/packages/swing-of-love/images/29.png",
    publishedAt: "2025-12-22",
    readTime: "6 min",
    category: "Pre-Wedding",
    tags: ["pre-wedding", "photoshoot", "locations", "surat"]
  },
  {
    slug: "baby-shower-planning-guide-surat",
    title: "Baby Shower Planning Guide for Surat Moms",
    excerpt: "Everything you need to know about planning the perfect baby shower in Surat, from venues to themes.",
    metaTitle: "Baby Shower Planning Guide Surat | Complete Checklist",
    metaDescription: "Planning a baby shower in Surat? Get our complete guide with venue ideas, themes, decorations & checklist for a perfect celebration.",
    coverImage: "/packages/boho-chic/images/47.png",
    publishedAt: "2025-12-20",
    readTime: "7 min",
    category: "Baby Shower",
    tags: ["baby shower", "planning", "surat", "celebration"]
  },
  {
    slug: "valentines-day-date-ideas-surat",
    title: "Valentine's Day Date Ideas in Surat",
    excerpt: "Make Valentine's Day special with these romantic date ideas perfect for couples in Surat.",
    metaTitle: "Valentine's Day Date Ideas Surat 2026 | Romantic Plans",
    metaDescription: "Looking for Valentine's Day ideas in Surat? Discover romantic date plans from candlelight dinners to rooftop surprises.",
    coverImage: "/packages/tent-of-romance/images/15.png",
    publishedAt: "2025-12-18",
    readTime: "5 min",
    category: "Valentine's Day",
    tags: ["valentines day", "date ideas", "romantic", "surat"]
  },
  {
    slug: "corporate-team-lunch-ideas-surat",
    title: "How to Organize a Corporate Team Lunch in Surat",
    excerpt: "Tips and venue ideas for organizing successful corporate team lunches and office celebrations in Surat.",
    metaTitle: "Corporate Team Lunch Surat | Venue & Planning Guide",
    metaDescription: "Planning a corporate team lunch in Surat? Find the best venues and get tips for organizing a successful office gathering.",
    coverImage: "/packages/Elite Group Setup/79.png",
    publishedAt: "2025-12-15",
    readTime: "5 min",
    category: "Corporate",
    tags: ["corporate", "team lunch", "office party", "surat"]
  },
  {
    slug: "kitty-party-ideas-venues-surat",
    title: "Kitty Party Ideas and Venues in Surat",
    excerpt: "Fun kitty party themes, games, and the best venues in Surat for your ladies' get-together.",
    metaTitle: "Kitty Party Ideas & Venues Surat 2026 | Best Places",
    metaDescription: "Planning a kitty party in Surat? Discover fun themes, games, and the best venues for your next ladies' gathering.",
    coverImage: "/packages/Elite Group Setup/80.png",
    publishedAt: "2025-12-12",
    readTime: "6 min",
    category: "Kitty Party",
    tags: ["kitty party", "venues", "ladies", "surat"]
  },
  {
    slug: "private-dining-experiences-surat",
    title: "Best Places for Private Dining in Surat",
    excerpt: "Exclusive private dining venues in Surat for intimate celebrations and special occasions.",
    metaTitle: "Private Dining Surat | Exclusive Restaurant Experiences",
    metaDescription: "Looking for private dining in Surat? Discover exclusive venues for intimate dinners, proposals & special celebrations.",
    coverImage: "/packages/tent-of-romance/images/16.png",
    publishedAt: "2025-12-10",
    readTime: "5 min",
    category: "Dining",
    tags: ["private dining", "exclusive", "restaurants", "surat"]
  },
  {
    slug: "memorable-farewell-party-planning",
    title: "How to Plan a Memorable Farewell Party",
    excerpt: "Create lasting memories with our guide to planning the perfect farewell party for colleagues or friends.",
    metaTitle: "Farewell Party Planning Guide | Memorable Send-Off Ideas",
    metaDescription: "Planning a farewell party? Learn how to organize a memorable send-off with venue ideas, activities & emotional touches.",
    coverImage: "/packages/fairy-tale-proposals/4.png",
    publishedAt: "2025-12-08",
    readTime: "6 min",
    category: "Farewell",
    tags: ["farewell", "party planning", "office", "celebration"]
  },
  {
    slug: "birthday-decoration-ideas-budget",
    title: "Birthday Party Decoration Ideas on a Budget",
    excerpt: "Creative and affordable birthday decoration ideas that look expensive but won't break the bank.",
    metaTitle: "Budget Birthday Decoration Ideas | Affordable Party Decor",
    metaDescription: "Want stunning birthday decorations on a budget? Discover creative DIY ideas and affordable decoration tips for memorable parties.",
    coverImage: "/packages/swing-of-love/images/30.png",
    publishedAt: "2025-12-05",
    readTime: "5 min",
    category: "Birthday",
    tags: ["birthday", "decoration", "budget", "diy"]
  },
  {
    slug: "romantic-proposal-ideas-say-yes",
    title: "Romantic Proposal Ideas That Will Make Her Say Yes",
    excerpt: "Creative and heartfelt proposal ideas that are sure to get a 'YES!' from your special someone.",
    metaTitle: "Romantic Proposal Ideas | Creative Ways to Propose",
    metaDescription: "Looking for proposal inspiration? Discover romantic and creative proposal ideas guaranteed to make her say yes.",
    coverImage: "/packages/fairy-tale-proposals/5.png",
    publishedAt: "2025-12-02",
    readTime: "7 min",
    category: "Proposal",
    tags: ["proposal", "romantic", "engagement", "ideas"]
  },
  {
    slug: "gender-reveal-party-ideas-surat",
    title: "Gender Reveal Party Ideas in Surat",
    excerpt: "Creative and exciting gender reveal party ideas to announce your baby's gender in style.",
    metaTitle: "Gender Reveal Party Ideas Surat | Creative Announcements",
    metaDescription: "Planning a gender reveal party in Surat? Discover creative reveal ideas, decorations & venues for the big announcement.",
    coverImage: "/packages/boho-chic/images/48.png",
    publishedAt: "2025-11-28",
    readTime: "6 min",
    category: "Baby",
    tags: ["gender reveal", "baby", "party", "surat"]
  },
  {
    slug: "best-anniversary-restaurants-surat",
    title: "Best Anniversary Restaurants in Surat",
    excerpt: "Top restaurants in Surat perfect for celebrating your wedding anniversary with your partner.",
    metaTitle: "Best Anniversary Restaurants Surat 2026 | Top Picks",
    metaDescription: "Celebrating your anniversary in Surat? Find the best restaurants for romantic anniversary dinners with your partner.",
    coverImage: "/packages/tent-of-romance/images/17.png",
    publishedAt: "2025-11-25",
    readTime: "5 min",
    category: "Anniversary",
    tags: ["anniversary", "restaurants", "romantic", "surat"]
  },
  {
    slug: "surprise-date-night-planning-guide",
    title: "How to Plan a Surprise Date Night",
    excerpt: "Step-by-step guide to planning a romantic surprise date night that your partner will love.",
    metaTitle: "Surprise Date Night Planning | Complete Guide for Couples",
    metaDescription: "Want to surprise your partner with a romantic date night? Get our complete planning guide with ideas, tips & checklist.",
    coverImage: "/packages/swing-of-love/images/31.png",
    publishedAt: "2025-11-22",
    readTime: "6 min",
    category: "Date Night",
    tags: ["date night", "surprise", "romantic", "planning"]
  },
  {
    slug: "maternity-photoshoot-ideas-surat",
    title: "Maternity Photoshoot Ideas for Expecting Mothers",
    excerpt: "Beautiful maternity photoshoot ideas and locations in Surat to capture your pregnancy journey.",
    metaTitle: "Maternity Photoshoot Ideas Surat | Pregnancy Photos",
    metaDescription: "Planning a maternity photoshoot in Surat? Discover poses, outfits & location ideas for stunning pregnancy photos.",
    coverImage: "/packages/boho-chic/images/49.png",
    publishedAt: "2025-11-18",
    readTime: "6 min",
    category: "Maternity",
    tags: ["maternity", "photoshoot", "pregnancy", "surat"]
  },
  {
    slug: "bachelor-bachelorette-party-ideas-surat",
    title: "Bachelor and Bachelorette Party Ideas in Surat",
    excerpt: "Fun and memorable bachelor/bachelorette party ideas and venues for the bride and groom-to-be.",
    metaTitle: "Bachelor & Bachelorette Party Ideas Surat 2026",
    metaDescription: "Planning a bachelor or bachelorette party in Surat? Discover fun ideas, themes & venues for an unforgettable celebration.",
    coverImage: "/packages/Elite Group Setup/81.png",
    publishedAt: "2025-11-15",
    readTime: "7 min",
    category: "Pre-Wedding",
    tags: ["bachelor party", "bachelorette", "pre-wedding", "surat"]
  },
  {
    slug: "new-year-celebration-ideas-surat",
    title: "Best Places to Celebrate New Year in Surat",
    excerpt: "Top venues and ideas for celebrating New Year's Eve in Surat with your loved ones.",
    metaTitle: "New Year Celebration Surat 2026 | Best Places & Ideas",
    metaDescription: "Looking for New Year celebration venues in Surat? Find the best places to ring in the new year with parties & dinners.",
    coverImage: "/packages/tent-of-romance/images/18.png",
    publishedAt: "2025-11-12",
    readTime: "5 min",
    category: "New Year",
    tags: ["new year", "celebration", "venues", "surat"]
  },
  {
    slug: "couple-photoshoot-locations-surat",
    title: "Couple Photoshoot Locations in Surat",
    excerpt: "Romantic and scenic locations in Surat perfect for couple photoshoots and engagement shoots.",
    metaTitle: "Couple Photoshoot Locations Surat | Romantic Spots",
    metaDescription: "Planning a couple photoshoot in Surat? Discover the most romantic locations for stunning couple photos.",
    coverImage: "/packages/fairy-tale-proposals/6.png",
    publishedAt: "2025-11-08",
    readTime: "6 min",
    category: "Photoshoot",
    tags: ["couple", "photoshoot", "locations", "surat"]
  },
  {
    slug: "intimate-wedding-planning-guide",
    title: "Intimate Wedding Planning Guide for Surat Couples",
    excerpt: "Everything you need to know about planning a beautiful small wedding in Surat.",
    metaTitle: "Intimate Wedding Planning Surat | Small Wedding Guide",
    metaDescription: "Planning an intimate wedding in Surat? Get our complete guide with venue ideas, tips & checklist for a perfect small wedding.",
    coverImage: "/packages/swing-of-love/images/32.png",
    publishedAt: "2025-11-05",
    readTime: "8 min",
    category: "Wedding",
    tags: ["wedding", "intimate", "small wedding", "surat"]
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(b => b.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(b => b.category === category);
}
