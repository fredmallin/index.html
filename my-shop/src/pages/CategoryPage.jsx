import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const categoryProducts = {
  clothing: [
    { name: "Baby Cotton Romper", description: "Soft breathable cotton romper for newborns", imageUrl: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop" },
    { name: "Knitted Baby Sweater", description: "Warm knitted sweater for toddlers", imageUrl: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop" },
    { name: "Baby Onesie Set", description: "Soft cotton onesie pack of 3", imageUrl: "https://images.unsplash.com/photo-1617331140180-e8262094733a?w=400&h=400&fit=crop" },
    { name: "Toddler Dress", description: "Cute floral dress for little girls", imageUrl: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&h=400&fit=crop" },
    { name: "Baby Dungarees", description: "Comfortable denim dungarees", imageUrl: "https://images.unsplash.com/photo-1604917013641-8f6c0c1b2cbb?w=400&h=400&fit=crop" },
    { name: "Hooded Jacket", description: "Warm fleece hooded jacket", imageUrl: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop" },
    { name: "Baby Leggings Set", description: "Stretchy soft leggings pack", imageUrl: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&h=400&fit=crop" },
    { name: "Sleepsuit Set", description: "Cosy all-in-one sleepsuit", imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop" },
  ],
  shoes: [
    { name: "Baby Sneakers", description: "Soft sole first walker shoes", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
    { name: "Baby Sandals", description: "Breathable summer sandals", imageUrl: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop" },
    { name: "Baby Boots", description: "Warm winter boots for toddlers", imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop" },
    { name: "Mary Jane Shoes", description: "Classic style for little girls", imageUrl: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=400&h=400&fit=crop" },
    { name: "Toddler Slip-Ons", description: "Easy on easy off slip-ons", imageUrl: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop" },
    { name: "Baby Rain Boots", description: "Waterproof fun rain boots", imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop" },
    { name: "Soft Leather Moccasins", description: "Handcrafted soft sole moccasins", imageUrl: "https://images.unsplash.com/photo-1581873372796-635b67ca2008?w=400&h=400&fit=crop" },
    { name: "Canvas Shoes", description: "Lightweight everyday canvas shoes", imageUrl: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?w=400&h=400&fit=crop" },
  ],
  "baby-care": [
    { name: "Baby Lotion", description: "Gentle moisturiser for sensitive skin", imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop" },
    { name: "Grooming Kit", description: "Complete baby grooming set", imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop" },
    { name: "Baby Wipes", description: "Gentle fragrance-free wipes", imageUrl: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=400&h=400&fit=crop" },
    { name: "Baby Powder", description: "Soft talc-free baby powder", imageUrl: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=400&h=400&fit=crop" },
    { name: "Baby Shampoo", description: "Tear-free gentle shampoo", imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop" },
    { name: "Nappy Rash Cream", description: "Soothing protective cream", imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=400&fit=crop" },
    { name: "Baby Bath Tub", description: "Ergonomic safe baby bath tub", imageUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop" },
    { name: "Cotton Buds Set", description: "Safe baby cotton buds", imageUrl: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop" },
  ],
  toys: [
    { name: "Soft Teddy Bear", description: "Cuddly plush toy for babies", imageUrl: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop" },
    { name: "Stacking Rings", description: "Colourful learning toy", imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop" },
    { name: "Baby Rattle", description: "Fun sensory rattle toy", imageUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop" },
    { name: "Play Mat", description: "Soft activity play mat", imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=400&fit=crop" },
    { name: "Baby Gym", description: "Hanging sensory baby gym", imageUrl: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=400&h=400&fit=crop" },
    { name: "Wooden Blocks", description: "Classic colourful wooden blocks", imageUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop" },
    { name: "Shape Sorter", description: "Shape and colour learning toy", imageUrl: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=400&h=400&fit=crop" },
    { name: "Musical Mobile", description: "Cot mobile with soothing sounds", imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&h=400&fit=crop" },
  ],
  nursery: [
    { name: "Baby Cot", description: "Safe and sturdy baby cot", imageUrl: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=400&fit=crop" },
    { name: "Night Light", description: "Soft glow nursery lamp", imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&h=400&fit=crop" },
    { name: "Baby Monitor", description: "Keep an eye on baby", imageUrl: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=400&h=400&fit=crop" },
    { name: "Changing Mat", description: "Waterproof padded changing mat", imageUrl: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=400&h=400&fit=crop" },
    { name: "Nursing Chair", description: "Comfortable rocking nursing chair", imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop" },
    { name: "Baby Wardrobe", description: "Spacious baby clothes wardrobe", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" },
    { name: "Cot Mobile", description: "Soothing musical cot mobile", imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=400&fit=crop" },
    { name: "Baby Dresser", description: "Compact nursery dresser", imageUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop" },
  ],
  feeding: [
    { name: "Feeding Bottle", description: "Anti-colic safe feeding bottle", imageUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop" },
    { name: "Breast Pump", description: "Comfortable and efficient", imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=400&fit=crop" },
    { name: "Baby Bib Set", description: "Waterproof easy-clean bibs", imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop" },
    { name: "High Chair", description: "Adjustable safe high chair", imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&h=400&fit=crop" },
    { name: "Baby Spoon Set", description: "Soft silicone weaning spoons", imageUrl: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=400&h=400&fit=crop" },
    { name: "Bottle Steriliser", description: "Electric steam steriliser", imageUrl: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=400&h=400&fit=crop" },
    { name: "Nursing Pillow", description: "Ergonomic breastfeeding pillow", imageUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop" },
    { name: "Baby Food Maker", description: "Steam blend baby food maker", imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop" },
  ],
  travel: [
    { name: "Baby Stroller", description: "Lightweight foldable stroller", imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop" },
    { name: "Car Seat", description: "Safety certified infant car seat", imageUrl: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=400&h=400&fit=crop" },
    { name: "Baby Carrier", description: "Ergonomic hands-free carrier", imageUrl: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=400&h=400&fit=crop" },
    { name: "Diaper Bag", description: "Large organised diaper bag", imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop" },
    { name: "Travel Cot", description: "Portable lightweight travel cot", imageUrl: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=400&fit=crop" },
    { name: "Pram Organiser", description: "Handy stroller storage bag", imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=400&fit=crop" },
    { name: "Sun Shade", description: "UV protection pram shade", imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&h=400&fit=crop" },
    { name: "Baby Backpack", description: "Compact travel baby backpack", imageUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop" },
  ],
  "mother-care": [
    { name: "Maternity Dress", description: "Comfortable stylish maternity dress", imageUrl: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&h=400&fit=crop" },
    { name: "Nursing Bra", description: "Supportive comfortable nursing bra", imageUrl: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop" },
    { name: "Belly Band", description: "Supportive maternity belly band", imageUrl: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop" },
    { name: "Prenatal Vitamins", description: "Essential vitamins for mum and baby", imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=400&fit=crop" },
    { name: "Stretch Mark Cream", description: "Nourishing belly butter cream", imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop" },
    { name: "Breast Pads", description: "Disposable absorbent breast pads", imageUrl: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=400&h=400&fit=crop" },
    { name: "Postpartum Belt", description: "Recovery abdominal support belt", imageUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop" },
    { name: "Nipple Cream", description: "Soothing lanolin nipple cream", imageUrl: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=400&h=400&fit=crop" },
  ],
  "warmth-&-swaddling": [
    { name: "Swaddle Blanket", description: "Muslin soft swaddle blanket", imageUrl: "https://images.unsplash.com/photo-1616628188859-7a4c0b1d7f62?w=400&h=400&fit=crop" },
    { name: "Sleep Sack", description: "Warm wearable sleep sack", imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&h=400&fit=crop" },
    { name: "Baby Hat & Mittens", description: "Soft cotton hat and mitten set", imageUrl: "https://images.unsplash.com/photo-1604917013641-8f6c0c1b2cbb?w=400&h=400&fit=crop" },
    { name: "Fleece Suit", description: "Full body warm fleece suit", imageUrl: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop" },
    { name: "Knitted Baby Blanket", description: "Hand knitted cosy blanket", imageUrl: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop" },
    { name: "Thermal Vest", description: "Warm thermal base layer vest", imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop" },
    { name: "Baby Booties", description: "Soft knitted warm booties", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
    { name: "Swaddle Wrap Set", description: "Pack of 3 stretchy swaddle wraps", imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=400&fit=crop" },
  ],
};

function CategoryPage() {
  const { categoryName } = useParams();
  const key = categoryName.toLowerCase();
  const products = categoryProducts[key] || [];

  return (
    <>
      <div className="section">
        <h2 className="section-title" style={{ textTransform: "capitalize" }}>
          {categoryName.replace(/-/g, " ")}
        </h2>
        {products.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888", padding: "40px" }}>
            No products found in this category.
          </p>
        ) : (
          <div className="category-grid-page">
            {products.map((p, i) => (
              <ProductCard key={i} {...p} hidePrice />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default CategoryPage;