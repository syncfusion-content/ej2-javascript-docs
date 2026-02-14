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

The Syncfusion ##Platform_Name## DataManager enables efficient data management in ##Platform_Name## applications. It seamlessly interacts with various datasources (remote or local) and provides functionalities like sorting, filtering, paging, and CRUD (Create, Read, Update, and Delete) operations, enhancing the data presentation capabilities of your ##Platform_Name## application.

This section provides a quick overview of setting up a ##Platform_Name## project and integrating the Syncfusion ##Platform_Name## DataManager. It includes instructions for installation, basic configuration, and integration with both local and remote datasources, along with support for data operations like sorting, filtering, and paging.

## Dependencies

Below is the list of minimum dependencies required to use the DataManager.

```javascript
|-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-base
    |-- es6-promise (Required when window.Promise is not available)
```

> `@syncfusion/ej2-data` requires the presence of a Promise feature in global environment. In the browser, window.Promise must be available.

## Setup for local environment

Follow these steps to set up the local environment.

**Step 1:** Create a root folder `my-app` for the application.

**Step 2:** Create `my-app/resources` folder to store local scripts files.

**Step 3:** Create `my-app/index.js` and `my-app/index.html` files for initializing Essential JS 2 DataManager.

## Adding Syncfusion resources

The Syncfusion ##Platform_Name## DataManager can be initialized by using either of the following ways.

* Using local script.
* Using CDN link for script.

### Using local script

The global script is available from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential JS 2 product build, copy the data manager and its dependencies scripts file into the `resources/scripts` folder.

Refer to the below code to find the DataManager script file location.

**Syntax:**

> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-data/dist/global/ej2-data.min.js`

After copying the files, refer the pager's scripts in the `index.html` file.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 Data Manager's dependent script -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Data Manager's global script -->
            <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

### Using CDN link for script

Using CDN link, refer the DataManager and its dependencies script directly in the `index.html`.

DataManager CDN links are provided below

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**

> Script: [`http://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js`](http://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js)

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 Data Manager's dependent script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Pager's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

## Connection to a datasource

The Syncfusion ##Platform_Name## DataManager acts as a centralized data gateway, enabling seamless interaction with both local (in-memory) and remote (server-based) datasources. It abstracts the complexities of data handling by using a consistent API for data retrieval and manipulation across various components.

By integrating with the **Query** class, DataManager performs essential operations such as:

* **Filtering** – Retrieve only the data that matches specific conditions.

* **Sorting** – Order records by one or more fields.

* **Paging** – Load and display data in chunks for performance.

* **Grouping** – Organize data into logical groups based on a specific field.

* **CRUD** – Create, Read, Update, and Delete records efficiently.

Whether the data resides in a static JSON file, a RESTful Web API, or an OData service, DataManager enables components like Grid, DropDownList, or Chart to consume and manipulate the data with minimal code.

### Binding to JSON data

Binding to a local datasource involves connecting your application directly to a dataset stored within the application itself, such as a JSON file. This approach is ideal for small-scale applications with static data that does not need to be fetched from a server. It simplifies development and improves performance by keeping all data on the client side.

This can be accomplished in one of two ways:

* Assigning an array of JavaScript objects to the `json` property, or

* Passing the data array directly to the `DataManager` constructor.

The following steps demonstrate to bind JSON data:

**1.** Create a file named **src/datasource.js** and define the JSON data:

```ts

var data = [
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
**2.** Include the **datasource.js** file in the **index.html** before the main script:

**3.** In the **src/index.js** file, bind the data to the table using `DataManager`:

**4.** Add the following CSS inside the <head> tag of the **index.html** file to style the table:

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

The following example demonstrates how to bind JSON data using the [executeLocal](../api/data/dataManager#executelocal) method of [DataManager](../api/data/datamanager):

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs9/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="es5-datasource.js" %}
{% include code-snippet/data/getting-started-cs9/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs9" %}

### Binding to ODataV4

OData (Open Data Protocol) is a standardized protocol for querying and updating data using RESTful Web API. It is widely adopted in enterprise applications for enabling structured, scalable access to remote data services. It supports interacting with OData v3 and v4 services, allowing seamless integration with external datasources.

Bind a remote OData service to the DataManager by setting its `url` property to the service endpoint URL. This configuration enables the DataManager to automatically perform server-side operations such as sorting, filtering, paging, and CRUD by sending appropriate requests to the specified endpoint.

The following sample demonstrates how to bind the remote ODataV4 service using the [executeQuery](../api/data/dataManager#executequery) method of [DataManager](../api/data/datamanager):

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs10" %}

## Filter

Data filtering displays only data matching specific conditions. It helps simplify large datasets, enabling efficient information retrieval.

Construct filter expressions using the [where](../api/data/query#where) method of the [Query](../api/data/query) class. This method specifies filter criteria based on various conditions.

The following example demonstrates how to filter data based on the **EmployeeID** field equal to **4** using the `where` method: 

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs29/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs29/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="es5-datasource.js" %}
{% include code-snippet/data/getting-started-cs29/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs29" %}

## Sort

Sorting allows data to be arranged data in a specific order, making it easier to read, analyze, and locate information quickly.

Sort the data in ascending or descending order using the [sortBy](../api/data/query#sortby) method of the [Query](../api/data/query) class. This method specifies the field by which the data should be sorted.

The following example demonstrates how to sort data based on the **EmployeeID** field in **ascending** order using the `sortBy` method:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs30/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs30/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="es5-datasource.js" %}
{% include code-snippet/data/getting-started-cs30/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs30" %}

## Page

Paging allows data to be displayed in segmented pages, making it easier to navigate large datasets. It is especially helpful in client-side applications, where only a limited number of records are shown per page to enhance readability and improve performance.

Use the [page](../api/data/query#page) method of the [Query](../api/data/query) class to retrieve a specific range of data based on the page index and page size.

The following example demonstrates how to apply paging to the data using the `page` method to get the first page containing 8 records:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs31/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs31/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="es5-datasource.js" %}
{% include code-snippet/data/getting-started-cs31/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs31" %}