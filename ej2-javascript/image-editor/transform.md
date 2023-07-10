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

The Image Editor provides a range of transformation options for manipulating both the image and its annotations. These options include rotation, flipping, zooming, and panning. These transformations offer flexibility in adjusting the image and enhancing its visual appearance.

## Rotate an image

The Image Editor allows to rotate the image and its annotations by a specific number of degrees clockwise or anti-clockwise using [`rotate`](../../api/image-editor/#rotate) method. This method takes a single parameter: the angle of rotation in degrees. A positive value will rotate the image clockwise, while a negative value will rotate it anti-clockwise.

Here is an example of rotating an image in a button click event.

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

## Flip an image

The Image Editor provides the [`flip`](../../api/image-editor/#flip) method, which allows you to flip both the image and its annotations either horizontally or vertically. This method takes a single parameter of type [`Direction`](../../api/image-editor/#Direction), which specifies the direction in which the flip operation should be applied. 

The [`Direction`](../../api/image-editor/#Direction) parameter accepts two values: 'Horizontal' and 'Vertical'. When you choose 'Horizontal', the image and annotations will be flipped along the horizontal axis, resulting in a mirror effect. On the other hand, selecting 'Vertical' will flip them along the vertical axis, producing a vertical mirror effect. 

Here is an example of flipping an image in a button click event.

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

## Zoom in or out an image

The Image Editor allows to magnify an image using the [`zoom`](../../api/image-editor/#zoom) method. This method allows one to zoom in and out of the image and provides a more detailed view of the image's hidden areas. This method takes two parameters to perform zooming.

zoomFactor - Specifies a value to controlling the level of magnification applied to the image.

zoomPoint - Specifies x and y coordinates of a point as [`Point`](../../api/image-editor/#Point) on image to perform zooming.

Here is an example of zooming an image in a button click event.

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

## Maximum and Minimum zoom level

The [`maxZoomFactor`](../../api/image-editor/#maxZoomFactor) property is a useful feature in the Image Editor that allows you to define the maximum level of zoom permitted for an image. This property sets a limit on how much the image can be magnified, preventing excessive zooming that may result in a loss of image quality or visibility. 

By default, the [`maxZoomFactor`](../../api/image-editor/#maxZoomFactor) value is set to 10, meaning that the image can be zoomed in up to 10 times its original size. This ensures that the zooming functionality remains within reasonable bounds and maintains the integrity of the image. 

The [`minZoomFactor`](../../api/image-editor/#minZoomFactor) property allows you to specify the minimum level of zoom that is allowed for an image. By setting this property, you can prevent the image from being zoomed out beyond a certain point, ensuring that it remains visible and usable even at the smallest zoom level. 

By default, the [`minZoomFactor`](../../api/image-editor/#minZoomFactor) value is set to 0.1, meaning that the image can be zoomed out up to 10 times its original size. 

Here is an example of specifying [`minZoomFactor`](../../api/image-editor/#minZoomFactor) and [`maxZoomFactor`](../../api/image-editor/#maxZoomFactor) property in [`zoomSettings`](../../api/image-editor/#zoomSettings) options in an image editor. 

## Panning an image

The Image Editor allows to pan an image when the image exceeds the canvas size or selection range. When zooming in on an image or applying a selection for cropping, it is common for the image to exceed the size of the canvas or exceed the selection range. So, the panning is used to view the entire image, by clicking on the canvas and dragging it in the direction they want to move.

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


## Zooming event

The [`zooming`](../../api/image-editor/#zooming) event is triggered when performing zooming the image. This event can be used to perform certain actions, such as updating the position of the image. This event is passed an object that contains information about the zooming event, such as the amount of zooming performed. 

The parameter available in the [`zooming`](../../api/image-editor/#zooming) event is,

* ZoomEventArgs.zoomPoint - The x and y coordinates as [`Point`](../../api/image-editor/#Point) for the zoom point.

* ZoomEventArgs.previousZoomFactor - The previous zoom factor applied in the image editor. 

* ZoomEventArgs.currentZoomFactor - The current zoom factor to be applied in the image editor. 

* ZoomEventArgs.cancel – Specify a boolean value to cancel the zooming action. 

* ZoomEventArgs.zoomTrigger - The type of zooming performed in the image editor.

## Rotating event

The [`rotating`](../../api/image-editor/#rotating) event is triggered when performing rotating the image. This event is passed an object that contains information about the rotating event, such as the amount of rotation performed. 

The parameter available in the [`rotating`](../../api/image-editor/#rotating) event is,

* RotateEventArgs.previousDegree: The degree of rotation before the recent rotation action was applied in the Image Editor.

* RotateEventArgs.currentDegree: The current degree of rotation after the rotation action has been performed in the Image Editor.

* RotateEventArgs.cancel - Specifies a boolean value to cancel the rotating action.

## Flipping event

The [`flipping`](../../api/image-editor/#flipping) event is triggered when performing flipping the image. This event is passed an object that contains information about the flipping event, such as the amount of flip performed. 

The parameter available in the [`flipping`](../../api/image-editor/#flipping) event is,

* FlipEventArgs.direction - The flip direction as [`Direction`](../../api/image-editor/#Direction) to be applied in the image editor.

* FlipEventArgs.cancel - Specifies a boolean value to cancel the flip action.