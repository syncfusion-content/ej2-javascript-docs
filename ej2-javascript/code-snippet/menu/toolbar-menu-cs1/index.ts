

import { Toolbar, Menu, MenuItemModel } from '@syncfusion/ej2-navigations';

let menuTemplate: string = '<ul id="menu"></ul>';

//Initialize Toolbar component
let toolbarObj: Toolbar = new Toolbar({
    created: create,
    items: [
        { template: menuTemplate },
        { prefixIcon: 'em-icons e-shopping-cart', align: 'Right' }
    ]
});

//Render initialized Toolbar component
toolbarObj.appendTo('#shoppingtoolbar');

function create(): void {
    let data: { [key: string]: Object }[] = [
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
    let menuFields: Object = {
        text: ['header', 'text', 'value'],
        children: ['subItems', 'options']
    };

    //Initialize Menu component
    let menuObj: Menu = new Menu({
        items: data,
        fields: menuFields,
        animationSettings: { effect: 'None' }
    }, '#menu');

    this.refreshOverflow();
}


