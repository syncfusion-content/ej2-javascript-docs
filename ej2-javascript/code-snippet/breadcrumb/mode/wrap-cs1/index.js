ej.base.enableRipple(true);

var items = [
        {
            text: "Home",
            url: "../"
        },
        {
            text: "Getting",
            url: "./breadcrumb/getting-started"
        },
        {
            text: "Data-Binding",
            url: "./breadcrumb/data-binding"
        },
        {
            text: "Icons",
            url: "./breadcrumb/icons"
        },
        {
            text: "Navigation",
            url: "./breadcrumb/navigation"
        },
        {
            text: "templates",
            url: "./breadcrumb/templates"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

new ej.navigations.Breadcrumb({ 
    items: items,
    enableNavigation: false,
    maxItems: 3,
    overflowMode: 'Wrap'
}, '#breadcrumb');

