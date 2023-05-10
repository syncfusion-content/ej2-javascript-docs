ej.base.enableRipple(true);

//Menu datasource
var data = [
    {
        continent: 'Asia',
        countries: [
            { country: 'China' },
            { country: 'India' },
            { country: 'Japan' }
        ]
    },
    {
        continent: 'North America',
        countries: [
            { country: 'Canada' },
            { country: 'Mexico' },
            { country: 'USA' }
        ]
    },
    {
        continent: 'South America',
        countries: [
            { country: 'Brazil' },
            { country: 'Colombia' },
            { country: 'Argentina' }
        ]
    },
    {
        continent: 'Oceania',
        countries: [
            { country: 'Australia' },
            { country: 'New Zealand' },
            { country: 'Samoa' },
        ]
    },
    { continent: 'Antarctica' }
];

//Menu fields definition
var menuFields = {
    text: ['continent', 'country'],
    children: ['countries']
};

// Initialize Menu component.
var menuObj = new ej.navigations.Menu({ items: data, fields: menuFields }, '#menu');

var insertItem = [
    {
        continent: 'Europe',
        countries: [
            { country: 'Finland' },
            { country: 'Austria' }
        ]
    }
];

//Add items before to 'Oceania'
menuObj.insertBefore(insertItem, 'Oceania', false);

insertItem = [
    {
        continent: 'Africa',
        countries: [
            { country: 'Nigeria' }
        ]
    }
];

//Add items after to 'Asia'
menuObj.insertAfter(insertItem, 'Asia', false);

//Remove items
menuObj.removeItems(['South America', 'Mexico'], false);

