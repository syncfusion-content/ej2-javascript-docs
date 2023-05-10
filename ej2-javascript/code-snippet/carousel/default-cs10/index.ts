

import { Carousel } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";

const carouselObj: Carousel = new Carousel({
  items: [
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" /><figcaption class="img-caption">Cardinal</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>' }
  ],
  previousButtonTemplate: '<button id="previous"></button>',
  nextButtonTemplate: '<button id="next"></button>',
});
carouselObj.appendTo("#carousel");

const prevBtn: Button = new Button({
  cssClass: "e-flat e-round",
  iconCss: "e-icons e-chevron-left-double",
});
prevBtn.appendTo("#previous");

const nextBtn: Button = new Button({
  cssClass: "e-flat e-round",
  iconCss: "e-icons e-chevron-right-double",
});
nextBtn.appendTo("#next");


