import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const heroSlides = [
  {
    id: 1,
    title: "Welcome to Mini Mingle",
    subtitle: "Your trusted baby essentials store",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1556776124-2f0ebdaef26b?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Mother & Baby Love",
    subtitle: "Create beautiful moments together",
    imageUrl:
      "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "Nursery Essentials",
    subtitle: "Create the perfect space for your little one",
    imageUrl:
      "https://images.unsplash.com/photo-1776741146968-aa2dcea047d1?auto=format&fit=crop&w=1920&q=80",
  },
];

function HeroSlider() {
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
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="hero-image"
              />

              <div className="hero-overlay"></div>

              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>

               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;