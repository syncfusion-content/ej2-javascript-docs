---
layout: post
title: Getting Started with ##Platform_Name## MultiSelect Dropdown | Syncfusion
description: Set up the Syncfusion ##Platform_Name## MultiSelect Dropdown in a plain JavaScript (ES5) app, including dependencies and a local environment.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## MultiSelect Dropdown

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Multiselect and demonstrate the basic usage of the Multiselect control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Multiselect component in your application is given below:

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

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Multiselect control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® MultiSelect CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base`,`ej2-data`,`ej2-popups`,`ej2-lists`,`ej2-buttons`,`ej2-inputs` script is the required dependency package for the MultiSelect component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/multi-select/index.css
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

## Adding MultiSelect component to the application

Add the `input` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 MultiSelect** component in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/es5-getting-started-cs1" %}

## Binding data source

After initialization, populate the MultiSelect with data using the [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/multi-select/index-default#datasource) &nbsp;property. Here, an array of string values is passed to the MultiSelect component.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
             <!-- Essential JS 2 MultiSelect's dependent bootstrap5.3 theme -->
            <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/multi-select/index.css" rel="stylesheet" />

            <!-- Essential JS 2 all script -->
            <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

            <!-- Essential JS 2 MultiSelect's dependent scripts -->
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
             <input type="text" tabindex="1" id='select' />
            <script>
               var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
              // initialize MultiSelect component
                var listObj = new ej.dropdowns.MultiSelect({
                    dataSource: sportsData});
                listObj.appendTo('#select');
            </script>
       </body>
  </html>

```

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the MultiSelect input element's width, and the height auto adjust's according to the height of the popup list items.

The height and width of the popup list can also be customized using the [popupHeight](https://ej2.syncfusion.com/javascript/documentation/api/multi-select/index-default#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/javascript/documentation/api/multi-select/index-default#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/es5-getting-started-cs2" %}

## See Also

* [How to bind the data](./data-binding)
* [How to initialize the control using different tags](./tags)