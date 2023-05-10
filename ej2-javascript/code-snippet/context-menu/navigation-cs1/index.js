ej.base.enableRipple(true);

var menuItems = [
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
        target: '#target',
        items: menuItems,
        beforeItemRender: beforeItemRender
    };

var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu')

function beforeItemRender(args) {
     args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
}

