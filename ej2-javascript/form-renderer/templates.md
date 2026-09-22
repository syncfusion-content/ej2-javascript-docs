---
layout: post
title: Templates in ##Platform_Name## Form Renderer | Syncfusion
description: Learn how to display templates in the ##Platform_Name## Form Renderer to display the third party components in the forms.
platform: ej2-javascript
control: Templates
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Templates in ##Platform_Name## Form Renderer component

Templates can be displayed in the Form Renderer control to render third-party components within a form.

This section explains how to use templates in the Form Renderer component.

## Adding Templates

Templates can be added to a form in Form Renderer by setting the `template` property in `customWidgetSettings`. Map the template to a specific form field type by using the `type` property in `customWidgetSettings`.

`customWidgetSettings` is an array property, so you can render any number of templates in the form.

The `setFieldValue` method is used to set the value of a form field programmatically. When templates are assigned, this method can be used to pass the value set in the third-party component to the Form Renderer control.

{% if page.publishingplatform == "typescript" %}
```ts
import { FormRenderer } from '@syncfusion/ej2-form-renderer';

// Initialize Form Renderer control.
let formRenderer: FormRenderer = new FormRenderer({
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
    customWidgetSettings: [ { type: 'textbox', template: inputTemplate } ]
});

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
    formRenderer.setFieldValue(data.fieldData.id, value);
  });
  return input;
}

formRenderer.appendTo('#formrenderer');
```

{% elsif page.publishingplatform == "javascript" %}

```js
// Initialize Form Renderer control.
var formRenderer = new ej.formrenderer.FormRenderer({
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
    customWidgetSettings: [{ type: 'textbox', template: inputTemplate }]
});

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
    formRenderer.setFieldValue(data.fieldData.id, value);
  });
  return input;
}

formRenderer.appendTo('#formrenderer');

```

{% endif %}

## Adding a template to a single or specific field

You can also map a template to a single form field by using the `fieldName` and `templateId` properties.

* `fieldName` - This property uses the **name** value of the form field in the schema. If the field name in the schema matches this property during form rendering, the corresponding template is rendered.

* `templateId` - If the form field in the schema has a **templateId** property, assign the same value to this property. This maps the template to the corresponding form field.

> In this case, the `type` property is not required.

{% if page.publishingplatform == "typescript" %}
```ts
import { FormRenderer } from '@syncfusion/ej2-form-renderer';

// Initialize Form Renderer control.
let formRenderer: FormRenderer = new FormRenderer({
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
                "widget": "textbox",
                "templateId": "email-template"
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
                "widget": "textbox",
                "templateId": "password-template"
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
    
    // If adding templates using `fieldName`
    customWidgetSettings: [ { fieldName: "emailAddress", template: inputTemplate } ]
    // if adding templates using `templateId`
    // customWidgetSettings: [ { templateId: "password-template", template: inputTemplate } ]

});

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
    formRenderer.setFieldValue(data.fieldData.id, value);
  });
  return input;
}

formRenderer.appendTo('#formrenderer');
```

{% elsif page.publishingplatform == "javascript" %}

```js
// Initialize Form Renderer control.
var formRenderer = new ej.formrenderer.FormRenderer({
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
                "widget": "textbox",
                "templateId": "email-template"
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
                "widget": "textbox",
                "templateId": "password-template"
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
    
    // If adding templates using `fieldName`
    customWidgetSettings: [{ fieldName: "emailAddress", template: inputTemplate }]
    // if adding templates using `templateId`
    // customWidgetSettings: [{ templateId: "password-template", template: inputTemplate }]

});

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
    formRenderer.setFieldValue(data.fieldData.id, value);
  });
  return input;
}

formRenderer.appendTo('#formrenderer');
```