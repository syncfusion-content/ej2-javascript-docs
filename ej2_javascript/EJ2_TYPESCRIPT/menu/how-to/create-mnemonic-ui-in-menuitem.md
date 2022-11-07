# Create mnemonic UI in menu item

A particular character in a text can be underlined in the [`beforeItemRender`](../../api/menu#beforeitemrender) event by
adding `<u>` tag in between the text and assign the innerHTML to the `li` element.

In the following example, the first character in `File`, `Open`, and `Save` menu items are underlined.

{% tab template="menu/item-icons", sourceFiles="app.ts,index.html,styles.css",
 es5Template="underline-template", isDefaultActive=true %}

```typescript
import { Menu, MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-navigations';
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
    { text: 'Format' },
    { text: 'View' },
    { text: 'Bookmarks' },
    { text: 'Tools' },
    { separator: true },
    { text: 'Help' }
];

// Initialize Menu component.
let menuObj: Menu = new Menu({
    items: menuItems,
    beforeItemRender: (args: MenuEventArgs) => {
        if (['File', 'Open', 'Save'].indexOf(args.item.text) > -1) {
            // To underline a First character.
            let underlinedText: string = '<u>' + args.item.text.slice(0, 1) + '</u>' + args.item.text.slice(1);
            args.element.innerHTML = args.element.innerHTML.replace(args.item.text, underlinedText);
        }
    }
}, '#menu');
```

{% endtab %}
