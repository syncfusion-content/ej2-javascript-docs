---
title: "Menu with Images, URL, and Multi level items"
component: "Menu"
description: "Typescript Menu supports submenu, images, and url navigations in menu items"
---

# Icons and Sub menu items

## Icons

The menu item contains an icon/image in it to provide a visual representation of an action. To place the icon on a menu item, set the [`iconCss`](../api/menu/menuItemModel#iconcss) property with the required icon CSS. By default, the icon is positioned at the left of the menu item. In the following sample, the icons of `File` and `Edit` menu items and `Open`, `Save`, `Cut`, `Copy`,and `Paste` sub menu items are added using the `iconCss` property.

{% tab template="menu/item-icons", sourceFiles="app.ts,index.html,styles.css",
 es5Template="icons-template", isDefaultActive=true %}

```typescript
import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Menu items definition
let menuItems: MenuItemModel[] = [
    {
        text: 'File',
        iconCss: 'em-icons e-file',
        items: [
            { text: 'Open', iconCss: 'em-icons e-open' },
            { text: 'Save', iconCss: 'e-icons e-save' },
            { separator: true },
            { text: 'Exit' }
        ]
    },
    {
        text: 'Edit',
        iconCss: 'em-icons e-edit',
        items: [
            { text: 'Cut', iconCss: 'em-icons e-cut' },
            { text: 'Copy', iconCss: 'em-icons e-copy' },
            { text: 'Paste', iconCss: 'em-icons e-paste' }
        ]
    },
    {
        text: 'View',
        items: [
            { text: 'Toolbar' },
            { text: 'Sidebar' },
            { text: 'Full Screen' }
        ]
    },
    {
        text: 'Tools',
        items: [
            { text: 'Spelling & Grammar' },
            { text: 'Customize' },
            { text: 'Options' }
        ]
    },
    { text: 'Go' },
    { text: 'Help' }
];

// Initialize Menu component.
let menuObj: Menu = new Menu({ items: menuItems }, '#menu');
```

{% endtab %}

## Navigation

Navigation in Menu is used to navigate to the other web page when a menu item is clicked. It can be achieved by providing a link to the menu item using the [`url`](../../api/menu/menuItemModel/#url) property. In the following sample, the Navigation URL is added to sub menu items using the [`url`] property.

{% tab template= "menu/getting-started", sourceFiles="app.ts,index.html,styles.css",
es5Template="basic-template", isDefaultActive=true %}

```typescript
import { Menu, MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Menu items definition
let menuItems: MenuItemModel[] = [
    {
        text: 'Appliances',
        items: [
            { text: 'Washing Machine', url: 'https://www.google.com/search?q=washing+machine' },
            { text: 'Air Conditioners', url: 'https://www.google.com/search?q=air+conditioners' }
        ]
    },
    {
        text: 'Mobile',
        items: [
            { text: 'Headphones', url: 'https://www.google.com/search?q=headphones' },
            { text: 'Memory Cards', url: 'https://www.google.com/search?q=memory+cards' },
            { text: 'Power Banks', url: 'https://www.google.com/search?q=power+banks' }
        ]
    },
    {
        text: 'Entertainment',
        items: [
            { text: 'Televisions', url: 'https://www.google.com/search?q=televisions' },
            { text: 'Home Theatres', url: 'https://www.google.com/search?q=home+theatres' },
            { text: 'Gaming Laptops', url: 'https://www.google.com/search?q=gaming+laptops' }
        ]
    },
    { text: 'Fashion', url: 'https://www.google.com/search?q=fashion' },
    { text: 'Offers', url: 'https://www.google.com/search?q=offers' }
];

//Initialize Menu component.
let menuObj: Menu = new Menu({
    items: menuItems,
    // To open url in blank page.
    beforeItemRender: (args: MenuEventArgs) => {
        if (args.item.url) {
            args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
        }
    }
}, '#menu');
```

{% endtab %}

## Multilevel nesting

The Menu supports multiple level nesting, and it can be achieved by mapping the [`items`](../api/menu/menuItemModel#items) property inside the parent [`menuItems`](../api/menu#items). In the following sample, three-level nesting of menu has been provided.

{% tab template= "menu/getting-started", sourceFiles="app.ts,index.html,styles.css",
es5Template="nesting-template", isDefaultActive=true %}

```typescript
import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Menu items definition
let menuItems: MenuItemModel[] = [
    {
        text: 'Fashion',
        items: [
            {
                text: 'Men Fashion',
                items: [
                    {
                        text: 'Personal Care',
                        items: [
                            { text: 'Trimmers' },
                            { text:  'Shavers' }
                        ]
                    },
                    {
                        text: 'Clothing',
                        items: [
                            { text: 'Shirts' },
                            { text: 'Jackets' },
                            { text: 'Track Suits' }
                        ]
                    },
                    { text: 'Footwear' }
                ]
            },
            {
                text: 'Women Fashion',
                items: [
                    {
                        text: 'Clothing',
                        items: [
                            { text: 'Kurtas' },
                            { text: 'Salwars' },
                            { text: 'Sarees' }
                        ]
                    },
                    {
                        text: 'Jewellery',
                        items: [
                            { text: 'Nosepins' },
                            { text:  'Anklets' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: 'Home & Living',
        items: [
            {
                text: 'Washing Machine',
                items: [
                    { text: 'Fully Automatic' },
                    { text: 'Semi Automatic' }
                ]
            },
            {
                text: 'Air Conditioners',
                items: [
                    { text: 'Inverter ACs' },
                    { text: 'Split ACs' }
                ]
            }
        ]
    },
    { text: 'Accessories' },
    { text: 'Sports' },
    { text: 'Gaming' }
];

//Initialize Menu component.
let menuObj: Menu = new Menu({ items: menuItems }, '#menu');
```

{% endtab %}

> You can achieve multi level nesting with data source by mapping `name` of the child items to the [`children`](../api/menu/fieldSettingsModel#children) sub-property of [`fields`](../api/menu/fieldSettingsModel) property. Also, we can specify [`id`](../../api/menu/menuItemModel/#id) property for menu items. For more information, refer to the [`data source binding`](./data-source-binding-and-custom-menu-items#data-binding) section. To open sub menu items only on item click, [`showItemOnClick`](../../api/menu#showitemonclick) should be set as `true`.

The below table represents the MenuItem properties and it's description.

Property Name | Type | Description
-----|----- | -----
|iconCss|string|Defines class/multiple classes separated by a space for the menu Item that is used to include an icon. Menu Item can include font icon and sprite image.
|id|string|Specifies the id for menu item.
|separator|boolean|Specifies separator between the menu items. Separator are either horizontal or vertical lines used to group menu items.
|items|MenuItemModel[]|Specifies the sub menu items that is the array of MenuItem model/
|text|string|Specifies text for menu item.
|url|string|Specifies url for menu item that creates the anchor link to navigate to the url provided.

## See Also

* [Customize menu items](./how-to/customize-menu-items)
* [Group menu items with separator](./getting-started#group-menu-items-with-separator)