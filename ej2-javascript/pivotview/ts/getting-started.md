---
layout: post
title: Getting started with ##Platform_Name## Pivot Table component | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Pivot Table component of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Pivot Table component

This section explains the steps to create a simple **Pivot Table** and demonstrates the basic usage of the pivot table component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/documentation/ai-coding-assistant/overview).

## Dependencies

Understanding the dependency structure helps you identify the required packages for implementing the Pivot Table component effectively in your Typescript application. The Pivot Table component relies on a structured hierarchy of dependencies that provide essential functionality for data processing, user interface elements, and export capabilities.

The following dependency tree shows the required packages for the Typescript Pivot Table component:

```javascript
|-- @syncfusion/ej2-pivotview
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-excel-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-pdf-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
```

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2/material.css";

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section to know more about built-in themes and CSS reference for individual controls.

## Browser compatibility

Polyfills are required to use the Pivot Table in Internet Explorer 11 browser. Refer the [documentation](https://ej2.syncfusion.com/documentation/browser/?no-cache=1#browser-support) for more details.

## Initializing pivot table component in the application

Pivot Table component can be initialized using the following code. To get started, add the pivot table component in `app.ts` and `index.html` files using the following code.

Place the following pivot table code in the `app.ts`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';


let pivotTableObj: PivotView = new PivotView();
pivotTableObj.appendTo('#PivotTable');

{% endhighlight %}
{% endtabs %}

Now, add an HTML div element which act as the pivot table element in `index.html` using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>pivot table Typescript Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css " />
</head>
<body>
    <!--Element where the pivot table will be rendered-->
    <div id="PivotTable"></div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

## Assigning sample data to pivot table component

To enable users to perform meaningful analysis and generate actionable insights, the Pivot Table component requires a well-structured data source. This data source contains the information you want to analyze and visualize.

For demonstration purposes, we'll use a collection of objects containing sales details for various products across different periods and regions. This sample data is assigned to the Pivot Table component through the [`dataSource`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#datasource) property under the [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings) configuration. For more details on relational data binding, refer [here](./data-binding).

Here’s the complete code to initialize the Pivot Table with sample data:

Place the following pivot table code in the `app.ts`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';

let pivotData: IDataSet[] = [
            { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
            { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
            { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
            { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
            { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
    },
});
pivotTableObj.appendTo('#PivotTable');

{% endhighlight %}
{% endtabs %}

## Adding fields to row, column, values and filters axes

Organizing fields into appropriate axes transforms raw data into a structured, meaningful Pivot Table that enables users to analyze patterns and trends effectively. With the Pivot Table now initialized and populated with sample data, the next logical step involves organizing the appropriate fields into row, column, value, and filter axes to create a functional data analysis tool.

In the [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings) configuration, four primary axes play a crucial role in defining and organizing fields from the bound data source to render the Pivot Table component in the desired format.

**Understanding the four axes:**

- [`rows`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#rows) – Collection of fields that will be displayed along the row axis of the Pivot Table.
- [`columns`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#columns) – Collection of fields that will be displayed along the column axis of the Pivot Table.
- [`values`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#values) – Collection of fields that will be displayed as aggregated numeric values within the Pivot Table.
- [`filters`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#filters) – Collection of fields that act as master filters over the data bound to the row, column, and value axes of the Pivot Table.

**Essential field properties:**

To define each field in its respective axis, configure the following basic properties:

* [`name`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel#name): Sets the field name from the bound data source. The casing must match exactly as it appears in the data source, otherwise the Pivot Table will not render correctly.
* [`caption`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel#caption): Sets the field caption, which serves as the display name for the field in the Pivot Table.
* [`type`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel#type): Sets the summary type for the field. By default, the **Sum** aggregation is applied.

In this example, "Date" and "Product" are positioned in the column axis, "Country" and "State" are placed in the row axis, and "Sold" and "Quantity" are configured as values respectively.

Place the following pivot table code in the `app.ts`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';

let pivotData: IDataSet[] = [
            { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
            { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
            { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
            { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
            { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold', type: 'Sum' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: [{ name: 'Quarter' }]
    },
});
pivotTableObj.appendTo('#PivotTable');

{% endhighlight %}
{% endtabs %}

Now, add an HTML div element which act as the pivot table element in `index.html` using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>pivot table Typescript Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css " />
</head>
<body>
    <!--Element where the pivot table will be rendered-->
    <div id="pivotTable"></div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

## Apply formatting to value fields

Formatting enhances the readability and presentation of numerical data in a Pivot Table, making it more user-friendly and professional. For instance, you can display values with currency symbols or control the number of decimal places for better clarity.

To apply formatting to value fields in the Pivot Table, use the [`formatSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/formatSettings) property. This property accepts an array of format objects, where each object defines formatting rules for a specific field in your data.

Within each format object in the [`formatSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/formatSettings) array, set the [`name`](https://ej2.syncfusion.com/documentation/api/pivotview/formatSettings#name) property to match the exact field name from your value section. Then, specify the desired display format using the [`format`](https://ej2.syncfusion.com/documentation/api/pivotview/formatSettings#format) property. In the example below, the **Amount** field is configured to display values in currency format using the "C0" pattern, which shows currency symbols without decimal places.

> **Note:** Formatting can only be applied to numeric fields in the value section of the Pivot Table.

Place the following pivot table code in the `app.ts`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';

let pivotData: IDataSet[] = [
            { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
            { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
            { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
            { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
            { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold', type: 'Sum' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: [{ name: 'Quarter' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
    },
});
pivotTableObj.appendTo('#PivotTable');

{% endhighlight %}
{% endtabs %}

## Module injection

Module injection enhances the Pivot Table by enabling additional functionality through specialized modules. To incorporate specific features into your Pivot Table, inject the required modules into your Typescript application.

The following modules are available to extend the basic Pivot Table functionality:

* `GroupingBar` - Inject this module to enable the grouping bar, which allows users to drag and drop fields between different axes of the Pivot Table.
* `FieldList` - Inject this module to enable the field list, providing an interactive interface for users to add, remove, and rearrange fields dynamically.
* `CalculatedField` - Inject this module to enable calculated fields, allowing users to create custom formulas and expressions for data analysis.

To make these modules available, inject them into the PivotView using the `Inject` component within your `app.ts` file, as shown below. By injecting only the modules you need, your application loads faster and uses fewer resources, as unnecessary module code is excluded from the final bundle.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

PivotView.Inject(GroupingBar);

{% endhighlight %}
{% endtabs %}

## Enable Grouping Bar

The grouping bar allows users to easily manage and modify the report settings of the Pivot Table directly through the user interface. With the grouping bar, users can instantly move fields between columns, rows, values, and filters by dragging them, allowing for quick arrangement and analysis of the data.

Users can also use the grouping bar to sort, filter, or remove fields quickly without needing to write any code. To enable the grouping bar, set the [`showGroupingBar`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotViewModel#showgroupingbar) property to **true**, and make sure to inject the `GroupingBar` module in your application. For more details about using the grouping bar, see the [Grouping Bar documentation](./grouping-bar).

> The `GroupingBar` module must be injected for the grouping bar to render properly with the Pivot Table component. Without this module, the grouping bar will not be available.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs372/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs372/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs372/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs372" %}

## Enable Pivot Field List

The field list enhances user interaction by allowing you to dynamically add, remove, and rearrange fields across different axes **including column, row, value, and filter axes**. This user-friendly interface also provides sorting and filtering options that can be applied at runtime without requiring code changes.

To enable the field list, set the [`showFieldList`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotViewModel#showfieldlist) property to **true** and inject the `FieldList` module into your component. This combination activates the field list interface, making it accessible to users to modify PivotTable report settings. For comprehensive details about field list functionality, [`refer`](./field-list) to the dedicated field list documentation.

> The `FieldList` module must be injected for the field list to render properly with the Pivot Table component. Without this module, the field list will not be available..

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs373/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs373/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs373/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs373" %}

## Calculated field

The calculated field feature enables users to create custom value fields using mathematical formulas and existing fields from their data source. Users can perform complex calculations with basic arithmetic operators and seamlessly integrate these custom fields into their pivot table for enhanced data visualization and reporting.

Users can add calculated fields in two ways:
- **Using code:** Set up calculated fields through the [`CalculatedFieldSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/calculatedFieldSettings) property when configuring the Pivot Table.
- **Using the user interface:** Alternatively, calculated fields can be added at runtime through a built-in dialog by setting the [`allowCalculatedField`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotViewModel#allowcalculatedfield) property to **true** and by injecting the **CalculatedField** module. When enabled, a button appears in the Field List UI. Clicking this button opens a dialog that allows users to create, edit, or remove calculated fields at runtime. To learn more about calculated fields, [`refer`](./calculated-field) here.

> To use the calculated field dialog, make sure the **CalculatedField** module is injected. If it is not injected, the popup dialog will not be shown with the Pivot Table.

> By default, calculated fields created through code-behind are only added to the field list and calculated field dialog UI. To display a calculated field in the Pivot Table UI, you must add it to the [`values`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#values) property, as shown in the code below. Additionally, calculated fields can only be added to the value axis.

Below is a sample code that shows how to set up calculated fields both through code-behind and using the popup dialog:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/calculatedfield-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/calculatedfield-cs6/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/pivot-table/calculatedfield-cs6/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/calculatedfield-cs6" %}

## Exploring Filter axis

The filter axis helps users display only the most relevant information in the Pivot Table for easier analysis. Users can add fields to the filter axis, which act as a master filter over the data displayed in the [`rows`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#rows), [`columns`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#columns), and [`values`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#values) axes. You can set these fields and their filter items in two ways: by configuring them in your [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings) through code, or by simply dragging and dropping fields from other axes to the filter axis using the grouping bar or the field list at runtime. This makes it easier to analyze targeted subsets of data without modifying the underlying structure of the Pivot Table.

The following example shows how to add fields to the filter axis in a Typescript Pivot Table:

Place the following pivot table code in the `app.ts`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs374/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs374/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs374/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs374" %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs375/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs375/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs375/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs375" %}

For more information and to access the quick start project, visit: [GitHub Repository](https://github.com/SyncfusionExamples/getting-started-with-the-typescript-pivot-table-component)
          
