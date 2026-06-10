import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Baby Care",
    subs: [
      { name: "Bathing & Laundry", desc: "Baby Care, Baby Bath", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mmhg-o612IzGkOlaD-Tcowm_FNGZASsmR_0AXKZ_Qg&s=10" },
      { name: "Diapers", desc: "Leak-Free Baby Care", image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/8252342/1.jpg?5946" },
      { name: "Grooming Kits", desc: "Baby Healthcare Essentials", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaxzBPEK9RfipVcojsxMXlJKs5NATSYtl14qaaWQIlg&s" },
      { name: "Potty Training", desc: "Supportive & Easy", image: "data:image/webp;base64,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" },
    ],
  },
 
  {
  name: "Clothing",
  subs: [
    { name: "Bodysuits", desc: "Soft baby bodysuits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP10diJYZSut1IYzrMP1kiwDLmoPXP0rp7_NpSD_dEoA&s=10" },

    { name: "Baby Bibs", desc: "Cute feeding bibs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNTbe5heVfxTPVnciOugcAp8jF2t9axtR0qcP17ph9Q&s=10" },

    { name: "Baby Shoes", desc: "Comfortable baby shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytUirqEKsa8I_qA7XHYLWAqkhNAPZNxzoK5wTnrMFHw&s=10" },

    { name: "Custom Designs", desc: "Personalized baby outfits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gt2REcqr463HT3u7PTGEc-8D2NB3mpqXtmkgSEfYJQ&s=10" },

  ],
},
  {
    name: "Feeding",
    subs: [
      { name: "Bottles", desc: "Anti-Colic & Safe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS62w_0FISFc7LgMl5Bxh7PiagPOghq1hHvgBw5qUD7Q&s=10" },
      { name: "Breast Pumps", desc: "Comfortable & Efficient", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gYTW2WJepsovBDL09UIJXdT_BWMjlby2QEbxRdVTMg&s=10" },
      { name: "Pacifiers", desc: "For baby", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNFyWq8HwNitx8WAbhGpBq2V7LckocGIm1fw1W8eqkIA&s=10" },
      { name: "Kids furniture", desc: "Safe Mealtime Seating", image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/8761323/1.jpg?4527" },
    ],
  },
  {
    name: "Nursery",
    subs: [
      { name: "Baby Cots", desc: "Safe & Sturdy Sleep", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnMH3aT3WK43Ipbv4T7FhbCkiJtBcr06UeP0T8k0Hmg&s=10"}, 
      { name: "Nests and Bassinets", desc: "Large enough to accomodate baby", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MG3aPvWXRDLa0NRhX9UzUlaiuKdrlQDVYQ_iwOho7A&s=10" },
      { name: "Pillows", desc: "Soft and cosy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhGih-M0oPiGBUg68RBQtJdkVr2fMDK5x2h5SfDoGjA&s=10" },
    ],
  },
  {
    name: "Playtime",
    subs: [
      { name: "Soft Toys", desc: "Cuddly & Safe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMgQPgVFS17Te6rsrBGjQyhJ9NucLySdBwLHwWQAAKQ&s=10" },
      { name: "Play Mats", desc: "Soft Floor Playtime", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4vNGyWFXu33_GpCxD3S2CJtJGYgUZxsbflm-USnDGw&s=10" },
      { name: "Musical piano play mat", desc: "Sensory Development", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB-SIsL1bLgbk1KDeK9wYRIzTV6J0ek1wSyU0rkhSvQ&s=10"},
  
  ],  },
  {
    name: "Travel",
    subs: [
      { name: "Strollers", desc: "Smooth & Comfortable", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMmeKZWCdSFftCiKk6yWj5YDK7yIDnO9ZViMFT0L0qw&s=10" },
      { name: "Car Seats", desc: "Safe on Every Ride", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-3sbSUmp0ZhKuMO688K4MoTZ3TsyLnR7JhypNOapKA&s=10" },
      { name: "Baby Carriers", desc: "Hands-Free Comfort", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gRJwugQO_rq91NngDORJIhL1ew62zVHmVzhNqR_IeQ&s=10" },
      { name: "Diaper Bags", desc: "Organised On The Go", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREARiCZ_VufpDbgQvEb0EtkX4pH0nd_IEqqdZWgRVA4w&s=10" },
    ],
  },
  {
    name: "Mother Care",
    subs: [
      { name: "Belts", desc: "Comfortable ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iwbcmvYNduoin74Hytg0g7XB50oIaDDYCvZo4PfU6g&s=10" },
      { name: "Nursing Bras", desc: "Support & Comfort", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0grI8fPF1nGK8J26P4YwNcOMfDwu5q_ILoBe_5psTw&s=10" },
      { name: "Dafi Maternity pads", desc: "Comfortable and easy to use", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdhk6AMRAyy5ggB_OST9MXfO9ZujTxXGOEmekzsQ5aA&s=10" },
      { name: "African swahili maxi dera", desc: "Free size maternity Dress", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZOA7JwAKSr-uz_e1RiZzgaMtw4iSIyrotH7tn1TRXA&s=10" },
    ],
  },
  {
    name: "Warmth & Swaddling",
    subs: [
      { name: "Swaddle Blankets", desc: "Snug & Secure", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQ9gsCcbz8IfKUB7BS0DwuWRdNthyW8HV6FdjrIZqHQ&s=10" },
      { name: "Shawls", desc: " Warm ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1VUph1qCrkunc-1UlH4Ar1bNYNm2icMY9wks4Q26Nw&s=10" },
      { name: "Baby Hats & Mittens", desc: "Keep Extremities Warm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHhgnCIh1wSm0wtfi5w6W7rr3vI1QRmWeNZymIuz08g&s=10" },
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

       
      </div>
    </nav>
  );
}
