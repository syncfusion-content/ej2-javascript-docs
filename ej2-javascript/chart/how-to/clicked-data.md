---
layout: post
title: How to get pie clicked data in ##Platform_Name## Chart | Syncfusion
description: Learn here all about Clicked data in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chart
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to get pie clicked data in ##Platform_Name## Chart

By using the [`pointClick`](../../api/accumulation-chart#pointClick-emittypeIPointEventArgs) event, you can get the chart data of clicked area.

To show the clicked area data from pie, follow the given steps:

**Step 1**:

By using the [`pointClick`](../../api/accumulation-chart#pointClick-emittypeIPointEventArgs) event, you can get the `args.point.x` and `args.point.y` values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/how-to-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/how-to-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/how-to-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/how-to-cs8" %}
{% endif %}