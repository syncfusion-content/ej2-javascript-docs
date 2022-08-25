---
title: "Carousel Populating Items"
component: "Carousel"
description: "Typescript Carousel supports HTML elements for Carousel items, data binding with the local data source, and item selections."
---

# Populating Items

In the Carousel, slides can be rendered in two ways as follows,

* Populating items using carousel item
* Populating items using data source

## Populating items using carousel item

When rendering the Carousel component using items binding, you can assign templates for each item separately or assign a common template to each item. You can also customize the slide transition interval for each item separately. The following example code depicts the functionality as item property binding.

{% tab template= "carousel/default", sourceFiles="app.ts,index.html,styles.css", es5Template="default-template" %}

```typescript
import { Carousel } from "@syncfusion/ej2-navigations";

const carouselObj: Carousel = new Carousel({
  items: [
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" /><figcaption class="img-caption">Cardinal</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>' }
  ]
});
carouselObj.appendTo("#carousel");
```

{% endtab %}

## Populating items using data source

When rendering the Carousel component using data binding, you can assign a common template only for all items using the `itemTemplate` property. You cannot set the interval for each item. The following example code depicts the functionality as data binding.

{% tab template= "carousel/default", sourceFiles="app.ts,index.html,styles.css", es5Template="data-source-template" %}

```typescript
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
```

{% endtab %}

## Selection

The Carousel items will be populated from the first index of the Carousel items and can be customized using the following ways,

* Select an item using the property.
* Select an item using the method.

### Select an item using the property

Using the [`selectedIndex`](../api/carousel/#selectedindex) property of the Carousel component, you can set the slide to be populated at the time of initial rendering else you can switch to the particular slide item.

{% tab template= "carousel/default", sourceFiles="app.ts,index.html,styles.css", es5Template="index-template" %}

```typescript
import { Carousel } from "@syncfusion/ej2-navigations";

const carouselObj: Carousel = new Carousel({
  items: [
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" /><figcaption class="img-caption">Cardinal</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>' }
  ],
  selectedIndex: 3,
});
carouselObj.appendTo("#carousel");
```

{% endtab %}

### Select an item using the method

Using the [`prev`](../api/carousel/#prev) or [`next`](../api/carousel/#next) public method of the Carousel component, you can switch the current populating slide to a previous or next slide.

{% tab template= "carousel/method", sourceFiles="app.ts,index.html,styles.css", es5Template="method-template" %}

```typescript
import { Carousel } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";

const carouselObj: Carousel = new Carousel({
  items: [
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" /><figcaption class="img-caption">Cardinal</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>' },
    { template: '<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>' }
  ]
});
carouselObj.appendTo("#carousel");

const prevButton: Button = new Button({ cssClass: "e-info" });
prevButton.appendTo("#prev");
prevButton.element.onclick = (): void => {
  carouselObj.prev();
};

const nextButton: Button = new Button({ cssClass: "e-info" });
nextButton.appendTo("#next");
nextButton.element.onclick = (): void => {
  carouselObj.next();
};
```

{% endtab %}
