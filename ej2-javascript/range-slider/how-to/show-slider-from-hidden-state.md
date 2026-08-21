---
layout: post
title: How to show hidden slider in ##Platform_Name## Range Slider | Syncfusion
description: Initialize ##Platform_Name## Range Slider in a hidden state and reveal it on a button click by toggling display and calling its refresh method.
platform: ej2-javascript
control: Show slider from hidden state 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show hidden slider in ##Platform_Name## Range Slider

This section demonstrates how to render the Range Slider control in a hidden state and make it visible upon a button click. You can initialize the Range Slider in a hidden state by setting the display property to none.

In the sample, clicking the button will make the Range Slider visible from its hidden state, and you must also call the [`refresh`](../../api/slider/#refresh) method of the Range Slider to render it properly based on its original dimensions.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/hidden-slider-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/hidden-slider-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/hidden-slider-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/slider/hidden-slider-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/hidden-slider-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/hidden-slider-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/hidden-slider-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/hidden-slider-cs1" %}
{% endif %}