---
layout: post
title: Es5 getting started with ##Platform_Name## Treeview control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Treeview control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Treeview control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization

Create an app folder `myapp` in local machine to initialize Essential JS 2 JavaScript components.

Using either of the following way to refer the required script and styles.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `myapp` for Essential JS 2 JavaScript components.

**Step 2:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2/confirm) build installed location.

**Syntax:**
> Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**

> Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-navigations\dist\global\ej2-navigations.min.js`
>
> Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-navigations\styles\material.css`

The below located script and style file contains all Syncfusion JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the above mentioned packages from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 TreeView's global and dependent script -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-navigations.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `div` element and initiate the `Essential JS 2 TreeView` component in the `index.html` by using following code

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2</title>
    <!-- Essential JS 2 material theme -->
    <link href="resources/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 TreeView's global and dependent script -->
    <script src="resources/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/ej2-navigations.min.js" type="text/javascript"></script>
</head>

<body>
    <!-- Add the HTML <div> element  -->
    <div id="tree"></div>
    <script>
        var data = [
            {
                nodeId: '01', nodeText: 'Music',
                nodeChild: [
                    { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
                ]
            },
            {
                nodeId: '02', nodeText: 'Videos', expanded: true,
                nodeChild: [
                    { nodeId: '02-01', nodeText: 'Naturals.mp4' },
                    { nodeId: '02-02', nodeText: 'Wild.mpeg' },
                ]
            },
            {
                nodeId: '03', nodeText: 'Documents',
                nodeChild: [
                    { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
                    { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
                    { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
                    { nodeId: '03-04', nodeText: 'Social Network.pdf' },
                    { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
                ]
            },
        ];
        //Initialize TreeView component
        var treeViewInstance = new ej.navigations.TreeView({
            fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' }
        });

        //Render initialized TreeView
        treeViewInstance.appendTo("#tree");
    </script>
</body>

</html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential JS 2 TreeView** component.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential JS 2 JavaScript components.

**Step 2:** The Essential JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js`](http://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `TreeView` element and initiate the `Essential JS 2 TreeView` component in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the `Essential JS 2 Accordion` component.

> You can also explore our [JavaScript (ES5) TreeView](https://ej2.syncfusion.com/javascript/demos/#/material/treeview/default.html) to knows how to present and manipulate data.