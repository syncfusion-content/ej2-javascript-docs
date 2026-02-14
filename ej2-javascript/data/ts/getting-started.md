---
layout: post
title: Getting started with ##Platform_Name## DataManager | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## DataManager of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in Syncfusion ##Platform_Name## DataManager

The Syncfusion ##Platform_Name## DataManager enables efficient data management in ##Platform_Name## applications. It seamlessly interacts with various datasources (remote or local) and provides functionalities like sorting, filtering, paging, and CRUD (Create, Read, Update, and Delete) operations, enhancing the data presentation capabilities of ##Platform_Name## applications.

This section provides a quick overview of setting up a ##Platform_Name## project and integrating the Syncfusion ##Platform_Name## DataManager. It includes instructions for installation, basic configuration, and integration with both local and remote datasources, along with support for data operations like sorting, filtering, and paging.

## Dependencies

Below is the list of minimum dependencies required to use the DataManager.

```javascript
|-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-base
    |-- es6-promise (Required when window.Promise is not available)
```

> `@syncfusion/ej2-data` requires the presence of a Promise feature in global environment. In the browser, window.Promise must be available.

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the **ej2-quickstart** folder, run the following command line to navigate to the 
**ej2-quickstart** folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent **@syncfusion/ej2** package in the **~/package.json** file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

or 

To install the Syncfusion package required for data management using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-data

{% endhighlight %}
{% endtabs %}

## Connection to a datasource

The Syncfusion ##Platform_Name## DataManager acts as a centralized data gateway, enabling seamless interaction with both local (in-memory) and remote (server-based) datasources. It abstracts the complexities of data handling by using a consistent API for data retrieval and manipulation across various components.

By integrating with the **Query** class, DataManager can perform essential operations such as:

* **Filtering** – Retrieve only the data that matches specific conditions.

* **Sorting** – Order records by one or more fields.

* **Paging** – Load and display data in chunks for performance.

* **Grouping** – Organize data into logical groups based on a specific field.

* **CRUD** – Create, Read, Update, and Delete records efficiently.

Whether the data resides in a static JSON file, a RESTful Web APIs, or an OData service, DataManager ensures that components like Grid, DropDownList, or Chart can consume and manipulate the data with minimal code.

### Binding to JSON data

Binding to a local datasource involves connecting your application directly to a dataset stored within the application itself, such as a JSON file. This approach is ideal for small-scale applications where data is static and does not need to be fetched from a server. It simplifies development and improves performance by keeping everything on the client side.

This can be done in one of two ways:

* Assigning an array of JavaScript objects to the `json` property, or

* Passing the data array directly to the `DataManager` constructor.

Follow these steps to bind the JSON data:

**1.** Create a file named **src/datasource.ts** and export the JSON data:

```ts

export let data: Object[] = [
  {
    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
    ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
    ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
  },
  {
    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
    ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
    ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
  },
  {
    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
    ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
    ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
  }
 // Add more records as needed.
]

```

**2.** In the **src/index.ts** file, import the data and bind it using `DataManager`.


**3.** Add the following CSS inside the <head> tag of the **index.html** file to style the table:

```css

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
  }

  .e-table td,
  .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }
 </style>

```

The following example demonstrates how to bind JSON data using the [executeLocal](../api/data/dataManager#executelocal) method of [DataManager](../../documentation/api/data/datamanager):

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/data/getting-started-cs27/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs27/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs27/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs27" %}

### Binding to ODataV4

OData (Open Data Protocol) is a standardized protocol for querying and updating data using RESTful Web API. It is widely adopted in enterprise applications for enabling structured, scalable access to remote data services. DataManager supports interacting with OData v3 and v4 services, allowing seamless integration with external datasources.

Bind a remote OData service to the DataManager by setting its `url` property to the service endpoint URL. This configuration enables the DataManager to automatically perform server-side operations such as sorting, filtering, paging, and CRUD by sending appropriate requests to the specified endpoint.

The following sample demonstrates how to bind the remote ODataV4 service using the [executeQuery](../api/data/dataManager#executequery) method of [DataManager](../api/data/datamanager):

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/data/getting-started-cs28/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs28/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs28" %}

## Filter

Data filtering lets applications show only the data that matches specific conditions. It helps simplify large datasets, making it easier to find the information needed quickly and efficiently.

Construct filter expressions using the [where](../api/data/query#where) method of the [Query](../api/data/query) class. This method allows specification of filter criteria based on various conditions.

The following example demonstrates how to filter data based on the **EmployeeID** field equal to **4** using the `where` method: 

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/data/getting-started-cs29/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs29/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs29/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs29" %}

## Sort

Sorting allows arranging data in a specific order, making it easier to read, analyze, and locate information quickly.

Sort the data either in ascending or descending order using the [sortBy](../api/data/query#sortby) method of the [Query](../api/data/query) class. This method specifies the field by which the data should be sorted.

The following example demonstrates how to sort data based on the **EmployeeID** field in **ascending** order using the `sortBy` method:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/data/getting-started-cs30/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs30/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs30/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs30" %}

## Page

Paging allows data to be displayed in segmented pages, making it easier to navigate large datasets. It is especially helpful in client-side applications, where only a limited number of records are shown per page to enhance readability and improve performance.

Use the [page](../api/data/query#page) method of the [Query](../api/data/query) class to retrieve a specific range of data based on the page index and page size.

The following example demonstrates how to apply paging to the data using the `page` method to get the first page containing 8 records:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/data/getting-started-cs31/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs31/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs31/datasource.ts%}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs31" %}