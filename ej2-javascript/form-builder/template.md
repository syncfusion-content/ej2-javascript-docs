---
layout: post
title: Templates in ##Platform_Name## Form Builder control | Syncfusion
description: Learn how to include Templates in the ##Platform_Name## Form Builder control to display third party components.
platform: ej2-javascript
control: Templates
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Templates in ##Platform_Name## Form Builder component

Templates can be used in the Form Builder control to display third-party components within the form. This feature lets you configure the form schema with the properties of the third-party component.

This section explains how to use templates in the Form Builder component.

## Adding Templates

Templates can be added to the Form Builder by configuring the third-party control in the `template` property of `toolboxItems`. Map the template to a specific form field by using the `type` property in `toolboxItems`.

`toolboxItems` is an array property, and any number of templates can be rendered in the Form Builder toolbox.

After you drag and drop the form field onto the central design canvas, the third-party component is rendered automatically.

{% if page.publishingplatform == "typescript" %}
```ts
import { FormBuilder, FormWidgetType } from '@syncfusion/ej2-form-builder';

let formBuilder: FormBuilder = new FormBuilder({
    schema: {
        "version": "0.1.0",
        "properties": {
            "emailAddress": {
                "id": "textbox_1785491685456_167",
                "name": "emailAddress",
                "type": "string",
                "label": "Email Address",
                "textboxType": "email",
                "placeholder": "Enter you email",
                "required": true,
                "widget": "textbox"
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "placeholder": "Enter your Password",
                "required": true,
                "minLength": 6,
                "widget": "textbox"
            },
            "rememberMe": {
                "id": "checkbox_1785491685456_262",
                "name": "rememberMe",
                "type": "boolean",
                "label": "Remember Me",
                "widget": "checkbox"
            },
            "submit": {
                "id": "submit_button_initial",
                "name": "defaultFormsubmit",
                "type": "button",
                "label": "Submit",
                "buttonType": "submit",
                "widget": "button",
                "style": "primary",
                "disabled": false
            }
        },
        "layout": [
            {
                "type": "field",
                "propertyId": "emailAddress"
            },
            {
                "type": "field",
                "propertyId": "password"
            },
            {
                "type": "field",
                "propertyId": "rememberMe"
            },
            {
                "type": "field",
                "propertyId": "submit"
            }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    },
    toolboxItems: [{type: FormWidgetType.Textbox, template: inputTemplate}]
});
formBuilder.appendTo('#formbuilder');

// Custom template for input field
function inputTemplate(data: any) {
  const input = document.createElement('input');
  input.type = data.fieldData.textboxType;
  input.id = data.fieldData.id;
  input.name = data.fieldData.name;
  input.placeholder = data.fieldData.placeholder;
  input.className = 'custom-input';
  input.addEventListener('change', (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    formBuilder.setFieldValue(data.fieldData.id, value);
  });
  return input;
```

{% elsif page.publishingplatform == "javascript" %}

```js
var formBuilder = new ej.formbuilder.FormBuilder({
    schema: {
        "version": "0.1.0",
        "properties": {
            "emailAddress": {
                "id": "textbox_1785491685456_167",
                "name": "emailAddress",
                "type": "string",
                "label": "Email Address",
                "textboxType": "email",
                "placeholder": "Enter you email",
                "required": true,
                "widget": "textbox"
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "placeholder": "Enter your Password",
                "required": true,
                "minLength": 6,
                "widget": "textbox"
            },
            "rememberMe": {
                "id": "checkbox_1785491685456_262",
                "name": "rememberMe",
                "type": "boolean",
                "label": "Remember Me",
                "widget": "checkbox"
            },
            "submit": {
                "id": "submit_button_initial",
                "name": "defaultFormsubmit",
                "type": "button",
                "label": "Submit",
                "buttonType": "submit",
                "widget": "button",
                "style": "primary",
                "disabled": false
            }
        },
        "layout": [
            {
                "type": "field",
                "propertyId": "emailAddress"
            },
            {
                "type": "field",
                "propertyId": "password"
            },
            {
                "type": "field",
                "propertyId": "rememberMe"
            },
            {
                "type": "field",
                "propertyId": "submit"
            }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    },
    toolboxItems: [{ type: 'textbox', template: inputTemplate }]
});
formBuilder.appendTo('#formbuilder');

// Custom template for input field
function inputTemplate(data) {
    var input = document.createElement('input');
    input.type = data.fieldData.textboxType;
    input.id = data.fieldData.id;
    input.name = data.fieldData.name;
    input.placeholder = data.fieldData.placeholder;
    input.className = 'custom-input';
    input.addEventListener('change', (e) => {
        var value = e.target.value;
        formBuilder.setFieldValue(data.fieldData.id, value);
    });
    return input;
}
```

{% endif %}

In the Preview tab, the templates are displayed so that you can validate the created form.

## Adding properties of the template in property panel

The properties of the third party components can be added to the property panel using the `setProperty` method in the Form Builder. For more details, see this [documentation](./property-panel#adding-a-new-property-in-the-property-panel)


## Exporting templates

When the form schema is exported, the template itself is not included in the schema. However, a `templateId` property is added to the form schema to notify Form Renderer that a template is mapped to the corresponding element. This value is set through the `templateId` property of `toolboxItems`.

{% if page.publishingplatform == "typescript" %}

In Form Renderer, additional configuration is required as described in the [documentation](http://ej2.syncfusion.com/documentation/form-renderer/templates) to render templates in the form.

{% elsif page.publishingplatform == "javascript" %}

In Form Renderer, additional configuration is required as described in the [documentation](http://ej2.syncfusion.com/javascript/documentation/form-renderer/templates) to render templates in the form.

{% endif %}