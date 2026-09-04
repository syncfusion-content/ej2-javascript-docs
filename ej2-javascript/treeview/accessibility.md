---
layout: post
title: Accessibility in ##Platform_Name## TreeView | Syncfusion
description: Learn how to improve accessibility in the Syncfusion ##Platform_Name## TreeView control for inclusive, keyboard-friendly navigation.
platform: ej2-javascript
control: Accessibility
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## TreeView

The TreeView control follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the TreeView control is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
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
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the control meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the control do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The control does not meet the requirement.</div>

## WAI-ARIA attributes

The TreeView control follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/treeview) patterns to ensure accessibility. The following ARIA attributes are used in the TreeView control:

| Attributes | Purpose |
| --- | --- |
| `role=tree` | Specifies the role of the element as a tree that contains the tree items. |
| `role=treeitem` | Specifies the role of each node within the tree. |
| `role=group` | Specifies the role of each parent node container. |
| `role=checkbox` | Indicates the checkbox control within a tree item element. |
| `aria-multiselectable` | Indicates whether the TreeView enables multiple selection or not. |
| `aria-expanded` | Indicates whether the parent node is expanded or collapsed. |
| `aria-selected` | Indicates whether a node is selected. |
| `aria-grabbed` | Indicates the grabbed (selected for drag) state during drag-and-drop of a node. |
| `aria-level` | Indicates the level of a node in the TreeView. |
| `aria-checked` | Indicates the current checked state of a TreeView checkbox. |
| `aria-label` | Provides an accessible name for the TreeView checkbox. |
| `aria-activedescendant` | Identifies the currently active element when focusing on the TreeView. |
| `aria-disabled` | Indicates that the element is perceivable but disabled. |

## Keyboard interaction

The TreeView control follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/treeview#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the TreeView control.

| Interaction Keys | Description |
|------|---------|
| <kbd>Arrow Up</kbd> | Goes to the previous node. |
| <kbd>Arrow Down</kbd> | Goes to the next node. |
| <kbd>Arrow Right</kbd> | Expands the current node. |
| <kbd>Arrow Left</kbd> | Collapses the current node. |
| <kbd>Home</kbd> | Goes to the first node. |
| <kbd>End</kbd> | Goes to the last node. |
| <kbd>F2</kbd> | Edits the focused node. |
| <kbd>Esc</kbd> | Focuses out the edit state without saving the edited text. |
| <kbd>Enter</kbd> | Selects the focused node/saves the edited text. |
| <kbd>Space</kbd> | Checks the current node. |
| <kbd>Ctrl + A</kbd> | Selects all nodes. |

## Ensuring accessibility

The TreeView control's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the TreeView control is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/treeview.html) in a new window to evaluate the accessibility of the TreeView control with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/treeview.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## controls](../common/accessibility)
