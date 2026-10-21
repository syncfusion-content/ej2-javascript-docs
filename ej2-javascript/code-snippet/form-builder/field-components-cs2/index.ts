import { ComponentCategory, FormBuilder, FormWidgetType } from '@syncfusion/ej2-form-builder';

let formBuilder: FormBuilder = new FormBuilder({
    toolboxCategories: [
        {
            category: ComponentCategory.Basic,
            items: [
                FormWidgetType.Textbox, FormWidgetType.Textarea
            ]
        },
        {
            category: ComponentCategory.Advanced,
            items: [
                FormWidgetType.Date, FormWidgetType.DateRange
            ]
        },
        {
            category: ComponentCategory.Layout,
            items: [
                FormWidgetType.Panel, FormWidgetType.Card
            ]
        }
    ]
});
formBuilder.appendTo('#formbuilder');