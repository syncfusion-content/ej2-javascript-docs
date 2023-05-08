---
layout: post
title: Template in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Template in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## Dialog control

In Dialog the template support is provided to the header and footer sections. So any text or HTML content can be appending in these sections.

## Header

The Dialog header content can be provided through the [`header`](../api/dialog/#header) property, and it will allow both text and any HTML content as a string. Also in header, close button is provided as built-in support, and this can be enabled through the [`showCloseIcon`](../api/dialog/#showcloseicon) property.

## Footer

The Dialog footer can be enabled by adding built-in [`buttons`](../api/dialog/#buttons) or providing any HTML string through the [`footerTemplate`](../api/dialog/#footertemplate).

> The [`buttons`](../api/dialog/#buttons) and [`footerTemplate`](../api/dialog/#footertemplate) properties can't be used at the same time.

## Content

The Dialog content can be provided through the [`content`](../api/dialog/#content) property, and it accepts both text and HTML string as content.

The below example demonstrates the usage of header, footer and content templates in the Dialog control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/template-cs1" %}
{% endif %}

## See Also

* [How to add an icon to dialog buttons](./how-to/add-an-icons-to-dialog-buttons)
* [How to customize the dialog appearance](./how-to/customize-the-dialog-appearance)
