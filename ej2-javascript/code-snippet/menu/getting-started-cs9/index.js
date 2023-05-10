ej.base.enableRipple(true);

//Menu items definition
var menuItems = [
    {
        text: 'Appliances',
        items: [
            { text: 'Washing Machine', url: 'https://www.google.com/search?q=washing+machine' },
            { text: 'Air Conditioners', url: 'https://www.google.com/search?q=air+conditioners' }
        ]
    },
    {
        text: 'Mobile',
        items: [
            { text: 'Headphones', url: 'https://www.google.com/search?q=headphones' },
            { text: 'Memory Cards', url: 'https://www.google.com/search?q=memory+cards' },
            { text: 'Power Banks', url: 'https://www.google.com/search?q=power+banks' }
        ]
    },
    {
        text: 'Entertainment',
        items: [
            { text: 'Televisions', url: 'https://www.google.com/search?q=televisions' },
            { text: 'Home Theatres', url: 'https://www.google.com/search?q=home+theatres' },
            { text: 'Gaming Laptops', url: 'https://www.google.com/search?q=gaming+laptops' }
        ]
    },
    { text: 'Fashion', url: 'https://www.google.com/search?q=fashion' },
    { text: 'Offers', url: 'https://www.google.com/search?q=offers' }
];

// Initialize Menu component.
var menuObj = new ej.navigations.Menu({
    items: menuItems,
    // To open url in blank page.
    beforeItemRender: function (args) {
        if (args.item.url) {
            args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
        }
    }
}, '#menu');

