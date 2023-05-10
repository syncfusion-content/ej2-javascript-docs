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
    }];
var menuOptions = {
        target: '#target',
        items: menuItems
    };

// Initialize ContextMenu component.
var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu')

