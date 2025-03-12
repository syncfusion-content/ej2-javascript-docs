---
layout: post
title: Data binding in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## ListView control

The ListView control provides an option to load the data either from a local data source or remote data services. This can be done through the [`dataSource`](../api/list-view/#datasource) property, which supports the data type of an array or [`DataManager`](../api/data/dataManager/).

ListView supports different kinds of data services such as OData, OData V4, and Web API, and data formats like XML, JSON, and JSONP with the help of DataManager Adaptors.

| Fields | Type | Description |
|------|------|-------------|
| id | string | Specifies ID attribute of list item, mapped in dataSource. |
| text | string | Specifies list item display text field. |
| isChecked | string | Specifies checked status of list item. |
| isVisible | string | Specifies visibility state of list item. |
| enabled | string | Specifies enabled state of list item. |
| iconCss | string | Specifies the icon class of each list item that will be added before to the list item text. |
| child | string | Specifies child dataSource fields. |
| tooltip | string | Specifies tooltip title text field. |
| groupBy | string | Specifies category of each list item. |
| sortBy | string | Specifies sorting field, that is used to sort the ListView data. |
| htmlAttributes | string | Specifies list item html attributes field. |

> When complex data is bound to ListView, you should map the fields properly. Otherwise, the ListView properties remain as undefined or null.

## Bind to local data

Local data can be represented in two ways:

* Array of simple data.
* Array of JSON data.

### Array of simple data

The ListView control supports loading an array of primitive data like strings and numbers. Here, both value and text fields act the same.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/data-binding/simple-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/data-binding/simple-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/data-binding/simple-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/data-binding/simple-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/data-binding/simple-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/data-binding/simple-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/data-binding/simple-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/data-binding/simple-data-cs1" %}
{% endif %}

### Array of JSON data

ListView can generate its list items through an array of complex data. To ensure it works properly, you should map the appropriate columns to the field property.

In the following example, the role column is mapped with the text field.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/data-binding/array-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/data-binding/array-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/data-binding/array-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/data-binding/array-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/data-binding/array-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/data-binding/array-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/data-binding/array-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/data-binding/array-data-cs1" %}
{% endif %}

## Bind to remote data

The ListView control supports retrieving data from remote data services with the help of the DataManager control. The [`query`](../api/list-view/#query) property allows fetching data and returning it to the ListView from the database.

In the following sample, the first 10 employees from the ListView table are displayed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/data-binding/remote-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/data-binding/remote-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/data-binding/remote-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/data-binding/remote-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/data-binding/remote-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/data-binding/remote-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/data-binding/remote-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/data-binding/remote-data-cs1" %}
{% endif %}