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

{% if page.publishingplatform == "typescript" %}
Templates can be added to the Form Builder by configuring the third-party control in the [template](https://ej2.syncfusion.com/documentation/api/form-builder/toolboxitemsetting#template) property of [toolboxItems](https://ej2.syncfusion.com/documentation/api/form-builder/index-default#toolboxitems). Map the template to a specific form field by using the [type](https://ej2.syncfusion.com/documentation/api/form-builder/toolboxitemsetting#type) property in `toolboxItems`.
{% elsif page.publishingplatform == "javascript" %}
Templates can be added to the Form Builder by configuring the third-party control in the [template](https://ej2.syncfusion.com/javascript/documentation/api/form-builder/toolboxitemsetting#template) property of [toolboxItems](https://ej2.syncfusion.com/javascript/documentation/api/form-builder/index-default#toolboxitems). Map the template to a specific form field by using the [type](https://ej2.syncfusion.com/javascript/documentation/api/form-builder/toolboxitemsetting#type) property in `toolboxItems`.
{% endif %}

`toolboxItems` is an array property, and any number of templates can be rendered in the Form Builder toolbox.

After you drag and drop the form field onto the central design canvas, the third-party component is rendered automatically.

{% if page.publishingplatform == "typescript" %}
{% include code-snippet/form-builder/template-cs1/index.ts %}
{% previewsample "page.domainurl/code-snippet/form-builder/template-cs1" %}
{% elsif page.publishingplatform == "javascript" %}
{% include code-snippet/form-builder/template-cs1/index.js %}
{% previewsample "page.domainurl/code-snippet/form-builder/template-cs1" %}
{% endif %}

In the Preview tab, the templates are displayed so that you can validate the created form.

## Adding properties of the template in property panel

{% if page.publishingplatform == "typescript" %}

The properties of the third party components can be added to the property panel using the [setProperty](https://ej2.syncfusion.com/documentation/api/form-builder/index-default#setproperty) method in the Form Builder. For more details, see this [documentation](./property-panel#adding-a-new-property-in-the-property-panel)
{% elsif page.publishingplatform == "javascript" %}
The properties of the third party components can be added to the property panel using the [setProperty](https://ej2.syncfusion.com/javascript/documentation/api/form-builder/index-default#setproperty) method in the Form Builder. For more details, see this [documentation](./property-panel#adding-a-new-property-in-the-property-panel)
{% endif %}

## Exporting templates

{% if page.publishingplatform == "typescript" %}
When the form schema is exported, the template itself is not included in the schema. However, a [templateId](https://ej2.syncfusion.com/documentation/api/form-builder/toolboxitemsetting#templateid) property is added to the form schema to notify Form Renderer that a template is mapped to the corresponding element. This value is set through the `templateId` property of [toolboxItems](https://ej2.syncfusion.com/documentation/api/form-builder/index-default#toolboxitems).
{% elsif page.publishingplatform == "javascript" %}
When the form schema is exported, the template itself is not included in the schema. However, a [templateId](https://ej2.syncfusion.com/javascript/documentation/api/form-builder/toolboxitemsetting#templateid) property is added to the form schema to notify Form Renderer that a template is mapped to the corresponding element. This value is set through the `templateId` property of [toolboxItems](https://ej2.syncfusion.com/javascript/documentation/api/form-builder/index-default#toolboxitems).
{% endif %}

{% if page.publishingplatform == "typescript" %}

In Form Renderer, additional configuration is required as described in the [documentation](http://ej2.syncfusion.com/documentation/form-renderer/templates) to render templates in the form.

{% elsif page.publishingplatform == "javascript" %}

In Form Renderer, additional configuration is required as described in the [documentation](http://ej2.syncfusion.com/javascript/documentation/form-renderer/templates) to render templates in the form.

{% endif %}