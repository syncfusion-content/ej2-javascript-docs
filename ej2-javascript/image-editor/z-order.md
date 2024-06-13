---
layout: post
title: Z-order in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Toolbar in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Z-order
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Z-order in the ##Platform_Name## Image Editor control

We are excited to introduce `z-order` support in the Image Editor. It's a powerful tool that allows users to adjust the positioning of annotations. This feature is particularly useful for designing personalized templates like greeting cards or posters, where managing the layering of multiple annotations is crucial for a polished final product.
 
Types of adjustment in the Image Editor `z-order` support.

* Sent Backward - Switch the selected annotation with the annotation one layer behind it.

* Send to Back - Move the selected annotation to behind all other annotations.

* Bring to Front - Move the selected annotation to ahead of all other annotations.

* Bring forward - Switch the selected annotation with the annotation one layer ahead of it.

In the following example, you can use the `z-order` support.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/z-order-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/z-order-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/z-order-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/z-order-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/z-order-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/z-order-cs1" %}
{% endif %}