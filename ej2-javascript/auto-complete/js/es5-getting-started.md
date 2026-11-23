---
layout: post
title: Getting Started with ##Platform_Name## AutoComplete | Syncfusion
description: Set up a Syncfusion ##Platform_Name## AutoComplete in a plain ES5 JavaScript app using the global script and required dependencies.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## AutoComplete

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Autocomplete and demonstrate the basic usage of the Autocomplete control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Autocomplete component in your application is given below:

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

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Autocomplete control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® AutoComplete CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base`,`ej2-data`,`ej2-popups`,`ej2-lists`,`ej2-buttons`,`ej2-inputs` script is the required dependency package for the AutoComplete component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/auto-complete/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-dropdowns/dist/global/ej2-dropdowns.min.js
```
## Adding AutoComplete component to the application

Add the `input` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 AutoComplete** component in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/es5-getting-started-cs1" %}

## Binding data source

After initialization, populate the AutoComplete with data by using the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#datasource) property. Here, an array of string values is passed to the AutoComplete component.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
             <!-- Essential JS 2 autoComplete's dependent bootstrap5.3 theme -->
            <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/auto-complete/index.css" rel="stylesheet" />

            <!-- Essential JS 2 all script -->
            <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

            <!-- Essential JS 2 autoComplete's dependent scripts -->
            <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <input> element  -->
             <input type="text" id='atcelement' />
            <script>
                let sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
                // initialize AutoComplete component
                var listObj = new ej.dropdowns.AutoComplete({
                //set the data to dataSource property
                    dataSource: sportsData,
                    });
                listObj.appendTo('#atcelement');
            </script>
       </body>
  </html>

```

## Custom values

The AutoComplete allows users to enter custom values that are not in the predefined set. By default, this is enabled through the [`allowCustom`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#allowcustom) property. Custom values are sent to the post-back handler when a form is submitted.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/es5-getting-started-cs2" %}

## Configure the suggestion list

By default, the suggestion list width automatically adjusts to the AutoComplete input element's width, and the suggestion list height is 300px.

The height and width of the popup list can also be customized using the [`popupHeight`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#popupheight) and [`popupWidth`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#popupwidth) properties, respectively.

In the following sample, suggestion list's width and height are configured.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/es5-getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/es5-getting-started-cs3" %}

## See Also

* [How to bind the data](./data-binding)