---
layout: post
title: Accessibility in ##Platform_Name## Image Editor | Syncfusion
description: Use the ##Platform_Name## Image Editor with keyboard navigation, screen reader support, WCAG 2.2, and Section 508 compliance, validated with axe-core.
platform: ej2-javascript
control: Accessibility
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Image Editor

The Image Editor component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Image Editor component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Partial"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## Keyboard interaction

The Image Editor component follows the keyboard interaction guidelines, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Image Editor component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Ctrl + Z</kbd> | Undo the last user action. |
| <kbd>Ctrl + Y</kbd> | Redo the last user action. |
| <kbd>Ctrl + S</kbd> | Save the image. |
| <kbd>Ctrl + O</kbd> | Open an image. |
| <kbd>Delete</kbd> | Delete the selected shape. |
| <kbd>Enter</kbd> | Apply the current crop selection or resize. |
| <kbd>Escape</kbd> | Discard the in-progress operation, such as an annotation drawing in progress or an active crop selection. |

## Ensuring accessibility

The Image Editor's accessibility is verified using the [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools during automated testing. These tools check the component against standard accessibility rule sets to confirm compliance.

The accessibility compliance of the Image Editor component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/image-editor.html) in a new window to evaluate the accessibility of the Image Editor component with accessibility tools. In the sample, you can test the toolbar, dialogs, and keyboard interactions using your preferred accessibility tool.

{% if page.publishingplatform == "typescript" %}

{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% previewsample "page.domainurl/code-snippet/image-editor/es5-getting-started-cs1" %}

{% endif %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## components](../common/accessibility)