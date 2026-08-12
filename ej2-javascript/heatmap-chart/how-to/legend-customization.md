---
layout: post
title: How to customize legend labels in ##Platform_Name## HeatMap | Syncfusion
description: Customize or hide JavaScript HeatMap Chart legend labels by handling the legendRender client-side event to change label text on the fly.
platform: ej2-javascript
control: Legend customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize legend labels in ##Platform_Name## HeatMap Chart

You can change the legend label using the `legendRender` client-side event. You can also hide the legend label using this client-side event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/how-to-cs1" %}
{% endif %}