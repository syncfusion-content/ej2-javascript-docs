

import { Carousel } from "@syncfusion/ej2-navigations";

(window as TemplateFunction).getContent = (index: number) => {
  const slides: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];
  return slides[index];
};
interface TemplateFunction extends Window {
  getContent?: Function;
}

const carouselObj: Carousel = new Carousel({
  items: [
    { template: '<div class="slide-content">Slide 1</div>' },
    { template: '<div class="slide-content">Slide 2</div>' },
    { template: '<div class="slide-content">Slide 3</div>' },
    { template: '<div class="slide-content">Slide 4</div>' },
    { template: '<div class="slide-content">Slide 5</div>' },
  ],
  indicatorsTemplate: "#indicatorTemplate",
});
carouselObj.appendTo("#carousel");


