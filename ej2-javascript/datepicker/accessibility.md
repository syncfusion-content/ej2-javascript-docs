---
layout: post
title: Accessibility in ##Platform_Name## Datepicker control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Datepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Datepicker control

The DatePicker component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the DatePicker component is outlined below.

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


The Web accessibility defines a way to make web content and web applications more accessible to disabled people. It especially helps the dynamic content change and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.

DatePicker provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices) specifications. WAI-ARIA
supports is achieved through the attributes like `aria-expanded`, `aria-disabled`, `aria-activedescendant` applied to the input element.

To know about the accessibility of Calendar refer to the Calendar's [Accessibility](../calendar/accessibility/) section.

It helps to provide information about the widget for assistive technology to the disabled person in screen reader.

* **Aria-expanded**: attributes indicates the state of a collapsible element.

* **Aria-disabled**: attribute indicates the disabled state of this DatePicker component.

* **Aria-activedescendent**: attribute helps in managing the current active child of the DatePicker component.

## Keyboard Interaction

You can use the following keys to interact with the DatePicker. The component implements the keyboard navigation support by following the  [WAI-ARIA practices](http://www.w3.org/WAI/PF/aria-practices).

It supports the below list of shortcut keys.

Input Navigation

Before opening the popup, use the below list of keys to
control the popup element.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Alt +  Down Arrow</kbd> | Opens the popup. |
| <kbd>Alt +  Up Arrow</kbd> | Closes the popup.|
| <kbd>Esc</kbd> | closes the popup. |

Calendar Navigation

Use the below list of keys to navigate the Calendar after the popup has opened.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Upper Arrow</kbd>  | Focus the previous week date. |
| <kbd>Down Arrow</kbd>  | Focus the next week date. |
| <kbd>Left Arrow</kbd>  | Focus the previous date. |
| <kbd>Right Arrow</kbd>  | Focus the next date. |
| <kbd>Home</kbd>  | Focus the first date in the month. |
| <kbd>End</kbd>  | Focus the last date in the month. |
| <kbd>Page Up</kbd>  | Focus the same date in the previous month. |
| <kbd>Page Down</kbd>  | Focus the same date in the next month. |
| <kbd>Enter</kbd>  | Select the currently focused date. |
| <kbd>Shift + Page Up</kbd>  | Focus the same date in the previous year. |
| <kbd>Shift + Page Down</kbd>  | Focus the same date in the previous year. |
| <kbd>Control + Upper Arrow</kbd>  | Moves into the inner level of view like month-year, year-decade |
| <kbd>Control + Down Arrow</kbd>  | Moves out from the depth level view like decade-year, year-month |
| <kbd>Control + Home</kbd>  | Focus the starting date in the current year. |
| <kbd>Control + End</kbd>  | Focus the ending date in the current year. |

> To focus the DatePicker component use the `alt+t` keys.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datepicker/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs1" %}
{% endif %}

## Ensuring accessibility

The DatePicker component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the DatePicker component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/date-picker.html) in a new window to evaluate the accessibility of the DatePicker component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/date-picker.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> components](../common/accessibility)