---
layout: post
title: Es5 getting started with ##Platform_Name## Drop down list control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Drop down list control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Drop down list control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the DropDownList component in your application.

```javascript
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Component Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `myapp` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-dropdowns/styles/material.css`

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
            <link href="resources/dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 DropDownList's dependent scripts -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/ej2-buttons.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 DropDownList's global script -->
            <script src="resources/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `input` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DropDownList** component in the `index.html` by using following code

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
            <link href="resources/dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 DropDownList's dependent scripts -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/ej2-buttons.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 DropDownList's global script -->
            <script src="resources/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
      <body>
           <!-- Add the HTML <input> element  -->
             <input type="text" id='ddl' />
            <script>
            // initialize DropDownList component
            var dropDownList = new ej.dropdowns.DropDownList();
            // Render initialized DropDownList.
            dropDownList.appendTo('#ddl');
            </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DropDownList** component.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js`](http://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `input` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DropDownList** component in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DropDownList** component.

## Binding data source

After initialization, populate the DropDownList with data using the [dataSource](../api/drop-down-list/#datasource) &nbsp;property. Here, an array of string values is passed to the DropDownList component.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 DropDownList's dependent material theme -->
            <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="//cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="//cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

            <!-- Essential JS 2 DropDownList's dependent scripts -->
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
             <input type="text" tabindex="1" id='ddl' />
            <script>
            let sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
            // initialize DropDownList component
            var listObj = new ej.dropdowns.DropDownList({
                //set the data to dataSource property
                  dataSource: sportsData});
              listObj.appendTo('#ddl');
            </script>
       </body>
  </html>

```

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the DropDownList input element's width, and the height of the popup list has '300px'.

The height and width of the popup list can also be customized using the [popupHeight](../api/drop-down-list/#popupheight) &nbsp;and [popupWidth](../api/drop-down-list/#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/es5-getting-started-cs2" %}

## See Also

* [How to bind the data](./data-binding)
* [How to initialize the control using different tags](./tags)