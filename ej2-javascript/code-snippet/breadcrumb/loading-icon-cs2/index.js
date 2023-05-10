ej.base.enableRipple(true);

var items = [
    {
        iconCss: "e-image-home",
        url: "https://ej2.syncfusion.com/demos",
    },
    {
        text: "Components",
        url: "https://ej2.syncfusion.com/demos/#/material/grid/grid-overview",
    },
    {
        text: "Navigations",
        url: "https://ej2.syncfusion.com/demos/#/material/breadcrumb/default",
    },
    {
        text: "Breadcrumb",
        url: "./breadcrumb/default",
    }
    ];

new ej.navigations.Breadcrumb({ 
    items: items,
    enableNavigation: false
}, '#breadcrumb');

