---
layout: post
title: Initial scrollbar in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Initial scrollbar in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Initial scrollbar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Initial scrollbar in ##Platform_Name## Chart control

By setting `zoomFactor` in primaryXAxis and `isZoomed` value as `true` in [`load`](../../api/chart/chartModel/#load) event and `enableScrollbar` value as `true` in`zoomSettings`, you can make the scrollbar visible in initial rendering of chart.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/how-to-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/how-to-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/how-to-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/how-to-cs10" %}
{% endif %}