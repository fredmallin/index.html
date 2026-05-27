import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import ViewAllModal from "../components/ViewAllModal";

const featuredProducts = [
  {
    name: "Baby Cotton Romper",
    price: 1200,
    description: "Soft breathable cotton romper for newborns",
    imageUrl: "https://ke.jumia.is/3jlMON1KBdxATIWZ8Fo-ZbVtQWc=/fit-in/500x500/filters:fill(white)/product/63/628775/1.jpg?9403"
  },
  {
    name: "Feeding Bottle",
    price: 850,
    description: "Anti-colic safe feeding bottle",
    imageUrl: "https://www.chicco.in/cdn/shop/files/chicco-natural-feeling-slow-flow-baby-bottle-0-month-onwards-150ml-pink-1.webp?v=1761045047&width=750"
  },
  {
    name: "Baby Carrier",
    price: 3500,
    description: "Ergonomic hands-free carrier",
    imageUrl: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/2410681/1.jpg?6465"
  },
  {
    name: "Swaddle Blanket",
    price: 800,
    description: "Muslin soft swaddle blanket",
    imageUrl: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/8640623/1.jpg?1432"
  },
  {
    name: "Baby Sneakers",
    price: 1100,
    description: "Soft sole first walker shoes",
    imageUrl: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/4432352/1.jpg?6772"
  },
  {
    name: "High Chair",
    price: 7500,
    description: "Adjustable safe high chair",
    imageUrl: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/5754623/1.jpg?2870"
  },
  {
    name: "Baby Lotion",
    price: 450,
    description: "Gentle moisturiser for sensitive skin",
    imageUrl: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/4713523/1.jpg?9508"
  },
  {
    name: "Stacking Rings",
    price: 600,
    description: "Colourful learning toy",
    imageUrl: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/3178472/1.jpg?6849"
  },
  {
    name: "Baby Cot",
    price: 18000,
    description: "Safe and sturdy baby cot",
    imageUrl: "https://www.babycotkenya.com/uploads/products/4FpXlohinTCE0D9stqGyi1ispN8vXQHagrUMo9l9.webp"
  },
  {
    name: "Grooming Kit",
    price: 950,
    description: "Complete baby grooming set",
    imageUrl: "https://m.media-amazon.com/images/I/41o2TPbsPoL._SS400_.jpg"
  },
  {
    name: "Soft Baby Blanket",
    price: 1500,
    description: "Warm and soft blanket for sleep",
    imageUrl: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/7533682/1.jpg?2601"
  },
];

// Map each category card to its route
const categories = [
  {
    title: "Clothing",
    route: "/category/clothing",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=300&h=300&fit=crop"
  },
  {
    title: "Shoes",
    route: "/category/clothing/baby-shoes",
    image: "https://www.nillababyshop.com/images/baby-boy-crib-shoes-with-soft-sole-pre-walkers-2.jpg"
  },
  {
    title: "Baby Care",
    route: "/category/baby-care",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop"
  },
  {
    title: "Toys",
    route: "/category/playtime",
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=300&h=300&fit=crop"
  },
  {
    title: "Nursery",
    route: "/category/nursery",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=300&h=300&fit=crop"
  },
  {
    title: "Feeding",
    route: "/category/feeding",
    image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/1676523/1.jpg?5763"
  },
];

function HomePage({ searchQuery }) {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = featuredProducts.filter((p) =>
    p.name.toLowerCase().includes((searchQuery || "").toLowerCase()) ||
    p.description.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  return (
    <>
      <HeroSlider products={featuredProducts} />

      {/* HEADER */}
      <div style={{ textAlign: "center", padding: "40px 20px 10px" }}>
        <h1 style={{
          fontSize: "32px",
          fontWeight: "700",
          background: "linear-gradient(to right, #ec4899, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Mini Mingle Shop
        </h1>
        <p style={{ color: "#888", fontSize: "16px", marginTop: "8px" }}>
          Everything your baby needs in one place
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "12px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "13px", color: "#ec4899", fontWeight: "500" }}>🇰🇪 Proudly Kenyan</span>
          <span style={{ color: "#ddd" }}>|</span>
          <span style={{ fontSize: "13px", color: "#ec4899", fontWeight: "500" }}> Fast Nairobi Delivery</span>
          <span style={{ color: "#ddd" }}>|</span>
          <span style={{ fontSize: "13px", color: "#ec4899", fontWeight: "500" }}> Quality Guaranteed</span>
        </div>
      </div>

      {/* CATEGORIES */}
      <div style={{ padding: "20px 40px 40px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "24px", color: "#333" }}>
          Shop by Category
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "20px"
        }}>
          {categories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => navigate(cat.route)}
              style={{ cursor: "pointer" }}
            >
              <CategoryCard title={cat.title} image={cat.image} />
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div style={{ background: "#fdf2f8", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px"
          }}>
            <div>
              <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#333" }}>
                {searchQuery ? `Results for "${searchQuery}"` : "Featured Products"}
              </h2>
              <p style={{ color: "#888", marginTop: "4px" }}>Handpicked just for your little one</p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                background: "linear-gradient(to right, #ec4899, #60a5fa)",
                color: "white",
                border: "none",
                padding: "10px 24px",
                borderRadius: "999px",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              View All
            </button>
          </div>

          {filteredProducts.length === 0 ? (
            <p style={{ textAlign: "center", color: "#888", padding: "40px" }}>
              No products found for "{searchQuery}"
            </p>
          ) : (
            <div className="product-grid">
              {(searchQuery ? filteredProducts : featuredProducts.slice(0, 4)).map((p, i) => (
                <ProductCard key={i} {...p} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />

      <ViewAllModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Featured Products"
        products={featuredProducts}
      />
    </>
  );
}

export default HomePage;