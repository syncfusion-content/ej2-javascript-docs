ej.base.enableRipple(true);

var items = [
    {
        text: 'Flipkart',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=flipkart'
    },
    {
        text: 'Amazon',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=amazon'
    },
    {
        text: 'Snapdeal',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=snapdeal'
    }];
var menuOptions = {
        items: items,
        iconCss: 'e-cart-icon e-shopping',
        beforeItemRender: (function (args) {
            args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
        })
    };

var drpDownBtn = new ej.splitbuttons.DropDownButton(menuOptions, '#action');

