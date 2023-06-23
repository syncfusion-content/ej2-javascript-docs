var menuTemplate = '<ul id="menu"></ul>';

//Initialize Toolbar component
var toolbarObj = new ej.navigations.Toolbar({
    created: create,
    items: [
        { template: menuTemplate },
        { prefixIcon: 'em-icons e-shopping-cart', align: 'Right' }
    ]
}, '#shoppingtoolbar');

function create () {
    var data = [
        {
            header: 'Events',
            subItems: [
                { text: 'Conferences' },
                { text: 'Music' },
                { text: 'Workshops' }
            ]
        },
        {
            header: 'Movies',
            subItems: [
                { text: 'Now Showing' },
                { text: 'Coming Soon' }
            ]
        },
        {
            header: 'Directory',
            subItems: [
                { text: 'Media Gallery' },
                { text: 'Newsletters' }
            ]
        },
        {
            header: 'Queries',
            subItems: [
                { text: 'Our Policy' },
                { text: 'Site Map'},
                { text: '24x7 Support'}
            ]
        },
        { header: 'Services' }
    ];

    //Menu fields definition
    var menuFields = {
        text: ['header', 'text', 'value'],
        children: ['subItems', 'options']
    };

    //Initialize Menu component
    var menuObj = new ej.navigations.Menu({
        items: data,
        fields: menuFields,
        animationSettings: { effect: 'None' }
    }, '#menu');

    this.refreshOverflow();
}

