---
layout: post
title: Reversible Range Slider in ##Platform_Name## Range Slider control | Syncfusion
description: Learn here all about creating a Reversible Range Slider in Syncfusion ##Platform_Name## Range Slider control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Reversible Range Slider 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Reversible Range Slider in ##Platform_Name##

You can create a Range Slider with values rendered in reverse order by setting the [`min`](https://ej2.syncfusion.com/documentation/api/slider/#min) property to the maximum value and the [`max`](https://ej2.syncfusion.com/documentation/api/slider/#max) property to the minimum value. An example of how to achieve a reversible Range Slider is shown below:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/reversible-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/reversible-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/reversible-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/slider/reversible-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/reversible-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/reversible-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/reversible-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/reversible-cs1" %}
{% endif %}

> The reversible order can be achieved with the [`Horizontal`](https://ej2.syncfusion.com/documentation/api/slider/sliderOrientation/) orientation of the Range Slider by setting [`enableRtl`](https://ej2.syncfusion.com/documentation/api/slider/#enablertl) to true.
