import { TextArea } from '@syncfusion/ej2-inputs';
// Initialize TextArea component with cssClass 'e-filled'
let filledTextArea: TextArea = new TextArea({
    placeholder: 'Filled',
    cssClass: 'e-filled',
    floatLabelType: 'Auto'
});
filledTextArea.appendTo('#filled');
// Initialize TextArea component with cssClass 'e-outline'
let outlineTextArea: TextArea = new TextArea({
    placeholder: 'Outlined',
    cssClass: 'e-outline',
    floatLabelType: 'Auto'
});
outlineTextArea.appendTo('#outlined');



