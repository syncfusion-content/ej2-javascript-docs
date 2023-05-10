

import { ColorPicker } from '@syncfusion/ej2-inputs';
import { enableRipple, L10n } from '@syncfusion/ej2-base';

enableRipple(true);

L10n.load({
    'de-DE': {
        'colorpicker': {
            "Apply": "Anwenden",
            "Cancel": "Abbrechen",
            "ModeSwitcher": "Modus wechseln"
        }
    }
});

let colorPicker: ColorPicker = new ColorPicker({ locale: 'de-DE' }, '#element');


