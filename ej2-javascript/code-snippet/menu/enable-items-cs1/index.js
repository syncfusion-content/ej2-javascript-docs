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
            if (disableItems.indexOf(args.items[i].text) > -1) {
                menuObj.enableItems([args.items[i].text], false, false);
            }
        }
    }
}, '#menu');

var disableItems = ['Conferences', 'Music', 'Directory'];

//Disable items
menuObj.enableItems(disableItems, false, false);

var buttonObj = new ej.buttons.Button(null, '#enableAll');

buttonObj.element.onclick = function () {
    menuObj.enableItems(disableItems, true, false);
    disableItems = [];
}

