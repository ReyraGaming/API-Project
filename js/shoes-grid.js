import Mustache from "mustache";
import { getShoes } from "./products/shoes";

//Template Mustache
const TemplateShoes = `
  {{#data}}
  <div class="swiper-slide font-poppins">
    <img class="w-full h-50" src="{{image}}" alt="{{title}}" />
    <p class="text-center text-sm text-gray-500 py-4">{{ subtitle }}</p>
    <h1 class="text-center text-xl">{{ title }}</h1>
    <p class="text-center text-md">{{ price }}</p>
    <p></p>
  </div>
  {{/data}}
  `;
// Get shoes
getShoes(25).then((items) => {
  const shoesGrid = Mustache.render(TemplateShoes, { data: items });
  document.querySelector("#shoes-items").innerHTML = shoesGrid;
});
