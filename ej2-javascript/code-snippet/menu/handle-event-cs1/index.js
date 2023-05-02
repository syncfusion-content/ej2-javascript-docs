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
        updateEventLog(args);
    },
    beforeClose: function (args) {
        updateEventLog(args);
    },
    onClose: function (args) {
        updateEventLog(args);
    },
    onOpen: function (args) {
        updateEventLog(args);
    },
    select: function (args) {
        updateEventLog(args);
    },
    beforeItemRender: function (args) {
        updateEventLog(args);
    }
}, '#menu');

var clear = new ej.buttons.Button({ cssClass: 'e-small'}, '#clear');

clear.element.onclick = function () {
    var propertyElem = document.getElementById('propertyTable');
    propertyElem.getElementsByTagName('td')[0].innerHTML = '';
}

function updateEventLog (args) {
    var propertyElem = document.getElementById('propertyTable');
    propertyElem.getElementsByTagName('td')[0].insertAdjacentHTML('beforeend', args.name + ' Event triggered. <br />');
}

