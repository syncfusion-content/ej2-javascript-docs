---
layout: post
title: Selection cropping in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Selection cropping in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Selection cropping 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Selection cropping in the ##Platform_Name## Image Editor control

The cropping feature in the Image Editor allows you to select and crop specific regions of an image. It offers different selection options, including custom shapes, squares, circles, and various aspect ratios such as 3:2, 4:3, 5:4, 7:5, and 16:9. 

To perform a selection, you can use the [`select`](../../api/image-editor/#select) method, which allows you to define the desired selection area within the image. Once the selection is made, you can then use the [`crop`](../../api/image-editor/#crop) method to crop the image based on the selected region. This enables you to extract and focus on specific parts of the image while discarding the rest.

## Insert custom / square / circle region 

The [`select`](../../api/image-editor/#select) method allows to perform selection based on the type of selection. Here, the [`select`](../../api/image-editor/#select) method is used to perform the selection as custom, circle, or square. The selection region can also be customized using the select method based on the parameters below. 

type - Specify the type of selection 

startX - Specify the x-coordinate of the selection region’s starting point 

startY - Specify the y-coordinate of the selection region’s starting point 

width - Specify the width of the selection region 

height - Specify the height of the selection region 

Here is an example of square selection using the [`select`](../../api/image-editor/#select) method. 

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

## Insert selection based on aspect ratio

The [`select`](../../api/image-editor/#select) method is used to perform the selection with the various aspect ratios such as 3:2, 4:3, 5:4, 7:5, and 16:9. The selection region can also be customized using the SelectAsync method based on the parameters below.
* type - Specify the type of selection

* startX - Specify the x-coordinate of the selection region’s starting point

* startY - Specify the y-coordinate of the selection region’s starting point

Here is an example of ratio selection using the [`select`](../../api/image-editor/#select) method.

In the following example, the [`select`](../../api/image-editor/#select) method is used in the button click to the ratio selection.

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

## Resize selections 

The selection region can be changed programmatically by using [`selectionChanging`](../../api/image-editor/#selectionchanging) event. This event is activated during resizing the selection using mouse, and it allows for alterations to the selection region by adjusting the specified properties. 

The [`selectionChanging`](../../api/image-editor/#selectionchanging) is used in these events to customize the selection and it has the following parameters. 

SelectionChangeEventArgs.cction - The type of action such as inserting or resizing 

SelectionChangeEventArgs.cancel - Specifies to cancel the selection. 

SelectionChangeEventArgs.currentSelectionPoint - Represents all the details of the selection including its type, position, width, and height after the current action as CropSelectionSettings. 

SelectionChangeEventArgs.previousSelectionPoint - Represents all the details of the selection including its type, position, width, and height before this current action as CropSelectionSettings 

Here is an example of changing the selection region using the [`SelectionChangeEventArgs`](../../api/image-editor/selectionChangeEventArgs/) event. 

## Crop an image

The [`crop`](../../api/image-editor/#crop) method allows cropping based on the selected region. Here is an example of cropping the selection region using the [`crop`](../../api/image-editor/#crop) method. 

Here is an example of circle cropping using the [`select`](../../api/image-editor/#select) and [`crop`](../../api/image-editor/#crop) method.

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

## Cropping event

The [`cropping`](../../api/image-editor/#cropping) event is triggered when performing cropping on the image. This event is passed an object that contains information about the cropping event, such as the start and end point of the selection region. And this event uses [`CropEventArgs`](../../api/image-editor/cropEventArgs/) to handle the cropping action in the image.

The parameter available in the [`cropping`](../../api/image-editor/#cropping) event is,

* CropEventArgs.startPoint – The x and y coordinates of a start point as [`Point`](../../api/image-editor/#Point) of the selection region. 

* CropEventArgs.endPoint - The x and y coordinates of an end point as [`Point`](../../api/image-editor/#Point) of the selection region. 

* CropEventArgs.cancel - To cancel the cropping action.