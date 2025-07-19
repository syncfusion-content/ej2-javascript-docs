---
layout: post
title: Data binding in ##Platform_Name## DataManager | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## DataManager of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in Syncfusion ##Platform_Name## DataManager

This section explains how to perform data binding using both local and remote datasources with the Syncfusion DataManager in ##Platform_Name## applications.

## Data Binding

The Syncfusion ##Platform_Name## DataManager enables efficient data management in ##Platform_Name## applications. It supports both RESTful WebAPIs that return JSON data and local JavaScript object array binding, providing flexibility to handle and manipulate data.

Data binding is the process of connecting UI elements with datasources, allowing the UI to reflect changes in the data automatically. The [DataManager](../api/data/dataManager/) abstracts this process by managing CRUD operations, query building, and communication with local or remote datasources.

For example, consider an HR dashboard that displays a list of employees, including fields such as Name, Department, Role, and Status. Instead of writing custom code to fetch and manage data manually, the developer binds the Grid to a DataManager instance.

The DataManager handles all data operations efficiently, including:

* Fetching records from a remote Web API,

* Filtering employees by department or status,

* Sorting by name or other fields,

* Performing CRUD actions (Create, Read, Update, and Delete) seamlessly.

By leveraging DataManager, the application ensures cleaner code, better maintainability, and a consistent data-handling experience across components.

It supports two kinds of data binding methods:-

1. Local data
2. Remote data

### Local data binding

Local data binding allows you to bind the Syncfusion ##Platform_Name## DataManager directly to an array of JavaScript objects stored within the application. This method is particularly useful for small to medium-scale applications, static or preloaded datasets, scenarios where external API calls are unnecessary or undesired.

It provides a simple and efficient way to manage client-side data, enabling built-in data operations such as filtering, sorting, grouping, and paging without relying on a remote server.

For example, consider an employee directory for a small company where the employee data is fixed and stored locally within the application as an array of objects. Instead of making API calls each time sorting or filtering is needed, the local data can be bound to the DataManager to perform all operations instantly on the client side. This approach minimizes server load and enhances the application's responsiveness.

To achieve this:

* You can initialize the `DataManager` with a local data source by either:

    1. Assigning a JavaScript object array to the `json` property.
    2. Pass the array directly to the `DataManager` constructor during instantiation.

* After binding the local data to the DataManager, you can query and manipulate the data using the built-in **Query** class in combination with the [executeLocal](../api/data/dataManager/#executelocal)  method.

The following example demonstrates how to bind JSON data using the `executeLocal` method of DataManager:

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

### Remote data binding

Remote data binding refers to connecting a UI component to data retrieved from an external source such as a RESTful WebAPIs, web service, or cloud database. This technique is especially useful in scenarios where large datasets need to be fetched from a server, real-time data updates are required, or data needs to be accessed from an external API or database.

For example, consider an online store application where the product catalog is stored on a remote server. Since the product data is frequently updated and can be very large, fetching it directly from the server ensures the latest information is always displayed. Remote data binding allows the application to request only the needed data, such as filtered or paged results, reducing the amount of data transferred and improving performance.

Configure remote data binding with below steps:-

* To bind remote data, you can use the Syncfusion ##Platform_Name## DataManager by specifying the service endpoint URL in the `url` property. The DataManager handles all data interactions, including query serialization, server communication, and response parsing.

* To retrieve data from the remote server, use the DataManager’s [executeQuery](../api/data/datamanager/#executequery) method. This method converts the **Query** object into a server request and sends it to the specified endpoint. It then waits for the server response in JSON format and returns the resulting data.

The following example demonstrates bind remote data using the `executeQuery` method of DataManager:

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

> The queried data will not be cached locally unless `offline` mode is enabled.

## Component Binding

The Syncfusion ##Platform_Name## DataManager provides an abstraction for handling data binding across various UI components, including [Grid](../../grid/getting-started), [DropDownList](../../drop-down-list/getting-started), [Charts](../../chart/getting-started), and HTML tables. It supports both local and remote datasources, enabling flexible integration with data services.

With built-in support for operations such as filtering, sorting, grouping, paging, and CRUD actions, the DataManager streamlines the process of managing data logic in modern web applications.

### Using with Grid

The Syncfusion ##Platform_Name## `Grid` provides flexible support for binding data from multiple sources. You can use either a local JavaScript object array or connect to remote services using the `DataManager`.

This section demonstrates how to bind data to the `Grid` using both local and remote sources.

For complete setup instructions, refer to the [Grid Getting Started](../../grid/getting-started) documentation.

**Binding local data:**

Binding local data allows you to directly associate a JavaScript object array with the `Grid`. This is useful when working with small to medium-sized datasets stored locally.

For example, consider an HR dashboard that displays a list of employees, including fields such as Name, Department, Role, and Status. Instead of writing custom code to fetch and manage data manually, the developer binds the `Grid` to a DataManager instance initialized with a local array of employee objects. This enables easy sorting by department or filtering by role directly within the grid UI without additional server calls.

To bind local data to the `Grid`, you can directly assign a JavaScript object array to the [dataSource](../api/grid/#datasource) property. Alternatively, you can use an instance of the DataManager with a local data source.

Here's an example demonstrating binding local data using the `DataManager`:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/data-binding-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/data-binding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/data-binding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/data-binding-cs1" %}
{% endif %}

**Binding remote data:**

Binding remote Data allows you to connect the `Grid` to a remote data source, such as an API or service endpoint, to dynamically fetch and display large datasets from a server. This is useful when working with large datasets or when the data is hosted on a server.

For example, in an e-commerce admin panel, the product inventory data can be very large and frequently updated. Binding the `Grid` to a remote service via DataManager allows the admin panel to fetch only the required pages of product data on demand, with built-in support for paging and sorting, ensuring performance and scalability.

To bind remote data, you can configure the DataManager with the service endpoint URL and assign it to the `Grid's` [dataSource](../api/grid/#datasource) property.

Here’s an example demonstrating binding remote data to the `Grid` using the `DataManager`:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/data-binding-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/data-binding-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/data-binding-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/data-binding-cs2" %}
{% endif %}

### Using with DropDownList

The Syncfusion ##Platform_Name## `DropDownList` provides flexible support for binding data from various sources. You can bind local JavaScript object arrays or connect to remote services to populate the list items.

This section demonstrates how to bind data to the `DropDownList` using both local and remote sources.

For complete setup instructions, refer to the [DropDownList Getting Started](../../drop-down-list/es5-getting-started) documentation.

**Binding local data:**

Binding local data allows you to directly associate a local dataset, such as a simple array or complex objects, with the `DropDownList`. This is useful when you have data available within your application and want to visualize it in the dropdown.

For example, a form in a corporate intranet site may have a "Department" dropdown populated with a static list of departments such as HR, Sales, IT, and Marketing. Since these options rarely change, binding the DropDownList to a local array improves performance and eliminates unnecessary network requests.

You can achieve this by making the `DropDownList` generate its list items from an array of complex data. To do this, map the appropriate fields using the [fields](../api/drop-down-list/#fields) property and assign the dataset to the [dataSource](../api/drop-down-list/#datasource) property.

Additionally, the `DropDownList` supports binding an array of primitive data types such as strings or numbers.

Here’s an example demonstrating how to bind local data from an array of JSON objects using the `DataManager`:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/data-binding-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/data-binding-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/data-binding-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/data-binding-cs3" %}
{% endif %}

**Binding remote data:**

Binding remote data allows you to fetch and display data dynamically from a remote server or web API. This is useful when working with large datasets or when the data is hosted externally.

For example, an e-commerce website’s product filter dropdown fetches available product categories from a remote server. As categories update frequently, the `DropDownList`, bound to a remote DataManager, ensures the filter list always reflects the latest categories without requiring app redeployment.

You can achieve this by retrieving data from remote services using the `DataManager`. The [query](../api/drop-down-list/#query) property is used to fetch and filter data from the service, and the resulting data can be bound to the `DropDownList` using [dataSource](../api/drop-down-list/#datasource) property .

Here’s an example demonstrating how to bind remote data to the `DropDownList` using the `DataManager`:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/data-binding-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/data-binding-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/data-binding-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/data-binding-cs4" %}
{% endif %}

### Using with Charts

The Syncfusion ##Platform_Name## `Charts` provides powerful visualization capabilities that allow you to bind data from both local and remote sources. 

This section demonstrates how to bind data to the `Charts` using both local and remote sources.

For complete setup instructions, refer to the [Charts Getting Started](../../chart/es5-getting-started) documentation.

**Binding local data:**

Binding local data allows you to directly associate a local dataset (such as a simple JSON object or array) with the `Chart`. This is useful when you have data available locally within your application and want to visualize it in the chart. 

For example, a small retail store manager’s dashboard displays daily sales data for the past week. Since the data is collected and stored locally on the device or in memory, the `Chart` binds directly to this local dataset to quickly visualize sales trends without needing server calls.

You can bind a simple JSON data to the `Chart` using the [dataSource](../api/chart/series/#datasource) property in the series. Then, map the fields in the JSON data to the [xName](../api/chart/series/#xname) and [yName](../api/chart/series/#yname) properties to represent the `Chart's` x-axis and y-axis values.

Here’s an example demonstrating binding local data using the `DataManager`:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/data-binding-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/data-binding-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/data-binding-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/data-binding-cs5" %}
{% endif %}

**Binding remote data:**

Binding remote data allows you to fetch and display data dynamically from a remote server or API.  This is useful when working with large datasets or when data is continuously updated on the server.

For example, an online analytics dashboard shows live website traffic metrics. The `Chart` binds to a remote data source via DataManager, which continuously fetches real-time traffic data from a web API and updates the chart dynamically to reflect visitor trends.

You can bind remote data to the `Chart` using the `DataManager`. The DataManager requires minimal configuration, such as the web service URL, adaptor, and cross-domain settings, to interact with the service endpoint properly. You can then assign the instance of DataManager to the [dataSource](../api/chart/series/#datasource) property in the series and map the fields of the data to the [xName](../api/chart/series/#xname) and [yName](../api/chart/series/#yname) properties. Additionally, you can use the [query](../api/chart/series/#query) property to filter the data.

Here’s an example demonstrating how to bind remote data using the `DataManager`:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/data-binding-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/data-binding-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/data-binding-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/data-binding-cs6" %}
{% endif %}

### Normal HTML table

Binding data to a normal HTML table can be done through both local and remote datasources. This allows for easy and dynamic population of table rows with data. This approach is particularly useful in scenarios such as dashboards, reports, or summary views, where the focus is on quickly rendering a set of records in a tabular format.

For example, consider  you are building a simple order management dashboard that displays the latest orders to customer service agents. The dashboard needs to update frequently with new order data, either fetched from a local cache or a remote API, and display it quickly in a clean tabular format. Using a lightweight HTML table with  DataManager helps efficiently manage and render this data dynamically.

To achieve this efficiently, you can use Syncfusion’s `DataManager` to manage and query data from either local or remote sources. Additionally, by leveraging the `compile` function from **@syncfusion/ej2-base**, you can dynamically generate HTML templates for each data row and render them into the table.

Here’s an example demonstrating binding local data to an HTML table using the `DataManager`:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/data-binding-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/data-binding-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/data-binding-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/data-binding-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/data-binding-cs7" %}
{% endif %}

## See Also

* [Binding with OData service](./adaptors#odata-adaptor)
* [Binding with ODataV4 service](./adaptors#odatav4-adaptor)
* [Binding with Web API](./adaptors#web-api-adaptor)
* [How to write custom adaptor](./adaptors#writing-custom-adaptor)
* [How to work in offline mode](./how-to#work-in-offline-mode)
* [How to send additional parameters](./how-to#sending-additional-parameters-to-server)
* [How to add custom request headers](./how-to#adding-custom-headers)
