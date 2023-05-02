

import { Menu, FieldSettingsModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Menu datasource
let data:  { [key: string]: Object }[] = [
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
let menuFields: FieldSettingsModel = {
    text: ['continent', 'country'],
    children: ['countries']
};

//Initialize Menu component.
let menuObj: Menu = new Menu({ items: data, fields: menuFields }, '#menu');

let insertItem: object[] = [
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



