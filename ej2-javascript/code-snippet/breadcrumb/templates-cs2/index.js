ej.base.enableRipple(true);

var items = [
    {
        text: 'Cart'
    },
    {
        text: 'Billing'
    },
    {
        text: 'Shipping'
    },
    {
        text: 'Payment'
    }
];

new ej.navigations.Breadcrumb({ 
    items: items,
    enableNavigation: false,
    separatorTemplate: '<span class="e-icons e-bullet-arrow"></span>'
}, '#breadcrumb');

