


import { Toolbar } from '@syncfusion/ej2-navigations';
import { NumericTextBox} from '@syncfusion/ej2-inputs';
import { DropDownList} from '@syncfusion/ej2-dropdowns';
import { CheckBox, RadioButton  } from '@syncfusion/ej2-buttons';

let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
let toolbar: Toolbar = new Toolbar({
    items: [
        { text: "Cut" },
        { text: "Copy" },
        { type: "Separator" },
        { text: "Undo" },
        { text: "Redo" },
        { type: "Separator" },
        { type: 'Input', template: new NumericTextBox({ format: 'c2', value:1, width:150 }) },
        { type: "Separator" },
        { type: 'Input', template: new DropDownList({ dataSource: sportsData, width: 120, index: 2 }) },
        { type: "Separator" },
        { type: 'Input', template: new CheckBox({ label: 'Checkbox', checked: true }) },
        { type: "Separator" },
        { type: 'Input', template: new RadioButton({ label: 'Radio', name: 'default', checked: true }) }
    ]
});
toolbar.appendTo('#element');


