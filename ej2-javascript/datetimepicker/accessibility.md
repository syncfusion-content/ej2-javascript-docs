---
layout: post
title: Accessibility in ##Platform_Name## DateTime Picker | Syncfusion
description: Discover accessibility support in ##Platform_Name## DateTime Picker, including screen reader, RTL, color contrast, and keyboard navigation compliance.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## DateTime Picker

The DateTime Picker component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the DateTime Picker component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
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

Web accessibility defines a way to make web content and web applications more accessible to people with disabilities. It especially helps in dynamic content changes and advanced user interface controls developed with AJAX, HTML, JavaScript, and related technologies.

The DateTime Picker provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices) specifications. WAI-ARIA support is achieved through the attributes like `aria-expanded`, `aria-disabled`, and `aria-activedescendant` applied to the input element.

To know about the accessibility of Calendar, refer to the Calendar's [Accessibility](../calendar/accessibility/) section.

These attributes help provide information about the widget for assistive technology to people with disabilities in screen reader.

* **Aria-expanded**: This attribute indicates the state of a collapsible element.

* **Aria-disabled**: This attribute indicates the disabled state of the DateTime Picker component.

* **Aria-activedescendant**: This attribute helps in managing the current active child of the DateTime Picker component.

## Keyboard interaction

The following keys can be used to interact with the DateTime Picker. The component implements the keyboard navigation support by following the [WAI-ARIA practices](http://www.w3.org/WAI/PF/aria-practices).

The DateTime Picker supports the following list of shortcut keys.

Input Navigation

Before opening the popup, the following list of keys can be used to control the popup element of the DateTime Picker.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Alt + Down Arrow</kbd> | Opens the select popup |
| <kbd>Alt + Down Arrow + Alt + Down Arrow</kbd> | Toggles between two popups |

Calendar Navigation

The following list of keys can be used to interact with the Calendar after the DateTime Picker popup has opened.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Up Arrow</kbd>  | Focuses the previous week date. |
| <kbd>Down Arrow</kbd>  | Focuses the next week date. |
| <kbd>Left Arrow</kbd>  | Focuses the previous date. |
| <kbd>Right Arrow</kbd>  | Focuses the next date. |
| <kbd>Home</kbd>  | Focuses the first date in the month. |
| <kbd>End</kbd>  | Focuses the last date in the month. |
| <kbd>Page Up</kbd>  | Focuses the same date in the previous month. |
| <kbd>Page Down</kbd>  | Focuses the same date in the next month. |
| <kbd>Enter</kbd>  | Selects the currently focused date. |
| <kbd>Shift + Page Up</kbd>  | Focuses the same date in the previous year. |
| <kbd>Shift + Page Down</kbd>  | Focuses the same date in the next year. |
| <kbd>Control + Up Arrow</kbd>  | Moves into the inner level of view like month-year, year-decade. |
| <kbd>Control + Down Arrow</kbd>  | Moves out from the depth level view like decade-year, year-month. |
| <kbd>Control + Home</kbd>  | Focuses the starting date in the current year. |
| <kbd>Control + End</kbd>  | Focuses the ending date in the current year. |

The following list of shortcut keys can be used to interact with the TimePicker after the TimePicker popup has opened.

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

> To focus the DateTime Picker component, use the `alt+t` keys.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datetimepicker/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs1" %}
{% endif %}

## Ensuring accessibility

The accessibility levels of the DateTime Picker component are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the DateTime Picker component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/date-time-picker.html) in a new window to evaluate the component's accessibility with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/date-time-picker.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> components](../common/accessibility)