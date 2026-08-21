---
layout: post
title: How to load tab with data source in ##Platform_Name## Tab | Syncfusion
description: Learn how to bind tab content from a data source in the Syncfusion ##Platform_Name## Tab control for structured displays.
platform: ej2-javascript
control: Load tab with data source 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to load tab with data source in ##Platform_Name## Tab

You can bind any data object to Tab items by mapping it to the [`header`](../../api/tab/tabItem#header) and [`content`](../../api/tab/tabItem#content) properties.

In the example below, we'll demonstrate how to fetch data from an `OData` service using `DataManager`. The retrieved data is formatted as a JSON object with `header` and `content` fields, which are then set to the `items` property of the Tab control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tab-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tab-cs2" %}
{% endif %}
