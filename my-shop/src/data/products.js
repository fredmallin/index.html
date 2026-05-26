const products = [
  // ================= CLOTHING =================
  { id: 1, name: "Soft Baby Romper", category: "clothing", subcategory: "rompers", price: 650, image: "https://www.nillababyshop.com/images/3pc-infant-unisex-romper-sleepsuit-2.jpg", description: "Soft cotton romper perfect for newborn comfort." },
  { id: 2, name: "Warm Baby Sweater", category: "clothing", subcategory: "sweaters", price: 850, image: "https://www.nillababyshop.com/images/baby-sweater.jpg", description: "Keeps your baby warm during cold weather." },
  { id: 3, name: "Baby Jacket", category: "clothing", subcategory: "jackets", price: 1200, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf", description: "Stylish and warm jacket for outdoor wear." },
  { id: 8, name: "Soft Baby Bodysuit", category: "clothing", subcategory: "bodysuits", price: 700, image: "https://www.nillababyshop.com/images/3pc-infant-unisex-romper-sleepsuit-2.jpg", description: "Comfortable cotton bodysuit for newborns." },
  { id: 9, name: "Cotton Baby Vest Set", category: "clothing", subcategory: "vests", price: 550, image: "https://images.unsplash.com/photo-1616628182508-40b2b6b3b5d0", description: "Light cotton vests for everyday wear." },
  // ⚠️ subcategory must match nav slug: "Baby Bibs" → "baby-bibs"
  { id: 16, name: "Cute Baby Bib", category: "clothing", subcategory: "baby-bibs", price: 300, image: "https://www.nillababyshop.com/images/3-pack-organic-cotton-muslin-baby-bandana-bibs-soft-absorbent-drool-feeding-bib-set-2.jpeg", description: "Cute feeding bibs for mealtime." },
  { id: 17, name: "Baby Shoes Soft Sole", category: "clothing", subcategory: "baby-shoes", price: 480, image: "https://www.nillababyshop.com/images/baby-girl-crib-shoes-with-soft-sole-pre-walkers-2.jpg", description: "Soft sole shoes for first steps." },
  { id: 18, name: "Personalised Baby Outfit", category: "clothing", subcategory: "custom-designs", price: 900, image: "https://www.nillababyshop.com/images/personalized-i-love-mom-dad-baby-cotton-pants-set-soft-white-infant-leggings-3-pack-2.jpg", description: "Custom printed baby outfits." },

  // ================= BABY CARE =================
  { id: 20, name: "Baby Bath Set", category: "baby-care", subcategory: "bathing-and-laundry", price: 850, image: "https://www.nillababyshop.com/images/large-baby-care-kit-2.jpg", description: "Complete baby bathing essentials." },
  { id: 21, name: "Newborn Diaper Pack", category: "baby-care", subcategory: "diapers", price: 1500, image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/8252342/1.jpg?5946", description: "Leak-free diapers for newborns." },
  { id: 22, name: "Baby Grooming Kit", category: "baby-care", subcategory: "grooming-kits", price: 600, image: "https://www.nillababyshop.com/images/large-baby-care-kit-2.jpg", description: "Complete healthcare kit for babies." },
  { id: 23, name: "Baby Potty Chair", category: "baby-care", subcategory: "potty-training", price: 1200, image: "https://www.nillababyshop.com/images/baby-potty-training-chair-with-lid-side-handles-comfortable-toddler-toilet-seat-2.jpg", description: "Supportive potty training seat." },
  { id: 24, name: "Ultra Soft Washcloths", category: "baby-care", subcategory: "washcloths", price: 350, image: "https://www.nillababyshop.com/images/4pcs-ultra-soft-baby-washcloths-2.jpg", description: "Soft washcloths for bath time." },

  // ================= FEEDING =================
  { id: 13, name: "Baby Feeding Bottle Set", category: "feeding", subcategory: "bottles", price: 900, image: "https://www.nillababyshop.com/images/bottle-warmer-2.jpg", description: "Safe BPA-free feeding bottles." },
  { id: 14, name: "Double Electric Breast Pump", category: "feeding", subcategory: "breast-pumps", price: 3500, image: "https://www.nillababyshop.com/images/double-wearable-electric-breast-pump-2.jpg", description: "Comfortable wearable breast pump." },
  { id: 15, name: "Baby Bibs and Burp Cloths", category: "feeding", subcategory: "bibs-and-burp-cloths", price: 350, image: "https://www.nillababyshop.com/images/3-pack-organic-cotton-muslin-baby-bandana-bibs-soft-absorbent-drool-feeding-bib-set-2.jpeg", description: "Waterproof bibs for messy feeding." },
  { id: 25, name: "Baby High Chair", category: "feeding", subcategory: "kida-furniture", price: 4500, image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/8761323/1.jpg?4527", description: "Safe mealtime seating for babies." },

  // ================= NURSERY =================
  { id: 30, name: "Baby Cot with Net", category: "nursery", subcategory: "baby-cots", price: 8500, image: "https://www.nillababyshop.com/images/cot-net-for-a-baby-crib-with-an-elastic-clip-on-see-through-mesh-bed-cover-net-stand-rod-2.jpg", description: "Safe and sturdy baby cot." },
  { id: 31, name: "3-in-1 Bassinet Rocker", category: "nursery", subcategory: "nests-and-bassinets", price: 6500, image: "https://www.nillababyshop.com/images/3-in-1-baby-playpen-set-with-bassinet-rocker-diaper-changer-mosquito-net-portable-foldable-baby-bed-2.jpg", description: "Portable foldable baby bassinet." },
  { id: 32, name: "Cuddle Bear Baby Pillow", category: "nursery", subcategory: "pillows", price: 950, image: "https://www.nillababyshop.com/images/cuddle-bear-baby-pillow-2.jpg", description: "Soft cosy pillow for babies." },
  { id: 33, name: "Foldable Baby Sofa", category: "nursery", subcategory: "changing-tables", price: 2200, image: "https://www.nillababyshop.com/images/multi-function-cartoon-baby-sofa-foldable-soft-fun-2.jpg", description: "Foldable soft changing surface." },

  // ================= PLAYTIME =================
  { id: 40, name: "Baby Rattles & Shakers Set", category: "playtime", subcategory: "soft-toys", price: 500, image: "https://www.nillababyshop.com/images/baby-shakers-rattles-toys-set-2.jpg", description: "Cuddly and safe soft toys." },
  { id: 41, name: "Stacking Rings Toy", category: "playtime", subcategory: "stacking-toys", price: 750, image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/3178472/1.jpg?6849", description: "Learn while playing with stacking rings." },
  { id: 42, name: "Double Sided Play Mat", category: "playtime", subcategory: "play-mats", price: 2000, image: "https://www.nillababyshop.com/images/multicolored-double-sided-soft-baby-play-mat-2.jpg", description: "Soft floor mat for playtime." },
  { id: 43, name: "Musical Piano Play Mat", category: "playtime", subcategory: "musical-piano-play-mat", price: 1800, image: "https://www.nillababyshop.com/images/musical-piano-playmat-2.jpg", description: "Sensory development musical mat." },

  // ================= TRAVEL =================
  { id: 50, name: "Lightweight Baby Stroller", category: "travel", subcategory: "strollers", price: 12000, image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/3178472/1.jpg?6849", description: "Smooth and comfortable stroller." },
  { id: 51, name: "Infant Car Seat", category: "travel", subcategory: "car-seats", price: 8500, image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/8252342/1.jpg?5946", description: "Safety-certified infant car seat." },
  { id: 52, name: "Ergonomic Baby Carrier", category: "travel", subcategory: "baby-carriers", price: 2500, image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/6517013/1.jpg?6044", description: "Hands-free comfortable carrier." },
  { id: 53, name: "Spacious Diaper Bag", category: "travel", subcategory: "diaper-bags", price: 3200, image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/6517013/1.jpg?6044", description: "Organised bag for travel." },

  // ================= MOTHER CARE =================
  { id: 60, name: "Postpartum Support Belt", category: "mother-care", subcategory: "belts", price: 1500, image: "https://www.nillababyshop.com/images/3-in-1-postpartum-belt-1.jpg", description: "Comfortable postpartum belt." },
  { id: 61, name: "Padded Nursing Bra", category: "mother-care", subcategory: "nursing-bras", price: 1200, image: "https://www.nillababyshop.com/images/padded-cotton-nursing-bras-1.jpg", description: "Support and comfort for nursing." },
  { id: 62, name: "Dafi Maternity Pads", category: "mother-care", subcategory: "dafi-maternity-pads", price: 800, image: "https://www.nillababyshop.com/images/dafi-maternity-pants-pads-2.jpg", description: "Comfortable maternity pads." },
  { id: 63, name: "African Maxi Maternity Dress", category: "mother-care", subcategory: "african-swahili-maxi-dera", price: 2500, image: "https://www.nillababyshop.com/images/african-swahili-maxi-dera-free-size-maternity-dress-2.jpeg", description: "Free size maternity dress." },

  // ================= WARMTH & SWADDLING =================
  { id: 70, name: "Wearable Swaddle Blanket", category: "warmth-and-swaddling", subcategory: "swaddle-blankets", price: 950, image: "https://www.nillababyshop.com/images/3-way-adjustable-wearable-blanket-cotton-sleepsack-swaddle-2.jpg", description: "Snug and secure swaddle." },
  { id: 71, name: "Baby Shawl", category: "warmth-and-swaddling", subcategory: "shawls", price: 600, image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/0915723/1.jpg?9977", description: "Warm soft baby shawl." },
  { id: 72, name: "Baby Hats and Mittens Set", category: "warmth-and-swaddling", subcategory: "baby-hats-and-mittens", price: 450, image: "https://www.nillababyshop.com/images/trendy-cotton-patterned-newborn-baby-hats-2.jpg", description: "Keep tiny extremities warm." },
  { id: 73, name: "Full Body Baby Warmer", category: "warmth-and-swaddling", subcategory: "baby-warmer", price: 750, image: "https://www.nillababyshop.com/images/plain-baby-warmer-2.jpg", description: "Full body warmth for baby." },
];

export default products;