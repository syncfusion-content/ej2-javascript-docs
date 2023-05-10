ej.base.enableRipple(true);

var items = [
        {
            text: "Program Files",
            iconCss: "e-icons e-folder"
        },
        {
            text: "Services",
            iconCss: "e-icons e-folder"
        },
        {
            text: "Config.json",
            iconCss: "e-icons e-file"
        }
    ];

new ej.navigations.Breadcrumb({ 
    items: items,
    enableNavigation: false
}, '#breadcrumb');

new ej.navigations.Breadcrumb({ 
    items: items,
    enableNavigation: false,
    beforeItemRender: function(args) {
        if(args.item.text !== '') {
            args.element.classList.add('e-icon-right');
        }
    }
}, '#breadcrumb2');

