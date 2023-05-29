---
layout: post
title: Customize the thumb in ##Platform_Name## Range slider control | Syncfusion
description: Learn here all about Customize the thumb in Syncfusion ##Platform_Name## Range slider control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize the thumb 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize the thumb in ##Platform_Name## Range slider control

Slider appearance can be customized through CSS. By overriding the slider CSS classes, you can customize the thumb. By default, slider has unique class `e-handle` for slider thumb. You can override the following class as per your requirement. Here, in the sample, the slider thumb has been customized to square, circle, oval shapes, and background image has also been customized.

```ts
.e-control.e-slider .e-handle {
    background-image: url('https://ej2.syncfusion.com/demos/src/slider/images/thumb.png');
    background-color: transparent;
    height: 25px;
    width: 25px;
}
#square_slider.e-control.e-slider .e-handle {
    border-radius: 0%;
    background-color: #f9920b;
    border: 0;
}
#circle_slider.e-control.e-slider .e-handle {
    border-radius: 50%;
    background-color: #f9920b;
    border: 0;
}
#oval_slider.e-control.e-slider .e-handle {
    height: 25px;
    width: 8px;
    top: 3px;
    border-radius: 15px;
    background-color: #f9920b;
}
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/thumb-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/thumb-customization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/thumb-customization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/slider/thumb-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/thumb-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/thumb-customization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/thumb-customization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/thumb-customization-cs1" %}
{% endif %}