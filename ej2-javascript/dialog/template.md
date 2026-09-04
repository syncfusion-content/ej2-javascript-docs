---
layout: post
title: Template in ##Platform_Name## Dialog | Syncfusion
description: Customize the ##Platform_Name## Dialog header, footer, and content using header, footerTemplate, buttons, and content with HTML strings or text.
platform: ej2-javascript
control: Template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## Dialog

In Dialog, template support is provided to the header, footer, and content sections. So any text or HTML content can be appended in these sections.

## Header

The Dialog header content can be provided through the [`header`](https://ej2.syncfusion.com/javascript/documentation/api/dialog#header) property, and it will allow both text and any HTML content as a string. Also in the header, a close button is provided as built-in support, and this can be enabled through the [`showCloseIcon`](https://ej2.syncfusion.com/javascript/documentation/api/dialog#showcloseicon) property.

## Footer

The Dialog footer can be enabled by adding the built-in [`buttons`](https://ej2.syncfusion.com/javascript/documentation/api/dialog#buttons) or providing any HTML string through the [`footerTemplate`](https://ej2.syncfusion.com/javascript/documentation/api/dialog#footertemplate).

> The [`buttons`](https://ej2.syncfusion.com/javascript/documentation/api/dialog#buttons) and [`footerTemplate`](https://ej2.syncfusion.com/javascript/documentation/api/dialog#footertemplate) properties can't be used at the same time. If both are set, the `footerTemplate` is ignored and the `buttons` are rendered.

## Content

The Dialog content can be provided through the [`content`](https://ej2.syncfusion.com/javascript/documentation/api/dialog#content) property, and it accepts both text and HTML strings as content.

The below example demonstrates the usage of header, footer, and content templates in the Dialog control.

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
