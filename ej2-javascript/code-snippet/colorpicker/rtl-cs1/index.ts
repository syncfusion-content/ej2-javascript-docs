

import { ColorPicker } from '@syncfusion/ej2-inputs';
import { enableRipple, L10n } from '@syncfusion/ej2-base';

enableRipple(true);

L10n.load({
    'ar-AE': {
        'colorpicker': {
            'Apply': 'تطبيق',
            'Cancel': 'إلغاء',
            'ModeSwitcher': 'مفتاح كهربائي الوضع'
        }
    }
});

let colorPicker: ColorPicker = new ColorPicker({ enableRtl: true, locale: 'ar-AE' }, '#element');


