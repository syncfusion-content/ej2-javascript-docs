---
layout: post
title: Exporting and Importing in ##Platform_Name## Form Builder | Syncfusion
description: Learn how to export and import form schemas in the ##Platform_Name## Form Builder. Reuse schemas in Form Renderer or import them to continue editing.
platform: ej2-javascript
control: Exporting and Importing
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Exporting and Importing in ##Platform_Name## Form Builder component

The Form Builder supports exporting the generated form schema for reuse in the Form Renderer control and importing an existing schema back into the builder for further editing.

## Export form schema

You can export the generated form schema by clicking the **Export** button in the toolbar at the top of the Form Builder control. The exported schema includes the form structure, field configuration, and other properties required to recreate the form.

You can use the exported schema in the Form Renderer control to render the same form at runtime.

## Disabling the export
{% if page.publishingplatform == "typescript" %}
Exporting can be disabled in the Form Builder component by setting the [allowExport](https://ej2.syncfusion.com/documentation/api/form-builder/index-default#allowexport) property to `false`. The default value of the property is `true`.
{% elsif page.publishingplatform == "javascript" %}
Exporting can be disabled in the Form Builder component by setting the [allowExport](https://ej2.syncfusion.com/javascript/documentation/api/form-builder/index-default#allowexport) property to `false`. The default value of the property is `true`.
{% endif %}

{% if page.publishingplatform == "typescript" %}

```ts
let formBuilder: FormBuilder = new FormBuilder({
    allowExport: false
});

formBuilder.appendTo('#formbuilder');
```

{% elsif page.publishingplatform == "javascript" %}

```js
var formBuilder = new ej.formbuilder.FormBuilder({
    allowExport: false
});

formBuilder.appendTo('#formbuilder');
```

{% endif %}

The output will appear as follows:

![Disabling the export](./images/form-builder-export.png)

## Import form schema
{% if page.publishingplatform == "typescript" %}
To import a form, assign the exported schema to the [schema](https://ej2.syncfusion.com/documentation/api/form-builder/index-default#schema) property of the Form Builder. This loads the form definition into the builder so that you can continue editing it.
{% elsif page.publishingplatform == "javascript" %}
To import a form, assign the exported schema to the [schema](https://ej2.syncfusion.com/javascript/documentation/api/form-builder/index-default#schema) property of the Form Builder. This loads the form definition into the builder so that you can continue editing it.
{% endif %}

The following example shows how to import a schema object to the Form Builder.

{% if page.publishingplatform == "typescript" %}

```ts
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
});
formBuilder.appendTo('#formbuilder');
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
                "placeholder": "Enter your email",
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
    }
});
formBuilder.appendTo('#formbuilder');
```

{% endif %}

![Import from schema](./images/form-builder-import-schema.png)
