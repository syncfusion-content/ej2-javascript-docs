ej.base.enableRipple(true);

var items = [
    {
        iconCss: 'e-icons e-home'
    },
    {
        iconCss: "e-icons e-folder"
    },
    {
        iconCss: "e-icons e-file"
    }
];

new ej.navigations.Breadcrumb({ 
    items: items,
    enableNavigation: false
}, '#breadcrumb');

