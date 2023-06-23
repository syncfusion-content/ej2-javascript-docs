


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, Count, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, Count, QuickToolbar);
import { Button } from '@syncfusion/ej2-buttons';

let button: Button;
let defaultRTE: RichTextEditor = new RichTextEditor({ showCharCount: true, maxLength: 100, placeholder: 'Type something' ,
change : function() {
    button.disabled = false;
} });
defaultRTE.appendTo('#defaultRTE');

button = new Button({
disabled :true
     });
button.appendTo('#validateSubmit');

let option: FormValidatorModel = {
  rules: {
  // Initialize the CustomPlacement.
  defaultRTE: { required:  [true, 'RTE: value is required'], minLength: [15, 'RTE: Need atleast 6 character length'], maxLength:[100, 'RTE: Maximum 100 character only']  }
  },
  customPlacement: (inputElement: HTMLElement, error: HTMLElement)=>{
    document.getElementById('error').appendChild(error);
  }
};
let formObject: FormValidator = new FormValidator('#form-element', option);



