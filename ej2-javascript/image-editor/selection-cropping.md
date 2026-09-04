---
layout: post
title: Selection Cropping in ##Platform_Name## Image Editor | Syncfusion
description: Select and crop image regions as custom shapes, squares, circles, or aspect ratios in the ##Platform_Name## Image Editor with the select and crop methods.
platform: ej2-javascript
control: Selection cropping 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Selection Cropping in ##Platform_Name## Image Editor

The cropping feature in the Image Editor allows you to select and crop specific regions of an image. It offers different selection options, including custom shapes, squares, circles, and various aspect ratios such as 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 5:7, 7:5, 9:16, and 16:9. 

To perform a selection, you can use the [`select`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#select) method, which allows you to define the desired selection area within the image. Once the selection is made, you can then use the [`crop`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#crop) method to crop the image based on the selected region. This enables you to extract and focus on specific parts of the image while discarding the rest.

## Insert custom / square / circle region 

The [`select`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#select) method allows you to perform a selection based on the type of selection. Here, the `select` method is used to perform the selection as custom, circle, or square. The selection region can also be customized using the `select` method based on the following parameters. The method returns `void`.

* type - Specifies the type of selection (`custom`, `square`, `circle`, or a ratio value).

* startX - Specifies the x-coordinate of the selection region's starting point.

* startY - Specifies the y-coordinate of the selection region's starting point.

* width - Specifies the width of the selection region.

* height - Specifies the height of the selection region.

Here is an example of square selection using the `select` method. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/custom-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/custom-selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs1" %}
{% endif %}

## Insert selection based on aspect ratio

The [`select`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#select) method is used to perform the selection with the various aspect ratios such as 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 5:7, 7:5, 9:16, and 16:9. The selection region can also be customized using the `select` method based on the following parameters.

* type - Specifies the type of selection (a ratio value such as `2:3`, `3:2`, etc.).

* startX - Specifies the x-coordinate of the selection region's starting point.

* startY - Specifies the y-coordinate of the selection region's starting point.

* width - Specifies the width of the selection region.

* height - Specifies the height of the selection region.

Here is an example of ratio selection using the `select` method.

In the following example, the `select` method is used in the button click to perform the ratio selection.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/custom-selection-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/custom-selection-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs2" %}
{% endif %}

## Crop an image

The [`crop`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#crop) method crops the image based on the current selection region. It requires a prior `select` call to define the region to be cropped. The method returns `void`.

Here is an example of circle cropping using the [`select`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#select) and `crop` methods.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/custom-selection-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/custom-selection-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs3" %}
{% endif %}

## Cropping event

The [`cropping`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#cropping) event is triggered when performing cropping on the image. The event argument provides information about the cropping action, such as the start and end point of the selection region, via the [`CropEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/cropeventargs).

The [`CropEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/cropeventargs) provides the following parameters:

* CropEventArgs.startPoint - The x and y coordinates of the start point of the selection region, as a [`Point`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#point).

* CropEventArgs.endPoint - The x and y coordinates of the end point of the selection region, as a [`Point`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#point).

* CropEventArgs.cancel - Specifies a boolean value that, when set to `true`, cancels the cropping action.

* CropEventArgs.preventScaling - Specifies a boolean value that, when set to `true`, prevents the cropped image from being scaled up within the editor and keeps the saved image at the original cropping size.

### Maintaining original image size during cropping 

In the image editor, when an image is cropped, it is usually enlarged or scaled to improve visibility within the user interface. If you want to prevent this scaling and maintain the original cropping size, you can bind to the [`cropping`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#cropping) event and set the `preventScaling` value to true. This not only keeps the image size consistent during cropping but also ensures that the saved image retains its original cropping size without being enlarged. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/custom-selection-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/custom-selection-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs4" %}
{% endif %}

## Selection changing event

The selection region can be changed programmatically by using the [`selectionChanging`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#selectionchanging) event. This event is triggered when inserting or resizing the selection using the mouse, and lets you alter the selection region by adjusting its properties.

The [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/selectionchangeeventargs) is used in this event to customize the selection and provides the following parameters:

* SelectionChangeEventArgs.action - Specifies the type of action, such as `insert` or `resize`.

* SelectionChangeEventArgs.currentSelectionPoint - Represents all the details of the selection including its type, position, width, and height after the current action, as a `CropSelectionSettings` object.

* SelectionChangeEventArgs.previousSelectionPoint - Represents all the details of the selection including its type, position, width, and height before the current action, as a `CropSelectionSettings` object.

### Locking selection area during cropping 

When selecting an area for cropping, users can typically resize the selection from all corners and edges. If you want to prevent the resizing of the selection area, you can bind to the [`selectionChanging`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#selectionchanging) event. Check if the action is `resize`, and if it is, set the `previousSelectionPoint` value to the `currentSelectionPoint` value. This will lock the selection area, preventing any adjustments to its size.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/custom-selection-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/custom-selection-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs5" %}
{% endif %}

### Cropping with custom ratio selection

Users can perform cropping either through the toolbar or by using the public methods. While predefined ratio selections are available in the toolbar, users can also crop with custom ratios using the [`select`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#select) method. Regardless of the ratio type used, the selection will adhere to the specified ratio, even when resizing the selection area.

Here is an example of cropping with a custom ratio selection using the [`selectionChanging`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#selectionchanging) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/custom-selection-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/custom-selection-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/custom-selection-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/custom-selection-cs6" %}
{% endif %}