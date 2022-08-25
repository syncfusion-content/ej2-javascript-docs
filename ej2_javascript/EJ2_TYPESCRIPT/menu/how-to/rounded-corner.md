# Menu with rounded corner

The rounded corner can be achieved by using the [`cssClass`](../../api/menu/#cssclass) property. Add a custom class to the menu component and customize it using the `border-radius` CSS property. For more information, refer to the `style.css` file mapped under the source tab.

{% tab template="menu/rounded", sourceFiles="app.ts,index.html,styles.css",
 es5Template="rounded-template", isDefaultActive=true %}

```typescript
import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Menu items definition
let menuItems: MenuItemModel[] = [
    {
        text: 'File',
        items: [
            { text: 'Open' },
            { text: 'Save' },
            { text: 'Exit' }
        ]
    },
    {
        text: 'Edit',
        items: [
            { text: 'Cut' },
            { text: 'Copy' },
            { text: 'Paste' }
        ]
    },
    {
        text: 'View',
        items: [
            { text: 'Toolbar' },
            { text: 'Sidebar' }
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

new Menu({ items: menuItems, cssClass: 'e-rounded-menu' }, '#menu');
```

{% endtab %}
