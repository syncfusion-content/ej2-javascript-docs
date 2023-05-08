
import { TextBox } from '@syncfusion/ej2-inputs'

let inputobj: TextBox = new TextBox({
    placeholder: 'First Name',
    floatLabelType: 'Never'
});

inputobj.appendTo('#firstName');

let inputobj1: TextBox = new TextBox({
    placeholder: 'Last Name',
    floatLabelType: 'Auto'
});

inputobj.appendTo('#lastName');
