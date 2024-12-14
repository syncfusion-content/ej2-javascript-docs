ej.base.enableRipple(true);

var menuItems = [
    {
        text: 'Home',
        htmlAttributes: {
            role: 'menuitem',
            'aria-label': 'Home',
            tabindex: '1'
        }
    },
    {
        text: 'Book Categories',
        items: [
            {
                text: 'Cookbooks',
                htmlAttributes: {
                    role: 'menuitem',
                    'aria-label': 'Cookbooks',
                    tabindex: '1'
                }
            },
            {
                text: 'Children',
                htmlAttributes: {
                    role: 'menuitem',
                    'aria-label': 'Children',
                    tabindex: '1'
                }
            }
        ],
        htmlAttributes: {
            role: 'menuitem',
            'aria-label': 'Book Categories',
            tabindex: '1'
        }
    },
    {
        text: 'Purchase',
        htmlAttributes: {
            role: 'menuitem',
            'aria-label': 'Purchase',
            tabindex: '1'
        }
    },
    {
        text: 'Contact Us',
        htmlAttributes: {
            role: 'menuitem',
            'aria-label': 'Contact Us',
            tabindex: '1'
        }
    },
    {
        separator: true
    },
    {
        text: 'Login',
        id: 'login',
        htmlAttributes: {
            role: 'menuitem',
            'aria-label': 'Login',
            tabindex: '1'
        }
    }
];

// Initialize Menu component.
var menuObj = new ej.navigations.Menu({ items: menuItems }, '#menu');