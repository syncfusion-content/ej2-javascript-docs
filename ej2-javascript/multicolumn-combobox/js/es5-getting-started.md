---
layout: post
title: Es5 getting started with ##Platform_Name## MultiColumn ComboBox control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## MultiColumn ComboBox control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## MultiColumn ComboBox control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the `MultiColumn ComboBox` component in your application.

```javascript
|-- @syncfusion/ej2-multicolumn-combobox
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Component Initialization

The Essential JS 2 JavaScript components can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `myapp` for Essential JS 2 JavaScript components.

**Step 2:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-multicolumn-combobox/dist/global/ej2-multicolumn-combobox.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-multicolumn-combobox/styles/material.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/lists/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/multicolumn-combobox/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 MultiColumn ComboBox's dependent scripts -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/ej2-grids.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 MultiColumn ComboBox's global script -->
            <script src="resources/ej2-multicolumn-combobox.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `input` element and initiate the `Essential JS 2 MultiColumn ComboBox` control in the `index.html` by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/lists/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/multicolumn-combobox/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 MultiColumn ComboBox's dependent scripts -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/ej2-grids.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 MultiColumn ComboBox's global script -->
            <script src="resources/ej2-multicolumn-combobox.min.js" type="text/javascript"></script>
       </head>
      <body>
           <!-- Add the HTML <input> element  -->
             <input type="text" id='multicolumn' />
            <script>
            // initialize MultiColumn ComboBox control
            var multiComboBoxObject = new ej.multicolumncombobox.MultiColumnComboBox();
            // Render initialized MultiColumn ComboBox.
            multiComboBoxObject.appendTo('#multicolumn');
            </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential JS 2 MultiColumn ComboBox** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential JS 2 JavaScript components.

**Step 2:** The Essential JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-multicolumn-combobox.min.js`](http://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-multicolumn-combobox.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-multicolumn-combobox/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `input` element and initiate the `Essential JS 2 MultiColumn ComboBox` control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the `Essential JS 2 MultiColumn ComboBox` control.

## Binding data source with fields and columns

After initializing, populate the MultiColumn ComboBox with data by using the `dataSource` property, to map the data for each specified columns use the `columns` property and the `fields` property to map the data fields from the dataSource.

Here an array of object values is passed to the MultiColumn ComboBox control.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="//cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="//cdn.syncfusion.com/ej2/ej2-multicolumn-combobox/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 all script -->
            <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

            <!-- Essential JS 2 MultiColumn ComboBox's dependent scripts -->
            <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-multicolumn-combobox/dist/global/ej2-multicolumn-combobox.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <input> element  -->
             <input type="text" id='multicolumn' />
            <script>
            var employeeData = [
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
            var columnsData = [
               { field: 'EmpID', header: 'Employee ID', width: 130 },
               { field: 'Name', width: 140, header: 'Name' },
               { field: 'Designation', header: 'Designation', width: 100 },
               { field: 'Country', header: 'Country', width: 140 }
            ];
            // initialize MultiColumn ComboBox component
            var multiComboBoxObject = new ej.multicolumncombobox.MultiColumnComboBox({
                //set the data to dataSource property
                dataSource: empData,
                //set the column data to the columns property
                columns: columnsData,
                //set the fields of the multicolumn combobox
                fields: { text: 'Name', value: 'EmpID' }
            });
            // Render initialized MultiColumn ComboBox.
            multiComboBoxObject.appendTo('#multicolumn');
            </script>
       </body>
  </html>

```

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the MultiColumn ComboBox input element's width, and the height of the popup list has `300px`.

The height and width of the popup list can also be customized using the `popupHeight` and `popupWidth` properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/es5-getting-started-cs2" %}