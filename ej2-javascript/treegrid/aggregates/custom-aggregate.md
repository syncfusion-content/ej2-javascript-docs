---
layout: post
title: ##Platform_Name## TreeGrid Custom Aggregate | Syncfusion
description: Learn about implementing custom aggregates in the ##Platform_Name## TreeGrid, including configuration and usage of custom aggregation functions.
platform: ej2-javascript
control: Custom aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom Aggregate in ##Platform_Name## TreeGrid

To calculate the aggregate value with your own aggregate functions, use the custom aggregate option. To use custom aggregation, specify the [`type`](../../api/treegrid/aggregateColumnModel#type) as `Custom`, and provide the custom aggregate function in the [`customAggregate`](../../api/treegrid/aggregateColumnModel#customaggregate) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/aggregates-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/aggregates-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/aggregates-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/aggregates-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/aggregates-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/aggregates-cs2" %}
{% endif %}

> To access the custom aggregate value inside the template, use the key as `Custom`.