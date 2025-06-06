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

This section explains the steps to create a simple Grid and demonstrates the basic usage of the grid component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2
[quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

## Dependencies

Following is the list of minimum dependencies required to use the grid.

```javascript
|-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-excel-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-pdf-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
```

## Setup for local development

<<<<<<< HEAD
Clone the Essential<sup style="font-size:70%">&reg;</sup> JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git), and install the necessary npm packages using the following command line scripts.
=======
Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart), and install the necessary npm packages using the following command line scripts.
>>>>>>> dffb264cd8572d95b7b8d4750a807381c4a16357

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

## Configuring system JS

**Syncfusion<sup style="font-size:70%">&reg;</sup> Grid packages** have to be mapped in the **system.config.js** configuration file.

```javascript
System.config({
    paths: {
         'npm:': './node_modules/',
         'syncfusion:': 'npm:@syncfusion/'
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-notifications":"syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
        "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
         "@syncfusion/ej2-querybuilder": "syncfusion:ej2-querybuilder/dist/ej2-querybuilder.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Adding CSS reference

Combined CSS files are available in the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package root folder. This can be referenced in your `[src/styles/styles.css]` using the following code.

```
@import '../../node_modules/@syncfusion/ej2/material.css';
```

> To know about individual component CSS, please refer to [Individual Component theme files](../appearance/theme/#referring-individual-control-theme) section.

## Adding Grid component

You can start adding Essential<sup style="font-size:70%">&reg;</sup> JS 2 grid component to the application. To get started, add the grid component in **app.ts** and **index.html** files using the following code.

Place the following grid code in the **app.ts**.

```ts
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    height: 315
});

grid.appendTo('#Grid');

```

Now, add an HTML div element to act as the grid element in **index.html** using the following code.

```html
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

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as Grid-->
    <div id="Grid"></div>
</body>

</html>
```

## Module injection

To create grids with additional features, inject the required modules. The following modules are used to extend grid's basic functionality.

* [`Page`](../api/grid/page/) - Inject this module to use paging feature.
* [`Sort`](../api/grid/sort/) - Inject this module to use sorting feature.
* [`Filter`](../api/grid/filter/) - Inject this module to use filtering feature.
* [`Group`](../api/grid/group/) - Inject this module to use grouping feature.
* **ExcelExport** - Inject this module to use Excel export feature.
* **PdfExport** - Inject this module to use PDF export feature.

These modules should be injected into the grid using the **Grid.Inject** method.

> Additional feature modules are available [`here`](../grid/module/).

## Enable paging

The paging feature enables users to view the grid record in a paged view. It can be enabled by setting the  [`allowPaging`](../api/grid/#allowpaging) property to true. Inject the [`Page`](../api/grid/page/) module as follows. If the [`Page`](../api/grid/page/) module is not injected, the pager will not be rendered in the grid. Pager can be customized using the [`pageSettings`](../api/grid/pageSettings/) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs72/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs72/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs72" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs72/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs72/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs72" %}
{% endif %}

## Enable sorting

The sorting feature enables you to order the records. It can be enabled by setting the  [`allowSorting`](../api/grid/#allowsorting) property as true. Inject the [`Sort`](../api/grid/sort/)
  module as follows. If [`Sort`](../api/grid/sort/) module is not injected, you cannot sort when a header is clicked. Sorting feature can be customized using the  [`sortSettings`](../api/grid/sortSettings/) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs73/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs73/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs73" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs73/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs73/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs73" %}
{% endif %}

## Enable filtering

The filtering feature enables you to view reduced amount of records based on filter criteria. It can be enabled by setting the [`allowFiltering`](../api/grid/#allowfiltering) property as true.  The [`Filter`](../api/grid/filter/) module has to be injected as follows.
 If [`Filter`](../api/grid/filter/) module is not injected,  filter bar will not be rendered in the grid. Filtering feature can be customized using the [`filterSettings`](../api/grid/filterSettings/) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs74/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs74/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs74" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs74/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs74/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs74" %}
{% endif %}

## Enable grouping

The grouping feature enables users to view the grid record in a grouped view. It can be enabled by setting the [`allowGrouping`](../api/grid/#allowgrouping) property to true. The [`Group`](../api/grid/group/) module has to be injected as follows. If [`Group`](../api/grid/group/) module is not injected, the group drop area will not be rendered in the grid. Grouping feature can be customized using the [`groupSettings`](../api/grid/groupSettings/) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs75/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs75/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs75" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs75/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs75/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs75" %}
{% endif %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```
npm start
```

Output will be displayed as follows.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs76/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs76/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs76" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs76/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs76/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs76" %}
{% endif %}

## See Also

* [Overview of Grid](https://www.syncfusion.com/blogs/post/overview-of-grid-in-essential-js-2-part-1)
* [Introduction to the Grid control](https://www.syncfusion.com/blogs/post/introduction-to-the-grid-control-for-javascript)
* [How to display a table data after clicking Submit button in JavaScript?](https://support.syncfusion.com/kb/article/10145/how-to-display-a-table-data-after-clicking-submit-button)
* [How to display table in popup window using JavaScript?](https://support.syncfusion.com/kb/article/10339/how-to-display-table-in-popup-window-using-javascript)
* [How to open pdf document on button click inside a Grid](https://support.syncfusion.com/kb/article/10246/how-to-open-pdf-document-on-button-click-inside-a-grid)
* [How to disable the default keyboard actions in Grid](https://support.syncfusion.com/kb/article/9578/how-to-disable-the-default-keyboard-actions-in-js-grid)

N> You can refer to our [JavaScript DataGrid](https://www.syncfusion.com/javascript-ui-controls/js-data-grid) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript DataGrid example](https://ej2.syncfusion.com/demos/#/bootstrap5/grid/default.html) that shows you how to present and manipulate data.