---
title: "Breadcrumb Icons"
component: "Breadcrumb"
description: "TypeScript Breadcrumb allows the end user to place the icons on breadcrumb items and navigate to other webpages while clicking the Breadcrumb items."
---

# Icons in Breadcrumb

The Breadcrumb component contains an icon/image to provide a visual representation of an item.

## Icon in Breadcrumb item

To load the icon/image on the breadcrumb item, set the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

### Breadcrumb with Font Icon

To place the font icon on the breadcrumb item, set the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the item.

{% tab template= "breadcrumb/loading-icon", sourceFiles="app.ts,index.html,styles.css",
 es5Template="icon-temp", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
    {
        iconCss: 'e-icons e-home',
        url: "https://ej2.syncfusion.com/demos",
    },
    {
        text: "Components",
        url: "https://ej2.syncfusion.com/demos/#/material/grid/grid-overview",
    },
    {
        text: "Navigations",
        url: "https://ej2.syncfusion.com/demos/#/material/breadcrumb/default",
    },
    {
        text: "Breadcrumb",
        url: "./breadcrumb/default",
    }
    ];

new Breadcrumb({
    items: items,
    enableNavigation: false
}, '#breadcrumb');
```

{% endtab %}

### Breadcrumb with Image

In the Breadcrumb component, images can be added for the items using the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, an image was added to the breadcrumb item by using the iconCss class `e-image-home` and specifying height and width for the css class.

{% tab template= "breadcrumb/loading-icon", sourceFiles="app.ts,index.html,styles.css",
 es5Template="image-temp", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
    {
        iconCss: 'e-image-home',
        url: "https://ej2.syncfusion.com/demos",
    },
    {
        text: "Components",
        url: "https://ej2.syncfusion.com/demos/#/material/grid/grid-overview",
    },
    {
        text: "Navigations",
        url: "https://ej2.syncfusion.com/demos/#/material/breadcrumb/default",
    },
    {
        text: "Breadcrumb",
        url: "./breadcrumb/default",
    }
    ];

new Breadcrumb({
    items: items,
    enableNavigation: false
}, '#breadcrumb');
```

{% endtab %}

### Breadcrumb with SVG Image

In the Breadcrumb component, SVG image can be added for the items using the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, SVG image was added to the breadcrumb item by using the iconCss class `e-svg-home` and specifying height and width for the css class.

{% tab template= "breadcrumb/loading-icon", sourceFiles="app.ts,index.html,styles.css",
 es5Template="svg-temp", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
    {
        iconCss: 'e-svg-home',
        url: "https://ej2.syncfusion.com/demos",
    },
    {
        text: "Components",
        url: "https://ej2.syncfusion.com/demos/#/material/grid/grid-overview",
    },
    {
        text: "Navigations",
        url: "https://ej2.syncfusion.com/demos/#/material/breadcrumb/default",
    },
    {
        text: "Breadcrumb",
        url: "./breadcrumb/default",
    }
    ];

new Breadcrumb({
    items: items,
    enableNavigation: false
}, '#breadcrumb');
```

{% endtab %}

## Icon Position

By default, the icon is positioned to the left side of the item in the Breadcrumb component. If you need to add the icon to right of the breadcrumb item, add the `e-icon-right` class to the required item. In the following example, the `e-icon-right` class was added to the breadcrumb items using the [`beforeItemRender`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#beforeitemrender) event. You can also add the `e-icon-right` class to the [`cssClass`](https://ej2.syncfusion.com/javascript/documentation/api/breadcrumb/#cssclass) property of the breadcrumb component to position the icons to the right of all breadcrumb items.

{% tab template= "breadcrumb/icon-position", sourceFiles="app.ts,index.html,styles.css",
 es5Template="icon-position-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb, BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
        {
            text: "Program Files",
            iconCss: "e-icons e-folder"
        },
        {
            text: "Services",
            iconCss: "e-icons e-folder"
        },
        {
            text: "Config.json",
            iconCss: "e-icons e-file"
        }
    ];

new Breadcrumb({
    items: items,
    enableNavigation: false
}, '#breadcrumb');

new Breadcrumb({
    items: items,
    enableNavigation: false,
    beforeItemRender: (args: BreadcrumbBeforeItemRenderEventArgs) => {
        if (args.item.text !== '') {
            args.element.classList.add('e-icon-right');
        }
    }
}, '#breadcrumb2');
```

{% endtab %}

## Icon Only

To display only icons for the items, add icons using the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, breadcrumb items were demonstrated with only icons by providing the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

{% tab template= "breadcrumb/icons", sourceFiles="app.ts,index.html,styles.css",
 es5Template="icons-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
    {
        iconCss: 'e-icons e-home'
    },
    {
        iconCss: "e-icons e-folder"
    },
    {
        iconCss: "e-icons e-file"
    }
];

new Breadcrumb({
    items: items,
    enableNavigation: false
}, '#breadcrumb');
```

{% endtab %}

## Show icon only for first item

To show icon only for the first item in the Breadcrumb component, add icons to the first item using the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, the icon was provided only for the first item by setting the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

{% tab template= "breadcrumb/loading-icon", sourceFiles="app.ts,index.html,styles.css",
 es5Template="show-icon-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
    {
        iconCss: 'e-icons e-home',
        url: "https://ej2.syncfusion.com/demos",
    },
    {
        text: "Components",
        url: "https://ej2.syncfusion.com/demos/#/material/grid/grid-overview",
    },
    {
        text: "Navigations",
        url: "https://ej2.syncfusion.com/demos/#/material/breadcrumb/default",
    },
    {
        text: "Breadcrumb",
        url: "./breadcrumb/default",
    }
];

new Breadcrumb({
    items: items,
    enableNavigation: false
}, '#breadcrumb');
```

{% endtab %}