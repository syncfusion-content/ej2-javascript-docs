---
layout: post
title: Getting started with ##Platform_Name## List box control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## List box control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## List box control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

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

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-dropdowns/styles/material.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essentials JS 2 script and style references.

```
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 ListBox's global script -->
            <script src="resources/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `input` element and initiate the `Essential JS 2 ListBox` component in the `index.html` by using following code

```
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 ListBox's global script -->
            <script src="resources/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
      <body>
           <!-- Add the HTML <input> element  -->
             <input id='listbox' />
            <script>
            // initialize ListBox component
            var listObj = new ej.dropdowns.ListBox();
            // Render initialized ListBox.
            listObj.appendTo('#listbox');
            </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential JS 2 ListBox** component.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential JS 2 JavaScript components.

**Step 2:** The Essential JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js`](http://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `input` element and initiate the `Essential JS 2 ListBox` component in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the `Essential JS 2 ListBox` component.

## Binding data source

After initialization, populate the ListBox with data using the `dataSource` property. Here, an array of object values is passed to the ListBox component.

```
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>

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