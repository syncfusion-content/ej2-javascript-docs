---
layout: post
title: Customize the bar in ##Platform_Name## Range slider control | Syncfusion
description: Learn here all about Customize the bar in Syncfusion ##Platform_Name## Range slider control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize the bar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize the bar in ##Platform_Name## Range slider control

Slider appearance can be customized through CSS. By overriding the slider CSS classes, you can customize the slider bar. The slider bar can be customized with different themes. By default, slider have class name `e-slider-track` for bar. The class can be overridden with our own color values like the following code snippet.

```
.e-control.e-slider .e-slider-track .e-range {
           background: linear-gradient(left, #e1451d 0, #fdff47 17%, #86f9fe 50%, #2900f8 65%, #6e00f8 74%, #e33df9 83%, #e14423 100%);
}
```

You can also apply background color for a certain range depending upon slider values, using change event.

```ts
change: (args: SliderChangeEventArgs) => {
        if (args.value > 0 && args.value <= 25) {
            // Change handle and range bar color to green when
            (sliderHandle as HTMLElement).style.backgroundColor = 'green';
            (sliderTrack as HTMLElement).style.backgroundColor = 'green';
        } else if (args.value > 25 && args.value <= 50) {
            // Change handle and range bar color to royal blue
            (sliderHandle as HTMLElement).style.backgroundColor = 'royalblue';
            (sliderTrack as HTMLElement).style.backgroundColor = 'royalblue';
        } else if (args.value > 50 && args.value <= 75) {
            // Change handle and range bar color to dark orange
            (sliderHandle as HTMLElement).style.backgroundColor = 'darkorange';
            (sliderTrack as HTMLElement).style.backgroundColor = 'darkorange';
        } else if (args.value > 75 && args.value <= 100) {
            // Change handle and range bar color to red
            (sliderHandle as HTMLElement).style.backgroundColor = 'red';
            (sliderTrack as HTMLElement).style.backgroundColor = 'red';
        }
    }
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/bar-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/bar-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/slider/bar-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/bar-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/bar-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/bar-customization-cs1" %}
{% endif %}