---
layout: post
title: Getting started with ##Platform_Name## Pivot Table component | Syncfusion
description: Check out and learn about Getting started with ##Platform_Name## Pivot Table component of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Pivot Table component

This section guides you through the steps to create a simple [Pivot Table](https://www.syncfusion.com/javascript-ui-controls/js-pivot-table) in a JavaScript application. It demonstrates how to set up and use the Pivot Table component to display and analyze data effectively.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/javascript/documentation/ai-coding-assistant/overview)

## Dependencies

Understanding the dependency structure helps you identify the required packages for implementing the Pivot Table component effectively in your Javascript application. The Pivot Table component relies on a structured hierarchy of dependencies that provide essential functionality for data processing, user interface elements, and export capabilities.

The following dependency tree shows the required packages for the Javascript Pivot Table component:

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
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-charts
        |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-grids  
```

## Set up the local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder `my-app` for your application.

**Step 2:** Create `my-app/resources` folder to store local script and style files.

**Step 3:** Open Visual Studio Code and create `my-app/index.js` and `my-app/index.html` files for initializing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pivot Table control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 pivot table control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

**1. Download Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2):** Obtain the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**2. Copy Files to Resources Folder:** After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, you can copy the pivot table scripts and style file into the designated folders:

Scripts: Copy the scripts to the `resources/scripts` folder.

Styles: Copy the styles to the `resources/styles` folder.

**3. Locate Script and Style Files:** Refer to the code below to find the location of the pivot table's script and style file.

**Syntax:**

> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-pivotview/dist/global/ej2-pivotview.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-pivotview/styles/material.css`

After copying the files, you can then reference the Pivot Table and its [dependency](#dependencies) scripts and styles in the **index.html** file.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 pivot table's dependent material theme -->
            <link href="resources/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/ej2-lists/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 pivot table's material theme -->
            <link href="resources/ej2-pivotview/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 pivot table's dependent scripts -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-file-utils.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-compression.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-excel-export.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-pdf-export.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-calendars.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-charts.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 pivot table's global script -->
            <script src="resources/scripts/ej2-pivotview.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

> In this illustration, we have referred **material** theme. You can also refer other themes like bootstrap, fabric, high-contrast etc.,

### Using CDN link for script and style

Using CDN link, you can directly refer the pivot table control's script and style into the `index.html`.

Refer the pivot table's CDN links as below

**Syntax:**

> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: [`https://cdn.syncfusion.com/ej2/ej2-pivotview/dist/global/ej2-pivotview.min.js`](https://cdn.syncfusion.com/ej2/ej2-pivotview/dist/global/ej2-pivotview.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-pivotview/styles/material.css`](https://cdn.syncfusion.com/ej2/ej2-pivotview/styles/material.css)

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 pivot table's dependent material theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 pivot table's material theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-pivotview/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 pivot table's dependent scripts -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-excel-export/dist/global/ej2-excel-export.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 pivot table's global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-pivotview/dist/global/ej2-pivotview.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

<!-- markdownlint-disable MD028 -->

> In this illustration, we have referenced the **Material** theme. You can also use other themes like Bootstrap, Fabric, or High Contrast.

## Browser compatibility

Polyfills are required to use the Pivot Table in Internet Explorer 11 browser. Refer the [documentation](https://ej2.syncfusion.com/javascript/documentation/browser/?no-cache=1#browser-support) for more details.

## Initializing pivot table component in the application

The Pivot Table component can be initialized using the following code. To get started, add the Pivot Table component in **index.js** and **index.html** using the following code.

To get started, add **div** element for pivot table control in **index.html**. Then refer the **index.js** file into the **index.html** file.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 pivot table's dependent material theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 pivot table's material theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-pivotview/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Pivot table's dependent scripts -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-excel-export/dist/global/ej2-excel-export.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 pivot table's global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-pivotview/dist/global/ej2-pivotview.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for pivot table  -->
             <div id="PivotTable"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Next we need to initialize pivot table component using **ej.pivotview.PivotView()** instance as follows.

```javascript

var pivotTableObj = new ej.pivotview.PivotView();

```

## Assigning sample data to pivot table component

To enable users to perform meaningful analysis and generate actionable insights, the Pivot Table component requires a well-structured data source. This data source contains the information you want to analyze and visualize.

For demonstration purposes, we'll use a collection of objects containing sales details for various products across different periods and regions. This sample data is assigned to the Pivot Table component through the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings#datasource) property under the [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings) configuration. For more details on relational data binding, refer [here](./data-binding).

Here’s the complete code to initialize the Pivot Table with sample data:

Place the following pivot table code in the `index.js`.

```javascript

var pivotData = [
            { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
            { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
            { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
            { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
            { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];
var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
    }
});
pivotTableObj.appendTo('#PivotTable');

```

## Adding fields to row, column, value, and filter axes

Organizing fields into appropriate axes transforms raw data into a structured, meaningful Pivot Table that enables users to analyze patterns and trends effectively. With the Pivot Table now initialized and populated with sample data, the next logical step involves organizing the appropriate fields into row, column, value, and filter axes to create a functional data analysis tool.

In the [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings) configuration, four primary axes play a crucial role in defining and organizing fields from the bound data source to render the Pivot Table component in the desired format.

**Understanding the four axes:**

- [`rows`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings#rows) – Collection of fields that will be displayed along the row axis of the Pivot Table.
- [`columns`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings#columns) – Collection of fields that will be displayed along the column axis of the Pivot Table.
- [`values`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings#values) – Collection of fields that will be displayed as aggregated numeric values within the Pivot Table.
- [`filters`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings#filters) – Collection of fields that act as master filters over the data bound to the row, column, and value axes of the Pivot Table.

**Essential field properties:**

To define each field in its respective axis, configure the following basic properties:

* [`name`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptionsModel#name): Sets the field name from the bound data source. The casing must match exactly as it appears in the data source, otherwise the Pivot Table will not render correctly.
* [`caption`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptionsModel#caption): Sets the field caption, which serves as the display name for the field in the Pivot Table.
* [`type`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptionsModel#type): Sets the summary type for the field. By default, the **Sum** aggregation is applied.

In this example, "Date" and "Product" are positioned in the column axis, "Country" and "State" are placed in the row axis, and "Sold" and "Quantity" are configured as values respectively.

Place the following pivot table code in the `index.js`.

```javascript

var pivotData = [
            { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
            { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
            { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
            { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
            { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];
var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
            dataSource: pivotData,
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }]
    }
});
pivotTableObj.appendTo('#PivotTable');

```

## Applying Formatting to a Value Field

Formatting enhances the readability and presentation of numerical data in a Pivot Table, making it more user-friendly and professional. For instance, you can display values with currency symbols or control the number of decimal places for better clarity.

To apply formatting to value fields in the Pivot Table, use the [`formatSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/formatSettings) property. This property accepts an array of format objects, where each object defines formatting rules for a specific field in your data.

Within each format object in the [`formatSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/formatSettings) array, set the [`name`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/formatSettings#name) property to match the exact field name from your value section. Then, specify the desired display format using the [`format`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/formatSettings#format) property. In the example below, the **Amount** field is configured to display values in currency format using the "C0" pattern, which shows currency symbols without decimal places.

> **Note:** Formatting can only be applied to numeric fields in the value section of the Pivot Table.

Place the following pivot table code in the `index.js`.

```javascript

var pivotData = [
            { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
            { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
            { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
            { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
            { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];
var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
    }
});
pivotTableObj.appendTo('#PivotTable');

```

## Enable Grouping Bar

The grouping bar allows users to easily manage and modify the report settings of the Pivot Table directly through the user interface. With the grouping bar, users can instantly move fields between columns, rows, values, and filters by dragging them, allowing for quick arrangement and analysis of the data.

Users can also use the grouping bar to sort, filter, or remove fields quickly without needing to write any code. To enable the grouping bar, set the [`showGroupingBar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/pivotViewModel#showgroupingbar) property to **true**, and make sure to inject the `GroupingBar` module in your application. For more details about using the grouping bar, see the [Grouping Bar documentation](./grouping-bar).

> The `GroupingBar` module must be injected for the grouping bar to render properly with the Pivot Table component. Without this module, the grouping bar will not be available.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs157/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs157/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/pivot-table/pivot-table-cs157/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs157" %}

## Enable Pivot Field List

The field list enhances user interaction by allowing you to dynamically add, remove, and rearrange fields across different axes **including column, row, value, and filter axes**. This user-friendly interface also provides sorting and filtering options that can be applied at runtime without requiring code changes.

To enable the field list, set the [`showFieldList`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/pivotViewModel#showfieldlist) property to **true** and inject the `FieldList` module into your component. This combination activates the field list interface, making it accessible to users to modify PivotTable report settings. For comprehensive details about field list functionality, [`refer`](./field-list) to the dedicated field list documentation.

> The `FieldList` module must be injected for the field list to render properly with the Pivot Table component. Without this module, the field list will not be available.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs158/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs158/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/pivot-table/pivot-table-cs158/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs158" %}

## Calculated field

The calculated field feature enables users to create custom value fields using mathematical formulas and existing fields from their data source. Users can perform complex calculations with basic arithmetic operators and seamlessly integrate these custom fields into their pivot table for enhanced data visualization and reporting.

Users can add calculated fields in two ways:
- **Using code:** Set up calculated fields through the [`CalculatedFieldSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/calculatedFieldSettings) property when configuring the Pivot Table.
- **Using the user interface:** Alternatively, calculated fields can be added at runtime through a built-in dialog by setting the [`allowCalculatedField`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/pivotViewModel#allowcalculatedfield) property to **true** and by injecting the **CalculatedField** module. When enabled, a button appears in the Field List UI. Clicking this button opens a dialog that allows users to create, edit, or remove calculated fields at runtime. To learn more about calculated fields, [`refer`](./calculated-field) here.

> To use the calculated field dialog, make sure the **CalculatedField** module is injected. If it is not injected, the popup dialog will not be shown with the Pivot Table.

> By default, calculated fields created through code-behind are only added to the field list and calculated field dialog UI. To display a calculated field in the Pivot Table UI, you must add it to the [`values`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings#values) property, as shown in the code below. Additionally, calculated fields can only be added to the value axis.

Below is a sample code that shows how to set up calculated fields both through code-behind and using the popup dialog:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/calculatedfield-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/calculatedfield-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/pivot-table/calculatedfield-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/calculatedfield-cs3" %}

## Exploring Filter axis

The filter axis contains a collection of fields that would act as a master filter over the data bound in the row, column, and value axes of the pivot table. The fields along with filter members could be set to the filter axis either through the report via code behind or by dragging and dropping fields from other axes to the filter axis via the grouping bar or field list at runtime.

Place the following pivot table code in the `index.js`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs159/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs159/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/pivot-table/pivot-table-cs159/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs159" %}

## Run the application

Now, open `index.html` in a web browser; it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pivot Table** control.

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs160/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs160/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/pivot-table/pivot-table-cs160/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs160" %}

## Deploy the Application

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pivot Table control features are segregated into individual feature-wise modules. The [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build and `CDN` scripts contain code for all features used in the Pivot Table; therefore, we suggest not using them in production. We strongly recommend generating production script files using our **Custom Resource Generator** [`(CRG)`](https://crg.syncfusion.com) for Essential<sup style="font-size:70%">&reg;</sup> JS 2. CRG allows you to generate a bundled script for only the features you enable in the Pivot Table.

For more information and to access the quick start project, visit: [GitHub Repository](https://github.com/SyncfusionExamples/getting-started-with-the-javascript-pivot-table-component)

> You can also explore our [JavaScript Pivot Table example](https://ej2.syncfusion.com/demos#/material/pivot-table/default) that shows how to rendering of the pivot table with drill-up and drill-down functionality bound to a relational report.
