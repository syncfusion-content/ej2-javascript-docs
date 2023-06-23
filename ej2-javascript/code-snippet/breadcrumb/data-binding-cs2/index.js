ej.base.enableRipple(true);

new ej.navigations.Breadcrumb({
    enableNavigation: false,
    url: "https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location",
    beforeItemRender: function(args) {
        if (args.item.text === 'bind-to-location') {
            args.item.text = 'location';
        }
    }
}, '#breadcrumb');

