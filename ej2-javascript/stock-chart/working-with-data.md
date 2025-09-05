---
layout: post
title: Working with data in ##Platform_Name## Stock chart control | Syncfusion
description: Learn here all about Working with data in Syncfusion ##Platform_Name## Stock chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Working with data 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Working with data in ##Platform_Name## Stock chart control

Stock Chart can visualise data bound from local or remote data.

## Local Data

You can bind a simple JSON data to the chart using [`dataSource`](../api/stock-chart/stockSeriesModel/#datasource) property in series.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/working-with-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/working-with-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/working-with-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/working-with-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/working-with-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/working-with-data-cs1" %}
{% endif %}

## Handling No Data

When no data is available to render in the stock chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/working-with-data-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/working-with-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/working-with-data-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/working-with-data-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/working-with-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/working-with-data-cs2" %}
{% endif %}

## See Also

* [Series Types](./series-types/)