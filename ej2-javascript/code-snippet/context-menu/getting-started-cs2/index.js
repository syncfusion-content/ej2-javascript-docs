ej.base.enableRipple(true);

var menuItems = [
        {
            text: 'Show All Bookmarks',
        },
        {
            text: 'Bookmarks Toolbar',
            items: [
                {
                    text: 'Most Visited',
                    items: [
                    {
                        text: 'Google',
                    },
                    {
                        text: 'Gmail'
                    }]
                },
                {
                    text: 'Recently Added'
                }
            ]
        }];

var menuOptions = {
        target: '#target',
        items: menuItems,
        animationSettings: {
            effect: 'FadeIn',
            duration: 800
        }
    };

var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

