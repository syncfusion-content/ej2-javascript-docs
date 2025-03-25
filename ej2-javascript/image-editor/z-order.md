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

* [Bring forward](https://helpej2.syncfusion.com/documentation/api/image-editor/#bringforward) - Switch the selected annotation with the annotation one layer ahead of it.

* [Sent Backward](https://helpej2.syncfusion.com/documentation/api/image-editor/#sendbackward) - Switch the selected annotation with the annotation one layer behind it.

* [Bring to Front](https://helpej2.syncfusion.com/documentation/api/image-editor/#bringtofront) - Move the selected annotation to ahead of all other annotations.

* [Send to Back](https://helpej2.syncfusion.com/documentation/api/image-editor/#sendtoback) - Move the selected annotation to behind all other annotations.

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