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

This section explains the steps required to create a simple [JavaScript (ES5) TreeView](https://www.syncfusion.com/javascript-ui-controls/js-treeview) component, and configure its available functionalities in TypeScript using the Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart) seed repository. This seed repository is preconfigured with all the Essential JS 2 packages.

## Dependencies

The following list of dependencies are required to use the TreeView component in your application.

```javascript
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Setup for local development

Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart), and install the necessary npm packages using the following command line scripts.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

## Configuring system JS

The [Syncfusion TreeView packages](#dependencies) should be mapped in the `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'npm:': './node_modules/',
        'syncfusion:': 'npm:@syncfusion/'
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');

```

## Adding CSS reference

Combined CSS files are available in the Essential JS 2 package root folder. This can be referenced in your `[src/styles/styles.css]` using the following code.

```
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```

> To refer individual component CSS, please refer to the [Individual Component theme files](../appearance/theme/#referring-individual-control-theme) section.

## Adding TreeView component

Now, you can start adding Essential JS 2 TreeView component to the application. To get started, add the TreeView component to `index.html` file using the following code. Then, add the HTML `<div>` element for TreeView component to your `index.html`.

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 for TreeView</title>
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 TreeView's global script -->
    <<script src="//cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
    <!--Element which will render as TreeView-->
    <div id="tree"></div>

<script>
ej.base.Ripple(true);

//Initialize TreeView component
var treeViewInstance = new ej.navigations.TreeView();

//Render initialized TreeView
treeViewInstance.appendTo("#tree");
</script>

</body>

</html>
```

## Binding data source

TreeView can load data either from local data sources or remote data services. This can be done using the `dataSource` property that is a member of the [fields](../api/treeview#fields) property. The dataSource property supports array of JavaScript objects and `DataManager`. Here, an array of JSON values is passed to the TreeView component.

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 for TreeView</title>
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 TreeView's global script -->
    <script src="//cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as TreeView-->
    <div id="tree"></div>

<script>
ej.base.enableRipple(true);

//define the array of JSON
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

## Run the application

You have to use the `npm start` command to run the application in the browser.

```
npm start
```

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/es5-getting-started-cs1" %}

> You can also explore our [JavaScript (ES5) TreeView](https://ej2.syncfusion.com/javascript/demos/#/material/treeview/default.html) example to knows how to present and manipulate data.