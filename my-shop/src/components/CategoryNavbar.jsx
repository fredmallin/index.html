import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Baby Care",
    subs: [
      { name: "Bathing & Laundry", desc: "Baby Care, Baby Bath", image: "/public/bathing and lau.jpeg" },
      { name: "Diapers", desc: "Leak-Free Baby Care", image: "/public/diaper bags.jpeg" },
      { name: "Grooming Kits", desc: "Baby Healthcare Essentials", image: "/public/groaming kit.webp" },
      { name: "Potty Training", desc: "Supportive & Easy", image: "/public/potty.webp" },
      { name: " Washcloths", desc: "Bath Time Softness", image: "/public/image 2c.jpeg" },
    ],
  },
 
  {
  name: "Clothing",
  subs: [
    { name: "Bodysuits", desc: "Soft baby bodysuits", image: "/public/image 2c.jpeg" },

    { name: "Baby Bibs", desc: "Cute feeding bibs", image: "/public/baby bids.webp" },

    { name: "Baby Shoes", desc: "Comfortable baby shoes", image: "/public/baby shoes.webp" },

    { name: "Custom Designs", desc: "Personalized baby outfits", image: "/public/custom design.webp" },

  ],
},
  {
    name: "Feeding",
    subs: [
      { name: "Bottles", desc: "Anti-Colic & Safe", image: "/public/bottles.webp" },
      { name: "Breast Pumps", desc: "Comfortable & Efficient", image: "/public/pumps.webp" },
      { name: "Pacifiers", desc: "For baby", image: "/public/pacifier.webp" },
      { name: "Kids furniture", desc: "Safe Mealtime Seating", image: "/public/furniture.webp" },
    ],
  },
  {
    name: "Nursery",
    subs: [
      { name: "Baby Cots", desc: "Safe & Sturdy Sleep", image: "/public/baby cots.webp"}, 
      { name: "Nests and Bassinets", desc: "Large enough to accomodate baby", image: "/public/baaassinest.webp" },
      { name: "Pillows", desc: "Soft and cosy", image: "/public/pillow.webp" },
    ],
  },
  {
    name: "Playtime",
    subs: [
      { name: "Soft Toys", desc: "Cuddly & Safe", image: "/public/soft toys.webp" },
      { name: "Play Mats", desc: "Soft Floor Playtime", image: "/public/playmats.webp" },
      { name: "Musical piano play mat", desc: "Sensory Development", image: "/public/piano mat.webp" },
  
  ],  },
  {
    name: "Travel",
    subs: [
      { name: "Strollers", desc: "Smooth & Comfortable", image: "/public/strollers1.webp" },
      { name: "Car Seats", desc: "Safe on Every Ride", image: "/public/car seats.webp" },
      { name: "Baby Carriers", desc: "Hands-Free Comfort", image: "/public/babycarrier.webp" },
      { name: "Diaper Bags", desc: "Organised On The Go", image: "/public/diaper bags.jpeg" },
    ],
  },
  {
    name: "Mother Care",
    subs: [
      { name: "Belts", desc: "Comfortable ", image: "/public/image 2c.jpeg" },
      { name: "Nursing Bras", desc: "Support & Comfort", image: "/public/image 2c.jpeg" },
      { name: "Dafi Maternity pads", desc: "Comfortable and easy to use", image: "/public/image 2c.jpeg" },
      { name: "African swahili maxi dera", desc: "Free size maternity Dress", image: "/public/image 2c.jpeg" },
    ],
  },
  {
    name: "Warmth & Swaddling",
    subs: [
      { name: "Swaddle Blankets", desc: "Snug & Secure", image: "/public/image 2c.jpeg" },
      { name: "Shawls", desc: " Warm ", image: "/public/image 2c.jpeg" },
      { name: "Baby Hats & Mittens", desc: "Keep Extremities Warm", image: "/public/image 2c.jpeg" },
    ],
  },
];

export default function CategoryNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  return (
    <nav style={{ background: "linear-gradient(to right, #2D3A8C, #3D4FAC, #E8C4C4)", position: "relative", zIndex: 100 }}>
      <div style={{ display: "flex", alignItems: "center", padding: "0 24px", gap: "4px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            style={{ position: "relative" }}
            onMouseEnter={() => setOpenMenu(cat.name)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              style={{
                background: "none", border: "none", color: "white",
                padding: "14px 12px", cursor: "pointer", fontSize: "13px",
                display: "flex", alignItems: "center", gap: "4px",
                fontWeight: openMenu === cat.name ? "600" : "400",
              }}
            >
              {cat.name} <span style={{ fontSize: "10px" }}>▾</span>
            </button>

            {openMenu === cat.name && (
              <div style={{
                position: "absolute", top: "100%", left: "0",
                background: "white", borderRadius: "8px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                padding: "16px", minWidth: "480px",
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px",
                zIndex: 200,
              }}>
                {cat.subs.map((sub) => (
                  <div
                    key={sub.name}
                    onClick={() => {
                   navigate(
  `/category/${cat.name.toLowerCase().replace(/ /g, "-").replace(/&/g, "and")}/${sub.name.toLowerCase().replace(/ /g, "-").replace(/&/g, "and")}`
);

                      setOpenMenu(null);
                    }}
                    style={{
                      display: "flex", alignItems: "center", gap: "12px",
                      padding: "10px", borderRadius: "8px", cursor: "pointer",
                      border: "1px solid #f0f0f0", transition: "background 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#fdf0f7"}
                    onMouseLeave={e => e.currentTarget.style.background = "white"}
                  >
                    <img
                      src={sub.image}
                      alt={sub.name}
                      style={{ width: "64px", height: "64px", borderRadius: "8px", objectFit: "cover" }}
                    />
                    <div>
                      <p style={{ margin: 0, fontWeight: "600", fontSize: "14px", color: "#222" }}>{sub.name}</p>
                      <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>{sub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <button style={{
          marginLeft: "auto", background: "white", color: "#2D3A8C",
          border: "none", padding: "8px 20px", borderRadius: "20px",
          fontWeight: "700", cursor: "pointer", fontSize: "13px",
        }}>
          SHOP NOW
        </button>
      </div>
    </nav>
  );
}
