ej.base.enableRipple(true);

var menuItems = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];
var menuOptions = {
        target: '#target',
        items: menuItems
    };

// Initialize ContextMenu component.
var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

