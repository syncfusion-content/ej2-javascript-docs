---
layout: post
title: Getting started with ##Platform_Name## Pivotview control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Pivotview control

This section explains the steps to create a simple **Pivot Table** and demonstrates the basic usage of the pivot table component using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the pivot table component in your application.

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

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

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

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2/material.css";

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

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

The sample data is assigned to the pivot table component through dataSource property under dataSourceSettings.

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

Pivot Table component initialized and sample data assigned. Now add the fields to row, column, values and filters axes using following code.

* `rows`: Collection of fields that needs to be displayed in row axis of pivot table.
* `columns`: Collection of fields that needs to be displayed in column axis of pivot table.
* `values`: Collection of fields that needs to be displayed as aggregrated numeric values in pivot table.
* `filters`: Filter the values in other axis based on the collection of filter fields in pivot table.

In-order to define each field in the respective axis, the following basic properties should be set.

* `name`: It allows to set the field name from the bound data source. It’s casing should match exactly like in the data source and if not set properly, the pivot table will not be rendered.
* `caption`: It allows to set the field caption, which is the alias name of the field that needs to be displayed in the pivot table.
* `type`: It allows to set the summary type of the field. By default, SummaryType Sum is applied.

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

Formatting defines a way in which values should be displayed. For example, format “C” denotes the values should be displayed in currency pattern. To do so, define the name and format properties to formatSettings tag. In this illustration, the name property is set as Amount, a field from value section and its format is set as currency. Likewise, we can set format for other value fields as well and add it to formatSettings tag.

> Only fields from value axis, which is in the form of numeric data values are applicable for formatting.

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

To create pivot table with additional features, inject the required modules. The modules that are available with basic functionality are as follows.

* `GroupingBar` - Inject this module to access grouping bar feature.
* `FieldList` - Inject this module to access pivot field list feature.
* `CalculatedField` - Inject this module to access calculated field feature.

These modules should be injected into the pivot table using the `Inject` method within the `app.ts` file as shown below. On doing so, only the injected views will be loaded and displayed along with pivot table.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

PivotView.Inject(GroupingBar);

{% endhighlight %}
{% endtabs %}

## Enable Grouping Bar

The Grouping Bar feature automatically populates fields from the bound data source and allows end users to drag fields between different axes such as columns, rows, values, and filters, and create pivot table at runtime. It can be enabled by setting the `showGroupingBar` property to **true** and by injecting the `GroupingBar` module as follows.

> If the `GroupingBar` module is not injected, the grouping bar will not be rendered with the pivot table component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs372/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs372/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs372" %}

## Enable Pivot Field List

The component provides a built-in Field List similar to Microsoft Excel. It allows you to add or remove fields and also rearrange the fields between different axes, including column, row, value, and filter along with filter and sort options dynamically at runtime. It can be enabled by setting the `showFieldList` property to **true** and by injecting the `FieldList` module as follows.

> If the `FieldList` module is not injected, the Field List will not be rendered with the pivot table component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs373/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs373/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs373" %}

## Calculated field

The calculated field feature allows user to insert or add a new calculated field based on the available fields from the bound data source. It can be customized using the `calculatedFieldsSettings` property through code behind. The setting required for calculate field feature at code behind are:
* `name`: it allows to indicate the given calculated field with unique name.
* `formula`: it allows to set the formula base on the given data source.

Also calculated fields can be added at run time through the built-in dialog. The dialog can be enabled by setting the `allowCalculatedField` property to **true** and by injecting the `CalculatedField` module as follows.

> If the `CalculatedField` module is not injected, the calculated field dialog will not be rendered with the pivot table component. Moreover calculated field is applicable only for value fields.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/calculatedfield-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/calculatedfield-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/calculatedfield-cs6" %}

## Exploring Filter axis

The filter axis contains collection of fields that would act as master filter over the data bound in row, column and value axes of the pivot table. The fields along with filter members could be set to filter axis either through report via code behind or by dragging and dropping fields from other axes to filter axis via grouping bar or field list at runtime.

Place the following pivot table code in the `app.ts`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs374/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs374/index.html %}
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
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs375" %}
