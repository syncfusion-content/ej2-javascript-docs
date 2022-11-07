---
title: "Breadcrumb Templates"
component: "Breadcrumb"
description: "Typescript Breadcrumb section explain how to customize the item template and separator template to the breadcrumb items."
---

# Templates

The Breadcrumb component provides a way to customize the items using [`itemTemplate`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#itemtemplate) and the separators using [`separatorTemplate`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#separatortemplate) properties.

## Item Template

In the following example, Shopping Cart details are used as breadcrumb Items and the each items is rendered as chips component using [`itemTemplate`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#itemtemplate).

{% tab template= "breadcrumb/templates", sourceFiles="app.ts,index.html,styles.css",
  es5Template="item-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

const items: BreadcrumbItemModel[] = [
    {
        text: 'Cart'
    },
    {
        text: 'Billing'
    },
    {
        text: 'Shipping'
    },
    {
        text: 'Payment'
    }
];

new Breadcrumb({
    items: items,
    enableNavigation: false,
    itemTemplate: '<div id="chip-default" class="e-lib e-chip-list e-control e-chip-set" role="listbox" aria-multiselectable="false"><div class="e-chip e-primary" tabindex="0" role="option" aria-label="Apple" aria-selected="false"><span class="e-chip-text">${text}</span></div></div>'
}, '#breadcrumb');
```

{% endtab %}

## Separator Template

In the following example, the separators are customized with icons using [`separatorTemplate`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#separatortemplate). While rendering the separator template, you can get the previous and next item using `previousItem` and `nextItem` variables, respectively.

{% tab template= "breadcrumb/templates", sourceFiles="app.ts,index.html,styles.css",
  es5Template="separator-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

const items: BreadcrumbItemModel[] = [
    {
        text: 'Cart'
    },
    {
        text: 'Billing'
    },
    {
        text: 'Shipping'
    },
    {
        text: 'Payment'
    }
];

new Breadcrumb({
    items: items,
    enableNavigation: false,
    separatorTemplate: '<span class="e-icons e-bullet-arrow"></span>'
}, '#breadcrumb');
```

{% endtab %}

## Customize Specific Item Template

The specific breadcrumb item can be customizable using itemTemplate with conditional rendering. In the following example, added the span element only for the `breadcrumb` text in breadcrumb item.

{% tab template= "breadcrumb/templates", sourceFiles="app.ts,index.html,styles.css",
  es5Template="specific-item-template", isDefaultActive=true %}

```typescript
import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);


var specificTemplateItems = [
{
    text: "Home",
    url: "https://ej2.syncfusion.com/demos",
},
{
    text: "Components",
    url: "https://ej2.syncfusion.com/demos/#/material/grid/grid-overview",
},
{
    text: "Navigations",
    url: "https://ej2.syncfusion.com/demos/#/material/menu/default",
},
{
    text: "Breadcrumb",
    url: "./breadcrumb/default",
}
];

new Breadcrumb({
    items: specificTemplateItems,
    itemTemplate: '<div>${if(text=="Breadcrumb")}<span class="e-searchfor-text"><span style="margin-right: 5px">Search for:</span><a class="e-breadcrumb-text" href="${url}" onclick="return false">${text}</a></span>${else}<a class="e-breadcrumb-text" href="${url}" onclick="return false">${text}</a>${/if}</div>',
    cssClass: 'e-specific-item-template'
}, '#breadcrumb');
```

{% endtab %}
