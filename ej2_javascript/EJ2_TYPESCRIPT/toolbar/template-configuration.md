---
title: "Template Configuration"
component: "Toolbar"
description: "This section explains how to customize the toolbar items and also popup items based on different needs."
---

# Template Configuration

The Toolbar can be rendered by item based collection and by HTML elements.  To render it based on the given HTML element, use `id` as the `target` property. To render the Toolbar, follow the below structure of the HTML elements:

```html
  <div id='template_toolbar'>   --> Root Toolbar Element
    <div>      --> Toolbar Items Container
       <div>   --> Toolbar Item Element
       </div>
    </div>
  </div>
```

Here, the template ID, `#template_toolbar` is directly appended to the Toolbar.

{% tab template="toolbar/toolbar-template", es5Template="es5_toolbar_template", sourceFiles="index.ts,index.html"  %}

```typescript
import {Toolbar} from '@syncfusion/ej2-navigations';
let toolbar: Toolbar = new Toolbar();
toolbar.appendTo('#template_toolbar');


```

{% endtab %}

## Popup customization

`Popup` is one of the supported responsive modes of the Toolbar. The Toolbar commands, popup mode priority and button text mode customizations are
achieved in the item based rendering through property declaration. For more information on popup mode, refer [here](./responsive-mode/)

The above behavior can also be achieved with template rendering by defining `equivalent class` names instead of property declaration.

Equivalent class names listed below are needed to add the Toolbar items' `div` element.

### Priority

Class              | Description
------------       | -------------
  e-overflow-show  | Commands are always displayed on the `Toolbar with primary` priority.
  e-overflow-hide  | Commands are always displayed in the `popup with secondary` priority.

### Button text mode

  Class         | Description
------------       | -------------
  e-popup-text     | Button text is only  visible in the `Popup`.
  e-toolbar-text   | Button text is only visible on the `Toolbar`.

{% tab template="toolbar/toolbar-template-popup", es5Template="es5_toolbar_template_popup" , sourceFiles="index.ts,index.html" %}

```typescript
import {Toolbar} from '@syncfusion/ej2-navigations';

let toolbar: Toolbar = new Toolbar({ width: 300 , overflowMode: 'Popup'  });
toolbar.appendTo('#template_toolbar');
```

{% endtab %}

## Integrate menu component

You can integrate menu component as toolbar item in Toolbar using [`template`](https://ej2.syncfusion.com/documentation/api/toolbar/item/#template) property. Menu can be populated with items as needed.

{% tab template="toolbar/toolbar-menu-component-added", es5Template="es5_toolbar_menu_component", sourceFiles="index.ts,index.html" %}

```typescript

import { Toolbar,Menu,MenuItemModel } from '@syncfusion/ej2-navigations';

let menuTemplate: string = '<ul id="menu"></ul>';
let data: MenuItemModel[] = [
  {
    text: 'Appliances',
    items: [
      {
        text: 'Kitchen',
        items: [
          { text: 'Electric Cookers' },
          { text: 'Coffee Makers' },
          { text: 'Blenders' },
        ],
      },
      {
        text: 'Washing Machine',
        items: [{ text: 'Fully Automatic' }, { text: 'Semi Automatic' }],
      },
      {
        text: 'Air Conditioners',
        items: [
          { text: 'Inverter ACs' },
          { text: 'Split ACs' },
          { text: 'Window ACs' },
        ],
      },
    ],
  },
  {
    text: 'Accessories',
    items: [
      {
        text: 'Mobile',
        items: [
          { text: 'Headphones' },
          { text: 'Memory Cards' },
          { text: 'Power Banks' },
        ],
      },
      {
        text: 'Computer',
        items: [
          { text: 'Pendrives' },
          { text: 'External Hard Disks' },
          { text: 'Monitors' },
        ],
      },
    ],
  },
  {
    text: 'Fashion',
    items: [
      {
        text: 'Men',
        items: [
          { text: 'Shirts' },
          { text: 'Jackets' },
          { text: 'Track Suits' },
        ],
      },
      {
        text: 'Women',
        items: [{ text: 'Kurtas' }, { text: 'Salwars' }, { text: 'Sarees' }],
      },
    ],
  },
  {
    text: 'Home & Living',
    items: [
      {
        text: 'Furniture',
        items: [
          { text: 'Beds' },
          { text: 'Mattresses' },
          { text: 'Dining Tables' },
        ],
      },
      {
        text: 'Decor',
        items: [
          { text: 'Clocks' },
          { text: 'Wall Decals' },
          { text: 'Paintings' },
        ],
      },
    ],
  },
];

let toolbarObj: Toolbar = new Toolbar({
  items: [
    { text: "Cut" },
    { text: "Copy" },
    { template: menuTemplate },
    { text: "Paste" }
  ],
});
toolbarObj.appendTo('#element');
let menuObj: Menu = new Menu({items: data,},'#menu');

```

{% endtab %}