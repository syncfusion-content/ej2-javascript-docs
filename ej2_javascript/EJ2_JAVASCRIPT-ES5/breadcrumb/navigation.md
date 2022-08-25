---
title: "Breadcrumb Navigation"
component: "Breadcrumb"
description: "Typescript Breadcrumb supports the navigate to other webpages while clicking the Breadcrumb items."
---

# Navigation

Breadcrumb navigations support you to provide relative or absolute URL for breadcrumb items, enable navigation for the last item of the Breadcrumb component, and open URL in a new tab or new page.

## URL

In the Breadcrumb component, the item represents the URL. The breadcrumb items can be provided with either relative or absolute URL.

### Relative URL

The [`url`](https://ej2.syncfusion.com/javascript/documentation/api/breadcrumb/breadcrumbItem/#url) property of the items contains a portion of the full path which is based on its relation to the current path where it is linked. In the following example, the items represent only the relative URL path.

{% tab template= "breadcrumb/navigation", sourceFiles="app.ts,index.html,styles.css",
 es5Template="relative-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
        {
            text: "Home",
            url: "../"
        },
        {
            text: "Getting",
            url: "./breadcrumb/getting-started"
        },
        {
            text: "Icons",
            url: "./breadcrumb/icons"
        },
        {
            text: "Navigation",
            url: "./breadcrumb/navigation"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false
    }, '#breadcrumb');
```

{% endtab %}

### Absolute URL

The [`url`](https://ej2.syncfusion.com/javascript/documentation/api/breadcrumb/breadcrumbItem/#url) property of the items contains the full path or entire address of the page. In the following example, the items represent absolute URL.

{% tab template= "breadcrumb/navigation", sourceFiles="app.ts,index.html,styles.css",
 es5Template="absolute-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
        {
            text: "Home",
            url: "https://ej2.syncfusion.com/documentation/introduction/"
        },
        {
            text: "Getting",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/getting-started"
        },
        {
            text: "Icons",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/icons"
        },
        {
            text: "Navigation",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/navigation"
        },
        {
            text: "Overflow",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false
    }, '#breadcrumb');
```

{% endtab %}

## Enable navigation for last Breadcrumb item

Breadcrumb enables the navigation for the last item by setting the [`enableActiveItemNavigation`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#enableactiveitemnavigation) property to true. In the following example, the last item of the `Breadcrumb` was enabled.

{% tab template= "breadcrumb/navigation", sourceFiles="app.ts,index.html,styles.css",
 es5Template="enable-nav-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
        {
            text: "Home",
            url: "https://ej2.syncfusion.com/documentation/introduction/"
        },
        {
            text: "Getting",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/getting-started"
        },
        {
            text: "Icons",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/icons"
        },
        {
            text: "Navigation",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/navigation"
        },
        {
            text: "Overflow",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false,
        enableActiveItemNavigation: true
    }, '#breadcrumb');
```

{% endtab %}

## Open URL in new page or tab

To open the url provided in the items in a new page or tab, set the target property of the anchor element for the required item to "_blank" in the [`beforeItemRender`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#beforeitemrender) event of Breadcrumb component. In the following example, the target property of anchor element for the item was set to "_blank" by using the [`beforeItemRender`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#beforeitemrender) event which locates to the path in the new tab.

{% tab template= "breadcrumb/navigation", sourceFiles="app.ts,index.html,styles.css",
 es5Template="open-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb, BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
        {
            text: "Home",
            url: "https://ej2.syncfusion.com/documentation/introduction/"
        },
        {
            text: "Getting",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/getting-started"
        },
        {
            text: "Icons",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/icons"
        },
        {
            text: "Navigation",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/navigation"
        },
        {
            text: "Overflow",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        beforeItemRender: (args: BreadcrumbBeforeItemRenderEventArgs) => {
            if (args.element.children[0]) {
                args.element.children[0].target = "_blank";
            }
        }
}, '#breadcrumb');
```

{% endtab %}