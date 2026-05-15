import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Baby Care",
    subs: [
      { name: "Baby Skin Care", desc: "Gentle Care, Pure Love", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=80&h=80&fit=crop" },
      { name: "Bathing & Laundry", desc: "Baby Care, Baby Bath", image: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=80&h=80&fit=crop" },
      { name: "Diapers", desc: "Leak-Free Baby Care", image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=80&h=80&fit=crop" },
      { name: "Grooming Kits", desc: "Baby Healthcare Essentials", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=80&h=80&fit=crop" },
      { name: "Potty Training", desc: "Supportive & Easy", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=80&h=80&fit=crop" },
      { name: "Towels & Washcloths", desc: "Bath Time Softness", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop" },
    ],
  },
  {
    name: "Clothing",
    subs: [
      { name: "Rompers", desc: "Cute & Comfortable", image: "https://images.unsplash.com/photo-1604917013641-8f6c0c1b2cbb?w=80&h=80&fit=crop" },
      { name: "Sweaters", desc: "Warm & Cosy", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=80&h=80&fit=crop" },
      { name: "Onesies", desc: "Soft Everyday Wear", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=80&h=80&fit=crop" },
      { name: "Dresses", desc: "Cute Girls Outfits", image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=80&h=80&fit=crop" },
      { name: "Baby Cotton Romper", description: "Soft breathable cotton romper for newborns", imageUrl: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop" },
  { name: "Knitted Baby Sweater", description: "Warm knitted sweater for toddlers", imageUrl: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop" },
  { name: "Baby Onesie Set", description: "Soft cotton onesie pack of 3", imageUrl: "https://images.unsplash.com/photo-1617331140180-e8262094733a?w=400&h=400&fit=crop" },
  { name: "Toddler Dress", description: "Cute floral dress for little girls", imageUrl: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&h=400&fit=crop" },
  { name: "Baby Dungarees", description: "Comfortable denim dungarees", imageUrl: "https://images.unsplash.com/photo-1604917013641-8f6c0c1b2cbb?w=400&h=400&fit=crop" },
  { name: "Hooded Jacket", description: "Warm fleece hooded jacket", imageUrl: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop" },
  { name: "Baby Leggings Set", description: "Stretchy soft leggings pack", imageUrl: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&h=400&fit=crop" },
  { name: "Sleepsuit Set", description: "Cosy all-in-one sleepsuit", imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop" },
    ],
  },
  {
    name: "Feeding",
    subs: [
      { name: "Bottles", desc: "Anti-Colic & Safe", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=80&h=80&fit=crop" },
      { name: "Breast Pumps", desc: "Comfortable & Efficient", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=80&h=80&fit=crop" },
      { name: "Bibs & Burp Cloths", desc: "Keep Baby Clean", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=80&h=80&fit=crop" },
      { name: "High Chairs", desc: "Safe Mealtime Seating", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=80&h=80&fit=crop" },
    ],
  },
  {
    name: "Nursery",
    subs: [
      { name: "Baby Cots", desc: "Safe & Sturdy Sleep", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=80&h=80&fit=crop" },
      { name: "Night Lights", desc: "Soft Glow for Baby", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=80&h=80&fit=crop" },
      { name: "Baby Monitors", desc: "Keep an Eye on Baby", image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=80&h=80&fit=crop" },
      { name: "Changing Tables", desc: "Comfortable Changing", image: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=80&h=80&fit=crop" },
    ],
  },
  {
    name: "Playtime",
    subs: [
      { name: "Soft Toys", desc: "Cuddly & Safe", image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=80&h=80&fit=crop" },
      { name: "Stacking Toys", desc: "Learn While Playing", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=80&h=80&fit=crop" },
      { name: "Play Mats", desc: "Soft Floor Playtime", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=80&h=80&fit=crop" },
      { name: "Baby Gyms", desc: "Sensory Development", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=80&h=80&fit=crop" },
    ],
  },
  {
    name: "Travel",
    subs: [
      { name: "Strollers", desc: "Smooth & Comfortable", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=80&h=80&fit=crop" },
      { name: "Car Seats", desc: "Safe on Every Ride", image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=80&h=80&fit=crop" },
      { name: "Baby Carriers", desc: "Hands-Free Comfort", image: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=80&h=80&fit=crop" },
      { name: "Diaper Bags", desc: "Organised On The Go", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=80&h=80&fit=crop" },
    ],
  },
  {
    name: "Mother Care",
    subs: [
      { name: "Maternity Wear", desc: "Comfortable & Stylish", image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=80&h=80&fit=crop" },
      { name: "Nursing Bras", desc: "Support & Comfort", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=80&h=80&fit=crop" },
      { name: "Postpartum Care", desc: "Recovery Essentials", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=80&h=80&fit=crop" },
      { name: "Vitamins & Supplements", desc: "Nourish Mum & Baby", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=80&h=80&fit=crop" },
    ],
  },
  {
    name: "Warmth & Swaddling",
    subs: [
      { name: "Swaddle Blankets", desc: "Snug & Secure", image: "https://images.unsplash.com/photo-1616628188859-7a4c0b1d7f62?w=80&h=80&fit=crop" },
      { name: "Sleep Sacks", desc: "Safe Warm Sleep", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=80&h=80&fit=crop" },
      { name: "Baby Hats & Mittens", desc: "Keep Extremities Warm", image: "https://images.unsplash.com/photo-1604917013641-8f6c0c1b2cbb?w=80&h=80&fit=crop" },
      { name: "Fleece Suits", desc: "Full Body Warmth", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=80&h=80&fit=crop" },
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
                      navigate(`/category/${sub.name.toLowerCase().replace(/ /g, "-")}`);
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
