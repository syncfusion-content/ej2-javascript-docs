---
layout: post
title: How to customize the limits in ##Platform_Name## Range Slider | Syncfusion
description: Style the limits bar on ##Platform_Name## Range Slider by overriding the e-limits CSS class to set a different background color and visual indicator.
platform: ej2-javascript
control: Customize the limits 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the limits in ##Platform_Name## Range Slider

The appearance of the Range Slider control can be customized via CSS. By overriding the slider CSS classes, you can customize the slider limit bar. The limit bar can be customized with a different background color. By default, the slider has a class named `e-limits` for the limits bar, which can be overridden with your own color values as shown in the following code snippet:

```
.e-slider-container.e-horizontal .e-limits {
     background-color: rgba(69, 100, 233, 0.46);
}
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/limit-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/limit-customization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/limit-customization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/limit-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/limit-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/limit-customization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/limit-customization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/limit-customization-cs1" %}
{% endif %}