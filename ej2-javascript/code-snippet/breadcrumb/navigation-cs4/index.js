ej.base.enableRipple(true);

var items = [
       {
            text: "Home",
            url: "https://ej2.syncfusion.com/documentation/introduction/"
        },
        {
            text: "Getting",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/getting-started"
        },
        {
            text: "Icons",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/icons"
        },
        {
            text: "Navigation",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/navigation"
        },
        {
            text: "Overflow",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/overflow"
        }
    ];

new ej.navigations.Breadcrumb({ 
    items: items,
    enableNavigation: false,
    enableActiveItemNavigation: true
}, '#breadcrumb');

