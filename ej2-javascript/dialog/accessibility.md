---
layout: post
title: Accessibility in ##Platform_Name## Dialog | Syncfusion
description: Build accessible ##Platform_Name## Dialog experiences with WAI-ARIA roles, modal/non-modal states, keyboard navigation, and screen reader compatibility.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Dialog

The Dialog component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Dialog component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The Dialog is characterized by complete ARIA accessibility support, which helps make it accessible to on-screen readers and other assistive technology devices. This component is designed with reference to the guidelines document given in [WAI ARIA Accessibility Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal).

The Dialog component uses the `Dialog` role and the following ARIA properties on its element based on its state.

| **Property** | **Functionalities** |
| --- | --- |
| aria-describedby | It indicates the Dialog content description is notified to the user through assistive technologies. |
| aria-labelledby | The Dialog title is notified to the user through assistive technologies. |
| aria-modal | For a modal Dialog, its value is `true`; for a non-modal Dialog, its value is `false`. |
| aria-grabbed | When the draggable Dialog is enabled and dragging starts, its value is `true`; when dragging stops, its value is `false`. |

## Keyboard interaction

The keyboard interaction of the Dialog component is designed based on [WAI-ARIA Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) described for Dialog. The user can use the following shortcut keys to interact with the Dialog.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Esc</kbd></td><td>
Closes the Dialog. This functionality can be controlled by using
<a href="https://ej2.syncfusion.com/javascript/documentation/api/dialog/#closeonescape" target="_blank" aria-label="closeOnEscape property documentation"> `closeOnEscape`</a> </td></tr>
<tr>
<td>
<kbd>Enter</kbd></td><td>
When a Dialog button or any input (except a textarea) is focused, pressing Enter triggers the click event of the primary button. The Enter key does not work when the Dialog content contains a textarea with initial focus; in that case, use Ctrl + Enter.</td></tr>
<tr>
<td>
<kbd>Ctrl + Enter</kbd></td><td>
When the Dialog content contains a textarea and it is in focus state, press Ctrl + Enter to call the click event function associated with the primary button.</td></tr>
<tr>
<td>
<kbd>Tab</kbd></td><td>
Focus moves to the next focusable element within the Dialog.</td></tr>
<tr>
<td>
<kbd>Shift + Tab</kbd></td><td>
Focus moves to the previous focusable element within the Dialog. When the first focusable element in the Dialog is focused, pressing Shift + Tab moves the focus to the last focusable element.</td></tr>
</table>

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/access-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/access-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/access-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/access-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/access-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/access-cs1" %}
{% endif %}

## See Also

* [Show dialog with fullscreen](./how-to/show-dialog-with-full-screen)

## Ensuring accessibility

The Dialog component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Dialog component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/dialog.html) in a new window to evaluate the accessibility of the Dialog component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/dialog.html" %}

## See Also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> components](../common/accessibility)