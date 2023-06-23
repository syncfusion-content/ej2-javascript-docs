---
layout: post
title: Exact date in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Exact date in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Exact date 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Exact date in ##Platform_Name## Chart control

By using button click you can show exact time or month after scrolling. Here we have changed `zooFactor` and `zoomPosition` based on time or month requirement. After scrolling you want show full month or full day data then you will customize the zoomFactor and zoomPosition of the chart and show exact time or month.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/exact-date-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/exact-date-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/exact-date-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/exact-date-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/exact-date-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/exact-date-cs1" %}
{% endif %}