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

The editor includes an [`enableXhtml`](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#enablexhtml) property that allows for continuous validation of the Rich Text Editor's source content against the XHTML standard. When content is entered or modified in the editor, this feature ensures ongoing compliance by automatically removing invalid elements and attributes.

The editor checks the following settings on validation:

## Validating Attributes

* **Case Sensitivity**: All attributes must be in lowercase.
* **Quotation Marks**: Proper use of quotation marks around attribute values is enforced.
* **Validity**: Only valid attributes for corresponding HTML elements are allowed.
* **Required Attributes**: All required attributes for HTML elements must be included.

## Validating HTML Elements

* **Case Sensitivity**: All HTML tags must be in lowercase.
* **Proper Closing**: All opening tags must have corresponding closing tags.
* **Element Validity**: Only valid HTML elements are permitted.
* **Nesting**: Elements must be properly nested to maintain structure.
* **Root Element**: The content must have a single root element.
* **Element Hierarchy**: Inline elements cannot contain block elements.

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
