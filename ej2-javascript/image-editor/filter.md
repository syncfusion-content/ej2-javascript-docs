---
layout: post
title: Filter in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Open save in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filters in the ##Platform_Name## Image Editor control

Filters are pre-defined effects that can be applied to an image to alter its appearance or mood. Image filters can be used to add visual interest or to enhance certain features of the image. Some common types of image filters include cold, warm, chrome, sepia, and invert. This can be done by either using the toolbar or the [`applyImageFilter`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#applyimagefilter) method which takes a single parameter: the filter applied to an image.

## Apply filter effect

The [`applyImageFilter`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#applyimagefilter) method is utilized to apply filters to an image. By passing the desired filter type as the first parameter of the method, specified as [`ImageFilterOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/imageFilterOption/) the method applies the corresponding filter to the image. This allows for easy and convenient application of various filters to enhance or modify the image based on the chosen filter type.

* filterOption - Specifies the filter options to the image.

In the following example, you can using the applyImageFilter method in the button click event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/filter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/filter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/filter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/filter-cs1" %}
{% endif %}

## Image Filtering Event

The [`imageFiltering`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#imageFiltering) event is triggered when applying filtering on the image. This event is passed an object that contains information about the filtering event, such as the type of filtering. 

The parameter available in the [`ImageFilterEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#ImageFilterEventArgs) event is, 

ImageFilterEventArgs.filter - The type of filtering as [`ImageFilterOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#ImageFilterOption) to be applied in the image editor. 

ImageFilterEventArgs.cancel – Specifies to cancel the filtering action. 


> Please note that the Filter and Finetune features were unavailable on iOS due to the non-functioning CanvasContext.filter property on this platform.
