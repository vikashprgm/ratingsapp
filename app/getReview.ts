export interface Tag {
  emoji: string
  label: string
}

export const categoryReviews: Record<string, string[]> = {
  Hotels: [
    "Had a wonderful stay! The rooms were spacious and impeccably clean.",
    "Great location and the complimentary breakfast was a delightful bonus.",
    "The staff was incredibly accommodating and made check-in a breeze.",
    "Comfortable beds and excellent room service. Highly recommended.",
    "Fantastic amenities and the pool area was incredibly relaxing."
  ],
  Restaurants: [
    "Amazing ambiance and the food tasted exceptionally fresh!",
    "Service was incredibly fast and the main course was absolutely delicious!",
    "Great place for family dinners. Highly recommend the chef's special.",
    "Generous portion sizes and completely worth every penny!",
    "Absolute perfection from start to finish! Will definitely be coming back soon."
  ],
  Cafes: [
    "The cold brew here is top-notch, perfect spot to get some work done.",
    "Cozy little corner with wonderful lighting and friendly staff.",
    "The pastries were incredibly fresh and the cappuccino was smooth and rich.",
    "Love the indie playlist they play in the background. Very relaxing vibe.",
    "A fantastic vibrant atmosphere, totally worth visiting for their artisanal coffee."
  ],
  Bakery: [
    "The garlic bread and freshly baked croissants melt in your mouth!",
    "Ordered a custom birthday cake and it looked and tasted incredible.",
    "Everything smelled so good as soon as I walked through the door.",
    "Premium quality ingredients that make every bite an absolute delight.",
    "Their chocolate truffle pastry is hands down the best in town."
  ],
  "Sweet Shops": [
    "Authentic traditional taste! The rasgullas were super fresh and juicy.",
    "Clean hygienic setup and the packaging for festival gifting was neat.",
    "Jalebis were served piping hot and wonderfully crisp.",
    "Perfectly balanced sweetness, traditional dessert lovers will absolutely adore it.",
    "The variety of mithai available here is impressive. Quality is consistent."
  ],
  "Street Food": [
    "Packed with flavor! The golgappas are spicy and refreshing.",
    "Very hygienic preparation compared to regular roadside stalls.",
    "Quick service and authentic local taste that hits the spot.",
    "Portions are generous and the pricing is very pocket-friendly.",
    "A must-visit if you love chats and spicy street snacks."
  ],
  "Cloth Stores": [
    "The fabric quality is amazing and fits true to size.",
    "Trendy collection with reasonable pricing. Staff helped me style a full outfit.",
    "The colors are vibrant and the fabric retains its premium feel even after washing.",
    "Great variety of ethnic wear for festive occasions.",
    "Smooth checkout experience and helpful customer service."
  ],
  Grocery: [
    "All vegetables and fruits were fresh and organically sorted.",
    "Got everything on my monthly grocery checklist under one roof.",
    "Home delivery was prompt and items were securely packed.",
    "Fair pricing with regular discounts on household essentials.",
    "Very clean store layout, making it easy to find items quickly."
  ],
  Electronics: [
    "Genuine products with proper manufacturer warranty cards.",
    "The staff has deep technical knowledge and helped me pick the right laptop.",
    "Quick billing and assistance with initial device setup.",
    "Competitive pricing compared to online stores.",
    "Great customer support when I needed help with an exchange."
  ],
  Handicrafts: [
    "Exquisite pieces of local art. Perfect for home decor or gifting.",
    "You can see the fine craftsmanship and attention to detail in every piece.",
    "Unique collection that you won't find in standard retail stores.",
    "Fragile items were packed very securely for travel.",
    "Truly authentic handmade crafts that are absolutely worth the investment."
  ],
  Bookstores: [
    "Quiet, peaceful atmosphere with a fantastic collection of indie titles.",
    "The staff gave me great recommendations based on my favorite genres.",
    "Loved the cozy reading nook tucked away in the corner.",
    "Reasonable prices and they even special-ordered a book for me.",
    "A heaven for book lovers. I could spend hours browsing here."
  ],
  "Salons & Spas": [
    "The deep tissue massage completely melted away my stress. Highly professional!",
    "Clean equipment, relaxing music, and polite staff.",
    "Got a haircut exactly like the reference photo I showed.",
    "Booking was seamless and the staff accommodated my schedule perfectly.",
    "Luxurious experience without breaking the bank."
  ],
  Gyms: [
    "State-of-the-art equipment and the trainers are very motivating.",
    "Clean locker rooms and spacious workout floor layout.",
    "Great overall energy on the floor and plenty of equipment available for everyone.",
    "Customized workout guidance has already helped me see results.",
    "Affordable membership plans with zero hidden fees."
  ],
  "Jewelry Shop": [
    "Stunning collection with exquisite craftsmanship and brilliant designs.",
    "The staff was incredibly patient and helped me find the perfect gift.",
    "Absolutely transparent pricing and providing genuine hallmark certification.",
    "Beautiful store ambiance with a fantastic variety of both traditional and modern pieces.",
    "Got my ring resized here; the service was exceptionally quick and professional."
  ],
  Other: [
    "Clean establishment and cooperative staff.",
    "Quick service and smooth overall experience.",
    "Good value for money and reliable service.",
    "Exceeded my expectations in terms of quality.",
    "Will definitely recommend to friends and family."
  ]
};

export const categoryTags: Record<string, Tag[]> = {
  Hotels: [
    { emoji: "🛏️", label: "Comfy Beds" },
    { emoji: "🧼", label: "Clean Rooms" },
    { emoji: "🛎️", label: "Great Service" },
    { emoji: "🍳", label: "Good Breakfast" },
    { emoji: "📍", label: "Prime Location" },
    { emoji: "🏊", label: "Nice Amenities" },
  ],
  Restaurants: [
    { emoji: "🍽️", label: "Delicious Food" },
    { emoji: "🌟", label: "Great Ambiance" },
    { emoji: "⚡", label: "Quick Service" },
    { emoji: "👨‍🍳", label: "Chef's Special" },
    { emoji: "👨‍👩‍👧", label: "Family Friendly" },
    { emoji: "💸", label: "Value for Money" },
  ],
  Cafes: [
    { emoji: "☕", label: "Amazing Coffee" },
    { emoji: "🥐", label: "Fresh Pastries" },
    { emoji: "🎶", label: "Vibe & Playlist" },
    { emoji: "💻", label: "Work-Friendly" },
    { emoji: "🛋️", label: "Cozy Corner" },
    { emoji: "😊", label: "Friendly Staff" },
  ],
  Bakery: [
    { emoji: "🥐", label: "Fresh Baked" },
    { emoji: "🎂", label: "Custom Cakes" },
    { emoji: "🍫", label: "Chocolate Pastry" },
    { emoji: "🥖", label: "Garlic Bread" },
    { emoji: "✨", label: "Quality Ingredients" },
    { emoji: "😋", label: "Heavenly Aroma" },
  ],
  "Sweet Shops": [
    { emoji: "🍬", label: "Authentic Taste" },
    { emoji: "🔥", label: "Hot Jalebis" },
    { emoji: "🧼", label: "Hygienic Setup" },
    { emoji: "🎁", label: "Festive Gifting" },
    { emoji: "🍯", label: "Wide Mithai Variety" },
    { emoji: "✅", label: "Consistent Quality" },
  ],
  "Street Food": [
    { emoji: "🌶️", label: "Bursting Flavor" },
    { emoji: "🧼", label: "Hygienic Prep" },
    { emoji: "⚡", label: "Quick Service" },
    { emoji: "🥘", label: "Generous Portions" },
    { emoji: "💰", label: "Pocket-Friendly" },
    { emoji: "📍", label: "Local Favorite" },
  ],
  "Cloth Stores": [
    { emoji: "🧵", label: "Fabric Quality" },
    { emoji: "👗", label: "Trendy Collection" },
    { emoji: "📏", label: "True to Size" },
    { emoji: "🪔", label: "Festive Wear" },
    { emoji: "💁", label: "Helpful Styling" },
    { emoji: "💸", label: "Fair Pricing" },
  ],
  Grocery: [
    { emoji: "🥬", label: "Fresh Produce" },
    { emoji: "🛒", label: "Everything in One Place" },
    { emoji: "🚚", label: "Prompt Delivery" },
    { emoji: "🏷️", label: "Great Discounts" },
    { emoji: "🧺", label: "Clean Layout" },
    { emoji: "📦", label: "Secure Packing" },
  ],
  Electronics: [
    { emoji: "✅", label: "Genuine Products" },
    { emoji: "🧠", label: "Knowledgeable Staff" },
    { emoji: "💸", label: "Competitive Pricing" },
    { emoji: "🛠️", label: "Setup Help" },
    { emoji: "🤝", label: "Great Support" },
    { emoji: "🧾", label: "Quick Billing" },
  ],
  Handicrafts: [
    { emoji: "🎨", label: "Exquisite Art" },
    { emoji: "🪡", label: "Fine Craftsmanship" },
    { emoji: "🎁", label: "Perfect for Gifting" },
    { emoji: "🏺", label: "Unique Pieces" },
    { emoji: "📦", label: "Secure Packing" },
    { emoji: "🏡", label: "Home Decor" },
  ],
  Bookstores: [
    { emoji: "📚", label: "Great Collection" },
    { emoji: "🤫", label: "Peaceful Vibe" },
    { emoji: "💡", label: "Smart Recommendations" },
    { emoji: "🪑", label: "Cozy Reading Nook" },
    { emoji: "📖", label: "Indie Titles" },
    { emoji: "💸", label: "Fair Prices" },
  ],
  "Salons & Spas": [
    { emoji: "💆", label: "Relaxing Massage" },
    { emoji: "✂️", label: "Perfect Haircut" },
    { emoji: "🧼", label: "Spotless & Clean" },
    { emoji: "🎶", label: "Calming Music" },
    { emoji: "👏", label: "Professional Team" },
    { emoji: "💸", label: "Great Value" },
  ],
  Gyms: [
    { emoji: "🏋️", label: "Top Equipment" },
    { emoji: "💪", label: "Motivating Trainers" },
    { emoji: "🧼", label: "Clean Locker Rooms" },
    { emoji: "📋", label: "Custom Workouts" },
    { emoji: "🔥", label: "Great Energy" },
    { emoji: "💸", label: "Affordable Plans" },
  ],
  "Jewelry Shop": [
    { emoji: "💎", label: "Exquisite Designs" },
    { emoji: "✨", label: "Brilliant Craftsmanship" },
    { emoji: "🤝", label: "Patient Staff" },
    { emoji: "✅", label: "Hallmark Certified" },
    { emoji: "💍", label: "Perfect Gifting" },
    { emoji: "💰", label: "Transparent Pricing" },
  ],
  Other: [
    { emoji: "😊", label: "Friendly Staff" },
    { emoji: "⚡", label: "Quick Service" },
    { emoji: "🧼", label: "Clean Space" },
    { emoji: "💸", label: "Value for Money" },
    { emoji: "✅", label: "Reliable" },
    { emoji: "🌟", label: "Exceeded Expectations" },
  ],
};

export function getReview(cat: string): string {
  const reviews = categoryReviews[cat] || categoryReviews["Other"];
  const randomIndex = Math.floor(Math.random() * reviews.length);
  return reviews[randomIndex];
}

export function getTags(cat: string): Tag[] {
  return categoryTags[cat] || categoryTags["Other"];
}