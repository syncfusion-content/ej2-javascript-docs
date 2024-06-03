---
layout: post
title: Getting started with ##Platform_Name## Grid control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Grid control

This section explains you the steps required to create a simple Essential JS 2 Grid and demonstrate the basic usage of the Grid control in a JavaScript application.

## Dependencies

Following is the list of dependencies to use the grid with all features.

```javascript
|-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-excel-export
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-notifications
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files for initializing the Essential JS 2 Grid control.

## Adding Syncfusion resources

The Essential JS 2 Grid control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

To utilize local scripts and styles for Syncfusion Grid, you can follow these steps:

**1. Download Essential Studio JavaScript (Essential JS 2):** Obtain the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installation location.

**2. Copy Files to Resources Folder:** After installing the Essential JS 2 product build, copy the grid and its dependencies scripts and style file into the designated folders:

**Scripts:** Copy the scripts to the **resources/scripts** folder.
**Styles:** Copy the styles to the **resources/styles** folder.

**3. Locate Script and Style Files:** Identify the location of the grid's script and style file. The syntax for the file paths is as follows:

**Syntax:**
>Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**
>Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-grids/dist/global/ej2-grids.min.js`
>Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-grids/styles/material.css`

**4. Referencing in HTML File:** Once the files are copied, reference the grid's scripts and styles into the **index.html** file.

Here's an example of referencing the grid's scripts and styles in an HTML file:

**a.Essential Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion Grid. Use this setup for a lightweight application that requires basic grid functionality.

```html

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 Grid's dependent material theme -->
    <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/grids/styles/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 Grid's dependent scripts -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Grid's global script -->
    <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>

```

**b.Extended Dependency (Additional Components)**
This setup includes additional dependencies required for more advanced functionalities of the grid, such as buttons, dropdowns, navigations and other components. Use this setup when you need to integrate additional features like filtering, paging, column menu and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 Grid's dependent material theme -->
    <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/grids/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/buttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/navigations/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/dropdowns/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/inputs/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/calendars/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/notifications/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/splitbuttons/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Grid's dependent scripts -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Grid's global script -->
    <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>

    <!-- Include Essential JS 2 other component's script based on features used -->
    <script src="resources/scripts/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-lists.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-calenders.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-notifications.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-splitbuttons.min.js" type="text/javascript"></script>

</head>

<body>
</body>

</html>
```

**c. Comprehensive Dependency (All Components)**
This setup includes all possible dependencies for Syncfusion components in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion components.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 material theme -->
    <link href="resources/styles/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 script -->
    <script src="resources/scripts/ej2.min.js" type="text/javascript"></script>
</head>

<body>
</body>
</html>
```

### Using CDN link for script and style

Using CDN link, you can directly refer the grid control's script and style into the `index.html`.

Refer the grid's CDN links as below

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: [http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js](http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js)
>
> Styles: [http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css](http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css)

Here's an example of referencing the grid's scripts and styles in an HTML file using CDN links:

**a.Essential Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion Grid. Use this setup for a lightweight application that requires basic grid functionality.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS 2 Grid</title>
          
          <!-- Essential JS 2 Grid's dependent material theme -->
          <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
          <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
          <link href="https://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 Grid's dependent script -->
          <script src="http://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
          <script src="http://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
          <script src="http://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>

          <!-- Essential JS 2 Grid's global script -->
          <script src="https://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**b.Extended Dependency (Additional Components)**

This setup includes additional dependencies required for more advanced functionalities of the grid, such as buttons, dropdowns, navigations and other components. Use this setup when you need to integrate additional features like filtering, paging, column menu and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>
    <!-- Essential JS 2 Grid's dependent material theme -->
    <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Grid's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js"
        type="text/javascript"></script>

    <!-- Essential JS 2 Grid's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>

    <!-- Include Essential JS 2 other component's script based on features used -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-calenders/dist/global/ej2-calenders.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-notifications/dist/global/ej2-notifications.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js"
        type="text/javascript"></script>

</head>

<body>
</body>

</html>

```

**c. Comprehensive Dependency (All Components)**

This setup includes all possible dependencies for Syncfusion components in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion components.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 material theme -->
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
</body>

</html>
```

Based on your requirement, additional dependencies can be included as needed. In this documentation, the common **ej2.min.js** and **material.css** are used, which include all the Essential JS 2 components and their dependent scripts and theme files.

## Adding Grid control

Now, you can start adding Grid control in the application. For getting started, add a **div** element for Grid control in **index.html**. Then refer the **index.js** file into the **index.html** file.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 material theme -->
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
    <!-- Add the HTML <div> element for grid  -->
    <div id="Grid"></div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>

```

Place the following grid code in the **index.js**.

```javascript

var grid = new ej.grids.Grid();
grid.appendTo('#Grid');

```

## Defining Row Data

Data for the Grid control is bind by using [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/grid/#datasource) property. It accepts either array of JavaScript object or [DataManager](https://ej2.syncfusion.com/javascript/documentation/grid/data-binding/data-binding) instance.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 material theme -->
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
    <!-- Add the HTML <div> element for grid  -->
    <div id="Grid"></div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>

```

Place the following grid code in the **index.js**.

```javascript
var data = [{ OrderID: 10248, CustomerID: 'VINET', Freight: 32.38, OrderDate: new Date(8364186e5) },
            { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61, OrderDate: new Date(836505e6) },
            { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83, OrderDate: new Date(8367642e5) },
            { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34, OrderDate: new Date(8368506e5) },
            { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3,  OrderDate: new Date(8367642e5) },
            { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17, OrderDate: new Date(836937e6) },
            { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98, OrderDate: new Date(8370234e5) },
            { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33, OrderDate: new Date(8371098e5) },
            { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97, OrderDate: new Date(837369e6) }];
var grid = new ej.grids.Grid({dataSource: data});
grid.appendTo('#Grid');

```

## Defining Columns

The Grid has an option to define columns as array. In these columns, we have properties to customize columns. Let’s check the properties used here:

* We have added [field](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#field) to map with a property name an array of JavaScript objects.
* We have added [headerText](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#headertext) to change the title of columns.
* We have used [textAlign](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#textalign) to change the alignment of columns. By default, columns will be left aligned. To change columns to right align, we need to define [textAlign](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#textalign) as **Right**.
* Also, we have used another useful property, [format](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#format). Using this, we can format number and date values to standard or custom formats. Here, we have defined it for the conversion of numeric values to currency.

```javascript
var data = [{ OrderID: 10248, CustomerID: 'VINET', Freight: 32.38, OrderDate: new Date(8364186e5) },
            { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61, OrderDate: new Date(836505e6) },
            { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83, OrderDate: new Date(8367642e5) },
            { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34, OrderDate: new Date(8368506e5) },
            { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3,  OrderDate: new Date(8367642e5) },
            { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17, OrderDate: new Date(836937e6) },
            { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98, OrderDate: new Date(8370234e5) },
            { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33, OrderDate: new Date(8371098e5) },
            { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97, OrderDate: new Date(837369e6) }];
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});
grid.appendTo('#Grid');

```

## Module injection

To create grids with additional features, inject the required modules. The following modules are used to extend grid's basic functionality.

* [Page](https://helpej2.syncfusion.com/javascript/documentation/api/grid/page/) - Inject this module to use paging feature.
* [Sort](https://helpej2.syncfusion.com/javascript/documentation/api/grid/sort/) - Inject this module to use sorting feature.
* [Filter](https://helpej2.syncfusion.com/javascript/documentation/api/grid/filter/) - Inject this module to use filtering feature.
* [Group](https://helpej2.syncfusion.com/javascript/documentation/api/grid/group/) - Inject this module to use grouping feature.
* **ExcelExport** - Inject this module to use Excel export feature.
* **PdfExport** - Inject this module to use PDF export feature.

These modules should be injected into the grid using the **ej.grids.Grid.Inject** method.

> Additional feature modules are available [here](https://helpej2.syncfusion.com/javascript/documentation/api/grid/overview/).

## Enable paging

The paging feature enables you to view the grid record in a paged view. To enable paging, set the [allowPaging](https://ej2.syncfusion.com/javascript/documentation/api/grid/#allowpaging) property to true. Inject the [Page](https://ej2.syncfusion.com/javascript/documentation/api/grid/#pagermodule) module as follows. If the [Page](https://ej2.syncfusion.com/javascript/documentation/api/grid/#pagermodule) module is not injected, the pager will not be rendered in the grid. Pager can be customized using the [pageSettings](https://ej2.syncfusion.com/javascript/documentation/api/grid/#pagesettings) property.

Create a file named **my-app/es5-datasource.js** to bind JSON data. Then, import **my-app/es5-datasource.js** in **index.html**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs128/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs128/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/grid/grid-cs128/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs128" %}

## Enable sorting

The sorting feature enables you to order the records. It can be enabled by setting the  [allowSorting](https://ej2.syncfusion.com/javascript/documentation/api/grid/#allowsorting) property as true. Inject the [Sort](https://ej2.syncfusion.com/javascript/documentation/api/grid/#sortmodule) module as follows. If [Sort](https://ej2.syncfusion.com/javascript/documentation/api/grid/#sortmodule) module is not injected, you cannot sort when a header is clicked. Sorting feature can be customized using the  [sortSettings](https://ej2.syncfusion.com/javascript/documentation/api/grid/#sortsettings) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs129/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs129/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/grid/grid-cs129/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs129" %}

## Enable filtering

The filtering feature enables you to view reduced amount of records based on filter criteria. It can be enabled by setting the [allowFiltering](https://ej2.syncfusion.com/javascript/documentation/api/grid/#allowfiltering) property as true.  The [Filter](https://ej2.syncfusion.com/javascript/documentation/api/grid/#filtermodule) module has to be injected as follows. If [Filter](https://ej2.syncfusion.com/javascript/documentation/api/grid/#filtermodule) module is not injected,  filter bar will not be rendered in the grid. Filtering feature can be customized using the [filterSettings](https://ej2.syncfusion.com/javascript/documentation/api/grid/#filtersettings) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs130/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs130/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/grid/grid-cs130/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs130" %}

## Enable grouping

The grouping feature enables you to view the grid record in a grouped view. It can be enabled by setting the [allowGrouping](https://ej2.syncfusion.com/javascript/documentation/api/grid/#allowgrouping) property to true. The [Group](https://ej2.syncfusion.com/javascript/documentation/api/grid/#groupmodule) module has to be injected as follows. If [Group](https://ej2.syncfusion.com/javascript/documentation/api/grid/#groupmodule) module is not injected, the group drop area will not be rendered in the grid.Grouping feature can be customized using the [groupSettings](https://ej2.syncfusion.com/javascript/documentation/api/grid/#groupsettings) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs131/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs131/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/grid/grid-cs131/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs131" %}

## Run the application

Now, run the **index.html** in web browser, it will render the Essential JS 2 Grid control.

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs132/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs132/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/grid/grid-cs132/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs132" %}

## Deploy the Application

The Essential JS 2 Grid control features are segregated into individual feature-wise modules. The [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build and **CDN** scripts contains code for all features used in grid and hence we suggest to not to use them in production. We strongly recommend you to generate script files to use in production using our **Custom Resource Generator**[(CRG)](https://crg.syncfusion.com) for Essential JS 2. CRG will allow you to generate the bundled script for the currently enabled features in grid.

## See Also

* [How to display a table data after clicking Submit button in Javascript?](https://support.syncfusion.com/kb/article/10145/how-to-display-a-table-data-after-clicking-submit-button-in-javascript)
* [How to display table in popup window using Javascript?](https://support.syncfusion.com/kb/article/10339/how-to-display-table-in-popup-window-using-javascript)
* [How to open pdf document on button click inside a Grid](https://support.syncfusion.com/kb/article/10246/how-to-open-pdf-document-on-button-click-inside-a-grid)
* [How to disable the default keyboard actions in Grid](https://support.syncfusion.com/kb/article/9578/how-to-disable-the-default-keyboard-actions-in-js-grid)
