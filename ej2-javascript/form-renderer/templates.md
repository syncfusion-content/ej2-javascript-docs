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

{% if page.publishingplatform == "typescript" %}
Templates can be added to a form in Form Renderer by setting the [template](https://ej2.syncfusion.com/documentation/api/form-renderer/customwidgetsetting#template) property in [customWidgetSettings](https://ej2.syncfusion.com/documentation/api/form-renderer/index-default#customwidgetsettings). Map the template to a specific form field type by using the [type](https://ej2.syncfusion.com/documentation/api/form-renderer/customwidgetsetting#type) property in `customWidgetSettings`.
{% elsif page.publishingplatform == "javascript" %}
Templates can be added to a form in Form Renderer by setting the [template](https://ej2.syncfusion.com/javascript/documentation/api/form-renderer/customwidgetsetting#template) property in [customWidgetSettings](https://ej2.syncfusion.com/javascript/documentation/api/form-renderer/index-default#customwidgetsettings). Map the template to a specific form field type by using the [type](https://ej2.syncfusion.com/javascript/documentation/api/form-renderer/customwidgetsetting#type) property in `customWidgetSettings`.
{% endif %}

`customWidgetSettings` is an array property, so you can render any number of templates in the form.

{% if page.publishingplatform == "typescript" %}
The [setFieldValue](https://ej2.syncfusion.com/documentation/api/form-renderer/index-default#setfieldvalue) method is used to set the value of a form field programmatically. When templates are assigned, this method can be used to pass the value set in the third-party component to the Form Renderer control.
{% elsif page.publishingplatform == "javascript" %}
The [setFieldValue](https://ej2.syncfusion.com/javascript/documentation/api/form-renderer/index-default#setfieldvalue) method is used to set the value of a form field programmatically. When templates are assigned, this method can be used to pass the value set in the third-party component to the Form Renderer control.
{% endif %}

{% if page.publishingplatform == "typescript" %}
{% include code-snippet/form-renderer/template-cs1/index.ts %}
{% previewsample "page.domainurl/code-snippet/form-renderer/template-cs1" %}
{% elsif page.publishingplatform == "javascript" %}
{% include code-snippet/form-renderer/template-cs1/index.js %}
{% previewsample "page.domainurl/code-snippet/form-renderer/template-cs1" %}
{% endif %}

## Adding a template to a single or specific field

{% if page.publishingplatform == "typescript" %}
You can also map a template to a single form field by using the [fieldName](https://ej2.syncfusion.com/documentation/api/form-renderer/customwidgetsetting#fieldname) and [templateId](https://ej2.syncfusion.com/documentation/api/form-renderer/customwidgetsetting#templateid) properties.
{% elsif page.publishingplatform == "javascript" %}
You can also map a template to a single form field by using the [fieldName](https://ej2.syncfusion.com/javascript/documentation/api/form-renderer/customwidgetsetting#fieldname) and [templateId](https://ej2.syncfusion.com/javascript/documentation/api/form-renderer/customwidgetsetting#templateid) properties.
{% endif %}

* `fieldName` - This property uses the **name** value of the form field in the schema. If the field name in the schema matches this property during form rendering, the corresponding template is rendered.

* `templateId` - If the form field in the schema has a **templateId** property, assign the same value to this property. This maps the template to the corresponding form field.

> In this case, the `type` property is not required.

{% if page.publishingplatform == "typescript" %}
{% include code-snippet/form-renderer/template-cs2/index.ts %}
{% previewsample "page.domainurl/code-snippet/form-renderer/template-cs2" %}
{% elsif page.publishingplatform == "javascript" %}
{% include code-snippet/form-renderer/template-cs2/index.js %}
{% previewsample "page.domainurl/code-snippet/form-renderer/template-cs2" %}
{% endif %}