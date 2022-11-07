---
title: "Breadcrumb Data-Binding"
component: "Breadcrumb"
description: "Typescript Breadcrumb supports HTML elements for Breadcrumb items, databinding with local data source, parent child data, array of JSON data, and remote service with query."
---

# Breadcrumb Items

The Breadcrumb supports to generate items based on the current URL by default. You can set the [`items`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#items) property or [`url`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#url) property to generate the items.

## Items based on current Url

The breadcrumb items can be generated based on the current URL of the page when the user does not specify the breadcrumb items using [`items`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#items) property. The following example shows the breadcrumb items generated from the provided URL in the component.

{% tab template= "breadcrumb/navigation", sourceFiles="app.ts,index.html,styles.css",
 es5Template="url-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

new Breadcrumb({
       enableNavigation: false
    }, '#breadcrumb');
```

{% endtab %}

> This sample is hosted in different location, so the Breadcrumb component is rendered with different location instead of the actual location.

## Absolute Url

The breadcrumb items can be generated based on the [`url`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#url) property in the component when the user does not specify the breadcrumb items using [`items`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#items) property. The following example shows the breadcrumb items generated from the provided url in the component.

{% tab template= "breadcrumb/data-binding", sourceFiles="app.ts,index.html,styles.css",
 es5Template="static-url-temp", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

new Breadcrumb({
        enableNavigation: false,
        url: "https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location"
    }, '#breadcrumb');
```

{% endtab %}

## Customize text when generated items using Url

The breadcrumb items text can be customized by using the [`beforeItemRender`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#beforeitemrender) event. In the following example, `bind-to-location` text was changed as `location`.

{% tab template= "breadcrumb/data-binding", sourceFiles="app.ts,index.html,styles.css",
 es5Template="custom-text-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb, BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

new Breadcrumb({
    enableNavigation: false,
    url: "https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location",
    beforeItemRender: (args: BreadcrumbBeforeItemRenderEventArgs) => {
        if (args.item.text === 'bind-to-location') {
            args.item.text = 'location';
        }
    }
}, '#breadcrumb');
```

{% endtab %}