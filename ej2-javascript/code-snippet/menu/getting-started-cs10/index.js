ej.base.enableRipple(true);

//Menu items definition
var menuItems = [
    {
        text: 'Fashion',
        items: [
            {
                text: 'Men Fashion',
                items: [
                    {
                        text: 'Personal Care',
                        items: [
                            { text: 'Trimmers' },
                            { text:  'Shavers' }
                        ]
                    },
                    {
                        text: 'Clothing',
                        items: [
                            { text: 'Shirts' },
                            { text: 'Jackets' },
                            { text: 'Track Suits' }
                        ]
                    },
                    { text: 'Footwear' }
                ]
            },
            {
                text: 'Women Fashion',
                items: [
                    {
                        text: 'Clothing',
                        items: [
                            { text: 'Kurtas' },
                            { text: 'Salwars' },
                            { text: 'Sarees' }
                        ]
                    },
                    {
                        text: 'Jewellery',
                        items: [
                            { text: 'Nosepins' },
                            { text:  'Anklets' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: 'Home & Living',
        items: [
            {
                text: 'Washing Machine',
                items: [
                    { text: 'Fully Automatic' },
                    { text: 'Semi Automatic' }
                ]
            },
            {
                text: 'Air Conditioners',
                items: [
                    { text: 'Inverter ACs' },
                    { text: 'Split ACs' }
                ]
            }
        ]
    },
    { text: 'Accessories' },
    { text: 'Sports' },
    { text: 'Gaming' }
];

//Initialize Menu component.
var menuObj = new ej.navigations.Menu({items: menuItems}, '#menu');

