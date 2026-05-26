import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import Footer from "../components/Footer";

function CategoryPage() {
  const { categoryName, subcategory } = useParams();
  const navigate = useNavigate();

  // Keep hyphens to match product data exactly
  const mainCat = categoryName?.toLowerCase();
  const subCat = subcategory?.toLowerCase();

  // Filter products
  const filteredProducts = products.filter((p) => {
    const productMain = p.category?.toLowerCase();
    const productSub = p.subcategory?.toLowerCase();

    const matchMain = productMain === mainCat;

    const matchSub = !subCat || 
      productSub === subCat ||
      productSub?.includes(subCat);

    return matchMain && matchSub;
  });

  return (
    <>
      <div style={{ padding: "40px 20px", maxWidth: "1400px", margin: "0 auto", minHeight: "80vh" }}>
        
        <button 
          onClick={() => navigate("/")}
          style={{
            marginBottom: "25px",
            padding: "10px 20px",
            background: "#f5f5f5",
            border: "1px solid #ddd",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "15px"
          }}
        >
          ← Back to Shop
        </button>

        <h1 style={{ 
          textAlign: "center", 
          marginBottom: "40px", 
          textTransform: "capitalize",
          color: "#2D3A8C"
        }}>
          {(subCat || mainCat || "All Products").replace(/-/g, " ")}
        </h1>

        {filteredProducts.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
            No products available in this category yet.
          </p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "28px"
          }}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  transition: "transform 0.2s",
                }}
              >
                <div style={{ height: "260px", position: "relative" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {product.tag && (
                    <div style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "#c8a96e",
                      color: "#111",
                      padding: "5px 12px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "700"
                    }}>
                      {product.tag}
                    </div>
                  )}
                </div>

                <div style={{ padding: "16px" }}>
                  <h3 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>{product.name}</h3>
                  <p style={{ color: "#555", fontSize: "14px", marginBottom: "12px" }}>
                    {product.description}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "19px", fontWeight: "700", color: "#2D3A8C" }}>
                      KSh {product.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => alert(`✅ ${product.name} has been added to cart!`)}
                      style={{
                        background: "#c8a96e",
                        color: "#111",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "6px",
                        fontWeight: "700",
                        cursor: "pointer"
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CategoryPage;