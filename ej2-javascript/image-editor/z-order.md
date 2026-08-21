---
layout: post
title: Z-Order in ##Platform_Name## Image Editor | Syncfusion
description: Adjust annotation layering in the ##Platform_Name## Image Editor with Bring Forward, Send Backward, Bring to Front, and Send to Back z-order operations.
platform: ej2-javascript
control: Z-order
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Z-Order in ##Platform_Name## Image Editor

We are excited to introduce `z-order` support in the Image Editor. It's a powerful tool that allows users to adjust the positioning of annotations. This feature is particularly useful for designing personalized templates like greeting cards or posters, where managing the layering of multiple annotations is crucial for a polished final product.
 
Types of adjustment in the Image Editor `z-order` support.

* [Bring forward](https://helpej2.syncfusion.com/documentation/api/image-editor/index-default#bringforward) - Switch the selected annotation with the annotation one layer ahead of it.

* [Sent Backward](https://helpej2.syncfusion.com/documentation/api/image-editor/index-default#sendbackward) - Switch the selected annotation with the annotation one layer behind it.

* [Bring to Front](https://helpej2.syncfusion.com/documentation/api/image-editor/index-default#bringtofront) - Move the selected annotation to ahead of all other annotations.

* [Send to Back](https://helpej2.syncfusion.com/documentation/api/image-editor/index-default#sendtoback) - Move the selected annotation to behind all other annotations.

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