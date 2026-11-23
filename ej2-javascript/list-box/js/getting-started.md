---
layout: post
title: Getting Started with ##Platform_Name## ListBox | Syncfusion
description: Set up the Syncfusion ##Platform_Name## ListBox in a plain JavaScript (ES5) app, including dependencies and a local environment.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## ListBox

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 List Box and demonstrate the basic usage of the List Box control in a JavaScript application.

## Dependencies

The list of dependencies required to use the List Box component in your application is given below:

```javascript
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 List Box control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® ListBox CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base`,`ej2-data`,`ej2-popups`,`ej2-lists`,`ej2-inputs` script is the required dependency package for the ListBox component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/list-box/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-dropdowns/dist/global/ej2-dropdowns.min.js
```

## Adding ListBox component to the application

 Add the `input` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 ListBox**** component in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/es5-getting-started-cs1" %}

## Binding data source

After initialization, populate the ListBox with data using the `dataSource` property. Here, an array of object values is passed to the ListBox component.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 bootstrap5.3 theme -->
           <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/list-box/index.css" rel="stylesheet" />

            <!-- Essential JS 2 ListBox's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <input> element  -->
             <input id='listbox' />
            <script>
               var data = [
                    { text: 'Hennessey Venom', id: 'list-01' },
                    { text: 'Bugatti Chiron', id: 'list-02' },
                    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
                    { text: 'SSC Ultimate Aero', id: 'list-04' },
                    { text: 'Koenigsegg CCR', id: 'list-05' },
                    { text: 'McLaren F1', id: 'list-06' },
                    { text: 'Aston Martin One- 77', id: 'list-07' },
                    { text: 'Jaguar XJ220', id: 'list-08' },
                    { text: 'McLaren P1', id: 'list-09' },
                    { text: 'Ferrari LaFerrari', id: 'list-10' },
                ];
              // initialize ListBox component
                var listObj = new ej.dropdowns.ListBox({
                    dataSource: data
                });
                listObj.appendTo('#listbox');
            </script>
       </body>
  </html>

```

## See Also

* [How to bind data to the list box](./data-binding#data-binding)
* [How to initialize list box using different tags](./data-binding#html-element)