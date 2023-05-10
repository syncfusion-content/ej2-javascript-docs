---
layout: post
title: Transform in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Transform in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Transform 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Transform in ##Platform_Name## Image editor control

The Image Editor has the rotate, flip, and zoom transformation options and it transforms the image editor with annotations.

## Rotate

Rotate images with annotation to 90, 180, 270, and 360 degrees clockwise and anti-clockwise. Rotating the image can be done by either using a toolbar or [`rotate`](../../api/image-editor/#rotate) method.

In the [`rotate`](../../api/image-editor/#rotate) method, the image can be rotated left or right. The rotate method has the following parameters. A Positive integer value for clockwise and a negative integer value for anti-clockwise rotation.

     * degree - Specifies a degree to rotate an image.

In the toolbar, rotate the image by clicking the Transform dropdown button and picking the RotateLeft/ RotateRight option from that popup.

In the following example, the [`rotate`](../../api/image-editor/#rotate) method is used to rotate the image.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/transform-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/transform-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/transform-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/transform-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/transform-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/transform-cs1" %}
{% endif %}

## Flip

Flip images with annotations horizontally/vertically. Flipping the image can be done by either using a toolbar or the flip method.

In the flip method, the image can be flipped horizontally or vertically. The [`flip`](../../api/image-editor/#flip) method has the following parameters:

    * direction - Specifies the direction to flip the image.

In the toolbar, flip the image by clicking the Transform dropdown button and picking the Horizontal Flip/Vertical Flip  option from that popup.

In the following example, the [`flip`](../../api/image-editor/#flip) method is used to flip the image.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/transform-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/transform-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/transform-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/transform-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/transform-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/transform-cs2" %}
{% endif %}

## Zoom

Magnify the image using zooming, and panning to see the hidden zones of an image. To Zoom the image can be done by either using a toolbar or the [`zoom`](../../api/image-editor/#zoom) method.

In [`zoom`](../../api/image-editor/#zoom)  method, the image can be zoom in and zoom out. The zoom method has the following parameters.

    * value - Specifies a value to be zoomed on the image.

### Zoom in

To perform the Zoom in the image. In toolbar, you can clicking the Zoom In button in toolbar.

In the following example, you can using the [`zoom`](../../api/image-editor/#zoom) method in the button click event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/transform-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/transform-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/transform-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/transform-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/transform-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/transform-cs3" %}
{% endif %}

### Zoom out

To perform the Zoom out the image, In toolbar, you can clicking the Zoom out button in toolbar.

In the following example, you can using the [`zoom`](../../api/image-editor/#zoom) method in the button click event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/transform-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/transform-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/transform-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/transform-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/transform-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/transform-cs4" %}
{% endif %}

### Panning

To Perform the panning. Enabled or disables the panning option. In toolbar, you can clicking the Zoom in button in toolbar, then pan button enabled

In the following example, you can use the [`pan`](../../api/image-editor/#pan) method in the button click event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/transform-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/transform-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/transform-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/transform-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/transform-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/transform-cs5" %}
{% endif %}
