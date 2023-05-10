---
layout: post
title: Accessibility in ##Platform_Name## Drop down button control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Drop down button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Drop down button control

## ARIA attributes

The web accessibility makes web content and web applications more accessible for people with disabilities. Mostly it helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies. DropDownButton provides built-in compliance with `WAI-ARIA` specifications. `WAI-ARIA` support is achieved through the attributes like `aria-expanded`, `aria-owns` and `aria-haspopup` applied for action item in DropDownButton. It helps by providing information about the widget for assistive technology in the screen readers. DropDownButton component contains the `menu` role and `menuItem` role.

| Properties | Functionality |
| ------------ | ----------------------- |
| menu | Specified for an DropDownButton element. |
| menuItem | Specified for an action items. |
| aria-haspopup | Indicates the availability and type of interactive dropdown popup element. |
| aria-expanded | Indicates whether the current state of the dropdown popup can be expanded or collapsed. |
| aria-owns | Identifies elements to define a visual, functional, or contextual parent or child relationship between DOM(Document Object Model) elements where the hierarchy cannot be used to represent the relationship. |

## Keyboard interaction

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Esc</kbd></td><td>
Closes the popup.</td></tr>
<tr>
<td>
<kbd>Enter</kbd></td><td>
Opens the popup, or activates the highlighted item and closes the popup.</td></tr>
<tr>
<td>
<kbd>Space</kbd></td><td>
Opens the popup.</td></tr>
<tr>
<td>
<kbd>Up</kbd></td><td>
Navigates up or to the previous action item.</td></tr>
<tr>
<td>
<kbd>Down</kbd></td><td>
Navigates down or to the next action item.</td></tr>
<tr>
<td>
<kbd>Alt + Up Arrow</kbd></td><td>
Closes the popup.</td></tr>
<tr>
<td>
<kbd>Alt + Down Arrow</kbd></td><td>
Opens the popup</td></tr>
</table>

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/accessibility-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/accessibility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/accessibility-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/accessibility-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/accessibility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/accessibility-cs1" %}
{% endif %}