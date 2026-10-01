export const categoryReviews: Record<string, string[]> = {
  Restaurants: [
    "Amazing ambiance and the food tasted exceptionally fresh!",
    "Service was a bit slow during peak hours, but the main course made up for it.",
    "Great place for family dinners. Highly recommend the chef's special.",
    "Decent food, though a bit overpriced for the portion sizes.",
    "Absolute perfection from start to finish! Will definitely be coming back soon."
  ],
  Cafes: [
    "The cold brew here is top-notch, perfect spot to get some work done.",
    "Cozy little corner with wonderful lighting and friendly staff.",
    "Pastries were a bit dry, but the cappuccino was smooth and rich.",
    "Love the indie playlist they play in the background. Very relaxing vibe.",
    "A bit crowded on weekends, but totally worth the wait for their artisanal coffee."
  ],
  Bakery: [
    "The garlic bread and freshly baked croissants melt in your mouth!",
    "Ordered a custom birthday cake and it looked and tasted incredible.",
    "Everything smelled so good as soon as I walked through the door.",
    "Slightly expensive, but the quality of ingredients clearly justifies the price.",
    "Their chocolate truffle pastry is hands down the best in town."
  ],
  "Sweet Shops": [
    "Authentic traditional taste! The rasgullas were super fresh and juicy.",
    "Clean hygienic setup and the packaging for festival gifting was neat.",
    "Jalebis were served piping hot and wonderfully crisp.",
    "A bit too sweet for my liking, but traditional dessert lovers will adore it.",
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
    "Colors bled slightly after the first wash, but otherwise decent quality.",
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
    "Slightly on the higher side, but you are paying for authentic handmade craft."
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
    "A bit hard to secure an appointment on weekends, so book in advance.",
    "Luxurious experience without breaking the bank."
  ],
  Gyms: [
    "State-of-the-art equipment and the trainers are very motivating.",
    "Clean locker rooms and spacious workout floor layout.",
    "Gets a bit packed during the 6 PM peak slot, but great overall energy.",
    "Customized workout guidance has already helped me see results.",
    "Affordable membership plans with zero hidden fees."
  ],
  Other: [
    "Clean establishment and cooperative staff.",
    "Quick service and smooth overall experience.",
    "Good value for money and reliable service.",
    "Exceeded my expectations in terms of quality.",
    "Will definitely recommend to friends and family."
  ]
};

export function getReview(cat: string): string {
  const reviews = categoryReviews[cat] || categoryReviews["Other"];
  const randomIndex = Math.floor(Math.random() * reviews.length);
  return reviews[randomIndex];
}