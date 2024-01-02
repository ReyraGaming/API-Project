
import Mustache from "mustache";
import { getBagpacks } from "./products/bagpacks";

//Template Mustache
const TemplateBackpack = `
  {{#data}}
  <div class="font-poppins">
    <img class="w-full h-50" src="{{image}}" alt="{{title}}" />
    <p class="text-center text-sm text-gray-500 py-4">{{ subtitle }}</p>
    <h1 class="text-center text-xl">{{ title }}</h1>
    <p class="text-center text-md">{{ price }}</p>
    <p></p>
  </div>
  {{/data}}
  `;
// Get shoes
getBagpacks(25).then((items) => {
  const bagsGrid = Mustache.render(TemplateBackpack, { data: items });
  document.querySelector("#bags-items").innerHTML = bagsGrid;
});