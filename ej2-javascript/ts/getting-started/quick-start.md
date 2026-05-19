---
layout: post
title: Quick start with ##Platform_Name## Getting started control | Syncfusion
description:  Checkout and learn about Quick start with ##Platform_Name## Getting started control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Quick start 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with JavaScript library from a seed application

This article provides a step-by-step guide to set up the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) library and build a simple JavaScript web application using the GitHub [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Prerequisites

Ensure the following tools are installed on your machine:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Set up the development environment

Clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from GitHub:

```
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
```

Navigate to the project folder:

```
cd ej2-quickstart
```

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Install the required npm packages:

```
npm install
```

> For more information about individual packages and alternative installation methods, see the [installation guide](https://ej2.syncfusion.com/documentation/installation-and-upgrade/installation).

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Fluent2` theme in the `~/src/styles/styles.css` file, as shown below: 

```
@import "../../node_modules/@syncfusion/ej2/fluent2.css";
```

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> control to the application

Open the application in Visual Studio Code and add the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript UI controls. 

In this article, the Grid control is used as an example. Add the following Grid element to the `~/src/index.html` file.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
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
 ```

To render the Grid control, add the following JavaScript code to the `~/src/app/app.ts` file

```ts
import { Grid } from '@syncfusion/ej2-grids';

// Grid data
const data: Object[] = [
    {
        OrderID: 10248,
        CustomerID: 'VINET',
        EmployeeID: 5,
        ShipCountry: 'France',
        Freight: 32.38
    },
    {
        OrderID: 10249,
        CustomerID: 'TOMSP',
        EmployeeID: 6,
        ShipCountry: 'Germany',
        Freight: 11.61
    },
    {
        OrderID: 10250,
        CustomerID: 'HANAR',
        EmployeeID: 4,
        ShipCountry: 'Brazil',
        Freight: 65.83
    }
];

// initialize grid control
let grid: Grid = new Grid({
    dataSource: data,
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'EmployeeID', width: 140, headerText: 'Employee ID', textAlign: 'Right', type: 'string' },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
            { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

// render initialized grid
grid.appendTo('#Grid');
```

## Run the application

Now, run the application in the browser using the following command.

```
npm start
```
        
{% previewsample "page.domainurl/code-snippet/common/getting-started-cs1" %}

To learn more about the functionality of the Grid control, refer to the [documentation](https://ej2.syncfusion.com/documentation/grid/getting-started).

## See also

* [How to register Syncfusion<sup style="font-size:70%">&reg;</sup> license key in JavaScript(ES6) application](https://ej2.syncfusion.com/documentation/licensing/license-key-registration)
