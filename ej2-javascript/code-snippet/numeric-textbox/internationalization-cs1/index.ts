


import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { loadCldr,L10n } from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as currencyData from './currencyData.json';
import * as numbers from './numbers.json';
import * as currencies from './currencies.json';

loadCldr(numberingSystems, currencyData, numbers, currencies);

L10n.load({
    'de': {
      'numerictextbox': { incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'}
    }
});

let currency: NumericTextBox = new NumericTextBox({
    // sets `German` culture using the culture value 'de'
    locale: 'de',
    // sets the 'EUR' currency format
    currency: 'EUR',
    format: 'c2',
    value: 100,
 });

currency.appendTo('#numeric');



