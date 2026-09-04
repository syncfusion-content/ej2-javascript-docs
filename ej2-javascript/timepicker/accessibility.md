---
layout: post
title: Accessibility in ##Platform_Name## TimePicker | Syncfusion
description: Discover accessibility support in ##Platform_Name## TimePicker, including WCAG, Section 508, screen reader, RTL, and keyboard navigation compliance.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## TimePicker

The TimePicker component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the TimePicker component is outlined below.

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

Web accessibility makes web applications and its content more accessible to people with disabilities without any barriers. It especially tracks the dynamic value changes and DOM changes.

The TimePicker component has covered the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices) specifications with the following list of WAI-ARIA
attributes: `aria-haspopup`, `aria-selected`, `aria-disabled`, `aria-activedescendant`, `aria-expanded`, `aria-owns`, and `aria-autocomplete`.

Here in the TimePicker, the `combobox` plays the role of input element, and the `listbox` plays the role of popup element.

* **Aria-haspopup**: Provides the information about whether this element displays a pop-up window or not.

* **Aria-selected**: Indicates the current selected value of the TimePicker component.

* **Aria-disabled**: Indicates the disabled state of the TimePicker component.

* **Aria-expanded**: Indicates the expanded state of the popup.

* **Aria-autocomplete**: Indicates whether input completion suggestions are provided or not.

* **Aria-owns**: Attribute that creates a parent/child relationship between two DOM elements in the accessibility layer.

* **Aria-activedescendant**: Attribute that helps in managing the current active child of the TimePicker component.

* **Role**: Attribute that gives assistive technology information for handling each element in a widget.

## Keyboard interaction

Keyboard accessibility is one of the most important aspects of web accessibility. People with disabilities like blind and those who have motor disabilities or birth defects use keyboard shortcuts more than the mouse.

The TimePicker component has built-in keyboard accessibility support by following the [WAI-ARIA practices](http://www.w3.org/WAI/PF/aria-practices).

> It supports the following list of shortcut keys to interact with the TimePicker control.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Up Arrow</kbd> | Navigates and selects the previous item. |
| <kbd>Down Arrow</kbd> | Navigates and selects the next item. |
| <kbd>Left Arrow</kbd> | Moves the cursor towards the arrow key pressed direction. |
| <kbd>Right Arrow</kbd> | Moves the cursor towards the arrow key pressed direction. |
| <kbd>Home</kbd> | Navigates and selects the first item. |
| <kbd>End</kbd> | Navigates and selects the last item. |
| <kbd>Enter</kbd> | Selects the currently focused item and closes the popup. |
| <kbd>Alt + Up Arrow</kbd> | Closes the popup. |
| <kbd>Alt + Down Arrow</kbd> | Opens the popup. |
| <kbd>Esc</kbd> | Closes the popup. |

In the below sample, use the `alt+t` keys to focus the TimePicker component.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timepicker/keyboard-interaction-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timepicker/keyboard-interaction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timepicker/keyboard-interaction-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timepicker/keyboard-interaction-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timepicker/keyboard-interaction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timepicker/keyboard-interaction-cs1" %}
{% endif %}

## Ensuring accessibility

The accessibility levels of the TimePicker component are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the TimePicker component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/time-picker.html) in a new window to evaluate the component's accessibility with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/time-picker.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> components](../common/accessibility)