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

The Image Editor provides `z-order` support to adjust the layering of annotations. This feature is useful for designing personalized templates like greeting cards or posters, where managing the layering of multiple annotations is needed for a polished final result.

> **Note:** Z-order actions are available in the quick access toolbar and can be applied only when an annotation is selected first.

The following adjustments are available through `z-order` support. Each method returns `void`.

* [Bring forward](https://helpej2.syncfusion.com/documentation/api/image-editor/index-default#bringforward) - Move the selected annotation in front of the annotation one layer ahead of it.

* [Send backward](https://helpej2.syncfusion.com/documentation/api/image-editor/index-default#sendbackward) - Move the selected annotation behind the annotation one layer behind it.

* [Bring to front](https://helpej2.syncfusion.com/documentation/api/image-editor/index-default#bringtofront) - Move the selected annotation in front of all other annotations.

* [Send to back](https://helpej2.syncfusion.com/documentation/api/image-editor/index-default#sendtoback) - Move the selected annotation behind all other annotations.

In the following example, the four `z-order` operations are applied from button clicks.

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