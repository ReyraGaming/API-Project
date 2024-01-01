import Swiper from "swiper";
import Mustache from "mustache";
import { Navigation } from "swiper/modules";

const products = [
  {
    image: "https://smartsoftt.com/fabulous/assets/img/slider/home1-slide2.jpg",
    title: "Shoes Product",
    desc: `Finding your own path means following your happiness.`,
    button: "Shop Now",
    path: "./products/shoes.html",
  },
  {
    image:
      "https://htmldemo.net/bagse/bagse/assets/images/sliders/slider1_bag4.jpg",
    title: "Backpacks Product",
    desc: "A man who both spends and saves money is the happiest man, because he has both enjoyments.",
    button: "Shop Now",
    path: "./products/backpacks.html",
  },
];

// Get carousel template
const heroCarouselElement = document.querySelector(".hero-carousel");
const slideTemplate = heroCarouselElement.querySelector(".swiper-wrapper");

// Render template
slideTemplate.innerHTML = Mustache.render(slideTemplate.innerHTML, {
  products,
});

// Initialize Swiper
const heroCarousel = new Swiper(heroCarouselElement, {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
