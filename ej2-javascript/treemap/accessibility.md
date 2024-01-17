---
layout: post
title: Accessibility in ##Platform_Name## TreeMap control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## TreeMap control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---


# Accessibility in ##Platform_Name## TreeMap control

TreeMap has built-in accessibility features like screen reading and WAI-ARIA attributes.

## WAI-ARIA attributes

The TreeMap control follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to meet the accessibility. The following ARIA attributes are used in the TreeMap control:

| Attributes | Purpose |
| --- | --- |
| `role=region` | It specifies the TreeMap areas that do not support interactive functions like selection and highlight. |
| `role=button` | It specifies the TreeMap areas where interactive functions such as selection and highlight are available. |
| `aria-label` | Provides an accessible name for the data labels, legend title, and legend item labels. |

## Screen reading in TreeMap

Accessibility in the TreeMap control ensures that all users, regardless of ability or disability, can use screen reading. The following TreeMap elements will be read aloud using screen reading software, such as Narrator for Windows.

| Elements | Description |
| --- | --- |
| Data labels | Reads the labels displayed on leaf items of the TreeMap. |
| Legend title | Reads the title of the legend in the TreeMap. |
| Legend item label | Reads the label of the legend item in the TreeMap. |

## Ensuring accessibility

The TreeMap control's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the TreeMap control is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/tree-map.html) in a new window to evaluate the accessibility of the TreeMap control with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/tree-map.html" %}

## See also

* [Accessibility in Syncfusion ##Platform_Name## controls](../common/accessibility)
