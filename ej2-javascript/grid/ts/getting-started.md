---
layout: post
title: Getting started with TypeScript DataGrid control | Syncfusion
description:  Checkout and learn about Getting started with TypeScript DataGrid control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in TypeScript DataGrid control

This section explains the steps to create a simple DataGrid and demonstrates the basic usage of the DataGrid component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2
[quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the **webpack.config.js** configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires node **v14.15.0** or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

## Setup for local development

Clone the Essential<sup style="font-size:70%">&reg;</sup> JS 2 quickstart application project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) using the following command line scripts.

```
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack
cd ej2-quickstart-webpack
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Grids package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the dependent npm packages from the command prompt.

```
npm install
```

## Adding CSS reference

Combined CSS files are available in the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package root folder. This can be referenced in your `[src/styles/styles.css]` using the following code.

```
@import '../../node_modules/@syncfusion/ej2/fluent2.css';
```

## Adding DataGrid component

Add the DataGrid component in **app.ts** file using the following code.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Grid } from '@syncfusion/ej2-grids';

// Defines the data to be displayed in the Grid.
const data: object[] = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 },
    { OrderID: 10251, CustomerName: 'Elizabeth Lincoln', OrderDate: new Date(2025, 1, 18), ShipCountry: 'France', Freight: 41.34 },
    { OrderID: 10252, CustomerName: 'Victoria Ashworth', OrderDate: new Date(2025, 2, 10), ShipCountry: 'Belgium', Freight: 51.30 },
    { OrderID: 10253, CustomerName: 'Martine Rance', OrderDate: new Date(2025, 2, 22), ShipCountry: 'Brazil', Freight: 58.17 },
]

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', type: 'number', isPrimaryKey: true },
        { field: 'CustomerName', headerText: 'Customer Name', width: 140, type: 'string' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right', format: 'C' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140, type: 'string' },
    ]
});

grid.appendTo('#Grid');

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

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
    <!-- Syncfusion styling reference -->
    <link href="/styles/styles.css" rel="stylesheet" />
</head>

<body>
    <div>
        <!--HTML DataGrid element, which is going to render as Essential JS 2 DataGrid-->
        <div id="Grid"></div>
    </div>
</body>

</html>

{% endhighlight %}

{% highlight html tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2/fluent2.css';

{% endhighlight %}

{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs132" %}

## Run the application

```
npm start
```

## See also

* [DataGrid Feature Modules](https://ej2.syncfusion.com/documentation/grid/module)
* [How to open PDF document on button click inside a DataGrid](https://support.syncfusion.com/kb/article/10246/how-to-open-pdf-document-on-button-click-inside-a-grid)