---
layout: post
title: Transform in ##Platform_Name## Image Editor | Syncfusion
description: Rotate, flip, zoom, and pan images and their annotations in the ##Platform_Name## Image Editor with the rotate, flip, and zoom methods, with undo/redo support.
platform: ej2-javascript
control: Transform 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Transform in ##Platform_Name## Image Editor

The Image Editor provides a range of transformation options for manipulating both the image and its annotations. These options include rotation, flipping, zooming, and panning. These transformations offer flexibility in adjusting the image and enhancing its visual appearance.

## Rotate an image

The Image Editor allows you to rotate the image and its annotations by a specific number of degrees clockwise or anticlockwise using the [`rotate`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#rotate) method. This method takes a single parameter: the angle of rotation in degrees. A positive value rotates the image clockwise, while a negative value rotates it anticlockwise. The method returns `void`.

> **Note:** It is recommended to pass values in multiples of 90&#176; (e.g., 90, 180, -90) for proper rotation alignment.

Here is an example of rotating an image in a button click event.

In the following example, the `rotate` method is used to rotate the image.

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

The Image Editor provides the [`flip`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#flip) method, which allows you to flip both the image and its annotations either horizontally or vertically. This method takes a single parameter of type [`Direction`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#direction), which specifies the direction in which the flip operation should be applied. The method returns `void`.

The `Direction` parameter accepts two values: `Horizontal` and `Vertical`. When you choose `Horizontal`, the image and annotations are flipped along the horizontal axis, resulting in a mirror effect. Selecting `Vertical` flips them along the vertical axis, producing a vertical mirror effect. 

Here is an example of flipping an image in a button click event.

In the following example, the `flip` method is used to flip the image.

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

## Straighten an image

The straightening feature in the Image Editor allows users to adjust an image by rotating it clockwise or counterclockwise. The rotation degree value should be within the range of -45 to +45 degrees for accurate straightening. Positive values indicate clockwise rotation, while negative values indicate counterclockwise rotation. The Image Editor control includes a [`straightenImage`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#straightenimage) method, which allows you to adjust the degree of an image. This method takes one parameter that defines how the straightening is performed. The method returns `void`.

* degree - Specifies the amount of rotation (in degrees) for straightening the image, in the range -45 to +45. Positive values indicate clockwise rotation, while negative values indicate counterclockwise rotation.

Here is an example of straightening the image. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/straightening-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/straightening-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/straightening-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/straightening-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/straightening-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/straightening-cs1" %}
{% endif %}

## Zoom in or out of an image

The Image Editor allows you to magnify an image using the [`zoom`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#zoom) method. This method lets you zoom in and out of the image and provides a more detailed view of its hidden areas. This method takes two parameters to perform zooming. The method returns `void`.

* zoomFactor - Specifies a value (number) to control the level of magnification applied to the image.

* zoomPoint - Specifies the x and y coordinates of a point as `ImageEditorPoint` on the image to perform zooming.

### Minimum and maximum zoom level

The [`minZoomFactor`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#minzoomfactor) property allows you to specify the minimum level of zoom that is allowed for an image. By setting this property, you can prevent the image from being zoomed out beyond a certain point, ensuring that it remains visible and usable even at the smallest zoom level.

By default, the `minZoomFactor` value is set to 0.1, meaning that the image can be reduced to 10% of its original size.

The [`maxZoomFactor`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#maxzoomfactor) property allows you to define the maximum level of zoom permitted for an image. This property sets a limit on how much the image can be magnified, preventing excessive zooming that may result in a loss of image quality or visibility.

By default, the `maxZoomFactor` value is set to 10, meaning that the image can be magnified to 10× its original dimensions. This ensures that the zooming functionality remains within reasonable bounds and maintains the integrity of the image.

Here is an example of specifying the `minZoomFactor` and `maxZoomFactor` properties in the [`zoomSettings`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#zoomsettings) options in an image editor. 

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

## Panning an image

The Image Editor allows you to pan an image when the image exceeds the canvas size or selection range. When zooming in on an image or applying a selection for cropping, it is common for the image to exceed the size of the canvas or exceed the selection range. Panning is then used to view the entire image, by clicking on the canvas and dragging it in the direction you want to move.

In the following example, you can enable panning using the [`pan`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#pan) method in the button click event.

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

## Panning event 

The [`panning`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#panning) event is triggered when the user begins dragging the image within the canvas. The event argument provides an opportunity to perform actions in response to the panning gesture, using [`PanEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/paneventargs) to handle the panning action.

The [`PanEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/paneventargs) provides the following parameters:

* PanEventArgs.startPoint - The x and y coordinates as `ImageEditorPoint` for the start point.

* PanEventArgs.endpoint - The x and y coordinates as `ImageEditorPoint` for the end point.

* PanEventArgs.cancel - Specifies a boolean value that, when set to `true`, cancels the panning action. 

## Zooming event

The [`zooming`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#zooming) event is triggered when zooming the image. The event argument provides information about the zooming action, such as the amount of zooming performed, using [`ZoomEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/zoomeventargs) to handle the action.

The [`ZoomEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/zoomeventargs) provides the following parameters:

* ZoomEventArgs.zoomPoint - The x and y coordinates as [`Point`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#point) for the zoom point.

* ZoomEventArgs.previousZoomFactor - The previous zoom factor applied in the image editor.

* ZoomEventArgs.currentZoomFactor - The current zoom factor to be applied in the image editor.

* ZoomEventArgs.cancel - Specifies a boolean value that, when set to `true`, cancels the zooming action.

* ZoomEventArgs.zoomTrigger - The type of zooming performed in the image editor (e.g., mouse wheel, pinch, toolbar or keyboard).

## Rotating event

The [`rotating`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#rotating) event is triggered when rotating the image. The event argument provides information about the rotating action, such as the amount of rotation performed, using [`RotateEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/rotateeventargs) to handle the action.

The [`RotateEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/rotateeventargs) provides the following parameters:

* RotateEventArgs.previousDegree - The degree of rotation before the recent rotation action was applied in the Image Editor.

* RotateEventArgs.currentDegree - The current degree of rotation after the rotation action has been performed in the Image Editor.

* RotateEventArgs.cancel - Specifies a boolean value that, when set to `true`, cancels the rotating action.

## Flipping event

The [`flipping`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#flipping) event is triggered when flipping the image. The event argument provides information about the flipping action, such as the direction of the flip performed, using [`FlipEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/flipeventargs) to handle the action.

The [`FlipEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/flipeventargs) provides the following parameters:

* FlipEventArgs.direction - The flip direction as [`Direction`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#direction) to be applied in the image editor.

* FlipEventArgs.cancel - Specifies a boolean value that, when set to `true`, cancels the flip action.