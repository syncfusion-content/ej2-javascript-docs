---
layout: post
title: Accessibility in ##Platform_Name## Button group control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Button group control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Button group control

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies.
ButtonGroup provides built-in compliance with `WAI-ARIA` specifications. It helps the people with disabilities by providing information about the widget for assistive technology in the screen readers. ButtonGroup component contains the `group` role.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | Indicates the `group` for the container that holds two or more buttons. |

## Keyboard interaction

### Normal behavior

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Keyboard shortcuts</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td><kbd>Tab</kbd></td>
<td>Focuses the next button in the ButtonGroup.</td>
</tr>
<tr>
<td><kbd>Enter/Space</kbd></td>
<td>Activates the focused button in the ButtonGroup.</td>
</tr>
</table>

### Checkbox type behavior

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Keyboard shortcuts</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td><kbd>Tab</kbd></td>
<td>Focuses the next button in the ButtonGroup.</td>
</tr>
<tr>
<td><kbd>Space</kbd></td>
<td>Activates the focused button in the ButtonGroup.</td>
</tr>
</table>

### Radiobutton type behavior

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Keyboard shortcuts</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td><kbd>Tab</kbd></td>
<td>Focuses the active button in the ButtonGroup.</td>
</tr>
<tr>
<td><kbd>Arrow Keys</kbd></td>
<td>Activates next/previous button in the ButtonGroup.</td>
</tr>
</table>

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/accessibility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/accessibility-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/accessibility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button-group/accessibility-cs1" %}
{% endif %}