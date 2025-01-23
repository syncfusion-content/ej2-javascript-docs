---
layout: post
title: Customize the ticks in ##Platform_Name## Range Slider control | Syncfusion
description: Learn here all about Customize the ticks in Syncfusion ##Platform_Name## Range Slider control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize the ticks
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize the ticks in ##Platform_Name## Range Slider control

The appearance of the Range Slider control can be customized via CSS. By overriding the slider CSS classes, you can customize the ticks, which allow you to easily identify the current value/values of the slider. It contains [`smallStep`](../../api/slider/ticksDataModel/#smallstep) and [`largeStep`](../../api/slider/ticksDataModel/#largestep) properties. By default, the slider has a class named `e-tick` for slider ticks, which can be overridden as per your requirements. Refer to the following code snippet to render custom ticks:

```ts
.e-scale .e-tick.e-custom::before {
    content: '\e967';
    position: absolute;
}
```

Here, the color for rendered ticks has been applied through nth-child(`child_number`). The color is applied to the value of the `child_number` in the slider.

```ts
#ticks_slider .e-scale :nth-child(1)::before {
    color: red;
}
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/ticks-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/ticks-customization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/ticks-customization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/ticks-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/ticks-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/ticks-customization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/ticks-customization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/ticks-customization-cs1" %}
{% endif %}