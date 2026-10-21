import { FormBuilder, FormWidgetType } from '@syncfusion/ej2-form-builder';

let formBuilder: FormBuilder = new FormBuilder();
formBuilder.appendTo('#formbuilder');

formBuilder.setProperty(FormWidgetType.Textarea, {
    "key": "enableRtl",
    "label": "Enable RTL",
    "type": "boolean",
    "default": false
});