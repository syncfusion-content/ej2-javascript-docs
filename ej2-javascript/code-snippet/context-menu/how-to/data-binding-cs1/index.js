ej.base.enableRipple(true);

var data = [
    { id: 1, parentId: null, text: 'View' },
    { id: 2, parentId: null, text: 'Sort by' },
    { id: 3, parentId: null, text: '' },
    { id: 4, parentId: null, text: 'New' },
    { id: 5, parentId: null, text: '' },
    { id: 6, parentId: null, text: 'Display Settings' },
    { id: 7, parentId: null, text: 'Personalize' },
    //first level child
    { id: 8, parentId: 1, text: 'Large Icons' },
    { id: 9, parentId: 1, text: 'Medium Icons' },
    { id: 10, parentId: 1, text: 'Small Icons' },
    { id: 11, parentId: 2, text: 'Name' },
    { id: 12, parentId: 2, text: 'Size' },
    { id: 13, parentId: 4, text: 'Folder' },
    { id: 14, parentId: 4, text: 'Shortcut' },
    { id: 15, parentId: 4, text: '' },
    { id: 16, parentId: 4, text: 'Contact' }
];

var record;
var menuItems = [];
for (var i = 0; i < data.length; i++) {
    record = data[i];
    if (record.parentId) {
        if (!menuItems[record.parentId - 1].items) {
            menuItems[record.parentId - 1].items = []
        }
        menuItems[record.parentId - 1].items.push({ text: record.text });
    } else {
        menuItems.push({ text: record.text });
    }
}

var menuOptions = {
    target: '#target',
    items: menuItems,
    beforeItemRender: (args) => {
        if (!args.item.text) {
            args.element.classList.add('e-separator');
        }
    }
};
var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

