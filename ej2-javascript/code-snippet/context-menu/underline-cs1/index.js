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
        items: menuItems,
        beforeItemRender: function(args) {
            if (args.item.text === 'Copy') {
                args.element.innerHTML = '<u>C</u>opy';
            }
        }
};
// Initialize ContextMenu component.
var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

