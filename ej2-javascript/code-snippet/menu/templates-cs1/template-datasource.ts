/**
 * Template Data source
 */
export let templateDatasource:  { [key: string]: Object }[] = [
    { 
        text: 'CATEGORIES',
        subItems: [
            {
                categories: [
                    { text: 'Pizza', url: 'pizza' },
                    { text: 'Doughnut', url: 'doughnut' },
                    { text: 'Nuggets', url: 'nuggets' },
                    { text: 'Pancake', url: 'pancake' },
                    { text: 'Soup', url: 'soup' },
                    { text: 'Cookies', url: 'cookies' },
                    { text: 'Burger', url: 'burger' },
                    { text: 'Fulka', url: 'fulka' },
                    { text: 'Sandwiches', url: 'sandwiches' },
                    { text: 'BBQ', url: 'bbq' }
                ]
            }
        ]
    },
    { separator: true },
    { text: 'Area' },
    { text: 'HELP!'},
    { text: 'SIGNIN/SIGNUP'}
];