



import { Slider } from '@syncfusion/ej2-inputs';
import { L10n } from '@syncfusion/ej2-base';


L10n.load({
    'de-DE': {
        'slider': {
            incrementTitle: 'Erhöhen, ansteigen', decrementTitle: 'verringern'
        }
    }
});
    // Initialize range Slider control
    let rangeObj: Slider = new Slider({
        value: [30, 70],
        type: 'Range',
        locale: 'de-DE',
        showButtons: true
    });
    rangeObj.appendTo('#slider');



