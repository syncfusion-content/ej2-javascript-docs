---
layout: post
title: Filter and search list items using ListView in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about Filter and search list items using ListView in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filter and search list items using ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filter and search list items in ##Platform_Name## ListView control

You can display filtered data in the ListView control based on user input using the [`DataManager`](../../data/getting-started/). Follow these steps to render the ListView with filtered data:

* Render a textbox to get input for filtering.

* Render the ListView with a [`dataSource`](../../api/list-view/#datasource), and set the [`sortOrder`](../../api/list-view/#sortorder) property to arrange the items.

* Bind the `keyup` event for the textbox to perform the filtering operation. To filter the list data, pass the list data source to the `DataManager`, manipulate the data using the [`executeLocal`](../../api/data/dataManager/#executelocal) method, and then update the filtered data as the ListView's dataSource.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/filter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/filter-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/filter-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/filter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/filter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/filter-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/filter-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/filter-cs1" %}
{% endif %}

> In this demo, the data is filtered by the starting character of the list items. You can also filter list items by their ending character by using `endswith` in the [where](../../api/data/query/#where) clause instead of `startswith`.