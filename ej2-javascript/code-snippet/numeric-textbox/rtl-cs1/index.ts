


import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { loadCldr,L10n } from '@syncfusion/ej2-base';

L10n.load({
    'ar-AE': {
      'numerictextbox': { incrementTitle: 'قيمة الزيادة', decrementTitle: 'قيمة تناقص'}
    }
});

let currency: NumericTextBox = new NumericTextBox({
    // sets `Arabic` culture using the culture value 'ar-AE'
    locale: 'ar-AE',
    value: 100,
    placeholder: 'أدخل القيمة',
    enableRtl: true,
    floatLabelType: 'Auto'
 });

currency.appendTo('#numeric');



