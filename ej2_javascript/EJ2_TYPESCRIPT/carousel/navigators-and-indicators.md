---
title: "Carousel Navigations and Indicators"
component: "Carousel"
description: "Typescript Carousel support to customize the navigator and indicator of the Carousel component."
---

# Navigators and Indicators

The navigators and indicators are used to transition the slides manually.

## Navigators

### Show or hide previous and next button

In navigators, the previous and next slide transition buttons are used to perform slide transitions manually. You can show/hide the navigators using the [`buttonsVisibility`](../api/carousel/#buttonsvisibility) property. The possible property values are as follows:

* `Hidden` – the navigator’s buttons are not visible.
* `Visible` – the navigator’s buttons are visible.
* `VisibleOnHover` – the navigator’s buttons are visible only when hovering over the carousel.

The following example depicts the code to show/hide the navigators in the carousel.

{% tab template= "carousel/default", sourceFiles="app.ts,index.html,styles.css",
 es5Template="button-visibility-template" %}

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
  buttonsVisibility: "Visible",
});
carouselObj.appendTo("#carousel");
```

{% endtab %}

### Show previous and next button on hover

In the carousel, you can show the previous and next buttons only on mouse hover using the [`buttonsVisibility`](../api/carousel/#buttonsvisibility) property. The following example depicts the code to show the navigators on mouse hover in the carousel.

{% tab template= "carousel/default", sourceFiles="app.ts,index.html,styles.css", es5Template="hover-template" %}

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
  buttonsVisibility: "VisibleOnHover",
});
carouselObj.appendTo("#carousel");
```

{% endtab %}

### Previous and next button template

Template options are provided to customize the previous button using [`previousButtonTemplate`](../api/carousel/#previousbuttontemplate) and the next button using [`nextButtonTemplate`](../api/carousel/#nextbuttontemplate). The following example depicts the code for applying the template to previous and next buttons in the carousel.

{% tab template= "carousel/default", sourceFiles="app.ts,index.html,styles.css", es5Template="navigator-template" %}

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
```

{% endtab %}

## Indicators

### Show or hide indicators

In indicators, the total slides and current slide state have been depicted. You can show/hide the indicators using the [`showIndicators`](../api/carousel/#showindicators) property. The following example depicts the code to show/hide the indicators in the carousel.

{% tab template= "carousel/default", sourceFiles="app.ts,index.html,styles.css", es5Template="indicator-template" %}

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
  showIndicators: true,
});
carouselObj.appendTo("#carousel");
```

{% endtab %}

### Indicators Template

Template option is provided to customize the indicators by using the [`indicatorTemplate`](../api/carousel/#indicatorstemplate) property. The following example depicts the code for applying a template to indicators in the carousel.

{% tab template= "carousel/indicator", sourceFiles="app.ts,index.html,styles.css", es5Template="indicator-template" %}

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
  indicatorsTemplate: "#indicatorTemplate",
});
carouselObj.appendTo("#carousel");
```

{% endtab %}

### Showing preview of slide in indicator

You can customize the indicators by showing the preview image of each slide using the [`indicatorTemplate`](../api/carousel/#indicatorstemplate) property. The following example depicts the code for showing the preview image using a template for indicators in the carousel.

{% tab template= "carousel/indicator-preview", sourceFiles="app.ts,index.html,styles.css", es5Template="indicator-template" %}

```typescript
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
```

{% endtab %}

## Play button

### Show or hide the play button

In the carousel, [`autoPlay`](../api/carousel/#autoplay) actions have been controlled by using the [`showPlayButton`](../api/carousel/#showplaybutton) property in the user interface. When you enable this property, the slide transitions are controlled using this play and pause button. The following example depicts the code to show the play button in the carousel.

{% tab template= "carousel/default", sourceFiles="app.ts,index.html,styles.css", es5Template="play-template" %}

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
  showPlayButton: true,
});
carouselObj.appendTo("#carousel");
```

{% endtab %}

### Play button template

Template option is provided to customize the play button by using the [`playButtonTemplate`](../api/carousel/#playbuttontemplate) property. The following example depicts the code for applying a template to play button in the carousel.

{% tab template= "carousel/play-button", sourceFiles="app.ts,index.html,styles.css", es5Template="play-button-template" %}

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
  ],
  showPlayButton: true,
  playButtonTemplate: '<div id="play"></div>',
});
carouselObj.appendTo("#carousel");

const button: Button = new Button({ cssClass: "e-info", content: "Pause" });
button.appendTo("#play");
button.element.onclick = (): void => {
  if (carouselObj.autoPlay) {
    button.content = "Play";
    carouselObj.autoPlay = false;
  } else {
    button.content = "Pause";
    carouselObj.autoPlay = true;
  }
};
```

{% endtab %}
