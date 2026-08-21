---
layout: post
title: Precision Modes in ##Platform_Name## Rating | Syncfusion
description: Configure ##Platform_Name## Rating precision to support exact, half, quarter, or third values with the precision property and the showOnButton mode.
platform: ej2-javascript
control: Precision modes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Precision Modes in ##Platform_Name## Rating

You can use the [`precision`](../api/rating/#precision) property of the rating control to provide ratings with varying levels of precision.

The precision types of Rating are as follows:

* Full: The rating is increased in whole number increments. For example, if the current rating is 2, the next possible ratings are 3, 4, and so on.
* Half: The rating is increased in increments of 0.5 (half). For example, if the current rating is 2.5, the next possible ratings are 3, 3.5, 4, and so on.
* Quarter: The rating is increased in increments of 0.25 (quarter). For example, if the current rating is 3.75, the next possible ratings are 4, 4.25, 4.5, and so on.
* Exact: The rating is increased in increments of 0.1. For example, if the current rating is 3.9, the next possible ratings are 4, 4.1, 4.2, and so on.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rating/precision-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/precision-cs1/index.html %}
{% endhighlight %}

{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/precision-cs1" %}
