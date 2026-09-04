---
layout: post
title: Filter in ##Platform_Name## Image Editor | Syncfusion
description: Apply Chrome, Cold, Warm, Sepia, Invert, Grayscale, and other image filters in the ##Platform_Name## Image Editor using the applyImageFilter method or the toolbar.
platform: ej2-javascript
control: Filter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filter in ##Platform_Name## Image Editor

Filters are pre-defined effects that can be applied to an image to alter its appearance or mood. Image filters can be used to add visual interest or to enhance certain features of the image. Some common types of image filters include cold, warm, chrome, sepia, and invert. This can be done by either using the toolbar or the [`applyImageFilter`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#applyimagefilter) method which takes a single parameter: the filter applied to an image.

## Apply filter effect

The [`applyImageFilter`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#applyimagefilter) method is used to apply filters to an image. By passing the desired filter type as the first parameter of the method, specified as an [`ImageFilterOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/imagefilteroption) value, the method applies the corresponding filter to the image. This allows for easy and convenient application of various filters to enhance or modify the image based on the chosen filter type. The method returns `void`.

* filterOption - Specifies the filter to apply to the image, as an [`ImageFilterOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/imagefilteroption) value. Available filters include Chrome, Cold, Warm, Sepia, Invert, and Grayscale.

In the following example, the `applyImageFilter` method is used in the button click event.

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

## Image filtering event

The [`imageFiltering`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#imagefiltering) event is triggered when applying a filter on the image. The event argument provides details about the filter being applied, such as the filter type.

The [`ImageFilterEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#imagefiltereventargs) provides the following parameters:

* ImageFilterEventArgs.filter - Specifies the type of filtering to be applied, as an [`ImageFilterOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#imagefilteroption) value.
* ImageFilterEventArgs.cancel - Specifies whether to cancel the filtering action. 
