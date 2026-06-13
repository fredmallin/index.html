const products = [

  // ═══════════════════════════════════════════════════
  // BABY CARE
  // ═══════════════════════════════════════════════════
  { id: "bc1",  name: "Complete Baby Bath Set",         category: "baby-care", subcategory: "bathing-and-laundry", price: 980,  image: "/public/image 1c.jpeg" },
  { id: "bc2",  name: "Baby Laundry Detergent",         category: "baby-care", subcategory: "bathing-and-laundry", price: 450,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/6382523/1.jpg?9130" },
  { id: "bc3",  name: "Soft Baby Towel Set",            category: "baby-care", subcategory: "bathing-and-laundry", price: 620,  image: "https://www.nillababyshop.com/images/soft-baby-cotton-towel-2.jpg" },
  { id: "bc4",  name: "Baby Bath Tub",                  category: "baby-care", subcategory: "bathing-and-laundry", price: 1200, image: "https://www.nillababyshop.com/images/foldable-baby-bath-station-with-changing-mat-storage-shelf-lockable-wheels-2.jpg" },
  { id: "bc5",  name: "Gentle Baby Shampoo",            category: "baby-care", subcategory: "bathing-and-laundry", price: 380,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/9707523/1.jpg?8527" },
  { id: "bc6",  name: "Baby Body Wash",                 category: "baby-care", subcategory: "bathing-and-laundry", price: 350,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/9042723/1.jpg?2309" },
  { id: "bc7",  name: "Baby Lotion 200ml",              category: "baby-care", subcategory: "bathing-and-laundry", price: 420,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/0125061/1.jpg?1297" },
  { id: "bc8",  name: "Baby Bath Support stand",                 category: "baby-care", subcategory: "bathing-and-laundry", price: 890,  image: "https://www.nillababyshop.com/images/baby-bath-seat-with-support-stand-adjustable-infant-bathing-aid-for-safe-shower-time-1.jpg" },
  { id: "bc9",  name: "Baby Sponge & Brush Set",        category: "baby-care", subcategory: "bathing-and-laundry", price: 320,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/0256582/1.jpg?1173" },
  { id: "bc10", name: "Hooded Baby Towel",              category: "baby-care", subcategory: "bathing-and-laundry", price: 750,  image: "https://www.nillababyshop.com/images/hooded-coral-towel-2.jpg" },

  { id: "bc11", name: "Newborn Diapers Size 1",         category: "baby-care", subcategory: "diapers", price: 1680, image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/2356623/1.jpg?1838" },
  { id: "bc12", name: "Pull-Up Diapers Size 3",         category: "baby-care", subcategory: "diapers", price: 4120, image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/9536723/1.jpg?2560" },
  { id: "bc19", name: "Diaper Bag Backpack",            category: "baby-care", subcategory: "diapers", price: 2800, image: "https://www.nillababyshop.com/images/4-in-1-diaper-bag-2.jpg" },
  { id: "bc20", name: "5 Piece Set Washable Bby Liners",           category: "baby-care", subcategory: "diapers", price: 650,  image: "https://www.nillababyshop.com/images/5-piece-set-washable-baby-liners-reusable-liners-2.jpg" },

  { id: "bc21", name: "Large Bby Care Grooming Kit",            category: "baby-care", subcategory: "grooming-kits", price: 1200,  image: "https://www.nillababyshop.com/images/large-baby-care-kit-2.jpg" },
  { id: "bc22", name: "Small Baby Care Grooming Kit",         category: "baby-care", subcategory: "grooming-kits", price: 800,  image: "https://www.nillababyshop.com/images/small-baby-care-kit-2.jpg" },
  

  { id: "bc31", name: "Baby Potty Training Chair",      category: "baby-care", subcategory: "potty-training", price: 1350, image: "https://www.nillababyshop.com/images/baby-potty-training-chair-with-lid-side-handles-comfortable-toddler-toilet-seat-2.jpg" },
  { id: "bc32", name: " Potty Seat",            category: "baby-care", subcategory: "potty-training", price: 850,  image: "https://www.nillababyshop.com/images/kids-seat-toilet-trainer-2.jpg" },
  { id: "bc33", name: "Potty Training Seat with Lid",    category: "baby-care", subcategory: "potty-training", price: 3600,  image: "https://www.nillababyshop.com/images/kids-potty-training-seat-with-lid-2.jpg" },
  { id: "bc36", name: "Portable Travel Potty",          category: "baby-care", subcategory: "potty-training", price: 2899,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/3659123/1.jpg?1053" },
 

  { id: "bc41", name: "Ultra Soft Washcloths 4-Pack",   category: "baby-care", subcategory: "bathing-and-laundry", price: 960,  image: "https://www.nillababyshop.com/images/4pcs-ultra-soft-baby-washcloths-2.jpg" },
  { id: "bc42", name: "6 Pcs Set Bbaby Washcloth",       category: "baby-care", subcategory: "bathing-and-laundry", price: 320,  image: "https://www.nillababyshop.com/images/6pcs-set-baby-washcloth-2.jpg" },
  { id: "bc43", name: "Baby WashCloth 4 Piece",          category: "baby-care", subcategory: "bathing-and-laundry", price: 400,  image: "https://www.nillababyshop.com/images/baby-washcloth-4-piece-2.jpg" },
  { id: "bc47", name: "Hooded Baby Washcloth",    category: "baby-care", subcategory: "bathing-and-laundry", price: 960,  image: "https://www.nillababyshop.com/images/hooded-towel-with-wash-cloth-2.jpg" },
  { id: "bc48", name: "Hooded Coral Towel",        category: "baby-care", subcategory: "bathing-and-laundry", price: 960,  image: "https://www.nillababyshop.com/images/hooded-coral-towel-2.jpg" },
  { id: "bc49", name: "Soft Baby Towel",        category: "baby-care", subcategory: "bathing-and-laundry", price: 560,  image: "https://www.nillababyshop.com/images/soft-baby-towel-1.jpg" },
  { id: "bc50", name: "Infant Cotton Cartoon Animal Print",        category: "baby-care", subcategory: "bathing-and-laundry", price: 560,  image: "https://www.nillababyshop.com/images/infant-cotton-cartoon-animal-print-bath-towel-2.jpg" },
  { id: "bc45", name: "8 Pcs Set WashCloths",      category: "baby-care", subcategory: "bathing-and-laundry", price: 320,  image: "https://www.nillababyshop.com/images/8-piece-washcloth-2.jpg" },

  // ═══════════════════════════════════════════════════
  // CLOTHING
  // ═══════════════════════════════════════════════════
  
  { id: "cl2",  name: "Long Sleeve Bodysuit 5-Pack",    category: "clothing", subcategory: "bodysuits", price: 1200,  image: "/public/image 2c.jpeg" },
  { id: "cl3",  name: "5 Pck Newborn Bbay Girls Bodysuit",           category: "clothing", subcategory: "bodysuits", price: 1200,  image: "/public/image 2c.jpeg" },
  { id: "cl4",  name: "5 Pieces Multicolored Cotton Bodysuit",        category: "clothing", subcategory: "bodysuits", price: 1200,  image:"/public/image 2c.jpeg" },
  { id: "cl5",  name: "Striped Baby Bodysuit",          category: "clothing", subcategory: "bodysuits", price: 1200,  image: "/public/image 2c.jpeg" },
  { id: "cl6",  name: "Adorable Bbaby Onesie Vest",          category: "clothing", subcategory: "bodysuits", price: 450,  image: "/public/image 2c.jpeg" },
  { id: "cl7",  name: "Baby Boys One-piece Soft Cotton ",        category: "clothing", subcategory: "bodysuits", price: 450,  image: "/public/image 2c.jpeg" },
  { id: "cl8",  name: "Baby Romper Buttoned Hooded Overall One Piece BodySuit",               category: "clothing", subcategory: "bodysuits", price: 960,  image: "/public/image 2c.jpeg" },
  { id: "cl9",  name: "Branded Newborn Bbay Onesies",   category: "clothing", subcategory: "bodysuits", price: 440,  image: "/public/image 2c.jpeg" },

  { id: "cl11", name: "3-Pack Baby Bibs",            category: "clothing", subcategory: "baby-bibs", price: 600,  image: "/public/image 2c.jpeg" },
  { id: "cl12", name: "Animal Pattern Silicone Bib",        category: "clothing", subcategory: "baby-bibs", price: 400,  image: "/public/image 2c.jpeg" },
  { id: "cl13", name: "Burp Clothes",     category: "clothing", subcategory: "baby-bibs", price: 480,  image:"/public/image 2c.jpeg" },
  { id: "cl14", name: "Cartoon Print Bib",            category: "clothing", subcategory: "baby-bibs", price: 80,  image: "/public/image 2c.jpeg" },
  { id: "cl15", name: "Newborn Baby Bib",              category: "clothing", subcategory: "baby-bibs", price: 80,  image: "/public/image 2c.jpeg" },
  { id: "cl16", name: "Unisex Bbaby Cotton Drooler Bib",                   category: "clothing", subcategory: "baby-bibs", price: 80,  image: "/public/image 2c.jpeg" },
  { id: "cl17", name: "Washable Newborn Cotton Bib",               category: "clothing", subcategory: "baby-bibs", price: 80,  image: "/public/image 2c.jpeg" },
  { id: "cl18", name: "Long Sleeve Bib",                category: "clothing", subcategory: "baby-bibs", price: 400,  image: "/public/image 2c.jpeg" },
  { id: "cl19", name: "Unisex Baby Bandana Drool bib",               category: "clothing", subcategory: "baby-bibs", price: 480,  image: "/public/image 2c.jpeg" },

  { id: "cl24", name: "Baby Boy Crib Shoes with Soft Sole",            category: "clothing", subcategory: "baby-shoes", price: 640,  image: "/public/image 2c.jpeg" },
  { id: "cl25", name: "Baby Girl Crib Shoes with Soft Sole",     category: "clothing", subcategory: "baby-shoes", price: 640,  image: "/public/image 2c.jpeg" },

  { id: "cl31", name: "I Love Mom & Dad Pants Set",     category: "clothing", subcategory: "custom-designs", price: 1200,  image: "/public/image 2c.jpeg" },
 
  // ═══════════════════════════════════════════════════
  // FEEDING
  // ═══════════════════════════════════════════════════
  { id: "fd5",  name: "Compact Baby Bottle Drying Rack",         category: "feeding", subcategory: "bottles", price: 5600, image: "/public/image 2c.jpeg" },
  { id: "fd6",  name: "Baby Bank Nursing Bottle, Large",              category: "feeding", subcategory: "bottles", price: 2240, image: "/public/image 2c.jpeg" },
  { id: "fd7",  name: "Momeasy Gift Set Bottles",              category: "feeding", subcategory: "bottles", price: 1200, image: "/public/image 2c.jpeg" },
  { id: "fd8",  name: "Electric Baby Bottle Warmer",               category: "feeding", subcategory: "bottles", price: 2560,  image: "/public/image 2c.jpeg" },
  { id: "fd9",  name: "Bottle Warmer",        category: "feeding", subcategory: "bottles", price: 1200, image: "/public/image 2c.jpeg" },
  { id: "fd10", name: "Bigboss Baby Bank",             category: "feeding", subcategory: "bottles", price: 2000,  image: "/public/image 2c.jpeg" },

  { id: "fd11", name: "Double Wearable Breast Pump",    category: "feeding", subcategory: "breast-pumps", price: 136000, image: "/public/image 2c.jpeg" },
  { id: "fd12", name: "Automatic Double Breast Pump",    category: "feeding", subcategory: "breast-pumps", price: 2000, image: "/public/image 2c.jpeg" },
  { id: "fd13", name: "Manual Breast Pump",             category: "feeding", subcategory: "breast-pumps", price: 1200, image: "/public/image 2c.jpeg" },
  { id: "fd14", name: "Single wearable electic pump",        category: "feeding", subcategory: "breast-pumps", price: 6400,  image: "/public/image 2c.jpeg" },

  { id: "fd21", name: "Baby Nipple Pacifier", category: "feeding", subcategory: "bibs-and-burp-cloths", price: 160, image: "/public/image 2c.jpeg" },
  { id: "fd22", name: "Fruit Pacifier",        category: "feeding", subcategory: "bibs-and-burp-cloths", price: 400, image: "/public/image 2c.jpeg" },
  { id: "fd23", name: "Momeasy Bbay Silicone Pacifier With Protective Cap",         category: "feeding", subcategory: "bibs-and-burp-cloths", price: 200, image: "/public/image 2c.jpeg" },
  { id: "fd24", name: "Super Natural Elastic Silicone Pacifier",         category: "feeding", subcategory: "bibs-and-burp-cloths", price: 160, image: "/public/image 2c.jpeg" },
 
  { id: "fd31", name: "Baby Storage Drawer Organizer with wheels",                category: "feeding", subcategory: "kids-furniture", price: 12800, image: "/public/image 2c.jpeg" },
  { id: "fd32", name: "Multi-Functiona Cartoon Baby Sofa",          category: "feeding", subcategory: "kids-furniture", price: 48000, image: "/public/image 2c.jpeg" },
  { id: "fd33", name: "Premium Nursing Glider Chair Ottoman-Comfort Rocking Chair",             category: "feeding", subcategory: "kids-furniture", price: 3500, image: "/public/image 2c.jpeg" },
  { id: "fd34", name: "VelvetTouch Padded Chest of Drawers Bbaby Dresses with Changing Top",         category: "feeding", subcategory: "kids-furniture", price: 20000, image: "/public/image 2c.jpeg" },
 
  // ═══════════════════════════════════════════════════
  // NURSERY
  // ═══════════════════════════════════════════════════
  { id: "nu1",  name: "Wooden Baby Cot with Net",       category: "nursery", subcategory: "baby-cots", price: 14400,  image: "/public/image 2c.jpeg" },
  { id: "nu2",  name: "Cot sheets",          category: "nursery", subcategory: "baby-cots", price: 1200, image: "/public/image 2c.jpeg" },
  { id: "nu3",  name: "Elegant Designer Bbay Cot with Satin-Cushioned Panels and Canopy Drape",                  category: "nursery", subcategory: "baby-cots", price: 24000,  image: "/public/image 2c.jpeg" },
  { id: "nu4",  name: "Multi-function Infant Playpen",            category: "nursery", subcategory: "baby-cots", price: 1200,  image: "/public/image 2c.jpeg" },
  { id: "nu5",  name: "Multipurpose Baby Playpen Portbable Bbaby Crib",              category: "nursery", subcategory: "baby-cots", price: 16000,  image: "/public/image 2c.jpeg" },
  { id: "nu6",  name: "Portable Travel Cot",                 category: "nursery", subcategory: "baby-cots", price: 18000,  image: "/public/image 2c.jpeg" },
  { id: "nu7",  name: "Cot Bumper",             category: "nursery", subcategory: "baby-cots", price: 2400,  image: "/public/image 2c.jpeg" },
  { id: "nu8",  name: "Baby Cot Mattress",        category: "nursery", subcategory: "baby-cots", price: 1600,  image: "/public/image 2c.jpeg" },
  
  { id: "nu11", name: "3-in-1 Playpen Bassinet",        category: "nursery", subcategory: "nests-and-bassinets", price: 21600, image: "/public/image 2c.jpeg" },
  { id: "nu12", name: "Baby Bassinet Cradle with Mosquito Net",               category: "nursery", subcategory: "nests-and-bassinets", price: 32000, image: "/public/image 2c.jpeg" },
  { id: "nu13", name: "Baby Co-sleeper",                   category: "nursery", subcategory: "nests-and-bassinets", price: 16000, image: "/public/image 2c.jpeg" },
  { id: "nu14", name: "Baby Nest with Standard Safety",               category: "nursery", subcategory: "nests-and-bassinets", price: 1040, image: "/public/image 2c.jpeg" },
  { id: "nu15", name: "Foldable Baby Bassinet with Net and Wheels",              category: "nursery", subcategory: "nests-and-bassinets", price: 6400, image: "/public/image 2c.jpeg" },
  { id: "nu16", name: "Foldable Baby Sleeping Nest Crib",          category: "nursery", subcategory: "nests-and-bassinets", price: 2880, image: "/public/image 2c.jpeg" },
  { id: "nu17", name: "Luxury Velvet Baby Bassinet Stroller",             category: "nursery", subcategory: "nests-and-bassinets", price: 40000, image: "/public/image 2c.jpeg" },
  { id: "nu18", name: "Portable Baby Co-sleeper with Mosquito Net",            category: "nursery", subcategory: "nests-and-bassinets", price: 2400, image: "/public/image 2c.jpeg" },
 
  { id: "nu21", name: "Comfy Travel Neck Support Pillow C-Shaped Neck Pillow",        category: "nursery", subcategory: "pillows", price: 640,  image: "/public/image 2c.jpeg" },
  { id: "nu22", name: "Cuddle Bear Baby Pillow",    category: "nursery", subcategory: "pillows", price: 2800, image: "/public/image 2c.jpeg" },
  { id: "nu24", name: "Nursing Pillow",       category: "nursery", subcategory: "pillows", price: 960, image: "/public/image 2c.jpeg" },
  { id: "nu25", name: "Pregnancy Pillow",       category: "nursery", subcategory: "pillows", price: 2400,  image: "/public/image 2c.jpeg" },
  { id: "nu26", name: "Training Seat",        category: "nursery", subcategory: "pillows", price: 3200, image: "/public/image 2c.jpeg" },
  { id: "nu27", name: "Smiley Emoji Pillow",            category: "nursery", subcategory: "pillows", price: 360,  image: "/public/image 2c.jpeg" },


  // ═══════════════════════════════════════════════════
  // PLAYTIME
  // ═══════════════════════════════════════════════════
  { id: "pl1",  name: "Baby Rattles & Shakers Set",     category: "playtime", subcategory: "soft-toys", price: 1120,  image: "/public/image 2c.jpeg" },
  { id: "pl2",  name: "Soft Elephant Plush",            category: "playtime", subcategory: "soft-toys", price: 32000,  image: "/public/image 2c.jpeg" },
  { id: "pl3",  name: "Kids Educational Building Blocks",             category: "playtime", subcategory: "soft-toys", price: 2400, image: "/public/image 2c.jpeg" },
 

  { id: "pl21", name: "Multicolored Double Sided Play Mat",          category: "playtime", subcategory: "play-mats", price: 1760, image: "/public/image 2c.jpeg" },
  { id: "pl22", name: "Musical Piano Play Mat",           category: "playtime", subcategory: "play-mats", price: 2560, image: "/public/image 2c.jpeg" },
  
  { id: "pl31", name: "Musical Piano Play Mat",         category: "playtime", subcategory: "musical-piano-play-mat", price: 1950, image: "/public/image 2c.jpeg" },
 
  // ═══════════════════════════════════════════════════
  // TRAVEL
  // ═══════════════════════════════════════════════════
  { id: "tr1",  name: "Portable Newborn Stroller",  category: "travel", subcategory: "strollers", price: 12800, image: "/public/image 2c.jpeg" },
 
  { id: "tr11", name: "Carmind Pro Tech Multi-Position Car Seat",           category: "travel", subcategory: "car-seats", price: 21600, image: "/public/image 2c.jpeg" },
  { id: "tr12", name: "Carmind RubyShield Convertible Car Seat",                category: "travel", subcategory: "car-seats", price: 33600,  image: "/public/image 2c.jpeg" },
  { id: "tr13", name: "Rotating and Reclining Newborn Isofix Car Seat",               category: "travel", subcategory: "car-seats", price: 17600,  image: "/public/image 2c.jpeg" },
  { id: "tr14", name: "Orbit 360 Rotating Baby Car Seat ",              category: "travel", subcategory: "car-seats", price: 24000,  image: "/public/image 2c.jpeg" },
  { id: "tr15", name: "Infant Baby Carry Cot ",            category: "travel", subcategory: "car-seats", price: 6000,  image: "/public/image 2c.jpeg" },
  { id: "tr16", name: "Infant Car Seat Carrier with Canopy",          category: "travel", subcategory: "car-seats", price: 7200,   image: "/public/image 2c.jpeg" },
 
  { id: "tr21", name: " Baby Carrier with Breathable Hip Seat",         category: "travel", subcategory: "baby-carriers", price: 2240, image: "/public/image 2c.jpeg" },
  { id: "tr22", name: "Wrap Baby Carrier",              category: "travel", subcategory: "baby-carriers", price: 1200, image: "/public/image 2c.jpeg" },
  { id: "tr23", name: "Infatino Flip Convertible Baby Carrier 4 in 1",          category: "travel", subcategory: "baby-carriers", price: 2400, image: "/public/image 2c.jpeg" },
  { id: "tr24", name: "Newborn Chicco Carrier",             category: "travel", subcategory: "baby-carriers", price: 2400, image: "/public/image 2c.jpeg" },
  { id: "tr25", name: "Versatile Cozy Infant Baby Carrier",        category: "travel", subcategory: "baby-carriers", price: 1200, image: "/public/image 2c.jpeg" },
 
  { id: "tr31", name: "3 in 1 Stylish Diaper Bag",      category: "travel", subcategory: "diaper-bags", price: 2560, image: "/public/image 2c.jpeg" },
  { id: "tr32", name: "4 in 1 Diaper Bag",          category: "travel", subcategory: "diaper-bags", price: 2800, image: "/public/image 2c.jpeg" },
  { id: "tr33", name: "5 in 1 Diaper Bag",        category: "travel", subcategory: "diaper-bags", price: 17600, image: "/public/image 2c.jpeg" },
  { id: "tr34", name: "5pc Set Trendy Mummy Maternity Bag",             category: "travel", subcategory: "diaper-bags", price: 1760,  image: "/public/image 2c.jpeg" },
  { id: "tr35", name: "Anello Disney Minnie Mouse Diaper Backpack",           category: "travel", subcategory: "diaper-bags", price: 1600, image: "/public/image 2c.jpeg" },
 
  // ═══════════════════════════════════════════════════
  // MOTHER CARE
  // ══════════════════════════════════════════════════
  { id: "mc1",  name: "3-in-1 Postpartum Belt",         category: "mother-care", subcategory: "belts", price: 1680, image: "/public/image 2c.jpeg" },
  { id: "mc2",  name: "Postpartum Belly Belt",         category: "mother-care", subcategory: "belts", price: 640, image: "/public/image 2c.jpeg" },
 
  { id: "mc11", name: "Padded Cotton Nursing Bra",       category: "mother-care", subcategory: "nursing-bras", price: 1350, image: "/public/image 2c.jpeg" },
  { id: "mc12", name: " Nursing Bra(Non-Padded)",               category: "mother-care", subcategory: "nursing-bras", price: 400,  image: "/public/image 2c.jpeg" },
  { id: "mc13", name: "Padded Nursing Bra",            category: "mother-care", subcategory: "nursing-bras", price: 800, image: "/public/image 2c.jpeg" },
 
  { id: "mc21", name: "Dafi Maternity Pads",             category: "mother-care", subcategory: "dafi-maternity-pads", price: 850,  image: "/public/image 2c.jpeg" },
  { id: "mc22", name: "Sitz Bath Basin",             category: "mother-care", subcategory: "dafi-maternity-pads", price: 1200,  image: "/public/image 2c.jpeg" },
  { id: "mc23", name: "Set of Pregnancy Pants",         category: "mother-care", subcategory: "dafi-maternity-pads", price: 240,  image: "/public/image 2c.jpeg" },
  
  
  { id: "mc31", name: "African Swahili Maxi Dera",       category: "mother-care", subcategory: "african-swahili-maxi-dera", price: 2650, image: "/public/image 2c.jpeg" },
  { id: "mc32", name: "Women's Maternity Jeans",     category: "mother-care", subcategory: "african-swahili-maxi-dera", price: 1600, image: "/public/image 2c.jpeg" },
  { id: "mc33", name: "Anti-Burst Yoga Ball for Exercise",          category: "mother-care", subcategory: "african-swahili-maxi-dera", price: 3600, image: "/public/image 2c.jpeg" },
 
  // ═══════════════════════════════════════════════════
  // WARMTH & SWADDLING
  // ══════════════════════════════════════════════════
  { id: "ws1",  name: "3-Way Adjustable Wearable Blanket",        category: "warmth-and-swaddling", subcategory: "swaddle-blankets", price: 2000,  image: "/public/3 way blanket.webp" },
  { id: "ws2",  name: "Baby Blankets Thick and Warm ",           category: "warmth-and-swaddling", subcategory: "swaddle-blankets", price: 1200, image: "/public/thick baby blankets.webp" },
  { id: "ws3",  name: "6 Piece cotton Flannel",             category: "warmth-and-swaddling", subcategory: "swaddle-blankets", price: 1200,  image: "/public/6 piece flannel.webp" },
  { id: "ws4",  name: "Cozy Unisex Baby Rompers Hooded Swaddle sleepsuit",          category: "warmth-and-swaddling", subcategory: "swaddle-blankets", price: 960, image: "/public/unisex rompers.webp" },
 
  { id: "ws11", name: "Soft Baby Shawl",                 category: "warmth-and-swaddling", subcategory: "shawls", price: 1440,  image: "/public/softbaby shawl.webp" },
  { id: "ws12", name: "Cozy Baby Shawl",              category: "warmth-and-swaddling", subcategory: "shawls", price: 1200,  image: "/public/cozy shawl.webp" },
  { id: "ws13", name: "Elegant Warm Fluffy Shawl",                category: "warmth-and-swaddling", subcategory: "shawls", price: 1200, image: "/public/fluffy shawl 2.webp" },
  { id: "ws14", name: "Warm Fleece Newborn Shawl",              category: "warmth-and-swaddling", subcategory: "shawls", price: 1200,  image: "/public/fleece shawl.webp" },

  { id: "ws21", name: "Cotton Baby Mittens",      category: "warmth-and-swaddling", subcategory: "baby-hats-and-mittens", price: 320,  image: "/public/cotton baby mittens.webp" },
  { id: "ws22", name: "Baby Hat Set",              category: "warmth-and-swaddling", subcategory: "baby-hats-and-mittens", price: 80,  image: "/public/babyhats and mittens.webp" },
  { id: "ws23", name: "Bear Printed  Baby Beanie",             category: "warmth-and-swaddling", subcategory: "baby-hats-and-mittens", price: 80,  image: "/public/image 2c.jpeg" },
  { id: "ws24", name: "Kid's Turban Head Wrap",                 category: "warmth-and-swaddling", subcategory: "baby-hats-and-mittens", price: 400,  image: "/public/turban wrap.webp" },
  { id: "ws25", name: "Silicon Infant mittens for teething",     category: "warmth-and-swaddling", subcategory: "baby-hats-and-mittens", price: 400,  image: "/public/silcon teething.webp" },
 
];

export default products;