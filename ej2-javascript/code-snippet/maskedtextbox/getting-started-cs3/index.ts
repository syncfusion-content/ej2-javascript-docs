

import { MaskedTextBox } from '@syncfusion/ej2-inputs';

// initializes the MaskedTextBox component
let mask: MaskedTextBox = new MaskedTextBox({
        // sets mask format to the MaskedTextBox
        mask: '000-000-0000',
        placeholder: 'MaskedTextBox',
        floatLabelType: 'Always'
});

mask.appendTo('#mask');


