ej.base.enableRipple(true);

//Menu items definition
var menuItems = [
    {
        text: 'Events',
        items: [
            { text: 'Conferences' },
            { text: 'Music' },
            { text: 'Workshops' }
        ]
    },
    {
        text: 'Movies',
        items: [
            { text: 'Now Showing' },
            { text: 'Coming Soon' }
        ]
    },
    {
        text: 'Directory',
        items: [
            { text: 'Media Gallery' },
            { text: 'Newsletters' }
        ]
    },
    {
        text: 'Queries',
        items: [
            { text: 'Our Policy' },
            { text: 'Site Map' }
        ]
    },
    { text: 'Services' }
];

// Initialize Menu component.
var menuObj = new ej.navigations.Menu({
    items: menuItems,
    beforeOpen: function (args) {
        //Handling sub menu items
        for (var i = 0; i  < args.items.length; i++) {
            if (hiddenItems.indexOf(args.items[i].text) > -1) {
                menuObj.hideItems([args.items[i].text], false);
            }
        }
    }
}, '#menu');

var hiddenItems = ['Workshops', 'Music', 'Movies'];

//Hide items
menuObj.hideItems(hiddenItems, false);

var buttonObj = new ej.buttons.Button(null, '#showAll');

buttonObj.element.onclick = function () {
    menuObj.showItems(hiddenItems, false);
    hiddenItems = [];
}

