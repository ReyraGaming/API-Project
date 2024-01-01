import Mustache from "mustache";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { getShoes } from "./products/shoes";

// Get template
const shoesCarouselElement = document.querySelector(".shoes-carousel");
const shoesSlideTemplate =
  shoesCarouselElement.querySelector(".swiper-wrapper");

// Get shoes
getShoes(15).then((items) => {
  // Render template
  shoesSlideTemplate.innerHTML = Mustache.render(shoesSlideTemplate.innerHTML, {
    items,
  });
});

// Initialize Swiper
const shoesCarousel = new Swiper(
  shoesCarouselElement.querySelector(".swiper"),
  {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
      640: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    },
  },
);

// Add navigation
shoesCarouselElement.querySelector(".button-next").onclick = () =>
  shoesCarousel.slideNext();
shoesCarouselElement.querySelector(".button-prev").onclick = () =>
  shoesCarousel.slidePrev();
