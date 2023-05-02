ej.base.enableRipple(true);

//Menu datasource
var menuItems = [
    {
        text: 'File',
        iconCss: 'em-icons e-file',
        items: [
            { text: 'Open', iconCss: 'em-icons e-open' },
            { text: 'Save', iconCss: 'e-icons e-save' },
            { separator: true },
            { text: 'Exit' }
        ]
    },
    {
        text: 'Edit',
        iconCss: 'em-icons e-edit',
        items: [
            { text: 'Cut', iconCss: 'em-icons e-cut' },
            { text: 'Copy', iconCss: 'em-icons e-copy' },
            { text: 'Paste', iconCss: 'em-icons e-paste' }
        ]
    },
    {
        text: 'View',
        items: [
            { text: 'Toolbar' },
            { text: 'Sidebar' },
            { text: 'Full Screen' }
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

// Initialize Menu component.
var menuObj = new ej.navigations.Menu({items: menuItems}, '#menu');

