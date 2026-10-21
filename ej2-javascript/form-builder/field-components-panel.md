---
layout: post
title: Field Components Panel in ##Platform_Name## Form Builder control | Syncfusion
description: Learn how to use the Field Components Panel in the ##Platform_Name## Form Builder control to create a form using the drag-and-drop interface.
platform: ej2-javascript
control: Field Components Panel
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Field Components Panel in ##Platform_Name## Form Builder component

The **Field Components Panel** is the left pane of the Form Builder. It hosts the draggable palette of form field types, layout containers, and pre-built templates that authors drag onto the design canvas to compose a form.

The pane is split into two tabs that the author can toggle at the top:

- **Fields** — the toolbox with draggable form fields (always available).
- **Templates** — pre-built form schemas (visible in **Developer** mode only).

A search input below the tab strip filters the palette by component label or type. When a search query is active, the accordion collapses and a single flat list of matching components is rendered instead.

![Field Components Panel in Form Builder](./images/form-builder-field-components.png)

## Fields tab

The **Fields** tab displays a categorized list of components that you can drag and drop onto the form canvas to build your form. Components are organized into three expandable categories— **Basic**, **Advanced**, and **Layout** — making it easy to find and add the fields and containers you need. Simply drag a component from the Fields tab and drop it onto your form to start designing.

### Basic

The **Basic** category contains the most common input components.

| Component | Name used in schema |
|---|---|
| Text Box | `textbox` |
| Text Area | `textarea` |
| Checkbox | `checkbox` |
| Radio Button | `radio` |
| Number | `number` |
| Input Mask | `inputMask` |
| Dropdown List | `dropdown` |
| Multi Select | `multiselect` |
| Date | `date` |
| Button | `button` |

### Advanced

The Advanced category contains more specialized input components.

| Component | Name used in schema | Simple mode? |
|---|---|---|
| Checkbox Group | `checkboxGroup` | Visible |
| Date / Time | `dateTime` | Visible |
| Time | `time` | Visible |
| Date Range | `dateRange` | Visible |
| Switch | `switch` | Visible |
| Rating | `rating` | Visible |
| Split Button | `splitButton` | Hidden |
| Range Slider | `rangeSlider` | Visible |
| Signature | `signature` | Hidden |
| Image Editor | `imageEditor` | Hidden |
| File Upload | `fileUpload` | Visible |
| Color Picker | `colorPicker` | Hidden |
| Rich Text Editor | `richTextEditor` | Hidden |
| Data Grid | `dataGrid` | Hidden |

### Layout

The **Layout** category contains containers that group other components. Layout components are not stored in `properties` of the form schema — they appear only as nodes in the `layout[]` array.

| Component | Name used in schema |
|---|---|
| Message | `message` |
| Panel | `panel` |
| Table | `table` |
| Tabs | `tabs` |
| Card | `card` |
| HTML | `staticHtml` |

## Templates tab

{% if page.publishingplatform == "typescript" %}
The **Templates** tab (available in Developer mode only) displays a flat list of pre-built form templates that you can drag and drop onto the canvas. These templates provide ready-made form layouts to help you quickly get started or add common scenarios to your form. You can also customize the available templates using the [formTemplates](https://ej2.syncfusion.com/documentation/api/form-builder/index-default#formtemplates) property.
{% elsif page.publishingplatform == "javascript" %}
The **Templates** tab (available in Developer mode only) displays a flat list of pre-built form templates that you can drag and drop onto the canvas. These templates provide ready-made form layouts to help you quickly get started or add common scenarios to your form. You can also customize the available templates using the [formTemplates](https://ej2.syncfusion.com/javascript/documentation/api/form-builder/index-default#formtemplates) property.
{% endif %}


{% if page.publishingplatform == "typescript" %}
{% include code-snippet/form-builder/field-components-cs1/index.ts %}
{% previewsample "page.domainurl/code-snippet/form-builder/field-components-cs1" %}
{% elsif page.publishingplatform == "javascript" %}
{% include code-snippet/form-builder/field-components-cs1/index.js %}
{% previewsample "page.domainurl/code-snippet/form-builder/field-components-cs1" %}
{% endif %}

Dragging a template onto the canvas inserts the entire set of components defined by the template's schema. Submit buttons within templates are filtered out to prevent duplicate submit buttons.

## Customizing the toolbox items

{% if page.publishingplatform == "typescript" %}
The form fields in the toolbox can be customized using the [toolboxCategories](https://ej2.syncfusion.com/documentation/api/form-builder/index-default#toolboxcategories) property. 
{% elsif page.publishingplatform == "javascript" %}
The form fields in the toolbox can be customized using the [toolboxCategories](https://ej2.syncfusion.com/javascript/documentation/api/form-builder/index-default#toolboxcategories) property. 
{% endif %}

{% if page.publishingplatform == "typescript" %}
{% include code-snippet/form-builder/field-components-cs2/index.ts %}
{% previewsample "page.domainurl/code-snippet/form-builder/field-components-cs2" %}
{% elsif page.publishingplatform == "javascript" %}
{% include code-snippet/form-builder/field-components-cs2/index.js %}
{% previewsample "page.domainurl/code-snippet/form-builder/field-components-cs2" %}
{% endif %}

## Drag and drop behavior

To add a component or template to the form, simply drag it from the toolbox onto the canvas. When you drop it onto the canvas, the component or template is added to your form, and you can immediately configure its properties in the property panel. You can also reorder the form fields within a layout component using drag and drop.
