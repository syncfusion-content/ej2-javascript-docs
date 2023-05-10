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
    },
    {
        text: 'Add'
    },
    {
        text: 'Edit'
    },
    {
        text: 'Delete'
    }];

var menuOptions = {
    target: '#target .e-div',
    items: menuItems,
    beforeOpen: beforeOpen
};

// Initialize ContextMenu component.
var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

function beforeOpen (args) {
    if (args.event.target.id === 'right') {
        menuObj.hideItems(['Cut', 'Copy', 'Paste']);
        menuObj.showItems(['Add', 'Edit', 'Delete']);
    } else if (args.event.target.id === 'left') {
        menuObj.showItems(['Cut', 'Copy', 'Paste']);
        menuObj.hideItems(['Add','Edit','Delete']);
    }
}

