---
layout: post
title: Getting started with ##Platform_Name## MultiColumn ComboBox control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## MultiColumn ComboBox control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## MultiColumn ComboBox control

This section explains how to create a simple **MultiColumn ComboBox** control and configure its available functionalities in TypeScript, using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the `MultiColumn ComboBox` control in your application.

```javascript
|-- @syncfusion/ej2-multicolumn-combobox
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

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

To render MultiColumn ComboBox control, need to import dropdowns and its dependent components styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-multicolumn-combobox/styles/material.css';

{% endhighlight %}
{% endtabs %}

## Initialize the MultiColumn ComboBox

The MultiColumn ComboBox can be initialized through three different tags select, UL and input element.

Add the HTML input element that needs to be initialized as MultiColumn ComboBox in `index.html`.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 MultiColumn ComboBox control</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div id='container' style="margin:50px 0 auto; width:500px;">
        <!--element which is going to render the MultiColumn ComboBox-->
        <input type="text" tabindex="1" id='multicolumn' />
    </div>

</body>

</html>

{% endhighlight %}
{% endtabs %}

Now, import the MultiColumn ComboBox component to your `app.ts` and initialize it to the element `#multicolumn` as shown below.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { MultiColumnComboBox } from '@syncfusion/ej2-multicolumn-combobox';

// initialize MultiColumn ComboBox component
let multiComboBoxObject: MultiColumnComboBox = new MultiColumnComboBox();

// render initialized MultiColumn ComboBox
multiComboBoxObject.appendTo('#multicolumn');

{% endhighlight %}
{% endtabs %}

## Binding data source with fields and columns

After initializing, populate the MultiColumn ComboBox with data by using the `dataSource` property, to map the data for each specified columns use the `columns` property and the `fields` property to map the data fields from the dataSource.

Here an array of object values is passed to the MultiColumn ComboBox control.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { MultiColumnComboBox } from '@syncfusion/ej2-multicolumn-combobox';

// define the array of object data for datasource
let employeeData: {[key: string]: Object}[] = [
    { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
    { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
    { "EmpID": 1003, "Name": "John", "Designation": "Tester", "Country": "Germany" },
    { "EmpID": 1004, "Name": "Robert King", "Designation": "Product Manager", "Country": "India" },
    { "EmpID": 1005, "Name": "Steven Buchanan", "Designation": "Developer", "Country": "Italy" },
    { "EmpID": 1006, "Name": "Jane Smith", "Designation": "Developer", "Country": "Europe" },
    { "EmpID": 1007, "Name": "James Brown", "Designation": "Developer", "Country": "Australia" },
    { "EmpID": 1008, "Name": "Laura Callahan", "Designation": "Developer", "Country": "Africa" },
    { "EmpID": 1009, "Name": "Mario Pontes", "Designation": "Developer", "Country": "Russia" },
];

// define the column values for data columns
let columnsData: ColumnModel[] = [
    { field: 'EmpID', header: 'Employee ID', width: 120 },
    { field: 'Name', width: 120, header: 'Name' },
    { field: 'Designation', header: 'Designation', width: 120 },
    { field: 'Country', header: 'Country', width: 100 }
];

// initialize MultiColumn ComboBox component
let multiComboBoxObject: MultiColumnComboBox = new MultiColumnComboBox({
    //set the data to dataSource property
    dataSource: employeeData,
    //set the column data to the columns property
    columns: columnsData,
    //set the fields of the multicolumn combobox
    fields: { text: 'Name', value: 'EmpID' }
});

// render initialized MultiColumn ComboBox
multiComboBoxObject.appendTo('#multicolumn');

{% endhighlight %}
{% endtabs %}

## Run the application

After completing the configuration required to render a basic MultiColumn ComboBox, run the following command to display the output in your default browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/getting-started-cs1" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the MultiColumn ComboBox input element's width, and the height of the popup list has `300px`.

The height and width of the popup list can also be customized using the `popupHeight` and `popupWidth` properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/getting-started-cs2" %}