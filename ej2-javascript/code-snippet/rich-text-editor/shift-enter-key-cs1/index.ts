

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

 let defaultRTE: RichTextEditor = new RichTextEditor({
    value: `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`,
    height: 250
});
defaultRTE.appendTo('#defaultRTE');

 let shiftEnterlistObj: DropDownList = new DropDownList({
    placeholder: 'When pressing the shift + enter key',
    floatLabelType: 'Always',
    change: (args: any) => {
        if (shiftEnterlistObj.value === 'DIV') {
            defaultRTE.shiftEnterKey = 'DIV'
        } else if (shiftEnterlistObj.value === 'P') {
            defaultRTE.shiftEnterKey = 'P'
        } else {
            defaultRTE.shiftEnterKey = 'BR'
        }
    }
});
shiftEnterlistObj.appendTo('#shiftEnterOption');



