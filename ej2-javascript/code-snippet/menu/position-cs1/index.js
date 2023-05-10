ej.base.enableRipple(true);

// Menu items definition
var menuItems = [
    {
        text: 'File',
        items: [
            { text: 'Open' },
            { text: 'Save' },
            { text: 'Exit' }
        ]
    },
    {
        text: 'Edit',
        items: [
            { text: 'Cut' },
            { text: 'Copy' },
            { text: 'Paste' }
        ]
    },
    {
        text: 'View',
        items: [
            { text: 'Toolbar' },
            { text: 'Sidebar' }
        ]
    },
    {
        text: 'Tools',
        items: [
            { text: 'Spelling & Grammar' },
            { text: 'Customize' },
            { text: 'Options' }
        ]
    },
    { text: 'Go' },
    { text: 'Help' }
];

// Menu model definitions
var menuOptions = {
    items: menuItems,
    beforeOpen: function(args) {
        // Getting parent menu item element offset
        var relativeOffset = ej.base.closest(args.event.target, '.e-menu-item').getBoundingClientRect();
        // Getting sub menu wrapper element using closest method
        var subMenuEle = ej.base.closest(args.element, '.e-menu-popup');
        subMenuEle.style.display = 'block';
        args.top = (relativeOffset.top - subMenuEle.getBoundingClientRect().height) + pageYOffset;
        args.left = relativeOffset.left + pageXOffset;
        subMenuEle.style.display = '';
    }
};

// Initialize Menu component
new ej.navigations.Menu(menuOptions, '#menu');


