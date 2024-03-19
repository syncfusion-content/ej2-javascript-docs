---
layout: post
title: Accessibility in ##Platform_Name## Circular gauge control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Circular gauge control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---


# Accessibility in ##Platform_Name## Circular gauge control

The Circular Gauge control follows commonly used accessibility guidelines and standards, such as [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles).

The accessibility compliance for the Circular Gauge control is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the control meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the control do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The control does not meet the requirement.</div>

## WAI-ARIA attributes

The Circular Gauge control followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to meet the accessibility. The following ARIA attributes are used in the Circular Gauge control:

| Attributes | Purpose |
| --- | --- |
| `role=region` | It is specified in the pointer, annotation, and title. The pointer supports the interactive drag-and-drop function to update the pointer value. |
| `aria-label` | Provides an accessible name for the axis labels, title, legend item labels, text pointers and annotation. |

## Screen reading in Circular Gauge

Accessibility in the Circular Gauge control ensures that all users, regardless of ability or disability, can use screen reading. The following Circular Gauge elements will be read aloud using screen reading software, such as Narrator for Windows.

| Elements | Description |
| --- | --- |
| Axis labels | Reads the axis labels of the Circular Gauge. |
| Title | Reads the title of the Circular Gauge. |
| Legend item label | Reads the label of the legend item in the Circular Gauge. |
| Text pointer | Reads the text content shown as a pointer in Circular Gauge. |
| Annotation | Reads the content specified in the annotation. |

## Ensuring accessibility

The Circular Gauge control's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Circular Gauge control is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/circular-gauge.html) in a new window to evaluate the accessibility of the Circular Gauge control with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/circular-gauge.html" %}

## See also

* [Accessibility in Syncfusion ##Platform_Name## controls](../common/accessibility)
