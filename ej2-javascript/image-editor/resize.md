---
layout: post
title: Resize in ##Platform_Name## Image Editor | Syncfusion
description: Resize images by width and height in the ##Platform_Name## Image Editor with the resize method, with optional aspect-ratio preservation and a resizing event.
platform: ej2-javascript
control: Resize
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resize in ##Platform_Name## Image Editor

The resize feature in the Image Editor lets you modify the dimensions of an image to meet your specific requirements, such as printing, web display, or other use cases.

## Apply a resize to the image 

The Image Editor control includes a [`resize`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#resize) method, which allows you to adjust the size of an image. This method takes the following parameters that define how the resizing is performed. The method returns `void`.

* width: Specifies the resizing width (number, in pixels) of the image.

* height: Specifies the resizing height (number, in pixels) of the image.

* isAspectRatio: Specifies a boolean value indicating whether the image should maintain its original aspect ratio during resizing.
    * When set to `true`, the image maintains its original aspect ratio. The width is applied as specified, and the height is automatically adjusted to maintain the aspect ratio.
    * When set to `false`, the image is resized according to the specified width and height, without maintaining the aspect ratio.

    The default value is `false`.

Here is an example of resizing the image using the `resize` method. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/resize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/resize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/resize-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/resize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/resize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/resize-cs1" %}
{% endif %}

## Resizing event

The [`resizing`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#resizing) event is triggered when resizing the image. The event argument provides the previous and current width and height of the image.

The [`ResizeEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeeventargs) provides the following parameters:

* [`ResizeEventArgs.previousWidth`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeeventargs#previouswidth) - The width of the image before resizing is performed.

* [`ResizeEventArgs.previousHeight`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeeventargs#previousheight) - The height of the image before resizing is performed.

* [`ResizeEventArgs.width`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeeventargs#width) - The width of the image after resizing is performed.

* [`ResizeEventArgs.height`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeeventargs#height) - The height of the image after resizing is performed.

* [`ResizeEventArgs.isAspectRatio`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeeventargs#isaspectratio) - Specifies a boolean indicating whether the resize maintained the image aspect ratio.

* [`ResizeEventArgs.cancel`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeeventargs#cancel) - Specifies a boolean value that, when set to `true`, cancels the resizing action.