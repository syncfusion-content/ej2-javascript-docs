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

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Grid and demonstrate the basic usage of the Grid control in a JavaScript application.

## Dependencies

A list of dependencies to use the grid with all features.

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

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Grid control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Grid control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

To use local scripts and styles for Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, you can follow these steps:

**1. Download Essential<sup style="font-size:70%">&reg;</sup> Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2):** Obtain the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installation location.

**2. Copy Files to Resources Folder:** After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, copy the grid's scripts, and dependencies scripts and style file into the designated folders:

**Scripts:** Copy the scripts to the **resources/scripts** folder.
**Styles:** Copy the styles to the **resources/styles** folder.

**3. Locate Script and Style Files:** Identify the location of the grid's script and style files. The syntax for the file paths are as follows:

**Syntax:**
>Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/bootstrap5.3.css`

**Example:**
>Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-grids/dist/global/ej2-grids.min.js`
>Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-grids/styles/bootstrap5.3.css`

**4. Referencing in HTML File:** Once the files are copied, reference the grid's scripts and styles into the **index.html** file.

Here's an example of referencing the grid's scripts and styles in an HTML file:

**a.Essential<sup style="font-size:70%">&reg;</sup> Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. Use this setup for a lightweight application that requires basic grid functionality.

```html

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 Grid's dependent bootstrap5.3 theme -->
    <link href="resources/base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/grids/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
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
This setup includes additional dependencies required for more advanced functionalities of the grid, such as buttons, dropdowns, navigations, and other components. Use this setup when you need to integrate additional features like filtering, paging, column menu and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 Grid's dependent bootstrap5.3 theme -->
    <link href="resources/base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/grids/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/buttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/navigations/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/dropdowns/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/lists/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/inputs/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/calendars/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/notifications/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />

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
This setup includes all possible dependencies for Syncfusion<sup style="font-size:70%">&reg;</sup> components in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion<sup style="font-size:70%">&reg;</sup> components.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 bootstrap5.3 theme -->
    <link href="resources/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 script -->
    <script src="resources/scripts/ej2.min.js" type="text/javascript"></script>
</head>

<body>
</body>
</html>
```

### Using CDN link for script and style

Using CDN links, you can directly refer the grid control's script and style into the `index.html`.

Refer the grid's CDN links as below

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/bootstrap5.3.css`

**Example:**

> Script: [https://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js](http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js)
>
> Styles: [https://cdn.syncfusion.com/ej2/ej2-grids/styles/bootstrap5.3.css](http://cdn.syncfusion.com/ej2/ej2-grids/styles/bootstrap5.3.css)

Here's an example of referencing the grid's scripts and styles in an HTML file using CDN links:

**a.Essential<sup style="font-size:70%">&reg;</sup> Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. Use this setup for a lightweight application that requires basic grid functionality.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS 2 Grid</title>
          
          <!-- Essential JS 2 Grid's dependent bootstrap5.3 theme -->
          <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
          <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
          <link href="https://cdn.syncfusion.com/ej2/ej2-grids/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>

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
    <!-- Essential JS 2 Grid's dependent bootstrap5.3 theme -->
    <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="http://cdn.syncfusion.com/ej2/ej2-grids/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-calendars/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-notifications/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />

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

This setup includes all possible dependencies for Syncfusion<sup style="font-size:70%">&reg;</sup> components in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion<sup style="font-size:70%">&reg;</sup> components.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 bootstrap5.3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
</body>

</html>
```

Based on your requirement, additional dependencies can be included as needed. In this documentation, the common **ej2.min.js** and **bootstrap5.3.css** are used, which include all the Essential<sup style="font-size:70%">&reg;</sup> JS 2 components and their dependent scripts and theme files.

## Adding Grid control

You can start adding Essential<sup style="font-size:70%">&reg;</sup> JS 2 grid component to the application. To get started, add the grid component in **index.js** file using the following code.

{% tabs %}
{% highlight ts tabtitle="index.js" %}

// Defines the data to be displayed in the Grid.
var data = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 },
    { OrderID: 10251, CustomerName: 'Elizabeth Lincoln', OrderDate: new Date(2025, 1, 18), ShipCountry: 'France', Freight: 41.34 },
    { OrderID: 10252, CustomerName: 'Victoria Ashworth', OrderDate: new Date(2025, 2, 10), ShipCountry: 'Belgium', Freight: 51.30 },
    { OrderID: 10253, CustomerName: 'Martine Rance', OrderDate: new Date(2025, 2, 22), ShipCountry: 'Brazil', Freight: 58.17 },
]

var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', type: 'number' },
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
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Grid</title>

    <!-- Essential JS 2 bootstrap5.3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/33.1.44/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/33.1.44/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
    <!-- Add the HTML <div> element for grid  -->
    <div id="Grid"></div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>

{% endhighlight %}

{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs132" %}

## Run the application

Now, run the **index.html** in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Grid control.

## See also

* [Grid Feature Modules](https://ej2.syncfusion.com/javascript/documentation/grid/module)
* [How to display a table data after clicking Submit button in Javascript?](https://support.syncfusion.com/kb/article/10145/how-to-display-a-table-data-after-clicking-submit-button-in-javascript)
* [How to display table in popup window using Javascript?](https://support.syncfusion.com/kb/article/10339/how-to-display-table-in-popup-window-using-javascript)
* [How to open pdf document on button click inside a Grid](https://support.syncfusion.com/kb/article/10246/how-to-open-pdf-document-on-button-click-inside-a-grid)
* [How to disable the default keyboard actions in Grid](https://support.syncfusion.com/kb/article/9578/how-to-disable-the-default-keyboard-actions-in-js-grid)
