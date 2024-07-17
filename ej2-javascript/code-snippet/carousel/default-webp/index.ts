

import { Carousel } from "@syncfusion/ej2-navigations";

const carouselObj: Carousel = new Carousel({
  items: [
    { template: '<figure class="img-container"><img src="https://www.gstatic.com/webp/gallery/1.webp" alt="Majestic Valley View" style="height:100%;width:100%;" /><figcaption class="img-caption">Majestic Valley View</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://www.gstatic.com/webp/gallery/2.webp" alt="Thrilling Rapids Adventure" style="height:100%;width:100%;" /><figcaption class="img-caption">Thrilling Rapids Adventure</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://www.gstatic.com/webp/gallery/3.webp" alt="Snowy Stroll" style="height:100%;width:100%;" /><figcaption class="img-caption">Snowy Stroll</figcaption></figure>' }
  ],
  animationEffect: "Fade",
});
carouselObj.appendTo("#carousel");