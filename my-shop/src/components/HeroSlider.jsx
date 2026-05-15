import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function HeroSlider({ products = [] }) {
  return (
    <div className="hero-wrapper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        effect="fade"
        loop
        className="hero-swiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="hero-image"
              />

              <div className="hero-overlay"></div>

              <div className="hero-content">
                <h1>{product.name}</h1>
                <p>{product.description} — KES {product.price.toLocaleString()}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;