---
layout: post
title: Syn pan in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Syn pan in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Syn pan 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Syn pan in ##Platform_Name## Chart control

Using the [`chartMouseMove`](../../api/chart/chartModel/#chartmousemove) event, you can achieve the synchronized panning between multiple charts.

To make a synchronized panning chart, follow the given steps:

**Step 1**:

Initially create two charts, and enable `zoomSettings` for both charts.

To use the [`chartMouseMove`](../../api/chart/chartModel/#chartmousemove) event, assign the first chart's `zoomFactor` and `zoomPosition` values to the second chart. Now, pan the first zoomed chart, and then the second chart will be panned automatically based on `zoomFactor` and `zoomPosition`.

The following code sample demonstrates the output.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-appearance-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-appearance-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-appearance-cs20" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-appearance-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-appearance-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-appearance-cs20" %}
{% endif %}