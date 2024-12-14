ej.base.enableRipple(true);

//ContextMenu items definition 
var menuItems = [
    {
        text: 'View',
        items: [
            {
                text: 'Mobile'
            },
            {
                text: 'Desktop Smaller'
            },
            {
                text: 'Desktop Normal'
            },
            {
                text: 'Desktop Bigger Smaller'
            },
            {
                text: 'Desktop Bigger Normal'
            }
        ]
    },
    {
        text: 'Refresh'
    },
    {
        text: 'Paste'
    },
    {
        separator: true
    },
    {
        text: 'New'
    },
    {
        text: 'Personalize'
    }
];

var menuObj = new ej.navigations.ContextMenu({
    target: '#target',
    items: menuItems,
    enableScrolling: true,
    beforeOpen: (args) => {
        args.element.parentElement.style.height = '150px';
    }
}, '#contextmenu');