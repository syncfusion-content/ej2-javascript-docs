---
layout: post
title: Customization in ##Platform_Name## Signature control | Syncfusion
description: Learn here all about Customization in Syncfusion ##Platform_Name## Signature control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customization in ##Platform_Name## Signature control

The Signature control draws stroke/path using moveTo() and lineTo() methods to connect one or more points while drawing in canvas. The stroke width can be modified by using its color and width. And the background can be modified by using its background color and background image.

## Stroke Width

The variable stroke width is based on the values of [`maxStrokeWidth`](https://ej2.syncfusion.com/documentation/api/signature/#maxstrokewidth), [`minStrokeWidth`](https://ej2.syncfusion.com/documentation/api/signature/#minstrokewidth) and [`velocity`](https://ej2.syncfusion.com/documentation/api/signature/#velocity) for smoother and realistic signature. The default value of minimum stroke width is set as 0.5, maximum stroke width is set as 2.5 and velocity is set as 0.7.

In the following example, minimum stroke width is set as 0.5, maximum stroke width is set as 3 and velocity is set as 0.7.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/signature/customization/strokewidth-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/customization/strokewidth-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/customization/strokewidth-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/signature/customization/strokewidth-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/customization/strokewidth-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/signature/customization/strokewidth-cs1" %}
{% endif %}

## Stroke Color

Color of the stroke can be specified by using [`strokeColor`](https://ej2.syncfusion.com/documentation/api/signature/#strokecolor) property and it accepts hexadecimal code, RGB, and text. The default value of this property is “#000000”.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/signature/customization/strokecolor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/customization/strokecolor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/customization/strokecolor-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/signature/customization/strokecolor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/customization/strokecolor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/signature/customization/strokecolor-cs1" %}
{% endif %}

## Background Color

Background color of a signature can be specified by using [`backgroundColor`](https://ej2.syncfusion.com/documentation/api/signature/#backgroundcolor) property and it accepts hexadecimal code, RGB, and text. The default value of this property is “#ffffff”.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/signature/customization/bgcolor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/customization/bgcolor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/customization/bgcolor-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/signature/customization/bgcolor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/customization/bgcolor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/signature/customization/bgcolor-cs1" %}
{% endif %}

## Background Image

Background image of a signature can be specified by using [`backgroundImage`](https://ej2.syncfusion.com/documentation/api/signature/#backgroundimage) property. The background image can be set by either hosting the image in our local IIS or online image.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/signature/customization/bgimage-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/customization/bgimage-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/customization/bgimage-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/signature/customization/bgimage-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/customization/bgimage-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/signature/customization/bgimage-cs1" %}
{% endif %}

## See Also

* [Save With Background](./open-save#save-with-background)