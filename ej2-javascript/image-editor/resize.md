---
layout: post
title: Resize in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Resize in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Resize
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resize

The resize feature in an Image Editor is a valuable tool that empowers users to modify the size or dimensions of an image to meet their specific requirements. Whether it's for printing, web display, or any other purpose, this feature allows users to tailor images to their desired specifications.

## Apply resize to the image 

The Image Editor control includes a [`resize`](https://ej2.syncfusion.com/documentation/api/image-editor/#resize) method, which allows you to adjust the size of an image. This method takes three parameters that define how the resizing should be carried out:

* width: Specifies the resizing width of the image.

* height: Specifies the resizing height of the image.

* isAspectRatio: Specifies a boolean value indicating whether the image should maintain its original aspect ratio during resizing. When set to true, the image will be resized while preserving its aspect ratio 

Here is an example of resizing the image using the [`resize`](https://ej2.syncfusion.com/documentation/api/image-editor/#resize) method. 

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

The [`resizing`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#resizing) event is triggered when resizing the image. This event provides information encapsulated within an object, which includes details about the previous and current height and width of an image.

The parameter available in [`ResizeEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeEventArgs/) is,

* [`ResizeEventArgs.previousWidth`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeEventArgs/#previouswidth) - The width of the image before resizing is performed.

* [`ResizeEventArgs.previousHeight`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeEventArgs/#previousheight) - The height of the image before resizing is performed.

* [`ResizeEventArgs.width`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeEventArgs/#width) - The width of the image after resizing is performed.

* [`ResizeEventArgs.height`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeEventArgs/#height) - The width of the image after resizing is performed.

* [`ResizeEventArgs.isAspectRatio`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeEventArgs/#isaspectratio) - The type of resizing performed such as aspect ratio or non-aspect ratio.

* [`ResizeEventArgs.cancel`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/resizeEventArgs/#cancel) - Specifies a boolean value to cancel the resizing action.