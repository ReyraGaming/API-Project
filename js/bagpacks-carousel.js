import Mustache from "mustache";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { getBagpacks } from "./products/bagpacks";

// Get template
const bagpacksCarouselElement = document.querySelector(".bagpacks-carousel");
const bagpacksSlideTemplate =
  bagpacksCarouselElement.querySelector(".swiper-wrapper");

// Get bagpacks
getBagpacks(15).then((items) => {
  // Render template
  bagpacksSlideTemplate.innerHTML = Mustache.render(
    bagpacksSlideTemplate.innerHTML,
    {
      items,
    },
  );
});

// Initialize Swiper
const bagpacksCarousel = new Swiper(
  bagpacksCarouselElement.querySelector(".swiper"),
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
bagpacksCarouselElement.querySelector(".button-next").onclick = () =>
  bagpacksCarousel.slideNext();
bagpacksCarouselElement.querySelector(".button-prev").onclick = () =>
  bagpacksCarousel.slidePrev();
