---
layout: post
title: Getting started with ##Platform_Name## Query Builder UI | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Query Builder UI control, including setup, examples, and customization.
platform: ej2-javascript
control: Getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Query Builder UI

This section explains how to create a simple Query Builder and demonstrates the basic usage of the component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. The seed project is preconfigured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Prerequisites

Ensure the following tools are installed:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Setup for local development

Clone the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from GitHub in the command prompt:

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
```

Navigate to the project folder:

```bash
cd ej2-quickstart
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Query Builder packages

Install the `@syncfusion/ej2-querybuilder` package:

```bash
npm install @syncfusion/ej2-querybuilder --save
```

Install the remaining required npm packages:

```bash
npm install
```

> For more information about individual packages and alternative installation methods, see the [installation guide](https://ej2.syncfusion.com/documentation/installation-and-upgrade/installation).

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls provide built-in themes that are available from the [npm theme packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages). Themes can also be loaded via CDN or customized with [Theme Studio](https://ej2.syncfusion.com/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme).

The quickstart application is preconfigured to use the `Fluent2` theme. To install the [Fluent2](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm install @syncfusion/ej2-fluent2-theme --save
{% endhighlight %}
{% endtabs %}

The required styles are imported in the `~/src/styles/styles.css` file, as shown below:

{% tabs %}
{% highlight css tabtitle="styles.css" %}
@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/query-builder/index.css";
{% endhighlight %}
{% endtabs %}

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add the Query Builder control to the application

Open the application in Visual Studio Code and add the Query Builder element to the `~/src/index.html` file.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
</head>

<body>
    <div>
        <div id="querybuilder"></div>
    </div>
</body>

</html>
```

To render the Query Builder control, add the following TypeScript code to the `~/src/app/app.ts` file:

```ts
import { QueryBuilder, ColumnsModel } from '@syncfusion/ej2-querybuilder';

let columnData: ColumnsModel[] = [
    { field: 'EmployeeID', label: 'EmployeeID', type: 'number' },
    { field: 'FirstName', label: 'FirstName', type: 'string' },
    { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
    { field: 'Title', label: 'Title', type: 'string' },
    { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
    { field: 'Country', label: 'Country', type: 'string' },
    { field: 'City', label: 'City', type: 'string' }
];

let qryBldrObj: QueryBuilder = new QueryBuilder({
    width: '70%',
    columns: columnData
});

qryBldrObj.appendTo('#querybuilder');
```

## Run the application

Run the app in the browser with the following command:

```bash
npm start
```

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs17" %}

## See also

* [How to register Syncfusion<sup style="font-size:70%">&reg;</sup> license key in a TypeScript application](https://ej2.syncfusion.com/documentation/licensing/license-key-registration)