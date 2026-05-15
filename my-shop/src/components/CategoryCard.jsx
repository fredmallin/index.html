import { useNavigate } from "react-router-dom";

function CategoryCard({ title, image, icon }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/category/${title.toLowerCase()}`)}
      style={{ cursor: "pointer" }}
    >
      <div style={{
        background: "#fce4ec", borderRadius: "20px", overflow: "hidden",
        transition: "all 0.3s ease", boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
      }}
        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
      >
        {/* IMAGE */}
        <div style={{ width: "100%", aspectRatio: "1/1", overflow: "hidden", background: "#fce4ec", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {image
            ? <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <span style={{ fontSize: "50px" }}>{icon}</span>
          }
        </div>

        {/* FOOTER */}
        <div style={{ padding: "14px 16px", textAlign: "center" }}>
          <p style={{ fontSize: "15px", fontWeight: "600", color: "#333", marginBottom: "4px" }}>{title}</p>
          <span style={{ color: "#ec4899", fontSize: "18px" }}>→</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;