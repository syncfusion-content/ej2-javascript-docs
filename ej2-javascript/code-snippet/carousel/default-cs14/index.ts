

import { Carousel } from "@syncfusion/ej2-navigations";

(window as TemplateFunction).getImage = (bird: string) => {
  return `https://ej2.syncfusion.com/products/images/carousel/${bird}.png`;
};
interface TemplateFunction extends Window {
  getImage?: Function;
}

const productItems: Record<string, string | number>[] = [
  { ID: 1, Name: "Cardinal", imageName: 'cardinal' },
  { ID: 2, Name: "Kingfisher", imageName: 'hunei' },
  { ID: 3, Name: "Keel-billed-toucan", imageName: 'costa-rica' },
  { ID: 4, Name: "Yellow-warbler", imageName: 'kaohsiung' },
  { ID: 5, Name: "Bee-eater", imageName: 'bee-eater' }
];

const carouselObj: Carousel = new Carousel({
  dataSource: productItems,
  itemTemplate: '<figure class="img-container"><img src="${getImage(data.imageName)}" alt="${Name}" style="height:100%;width:100%;" /><figcaption class="img-caption">${Name}</figcaption></figure>'
});
carouselObj.appendTo("#carousel");


