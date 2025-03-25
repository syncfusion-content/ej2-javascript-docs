---
layout: post
title: Cache in ##Platform_Name## DataManager | Syncfusion
description: Learn here all about Cache in Syncfusion ##Platform_Name## Data component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Cache 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Enable Cache in ##Platform_Name## Data component

The Syncfusion DataManager provides the `enableCache` property, which enhances performance by reducing redundant HTTP requests for previously visited pages. When caching is enabled, the `DataManager` retrieves data from the cache instead of sending a new request, minimizing server load and improving user experience.

**How it works**

* When `enableCache` is set to true, the DataManager generates a unique ID at initialization and uses it to store previously loaded page data in cache memory. This enables efficient data retrieval without redundant server requests.
* The cache is automatically cleared when data actions such as sorting, filtering, grouping, searching, or CRUD operations (Create, Read, Update, Delete) are performed.
* This feature is supported by all adaptors in Syncfusion DataManager, ensuring consistent caching behavior across different data sources.

The following example demonstrates how to enable caching using the `enableCache` property in the Syncfusion ##Platform_Name## DataManager:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs6/index.ts %}
{% raw %}

import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

let data: Object = new DataManager({
  url: "https://services.syncfusion.com/js/production/api/orders",
  adaptor: new WebApiAdaptor,
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
{% include code-snippet/data/getting-started-cs6/index.html %}
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
{% include code-snippet/data/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}