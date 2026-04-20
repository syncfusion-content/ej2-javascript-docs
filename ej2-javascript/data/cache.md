---
layout: post
title: ##Platform_Name## DataManger - Cache | Syncfusion
description: Improve performance in Syncfusion ##Platform_Name## DataManager by enabling cache to avoid redundant requests for paged data.
control: Cache 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Cache in ##Platform_Name## DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides the `enableCache` property, which enhances performance by reducing redundant HTTP requests for previously visited pages. When caching is enabled, the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) retrieves data from the cache instead of sending a new request, minimizing server load and improving experience.

**How it works**

* When `enableCache` property is set to "true", the DataManager generates a unique ID at initialization and uses it to store previously loaded page data in cache memory. This enables efficient data retrieval without redundant server requests.

* The cache is automatically cleared when data actions such as sorting, filtering, grouping, searching, or CRUD operations (Create, Read, Update, Delete) are performed.

* This feature is supported by all adaptors in Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager, ensuring consistent caching behavior across different data sources.

The following code demonstrates how to enable caching using the `enableCache` property in the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## DataManager:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

let data: Object = new DataManager({
  url: "https://services.syncfusion.com/js/production/api/orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true,
  enableCache: true // Enables caching to prevent repeated HTTP requests.
});

let grid: Grid = new Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, type: 'number' },
    { field: 'CustomerID', width: 100, headerText: 'Customer ID', type: 'string' },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 120, textAlign: 'Right', type:'Date' },
  ],
});

grid.appendTo('#Grid');

{% endraw %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% raw %}

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    ....
    ....
  </head>

  <body>
    <div>
      <!--HTML grid element, which is going to render as Essential JS 2 Grid-->
      <div id="Grid"></div>
    </div>
  </body>
</html>

{% endraw %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

var data = new ej.data.DataManager({
  url: "https://services.syncfusion.com/js/production/api/orders",
  adaptor: new ej.data.WebApiAdaptor(),
  crossDomain: true,
  enableCache: true // Enables caching to prevent repeated HTTP requests.
});

var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, type: 'number' },
    { field: 'CustomerID', width: 100, headerText: 'Customer ID', type: 'string' },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 120, textAlign: 'Right', type:'Date' },
  ],
});

grid.appendTo('#Grid');

{% endraw %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% raw %}

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    ....
    ....
  </head>

  <body>
    <div>
      <!--HTML grid element, which is going to render as Essential JS 2 Grid-->
      <div id="Grid"></div>
    </div>
  </body>
</html>

{% endraw %}
{% endhighlight %}
{% endtabs %}
{% endif %}