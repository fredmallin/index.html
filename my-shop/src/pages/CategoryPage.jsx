import { useParams } from "react-router-dom";
import products from "../data/products";
import Footer from "../components/Footer";

function CategoryPage() {
  const { categoryName, subcategory } = useParams();

  const cleanCategory = categoryName?.toLowerCase();
  const cleanSubcategory = subcategory?.toLowerCase();

  console.log("PRODUCTS LENGTH:", products.length);
  console.log("SAMPLE PRODUCT:", products[0]);
  console.log("CATEGORY PARAM:", categoryName);
  console.log("SUBCATEGORY PARAM:", subcategory);

  const filteredProducts = products.filter((p) => {
    const productCategory = p.category?.toLowerCase();
    const productSubcategory = p.subcategory?.toLowerCase();

    const matchCategory = productCategory === cleanCategory;

    const matchSubcategory =
      !cleanSubcategory ||
      productSubcategory?.includes(cleanSubcategory);

    return matchCategory && matchSubcategory;
  });

  return (
    <>
      <div className="section">
        <h2 style={{ textTransform: "capitalize" }}>
          {cleanSubcategory ? cleanSubcategory : cleanCategory}
        </h2>

        {filteredProducts.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888" }}>
            No products found in this category.
          </p>
        ) : (
          <div className="category-grid-page">
            {filteredProducts.map((p) => (
              <div key={p.id}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <p>{p.name}</p>
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