---
layout: post
title: Querying in ##Platform_Name## DataManager | Syncfusion
description: Learn here all about querying in Syncfusion ##Platform_Name## DataManager of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Querying 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Querying in ##Platform_Name## DataManager

The Syncfusion ##Platform_Name## DataManager includes a [Query](../api/data/query/) class for building and executing LINQ-style or chainable queries on local arrays, RESTful Web APIs and Odata Services.

A [Query](../api/data/query/) is a set of instructions that defines what data to retrieve from a datasource and how the returned data should be structured and organized. Using `Query` class in DataManager, you can build simple and complex queries in a streamlined manner, enabling consistent and efficient data access.

For example, using the `Query` class is like ordering food from a digital menu. You can filter for vegetarian items, sort them by price, and pick the top few and the system instantly gives you only the results you need, without going through everything manually.

## How query processing works

The [Query](../api/data/query/) class in Syncfusion ##Platform_Name## DataManager provides a fluent interface for defining and executing complex data operations, such as filtering, sorting, grouping, and paging. Each method in the `Query` class adds a logical layer of transformation, and the entire query is processed through the [executeQuery()](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executequery) method.

The processing flow generally follows these steps:

* Query definition:

  Construct your query using chained methods such as:

    1. [from](https://ej2.syncfusion.com/documentation/api/data/query/#from) – Defines the datasource.

    2. [select](https://ej2.syncfusion.com/documentation/api/data/query/#select) – Specifies the fields to retrieve.

    3. [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) – Filters records based on conditions.

    4. [sortBy](https://ej2.syncfusion.com/documentation/api/data/query/#sortby) – Sorts the data by one or more fields.

    5. [take](https://ej2.syncfusion.com/documentation/api/data/query/#take) – Limits the number of records returned.

* Execution:
  The query is passed to the DataManager, which handles communication with the datasource.

* Adaptation:
  The adaptor converts the query into a format compatible with the datasource (such as RESTful Web APIs, OData, or other Web API) and initiates the request.

* Result handling:
  Once the response is received, the DataManager processes and maps the data to match the query structure. The result can then be rendered or further processed in your application.

This modular and extensible approach simplifies data interactions, promotes maintainability, and supports dynamic data shaping tailored to your application’s needs.

## Creating and executing queries

The Syncfusion [Query](../api/data/query/) class, available in the [@syncfusion/ej2-data package](https://www.npmjs.com/package/@syncfusion/ej2-data), provides a flexible way to construct data queries using methods like `select`, `from`, `take`, `skip`, and `using`. It also enables powerful data operations such as filtering, sorting, grouping, and aggregation. These queries can be applied to data before binding it to UI components like Grids, Lists, or Charts, ensuring efficient and dynamic data handling.

Queries are executed using the [executeQuery](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executequery) or [executeLocal](https://ej2.syncfusion.com/documentation/api/data/query/#executelocal) methods of the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/), depending on whether you're using a remote or local datasource.

| Method         | Usage              | Description                                                                                                                 |
| -------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `executeQuery` | Local datasource and Remote datasource | Sends the query to a remote server or web service and gets the results asynchronously.                 |
| `executeLocal` | Local datasource  | Runs the query directly on local data in memory, processing it instantly without server calls. |

The `Query` class provides several methods to build and manipulate data queries. Below is a list of the available query methods that help shape data before it's used in UI components.

## [select](https://ej2.syncfusion.com/documentation/api/data/query/#select)

The `select` method is used to select particular fields or columns from the datasource.

{% if page.publishingplatform == "typescript" %}
 
```ts
let query = new Query().select(['id', 'name']);
``` 

{% elsif page.publishingplatform == "javascript" %}
 
```js
let query = new ej.data.Query().select(['id', 'name'])
``` 
 
{% endif %}

## [using](https://ej2.syncfusion.com/documentation/api/data/query/#using)

Specifies the dataManager that the query should use to fetch data. 

{% if page.publishingplatform == "typescript" %}
 
```ts
let dataManager = new DataManager({
    url: SERVICE_URI,
    adaptor: new ODataV4Adaptor()
});

let query = new Query().using(dataManager);
```

{% elsif page.publishingplatform == "javascript" %}
 
```js
let dataManager = new ej.data.DataManager({
    url: SERVICE_URI,
    adaptor: new ej.data.ODataV4Adaptor()
});

let query = new ej.data.Query().using(dataManager);
``` 
{% endif %}

## [from](https://ej2.syncfusion.com/documentation/api/data/query/#from)

The `from` query of the dataManager is used to select the table from where the data is retrieved and bound to the table.

{% if page.publishingplatform == "typescript" %}
 
```ts
let query = new Query().from('Orders');
``` 

{% elsif page.publishingplatform == "javascript" %}
 
```js
let query = new ej.data.Query().from('Orders');
``` 
 
{% endif %}

## [take](https://ej2.syncfusion.com/documentation/api/data/query/#take)

Retrieves only the specified number of records from the beginning of the dataset and returns the remaining records.

{% if page.publishingplatform == "typescript" %}
 
```ts
let query = new Query().take(5);
``` 

{% elsif page.publishingplatform == "javascript" %}
 
```js
let query = new ej.data.Query().take(5);
``` 
 
{% endif %}

## [skip](https://ej2.syncfusion.com/javascript/documentation/api/data/query/#skip)

Skips the specified number of records from the beginning of the dataset and returns the remaining records.

{% if page.publishingplatform == "typescript" %}
 
```ts
let query = new Query().skip(5);
``` 

{% elsif page.publishingplatform == "javascript" %}
 
```js
let query = new ej.data.skip(5);
``` 
 
{% endif %}

The following example demonstrates how to specify a resource using `from()`, project fields using `select()`, apply a custom adaptor using `using()`, and implement pagination using `skip()` and `take()`:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/querying-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/querying-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/querying-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/querying-cs1" %}
{% endif %}

## Eager loading navigation properties

The Syncfusion ##Platform_Name## DataManager allows you to eagerly load related navigation properties using the [expand](../api/data/query/#expand) method. This is especially useful for reduces the number of server requests by including related entities in one fetch. Enhances performance and consistency in master detail or hierarchical data scenarios. The navigation properties values are accessed using appropriate field names separated by dot(.) sign.

The following example demonstrates how to retrieve **Orders** along with related **Employee's First Name**:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs18" %}
{% endif %}

## Sorting

Sorting helps organize data based on the values of a specific field, making it easier to view and analyze.

The Syncfusion ##Platform_Name## DataManager allows you to perform sorting operations on data using the [sortBy](../api/data/query/#sortby) method. By default, sorting is in `ascending` order. To change the sort order, either you can specify the second argument of `sortBy` as `descending` or use the [sortByDesc](../api/data/query/#sortbydesc) method.

The following example demonstrates how to sort data by **CustomerID** in `descending` order:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs19" %}
{% endif %}

> Multi sorting can be performed by simply chaining the multiple `sortBy` methods.

### Custom sorting

The Syncfusion ##Platform_Name## DataManager allows custom sorting logic to be applied locally after retrieving the data.

This is particularly useful when you need to enforce complex business rules that go beyond basic field based sorting, such as prioritizing certain values, sorting based on derived fields, or applying multi level sort criteria dynamically.

The following example demonstrates how to fetch records from the server and manually sort the data by **CustomerID** in `descending` order:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/querying-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/querying-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/querying-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/querying-cs2" %}
{% endif %}

## Filtering

The Syncfusion ##Platform_Name## DataManager allows you to filter records using the [where](../api/data/query/#where) method. It supports simple and complex filtering scenarios, making it easy to retrieve a reduced and meaningful subset of data from a larger dataset.

The following example demonstrates how to filter records where **EmployeeID** is equal to **3**:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs20" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs20" %}
{% endif %}

### Filter operators

Filter operators are generally used to specify the filter type. Syncfusion ##Platform_Name## DataManager supports a variours of filter operators:

| Operator             | Description                               |
|----------------------|-------------------------------------------|
| `equal`              | Matches exact value                       |
| `notequal`           | Excludes matching value                   |
| `greaterthan`        | Values greater than a specified value     |
| `greaterthanorequal` | Greater than or equal to a specified value|
| `lessthan`           | Less than a specified value               |
| `lessthanorequal`    | Less than or equal to a specified value   |
| `startswith`         | Starts with a substring                   |
| `endswith`           | Ends with a substring                     |
| `contains`           | Contains a substring                      |

Use the following [Query](../api/data/query/) format to apply any filter condition by updating the field name, operator, and value:

{% if page.publishingplatform == "typescript" %}

```ts
let query = new Query().where(field, operator, value);
```

{% elsif page.publishingplatform == "javascript" %}

```js
let query = new ej.data.Query().where(field, operator, value);
```
{% endif %}

The following example demonstrates how to filter records where the **CustomerID** contains the substring **VI**:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/querying-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/querying-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/querying-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/querying-cs8" %}
{% endif %}

> These filter operators are used for creating filter [Query](../api/data/query/) using [where](../api/data/query/#where) method and [Predicate](../api/data/predicate/) class.

### Build complex filter criteria using `Predicate`

Syncfusion ##Platform_Name## DataManager allows you to apply complex filtering logic using the [Predicate](../api/data/predicate/) class. This is useful when multiple conditions need to be combined using logical operators like `AND`, `OR`, `AND NOT`, or `OR NOT`. Use `Predicate` when chaining `.where()` methods becomes unwieldy or insufficient for complex filtering rules.

The DataManager supports various `Predicate` methods:

| Method               | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| **and**              | Combines another condition with the current one using `AND`.                                 |
| **andNot**           | Combines another condition using `AND NOT`.                                                  |
| **or**               | Combines another condition using `OR`.                                                       |
| **orNot**            | Combines another condition using `OR NOT`.                                                   |
| **toJson**           | Converts the `Predicate` to a plain JavaScript object for serialization.                       |
| **validate(record)** | Checks if a data record matches the `Predicate`. Returns a `boolean`.                          |
| **fromJson(json)**   | Converts plain JavaScript objects back into `Predicate` instances. Useful for deserialization. |

The following example demonstrates how to filter records where the **EmployeeID** is either **3** or **2** using the `Predicate` class to build complex filter conditions:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs21" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs21" %}
{% endif %}

## Searching

Syncfusion ##Platform_Name## DataManager allows you to perform global or field specific searches across your dataset using the [search](../api/data/query/#search) method. It is used to filter the records from the entire datasource based on the `search` parameter.

This method is ideal for implementing keyword based search experiences, especially in user driven scenarios like live search boxes or global table filters.

The following example demonstrates how to search for records where the **CustomerID** field contains the substring **VI** using the `search` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs22" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs22/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs22" %}
{% endif %}

> You can search particular fields by passing the field name collection in the second argument of [search](../api/data/query/#search) method.

## Grouping

The Syncfusion ##Platform_Name## DataManager allows you to group records by one or more fields using the [group](../api/data/query/#group) method. Grouping is especially useful for reporting, data summarization, and categorization, where related records need to be logically organized based on shared field values.

The following example demonstrates how to group records by **CustomerID**:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs23" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs23/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs23/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs23" %}
{% endif %}

> Multiple grouping can be done by simply chaining the [group](../api/data/query/#group) method.

## Paging

The Syncfusion ##Platform_Name## DataManager allow you to fetch data one page at a time instead of loading the entire dataset at once. This is especially useful when working with large collections of data, helping your application stay fast and responsive.

You can query paged data using [page](../api/data/query/#page) method. This allow you to query particular set of records based on the page size and index.

The page method takes two arguments:

| Parameter   | Type   | Description                               |
| ----------- | ------ | ----------------------------------------- |
| `pageIndex` | number | The page number to retrieve               |
| `pageSize`  | number | The number of records to display per page |

The following example demonstrate how to get the second page of data with 8 records per page:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs24" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs24/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs24" %}
{% endif %}

## Aggregation

The Syncfusion ##Platform_Name## DataManager allows you to compute summary values using the [aggregate](../api/data/query/#aggregate) method. This is useful when you need to display totals, averages, counts, or other statistical summaries alongside your data. Aggregation is ideal for dashboards, reports, and summary views, where high level insights like minimum, maximum, or total values are needed.

The built-in aggregate types are as follows:

| Aggregate Type | Description                      |
| -------------- | -------------------------------- |
| `sum`          | Adds all values in a field       |
| `average`      | Calculates the average of values |
| `min`          | Finds the smallest value         |
| `max`          | Finds the largest value          |
| `count`        | Counts all values                |
| `truecount`    | Counts `true` boolean values     |
| `falsecount`   | Counts `false` boolean values    |

The following example demonstrates how to retrieve and display the minimum **EmployeeID** value from the first 5 records using the `aggregate` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs25" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs25/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs25" %}
{% endif %}

## [addParams(key, value)](https://ej2.syncfusion.com/documentation/api/data/query/#addparams)

The `addParams` method enables you to append custom parameters to the `Query` string. These parameters are included in the server request and are particularly useful for:

* Sending dynamic user context (e.g., user ID, role, language).

* Passing authentication tokens or API keys.

* Applying server-side filters that are outside the standard query schema.

The following example demonstrates how to add custom parameters to a query request:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/querying-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/querying-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/querying-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/querying-cs3" %}
{% endif %}

![addParams](./image/query-addparams.png)

## [clone()](https://ej2.syncfusion.com/documentation/api/data/query/#clone)

The Syncfusion ##Platform_Name## DataManager provides the `clone` method, which allows you to create a deep copy of the current `Query` object. This is particularly useful when you want to reuse a base query and apply slight modifications without altering the original.

This method is ideal for scenarios like tabbed views or pagination, where the base query stays the same, but different tabs or pages require small changes.

The following example demonstrates how to clone a base query, skip the first five records, and retrieve the next five orders:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/querying-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/querying-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/querying-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/querying-cs4" %}
{% endif %}

## [requiresCount(value)](https://ej2.syncfusion.com/documentation/api/data/query/#requirescount)

The Syncfusion ##Platform_Name## DataManager provides the `requiresCount` method to instruct the server to return the total number of available records in addition to the paginated result set.

This method is essential for implementing pagination or infinite scrolling in UI components like DataGrid or ListView, where the total number of items is required to:

* Display accurate pagination controls.

* Render the correct page numbers.

The following example demonstrates how to get the total record count from the server using the `requiresCount` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/querying-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/querying-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/querying-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/querying-cs5" %}
{% endif %}

![requireCount](./image/query-requireCount.png)

## [range(start, end)](https://ej2.syncfusion.com/documentation/api/data/query/#range)

The Syncfusion ##Platform_Name## DataManager provides the `range(start, end)` method to retrieve records within a specific index range. This method internally applies both `skip()` and `take()` logic, offering a concise and efficient way to fetch a slice of data.

This method is especially useful in scenarios such as infinite scrolling or virtual paging, where you need to load data in chunks rather than all at once. By specifying a start and end index, you can efficiently retrieve just the portion of data needed for display.

The following example demonstrates how to retrieve records from the **5th to the 15th** position using the `range` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/querying-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/querying-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/querying-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/querying-cs6" %}
{% endif %}

## [setKey(fieldName)](https://ej2.syncfusion.com/documentation/api/data/query/#setkey)

 The Syncfusion ##Platform_Name## DataManager includes the `setKey(fieldName)` method to specify the primary key field for your dataset. This is crucial for enabling accurate CRUD operations such as update or delete where each record must be uniquely identifiable.

The following example demonstrates how to define **OrderID** as the primary key for the query using the `setKey` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/querying-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/querying-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/querying-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/querying-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/querying-cs7" %}
{% endif %}