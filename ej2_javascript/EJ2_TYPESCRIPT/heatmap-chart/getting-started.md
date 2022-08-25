---
title: "Getting started"
component: "HeatMap Chart"
description: "This section describes on how to visualize a two-dimensional data by enabling the basic features in heatmap"
---

# Getting Started

This section explains the steps required to create a heat map and demonstrates the basic usage of the heat map control.

## Dependencies

For using heat map, the following minimum requirements are needed.

```javascript
|-- @syncfusion/ej2-heatmap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

## Installation and configuration

* To  start with heat map controls, you can clone the
[`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart.git)project
and install necessary packages by using the following commands.

```sh
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

* `Heatmap packages` should be mapped in the `system.config.js` configuration file.

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
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-heatmap": "syncfusion:ej2-heatmap/dist/ej2-heatmap.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

>The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common
settings (`src/styles/styles.css`, `system.config.js` ) to start
with all Essential JS 2 controls.

## Adding heat map to the project

Add an HTML div element of heat map to your `index.html`. `[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Heatmap</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js"></script>
</head>

<body>
     <!--container which is going to render the Heatmap-->
     <div id='element'>
     </div>
</body>

</html>

```

Now, import the heat map control into your `app.ts` to instantiate the heat map and append the heat map instance to the `#container` `[src/app/app.ts]`

```javascript

import { HeatMap } from '@syncfusion/ej2-heatmap';

// initialize HeatMap control
let heatmap: HeatMap = new HeatMap();

// render initialized HeatMap
heatmap.appendTo('#element');

```

Use the `npm run start` command to run the application in the browser.

```cmd

npm run start

```

The below example shows a basic Heatmap.

{% tab template= "heatmap/getting-started",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "es5default" %}

```typescript

import { HeatMap } from '@syncfusion/ej2-heatmap';

let heatmap: HeatMap = new HeatMap ();

heatmap.appendTo('#element');

```

{% endtab %}

## Module Injection

The heat map controls are segregated into individual feature-wise modules. To use its feature,
you need to inject its feature module using the `HeatMap.Inject()` method. In the current application,
the basic heat map is modified to visualize sales revenue data for week, and  the tooltip and legend features of the heat map are used.
Find the relevant feature modules and descriptions as follows.

* Legend - Provides the legend feature by injecting it.
* Tooltip - Provides the tooltip feature by injecting it.

Now, import the above-mentioned modules from the heat map package and
inject them into the heat map control using the `HeatMap.Inject()` method.

```javascript
import {Legend, Tooltip} from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

```

## Populate heat map with data

This section explains how to populate the following two-dimensional array data to the heat map.

{% tab template= "heatmap/getting-started", es5Template="es5populateData" %}

```typescript

import { HeatMap, Legend, Tooltip } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

let heatmapData: any [] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
     dataSource: heatmapData,
     }, '#element');

```

{% endtab %}

## Enable axis labels

You can add axis labels to the heat map and format those labels using the [`xAxis`](../api/heatmap/#xaxis) and [`yAxis`](../api/heatmap/#yaxis) properties.
Axis labels provide additional information about the data points populated in the heat map.

{% tab template= "heatmap/getting-started", es5Template="es5AxisLabel"%}

```typescript

import { HeatMap, Legend, Tooltip } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

let heatmapData: any [] = [
     [73, 39, 26, 39, 94, 0],
     [93, 58, 53, 38, 26, 68],
     [99, 28, 22, 4, 66, 90],
     [14, 26, 97, 69, 69, 3],
     [7, 46, 47, 47, 88, 6],
     [41, 55, 73, 23, 3, 79],
     [56, 69, 21, 86, 3, 33],
     [45, 7, 53, 81, 95, 79],
     [60, 77, 74, 68, 88, 51],
     [25, 25, 10, 12, 78, 14],
     [25, 56, 55, 58, 12, 82],
     [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    xAxis: {
        labels: ['Nancy', 'Andrew','Janet', 'Margaret', 'Steven',
        'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
         },
         yAxis:{
             labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
             },
             dataSource: heatmapData
             }, '#element');

```

{% endtab %}

## Add heat map title

Add a title using the [`titleSettings`](../api/heatmap/#titlesettings) property to the heat map to provide quick information to the user
about the data populated in the heat map.

{% tab template= "heatmap/getting-started", es5Template="es5Title"%}

```typescript

import { HeatMap, Legend, Tooltip } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

let heatmapData: any [] = [
     [73, 39, 26, 39, 94, 0],
            [93, 58, 53, 38, 26, 68],
            [99, 28, 22, 4, 66, 90],
            [14, 26, 97, 69, 69, 3],
            [7, 46, 47, 47, 88, 6],
            [41, 55, 73, 23, 3, 79],
            [56, 69, 21, 86, 3, 33],
            [45, 7, 53, 81, 95, 79],
            [60, 77, 74, 68, 88, 51],
            [25, 25, 10, 12, 78, 14],
            [25, 56, 55, 58, 12, 82],
            [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
     dataSource: heatmapData,
     }, '#element');

```

{% endtab %}

## Enable legend

Use a legend for the heat map in the [`visible`](../api/heatmap/legendSettings/#visible) object by setting the [`legendSettings`](../api/heatmap/#legendsettings) property
to true and injecting the `Legend` module using the `HeatMap.Inject(Legend)` method.

{% tab template= "heatmap/getting-started", es5Template="es5Legend" %}

```typescript

import { HeatMap, Legend, Tooltip } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

let heatmapData: any [] = [
     [73, 39, 26, 39, 94, 0],
            [93, 58, 53, 38, 26, 68],
            [99, 28, 22, 4, 66, 90],
            [14, 26, 97, 69, 69, 3],
            [7, 46, 47, 47, 88, 6],
            [41, 55, 73, 23, 3, 79],
            [56, 69, 21, 86, 3, 33],
            [45, 7, 53, 81, 95, 79],
            [60, 77, 74, 68, 88, 51],
            [25, 25, 10, 12, 78, 14],
            [25, 56, 55, 58, 12, 82],
            [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        dataSource: heatmapData,
        legendSettings: {
            visible:true,
            position: 'Right',
            showLabel: true,
            height: "150"
        }
}, '#element');


```

{% endtab %}

## Add data label

Add data labels to improve the readability of the heat map.
This can be achieved by setting the [`showLabel`](../api/heatmap/cellSettings/#showlabel) property to true in the [`cellSettings`](../api/heatmap/#cellsettings) object.

{% tab template= "heatmap/getting-started", es5Template="es5DataLabel" %}

```typescript
import { HeatMap, Legend, Tooltip } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

let heatmapData: any [] = [
     [73, 39, 26, 39, 94, 0],
            [93, 58, 53, 38, 26, 68],
            [99, 28, 22, 4, 66, 90],
            [14, 26, 97, 69, 69, 3],
            [7, 46, 47, 47, 88, 6],
            [41, 55, 73, 23, 3, 79],
            [56, 69, 21, 86, 3, 33],
            [45, 7, 53, 81, 95, 79],
            [60, 77, 74, 68, 88, 51],
            [25, 25, 10, 12, 78, 14],
            [25, 56, 55, 58, 12, 82],
            [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
     titleSettings: {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
     cellSettings: {
            showLabel: true,
        },
     xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
     yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
     dataSource: heatmapData,
     legendSettings: {
            position: 'Right',
            showLabel: true,
            height: "150"
     }
}, '#element');


```

{% endtab %}

## Add custom cell palette

The default palette settings of the heat map cells can be customized by using the [`paletteSettings`](../api/heatmap/#palettesettings) property.
Using the [`palette`](../api/heatmap/paletteSettings/#palette) property in `paletteSettings` object, you can change the color set for the cells.
You can change the color mode of the cells to fixed or gradient mode using the [`type`](../api/heatmap/paletteSettings/#type) property.

{% tab template= "heatmap/getting-started", es5Template="es5Palette" %}

```typescript
import { HeatMap, Legend, Tooltip } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

let heatmapData: any [] = [
     [73, 39, 26, 39, 94, 0],
            [93, 58, 53, 38, 26, 68],
            [99, 28, 22, 4, 66, 90],
            [14, 26, 97, 69, 69, 3],
            [7, 46, 47, 47, 88, 6],
            [41, 55, 73, 23, 3, 79],
            [56, 69, 21, 86, 3, 33],
            [45, 7, 53, 81, 95, 79],
            [60, 77, 74, 68, 88, 51],
            [25, 25, 10, 12, 78, 14],
            [25, 56, 55, 58, 12, 82],
            [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
    cellSettings: {
            showLabel: true,
        },
     xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
      yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
      dataSource: heatmapData,
      legendSettings: {
            position: 'Right',
            showLabel: true,
            height: "150"
        },
      paletteSettings: {
            palette: [
                { value: 0, color: '#C06C84' },
                { value: 50, color: '#6C5B7B' },
                { value: 100, color: '#355C7D' }
                ],
            type: "Gradient"
        },
}, '#element');

```

{% endtab %}

## Enable tooltip

The tooltip is used when you cannot display information by using the data labels due
to space constraints. You can enable the tooltip by setting the [`showTooltip`](../api/heatmap/#showtooltip) property to `true` and injecting the `Tooltip` module using
the `HeatMap.Inject(Tooltip)` method.

{% tab template= "heatmap/getting-started", es5Template="es5Tooltip" %}

```typescript

import { HeatMap, Legend, Tooltip } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

let heatmapData: any [] = [
     [73, 39, 26, 39, 94, 0],
            [93, 58, 53, 38, 26, 68],
            [99, 28, 22, 4, 66, 90],
            [14, 26, 97, 69, 69, 3],
            [7, 46, 47, 47, 88, 6],
            [41, 55, 73, 23, 3, 79],
            [56, 69, 21, 86, 3, 33],
            [45, 7, 53, 81, 95, 79],
            [60, 77, 74, 68, 88, 51],
            [25, 25, 10, 12, 78, 14],
            [25, 56, 55, 58, 12, 82],
            [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
    cellSettings: {
            showLabel: true,
        },
    xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
    yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
    dataSource: heatmapData,
    legendSettings: {
            position: 'Right',
            showLabel: true,
            height: "150"
        },
    showTooltip:true,
}, '#element');

```

{% endtab %}