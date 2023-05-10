

import { Menu, FieldSettingsModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

//Import an array of JSON data from datasource.ts
import { dataSource } from './datasource.ts';

enableRipple(true);

//Menu fields definition
let menuFields: FieldSettingsModel = {
    text: ['continent', 'country', 'language'],
    children: ['countries', 'languages']
};

//Initialize Menu component.
let menuObj: Menu = new Menu({ items: dataSource, fields: menuFields }, '#menu');


