---
layout: post
title: Getting Started with ##Platform_Name## Query Builder UI | Syncfusion
description: Learn how to set up the Syncfusion ##Platform_Name## Query Builder UI in an ES5 application using local script references or CDN links for a quick start.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Query Builder UI

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Query Builder and demonstrate the basic usage of the Query Builder control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Query Builder component in your application is given below:

```js
|-- @syncfusion/ej2-querybuilder
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-datamanager
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Query Builder control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® QueryBuilder CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base`,`ej2-popups`,`ej2-lists`,`ej2-buttons`,`ej2-inputs`, `ej2-calendars` and `ej2-splitbuttons` script is the required dependency package for the QueryBuilder component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/query-builder/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-calendars/dist/global/ej2-calendars.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-querybuilder/dist/global/ej2-querybuilder.min.js
```

## Adding Querybuilder component to the application

Add the `Query Builder` and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Query Builder** control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/es5-getting-started-cs1" %}

### Rendering with rule

Now, add the `Query Builder` and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Query Builder** control with rule in the `~/quickstart/index.html` by using following code

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
         <!-- Essential JS 2 query-builder's dependency style -->
        <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>
        <link href="resources/buttons/material.css" rel="stylesheet" type="text/css"/>
        <link href="resources/splitbuttons/material.css" rel="stylesheet" type="text/css"/>
        <link href="resources/dropdowns/material.css" rel="stylesheet" type="text/css"/>
        <link href="resources/inputs/material.css" rel="stylesheet" type="text/css"/>
        <link href="resources/calendars/material.css" rel="stylesheet" type="text/css"/>
         <link href="resources/popups/material.css" rel="stylesheet" type="text/css"/>
        <!-- Essential JS 2 query-builder material theme (Control Styles) -->
        <link href="resources/querybuilder/material.css" rel="stylesheet" type="text/css"/>

        <!-- Essential JS 2 query-builder's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
        <script src="resources/splitbuttons/ej2-splitbuttons.min.js" type="text/javascript"></script>
        <script src="resources/dropdowns/ej2-dropdowns.min.js" type="text/javascript"></script>
        <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
        <script src="resources/calendars/ej2-calendars.min.js" type="text/javascript"></script>
        <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 query-builder global script (Control Script) -->
        <script src="resources/querybuilder/ej2-querybuilder.min.js" type="text/javascript"></script>
    </head>
    <body>
        <!-- Add the HTML div element  -->
        <div id="querybuilder" class="row">
        <script>
        var columnData = [
            { field: 'EmployeeID', label: 'Employee ID', type: 'number' },
            { field: 'FirstName', label: 'First Name', type: 'string' },
            { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.']},
            { field: 'Title', label: 'Title', type: 'string' },
            { field: 'HireDate', label: 'Hire Date', type: 'date', format: 'dd/MM/yyyy' },
            { field: 'Country', label: 'Country', type: 'string' },
            { field: 'City', label: 'City', type: 'string' }
        ];
        var importRules = {
            'condition': 'and',
            'rules': [{
                    'label': 'Employee ID',
                    'field': 'EmployeeID',
                    'type': 'number',
                    'operator': 'equal',
                    'value': 1001
                },
                {
                    'label': 'Title',
                    'field': 'Title',
                    'type': 'string',
                    'operator': 'equal',
                    'value': 'Sales Manager'
                }
            ]
        };

        var employeeData = [{
      'EmployeeID': 1,
      'FirstName': 'Nancy',
      'Title': 'Sales Representative',
      'TitleOfCourtesy': 'Ms.',
      'HireDate': '22/07/2001',
      'City': 'Seattle',
      'Country': 'USA'
    },
    {
      'EmployeeID': 2,
      'FirstName': 'Andrew',
      'Title': 'Vice President',
      'TitleOfCourtesy': 'Dr.',
      'HireDate': '21/04/2003',
      'City': 'Tacoma',
      'Country': 'USA'
    },
    {
      'EmployeeID': 3,
      'FirstName': 'Janet',
      'Title': 'Sales Representative',
      'TitleOfCourtesy': 'Ms.',
      'HireDate': '22/07/2001',
      'City': 'Kirkland',
      'Country': 'USA'
    }];

        var qryBldrObj = new ej.querybuilder.QueryBuilder({
            width: '70%',
            dataSource: employeeData,
            columns: columnData,
            rule: importRules,
        });
        qryBldrObj.appendTo('#querybuilder');
        </script>
    </body>
</html>
```

Now, add the `Query Builder` and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Query Builder** control with rule in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/es5-getting-started-cs2" %}

> You can refer to our [JavaScript Query Builder](https://www.syncfusion.com/javascript-ui-controls/js-query-builder) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Query Builder example](https://ej2.syncfusion.com/javascript/demos/#/material/query-builder/es5-getting-started) that shows how to render the Query Builder in JavaScript.