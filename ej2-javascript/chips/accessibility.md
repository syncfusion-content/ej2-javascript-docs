---
layout: post
title: Accessibility in ##Platform_Name## Chips control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Chips control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Chips control

The Chips control follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Chips control is outlined below.

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
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes" /> - All features of the control meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate" /> - Some features of the control do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No" /> - The control does not meet the requirement.</div>

## WAI-ARIA attributes

The Chips control follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) patterns to meet accessibility standards. The following ARIA attributes are used in the Chips control:

| Attributes | Purpose |
| --- | --- |
| `role=listbox` | Indicates the ChipList control wrapper element as `listbox`. |
| `role=option` | Used to convey a significant and contextual message to the user(ChipList). |
| `role=button` | Used to convey a significant and contextual message to the user(Single Chip). |
| `aria-label` | Provides an accessible name for the Chip. |
| `aria-selected` | Indicates the element is selected. |
| `aria-disabled` | Indicates element is perceivable but disabled. |
| `aria-multiselectable` | Indicates multiple items to be selected. |

## Keyboard interaction

The Chips control followed the [keyboard interaction guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/button/#keyboardinteraction), making it accessible for users who rely on assistive technologies (AT) or keyboard navigation. The following keyboard shortcuts are supported by the Chips control:

| Keyboard shortcuts | Actions |
|------------|-------------------|
| <kbd>Enter / Space</kbd> | Selects the targeted chip from the ChipList/ChipCollection. |
| <kbd>Delete / Backspace </kbd> | Deletes the targeted chip from the ChipList/ChipCollection. |

## Ensuring accessibility

The accessibility levels of the Chips control are ensured through [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Chips control can be evaluated in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/chips.html) in a new window to test the accessibility of the Chips control with accessibility tools.

{% previewsample "page.domainurl/code-snippet/chips/accessibility-cs1" %}

## See Also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## controls](../common/accessibility)
