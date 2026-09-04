---
layout: post
title: How to fit width/height in ##Platform_Name## Image Editor | Syncfusion
description: Programmatically zoom the ##Platform_Name## Image Editor to fit an image to the editor container's width or height using the zoom method in button click events.
platform: ej2-javascript
control: Fit to Width and Height
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to fit to width and height in ##Platform_Name## Image Editor

The Image Editor's [`zoom`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#zoom) method is used to fit an image to the editor by width or height. The image dimensions are retrieved with the [`getImageDimension`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#getimagedimension) method, and a zoom factor is computed by comparing the image dimension with the editor container's width or height. The computed factor is then applied via the `zoom` method. (The applied factor is clamped by the `minZoomFactor` and `maxZoomFactor` properties.)

This example provides buttons to fit the image to the editor's width (Fit Width) or height (Fit Height).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/how-to-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/how-to-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/how-to-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/how-to-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/how-to-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/how-to-cs3" %}
{% endif %}