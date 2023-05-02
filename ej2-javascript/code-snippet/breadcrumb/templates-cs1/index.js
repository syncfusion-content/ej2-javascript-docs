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
    itemTemplate: '<div id="chip-default" class="e-lib e-chip-list e-control e-chip-set" role="listbox" aria-multiselectable="false"><div class="e-chip e-primary" tabindex="0" role="option" aria-label="Apple" aria-selected="false"><span class="e-chip-text">${text}</span></div></div>'
}, '#breadcrumb');

