---
layout: post
title: Xhtml validation in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Xhtml validation in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Xhtml validation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Xhtml validation in ##Platform_Name## Rich text editor control

The editor provides an option to validate the source content of the Rich Text Editor against the XHTML standard using the 'enableXhtml' property. When you enter or modify content in the editor, it continuously checks the XHTML source content and removes elements and attributes that are not valid.

The editor checks the following settings on validation:

## Attributes

* Must be specified in lowercase.
* Proper use of quotation marks around the attributes.
* Must be valid attributes for corresponding HTML element.
* All the required attributes must be included in the HTML element.

## HTML Elements

* Must be in lowercase.
* All opening tags must be closed.
* Allows only the valid HTML elements.
* Elements must be properly nested.
* All elements must have one root element.
* Should not use inline elements inside the block elements.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/xhtml-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/xhtml-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/xhtml-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/xhtml-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/xhtml-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/xhtml-cs1" %}
{% endif %}
