ej.base.enableRipple(true);

var menuItems = [
    {
        text: 'Cut',
        iconCss: 'e-db-icons e-cut'
    },
    {
        text: 'Copy',
        iconCss: 'e-icons e-copy'
    },
    {
        text: 'Paste',
        iconCss: 'e-db-icons e-paste',
        items: [
            {
                text: 'Paste Text',
                iconCss: 'e-cm-icons e-pastetext'
            },
            {
                text: 'Paste Special',
                iconCss: 'e-cm-icons e-pastespecial'
            } ]
    }];
var menuOptions = {
        items: menuItems,
        target: '#target'
    };

var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');
menuObj.open(40, 20);

