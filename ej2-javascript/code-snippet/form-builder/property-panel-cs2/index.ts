import { FormBuilder, FormWidgetType } from '@syncfusion/ej2-form-builder';

let formBuilder: FormBuilder = new FormBuilder();
formBuilder.appendTo('#formbuilder');


formBuilder.getProperty(FormWidgetType.Textarea, "label")!.visible = false;
formBuilder.refresh();