---
layout: post
title: ##Platform_Name## DataManger - Data Binding | Syncfusion
description: Explore local and remote data binding in Syncfusion ##Platform_Name## DataManager, bind JavaScript arrays or REST APIs with executeLocal and executeQuery.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in ##Platform_Name## DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## DataManager enables efficient data management in ##Platform_Name## applications. It supports both RESTful JSON data services binding and local JavaScript object array binding, providing flexibility to handle and manipulate data.

Data binding is the process of connecting Syncfusion ##Platform_Name## components with data sources, allowing the UI to reflect changes in the data automatically. [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) simplifies this process by providing seamless integration with ##Platform_Name## components, enabling efficient data binding without unnecessary code.

## Local data binding

Local data binding allows to bind [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) directly to an array of JavaScript objects stored within the application. This approach is simple and efficient for small datasets or static data that does not need to be fetched from a server.

DataManager initialization enables binding local data by assigning the array of JavaScript objects to the `json` property or passing them to the constructor during instantiation. Once initialized, the array of JavaScript objects becomes the datasource for `DataManager`, enabling seamless querying and data manipulation. Follow these steps to bind local data using Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Define a local array of objects.
2. Initialize DataManager with the `json` property set to that array.
3. Use the `executeLocal` method of DataManager to run queries and perform data operations directly on local datasets.

The following example demonstrates how to bind JSON data using the [executeLocal](../api/data/dataManager#executelocal) method of `DataManager`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs5" %}
{% endif %}

## Remote data binding

Remote data binding is particularly useful in scenarios where large datasets need to be fetched from a server, real-time data updates are required, or data needs to be accessed from an external API or database.

Follow these steps to bind remote data using Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Start by creating an instance of `DataManager` and assign the service endpoint URL to the `url` property.

2. Use the [executeQuery](../api/data/datamanager#executequery) method to send a [query](../api/data/query) to the server and fetch data in JSON format.

3. After calling `executeQuery`, the DataManager waits for the server response, converts it into a JSON format, and returns the data to the UI.

The following example demonstrates how to bind JSON data using the `executeQuery` method of `DataManager`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs6" %}
{% endif %}

> - The queried data will not be cached locally unless offline mode is enabled.

{% if page.publishingplatform == "typescript" %}

> - DataManager is directly bound to Syncfusion components such as the Grid through the [dataSource](https://ej2.syncfusion.com/documentation/api/grid#datasource) property rather than using `executeQuery`. Refer to the Grid data‑binding [documentation](https://ej2.syncfusion.com/documentation/grid/data-binding/data-binding).

{% elsif page.publishingplatform == "javascript" %}

> - DataManager is directly bound to Syncfusion components such as the Grid through the [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/grid#datasource) property rather than using `executeQuery`. Refer to the Grid data‑binding [documentation](https://ej2.syncfusion.com/javascript/documentation/grid/data-binding/data-binding).

{% endif %}

## See Also

* [Binding with OData service](./adaptors#odata-adaptor)
* [Binding with ODataV4 service](./adaptors#odatav4-adaptor)
* [Binding with Web API](./adaptors#web-api-adaptor)
* [How to write custom adaptor](./adaptors#writing-custom-adaptor)
* [How to work in offline mode](./how-to#work-in-offline-mode)
* [How to send additional parameters](./how-to#sending-additional-parameters-to-server)
* [How to add custom request headers](./how-to#adding-custom-headers)
