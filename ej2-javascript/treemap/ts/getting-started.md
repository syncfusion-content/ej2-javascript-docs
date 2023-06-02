---
layout: post
title: Getting started with ##Platform_Name## Treemap control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Treemap control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---


# Getting started in ##Platform_Name## Treemap control

This section explains the steps required to create a TreeMap control and demonstrate its basic usage.

## Dependencies

The following list of minimum dependencies are required to use the TreeMap control:

```javascript
|-- @syncfusion/ej2-treemap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-svg-base
```

## Installation and configuration

* To get started with the TreeMap control, clone the Essential JS 2 quickstart project from [`GitHub`](https://github.com/syncfusion/ej2-quickstart.git), and install the necessary packages using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

* Syncfusion TreeMap packages can be mapped in **system.config.js** configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-treemap": "syncfusion:ej2-treemap/dist/ej2-treemap.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});
```

>The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common settings (`system.config.js` ) to start with all the Essential JS 2 components.

## Add TreeMap control to the project

The Essential JS2 TreeMap control can be added to the application. To get started, add the TreeMap control to the **app.ts** and **index.html** files using the following code.

Add an HTML div element to act as the TreeMap element in the **index.html** file using the following code.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 TreeMap</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />
    <!--system js reference and configuration-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
     <!--container which is going to render the TreeMap-->
     <div id='container'>
     </div>
</body>

</html>
```

Import the TreeMap control in the `app.ts` to initialize the TreeMap and append the TreeMap instance to the `#container`.

```javascript
import { TreeMap } from '@syncfusion/ej2-treemap';

// Initialize the tree map control
let treemap: TreeMap = new TreeMap();

// Render the initialized tree map
treemap.appendTo('#container');
```

Since data source has not been bound to the tree map control, no items will be rendered. Only an empty SVG element is appended to the tree map container.

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```
npm start
```

## Module injection

The tree map control is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `TreeMap.Inject()` method. Find the modules available in tree map and their descriptions are as follows:

* TreeMapHighlight - Inject this provider to use highlight feature.
* TreeMapSelection - Inject this provider to use selection feature.
* TreeMapLegend - Inject this provider to use legend feature.
* TreeMapTooltip - Inject this provider to use tooltip series.

In current application, the above basic tree map is modified to visualize international airport counts in South America.

In this demo, the tree map is rendered with labels only. So, you need not to import any modules.

## Render tree map

This section explains how to render the tree map control with data source.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs6" %}

Here, the tree map control is created with data source and set with the weightValuePath as count. You can customize the leaf level tree map items using the leafItemSettings. The properties such as fill, border, and labelPosition can be changed using the leafItemSettings.

## Apply color mapping

The color mapping feature supports customization of item colors based on the underlying value of item received from bound data source. Specify the field name from values that have to be compared for the item in the equalColorValuePath or rangeColorValuePath property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs7" %}

## Enable legend

Legend is enabled for the tree map control by setting the visible property to true in legendSettings object and injecting the `TreeMapLegend` module using the `TreeMap.Inject(TreeMapLegend)`.

```ts

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
   dataSource: [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
        ],
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle'
        },
        weightValuePath: 'Count',
        equalColorValuePath: 'Count',
        leafItemSettings: {
            labelPath: 'State',
            colorMapping: [
                {
                    value: 25,
                    color: '#634D6F'
                },
                {
                    value: 12,
                    color: '#B34D6D'
                },
                {
                    value: 9,
                    color: '#557C5C'
                },
                {
                    value: 7,
                    color: '#44537F'
                },
                {
                    value: 6,
                    color: '#637392'
                },
                {
                    value: 3,
                    color: '#7C754D'
                },
                {
                    value: 2,
                    color: '#2E7A64'
                },
                {
                    value: 1,
                    color: '#95659A'
                },
            ]
        }
}, '#container');

```

## Add labels

Labels are added to show additional information of the items in tree map. By default, the visibility of the label is set to true. This can be customized using the showLabels property in leafItemSettings.

```ts

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
   dataSource: [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
        ],
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle'
        },
        weightValuePath: 'Count',
        equalColorValuePath: 'Count',
        leafItemSettings: {
            showLabels: true,
            labelPath: 'State',
            labelPosition: 'Center',
            labelStyle: {
                color: 'white'
            },
            colorMapping: [
                {
                    value: 25,
                    color: '#634D6F'
                },
                {
                    value: 12,
                    color: '#B34D6D'
                },
                {
                    value: 9,
                    color: '#557C5C'
                },
                {
                    value: 7,
                    color: '#44537F'
                },
                {
                    value: 6,
                    color: '#637392'
                },
                {
                    value: 3,
                    color: '#7C754D'
                },
                {
                    value: 2,
                    color: '#2E7A64'
                },
                {
                    value: 1,
                    color: '#95659A'
                },
            ]
        }
}, '#container');

```

## Enable tooltip

Tooltips are used when labels cannot display information due to space constraints. Tooltips can be enabled by setting the visible property to true in tooltipSettings object and injecting the `TreeMapTooltip` module using the `TreeMap.Inject(TreeMapTooltip)`.

```ts

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    tooltipSettings: {
            visible: true,
        },
        dataSource: [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
        ],
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle'
        },
        weightValuePath: 'Count',
        equalColorValuePath: 'Count',
        leafItemSettings: {
            showLabels: true,
            labelPath: 'State',
            labelPosition: 'Center',
            labelStyle: {
                color: 'white'
            },
            colorMapping: [
                {
                    value: 25,
                    color: '#634D6F'
                },
                {
                    value: 12,
                    color: '#B34D6D'
                },
                {
                    value: 9,
                    color: '#557C5C'
                },
                {
                    value: 7,
                    color: '#44537F'
                },
                {
                    value: 6,
                    color: '#637392'
                },
                {
                    value: 3,
                    color: '#7C754D'
                },
                {
                    value: 2,
                    color: '#2E7A64'
                },
                {
                    value: 1,
                    color: '#95659A'
                },
            ]
        },
}, '#container');

```
