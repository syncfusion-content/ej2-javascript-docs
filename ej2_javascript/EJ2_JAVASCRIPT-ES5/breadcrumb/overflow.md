---
title: "Breadcrumb Overflow-Mode"
component: "Breadcrumb"
description: "Typescript Breadcrumb supports "
---

# Overflow Mode

In the Breadcrumb component, [`maxItems`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#maxitems) and [`overflowMode`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#maxitems) properties were used to limit the number of breadcrumb items to be displayed.

In the following example, the maxItems is set as 3 with overflowMode as Default. To prevent breadcrumb item navigation, the [`enableNavigation`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#enablenavigation) property has been set to false in the Breadcrumb component.

{% tab template= "breadcrumb/overflow", sourceFiles="app.ts,index.html,styles.css",
 es5Template="overflow-template", isDefaultActive=true %}

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
            text: "Data-Binding",
            url: "./breadcrumb/data-binding"
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
            text: "templates",
            url: "./breadcrumb/templates"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false,
        maxItems: 3,
        separatorTemplate: '<span class="e-icons e-arrow"></span>'
    }, '#breadcrumb');
```

{% endtab %}

The following overflow modes are available in the Breadcrumb component.

* Collapsed
* Menu
* Wrap
* Scroll
* Hidden
* None

## Collapsed

Collapsed mode shows the first and last Breadcrumb items and hides the remaining items with a collapsed icon. When the collapsed icon is clicked, all items become visible and navigable.

{% tab template= "breadcrumb/mode/collapsed", sourceFiles="app.ts,index.html,styles.css",
 es5Template="overflow-collapsed", isDefaultActive=true %}

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
            text: "Data-Binding",
            url: "./breadcrumb/data-binding"
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
            text: "templates",
            url: "./breadcrumb/templates"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false,
        maxItems: 3,
        overflowMode: 'Collapsed'
    }, '#breadcrumb');
```

{% endtab %}

## Menu

Menu mode shows the number of Breadcrumb items that can be accommodated within the container space and creates a submenu with the remaining items.

{% tab template= "breadcrumb/mode/menu", sourceFiles="app.ts,index.html,styles.css",
 es5Template="overflow-menu", isDefaultActive=true %}

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
            text: "Data-Binding",
            url: "./breadcrumb/data-binding"
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
            text: "templates",
            url: "./breadcrumb/templates"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false,
        maxItems: 3,
        overflowMode: 'Menu'
    }, '#breadcrumb');
```

{% endtab %}

## Wrap

Wrap mode wraps the items to multiple lines when the Breadcrumb’s width exceeds the container space.

{% tab template= "breadcrumb/mode/wrap", sourceFiles="app.ts,index.html,styles.css",
 es5Template="overflow-wrap", isDefaultActive=true %}

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
            text: "Data-Binding",
            url: "./breadcrumb/data-binding"
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
            text: "templates",
            url: "./breadcrumb/templates"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false,
        maxItems: 3,
        overflowMode: 'Wrap'
    }, '#breadcrumb');
```

{% endtab %}

## Scroll

Scroll mode shows an HTML scroll bar when the Breadcrumb’s width exceeds the container space.

{% tab template= "breadcrumb/mode/scroll", sourceFiles="app.ts,index.html,styles.css",
 es5Template="overflow-scroll", isDefaultActive=true %}

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
            text: "Data-Binding",
            url: "./breadcrumb/data-binding"
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
            text: "templates",
            url: "./breadcrumb/templates"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false,
        maxItems: 3,
        overflowMode: 'Scroll'
    }, '#breadcrumb');
```

{% endtab %}

## Hidden

Hidden mode shows the maximum number of items possible in the container space and hides the remaining items. Clicking on a previous item will make the hidden item visible.

{% tab template= "breadcrumb/mode/hidden", sourceFiles="app.ts,index.html,styles.css",
 es5Template="overflow-hidden", isDefaultActive=true %}

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
            text: "Data-Binding",
            url: "./breadcrumb/data-binding"
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
            text: "templates",
            url: "./breadcrumb/templates"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false,
        maxItems: 3,
        overflowMode: 'Hidden'
    }, '#breadcrumb');
```

{% endtab %}

## None

None mode shows all the items in a single line.
