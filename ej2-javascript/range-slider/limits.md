---
layout: post
title: Limits in ##Platform_Name## Range Slider control | Syncfusion
description: Learn here all about Limits in Syncfusion ##Platform_Name## Range Slider control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Limits 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Limits in ##Platform_Name## Range Slider control

The slider [`limits`](../api/slider/#limits) feature restricts the slider thumb movement within a specified range, which is useful if higher or lower values might affect the process or product where the slider is employed.

The following are the six options available in the slider's limits object, and each API in the limits object is optional:

* ``enabled``: Enables the limits in the Slider.
* ``minStart``: Sets the minimum limit for the first handle.
* ``minEnd``: Sets the maximum limit for the first handle.
* ``maxStart``: Sets the minimum limit for the second handle.
* ``maxEnd``: Sets the maximum limit for the second handle.
* ``startHandleFixed``: Locks the first handle.
* ``endHandleFixed``: Locks the second handle.

## Default and MinRange Slider limits

The Default and MinRange Sliders have only one handle, so you can use `minStart`, `minEnd`, and `startHandleFixed` options. When the limits are enabled in the Slider, the limited area appears darkened, allowing you to differentiate between the allowed and restricted area. Refer to the following snippet to enable the limits in the Slider.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/default-limit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/default-limit-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/default-limit-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/default-limit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/default-limit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/default-limit-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/default-limit-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/default-limit-cs1" %}

{% endif %}

## Range Slider limits

In the range slider, both handles can be restricted and locked from the limit's object. In this sample, the first handle is limited between
10 and 40, and the second handle is limited between 60 and 90.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/range-limit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/range-limit-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/range-limit-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/range-limit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/range-limit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/range-limit-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/range-limit-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/range-limit-cs1" %}

{% endif %}
## Handle lock

The movement of slider handles can be locked by enabling the ``startHandleFixed`` and ``endHandleFixed`` properties in the limit's object. In this sample, the movement of both slider handles has been locked.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/handle-lock-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/handle-lock-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/handle-lock-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/handle-lock-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/handle-lock-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/handle-lock-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/handle-lock-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/handle-lock-cs1" %}

{% endif %}