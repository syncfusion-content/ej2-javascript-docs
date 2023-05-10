---
layout: post
title: Accessibility in ##Platform_Name## Check box control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Check box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Check box control

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies. CheckBox provides built-in compliance with `WAI-ARIA` specifications. `WAI-ARIA` support is achieved through the attributes like `aria-checked` and `aria-disabled`. It helps the people with disabilities by providing information about the widget for assistive technology in the screen readers. CheckBox component contains the `checkbox` role.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | Indicates the type of input element. |
| aria-checked | Indicates whether the input is checked, unchecked, or represents mixture of checked and unchecked values. |
| aria-disabled | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. |

## Keyboard interaction

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Space</kbd></td><td>
When the checkbox has focus, pressing the Space key changes the state of the checkbox.</td></tr>
</table>

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/check-box/state-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/check-box/state-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/check-box/state-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/check-box/state-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/check-box/state-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/check-box/state-cs1" %}
{% endif %}