# Getting Started

This section explains you the steps required to create a map and demonstrate the basic usage of the maps control.

You can explore some useful features in the Maps control using the following video.

`youtube:kwE6ikF7QYQ`

## Dependencies

Below is the list of minimum dependencies required to use the Maps.

```javascript
|-- @syncfusion/ej2-maps
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-svg-base
```

## Installation and Configuration

* To get started with Maps control, clone the
Essential JS 2 quickstart project from [`GitHub`](https://github.com/syncfusion/ej2-quickstart.git)
and install necessary packages by using the following commands.

```sh
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

* Syncfusion Maps packages can be mapped in **system.config.js** configuration file.

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
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-maps": "syncfusion:ej2-maps/dist/ej2-maps.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});
```

>The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common settings (`system.config.js` ) to start with all Essential JS 2 components.

## Add Map control to the Project

The Essential JS2 Maps control can be added to the application. To get started, add the Maps control to the **app.ts** and **index.html** files using the following code.

Add an HTML div element to act as the Maps element in the **index.html** file using the following code.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Maps</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
     <!--container which is going to render the Map-->
     <div id='container'>
     </div>
</body>

</html>
```

Import the Maps control in the `app.ts` to initialize a Maps and append the Maps instance to the `#container`.

```javascript
import { Maps } from '@syncfusion/ej2-maps';

// initialize Maps component
let map: Maps = new Maps();

// render initialized Map
map.appendTo('#container');
```

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```cmd
npm start
```

The below example shows a basic Maps control.

```typescript
import { Maps } from '@syncfusion/ej2-maps';

let map: Maps = new Maps();

map.appendTo('#element');
```

As we didn't specify shapeData to the maps, no shape will be rendered and only an empty SVG element is appended to the maps container.

## Module Injection

Maps component are segregated into individual feature-wise modules. In order to use a particular feature,
you need to inject its feature module using `Maps.Inject()` method.  Find the modules available in maps and its description as follows.

* Annotations - Inject this provider to use annotations feature.
* Bubble - Inject this provider to use bubble feature.
* DataLabel - Inject this provider to use data label feature.
* Highlight - Inject this provider to use highlight feature.
* Legend - Inject this provider to use legend feature.
* Marker - Inject this provider to use marker feature.
* MapsTooltip - Inject this provider to use tooltip series.
* NavigationLine - Inject this provider to use navigation lines feature.
* Selection - Inject this provider to use selection feature.
* Zoom - Inject this provider to use zooming and panning feature.

In the current application, we are going to modify the above basic maps to visualize 2016 USA president election results.

For this application we are going to use tooltip, data label and legend features of the maps.
Now import the MapsTooltip, DataLabel and Legend modules from maps package and inject it into the Maps component using
`Maps.Inject` method.

```javascript

import { Maps, Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-maps';
Maps.Inject(Legend, DataLabel, MapsTooltip);

```

## Render shapes from GeoJSON data

This section explains how to bind GeoJSON data to the map.

```javascript

let usMap: Object =
{
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "iso_3166_2": "MA", "name": "Massachusetts", "admin": "United States of America" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -70.801756294617277, 41.248076234530558 ]] ] ] }
        }
    ]
    //..
};

```

```javascript

export let world_map: object =
{
     "type": "FeatureCollection",
     "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
     "features": [{ "type": "Feature", "properties": { "admin": "Afghanistan", "name": "Afghanistan", "continent": "Asia" }, ...
     };
<!-- markdownlint-disable MD009 -->
``` 

Elements in the maps will get rendered in the layers. So add a layer collection to the maps by using [`layers`](../api/maps/#layers) property. Now bind the GeoJSON data to the [`shapeData`](../api/maps/layerSettingsModel/#shapedata) property.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "default" %}

```typescript

import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
let map: Maps = new Maps({
   layers: [
        {
            shapeData: world_map
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-710289613) here.

## Bind data source to map

The following properties in layers are used for binding data source to map.

* `dataSource`
* `shapeDataPath`
* `shapePropertyPath`

The [`dataSource`](../api/maps/layerSettingsModel/#datasource) property takes collection value as input. For example, the list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [`shapeDataPath`](../api/maps/layerSettingsModel/#shapedatapath) property used to refer the data ID in dataSource. Where as, the [`shapePropertyPath`](../api/maps/layerSettingsModel/#shapepropertypath) property is used to refer the column name in shapeData to identify the shape. Both the properties are related to each other. When the values of the shapeDataPath property in the dataSource property and the value of shapePropertyPath in the shapeData property match, then the associated object from the dataSource is bound to the corresponding shape.

The JSON object "electionData" is used as data source below.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "color-map" %}

```typescript

import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
let map: Maps = new Maps({
   layers: [
        {
            shapeData: world_map,
            dataSource: [
                { "Country": "China", "Membership": "Permanent" },
                { "Country": "France", "Membership": "Permanent" },
                { "Country": "Russia", "Membership": "Permanent" },
                { "Country": "Kazakhstan", "Membership": "Non-Permanent" },
                { "Country": "Poland", "Membership": "Non-Permanent" },
                { "Country": "Sweden", "Membership": "Non-Permanent" }],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country'
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-710289613) here.

## Apply Color Mapping

The Color Mapping feature supports customization of shape colors based on the underlying value of shape received from bounded data. Specify the field name from which the values have to be compared for the shapes in [`colorValuePath`](../api/maps/shapeSettingsModel/#colorvaluepath) property in [`shapeSettings`](../api/maps/shapeSettingsModel/).

Specify color and value in [`colorMapping`](../api/maps/shapeSettingsModel/#colormapping) property. Here '#D84444' is specified for 'Trump' and '#316DB5' is specified for 'Clinton'.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "color-map" %}

```typescript
//tslint:disable
import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
let map: Maps = new Maps({
   layers: [
        {
            shapeData: world_map,
            dataSource: [
                {  "Country": "China", "Membership": "Permanent" },
                { "Country": "France", "Membership": "Permanent" },
                { "Country": "Russia", "Membership": "Permanent" },
                { "Country": "Kazakhstan", "Membership": "Non-Permanent" },
                { "Country": "Poland", "Membership": "Non-Permanent" },
                { "Country": "Sweden", "Membership": "Non-Permanent" }],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country',
            colorValuePath: 'Membership',
            shapeSettings: {
                colorValuePath: 'Membership',
                colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }]
            }
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Add Title for Maps

You can add a title using [`titleSettings`](../api/maps/titleSettingsModel/) property to the map to provide quick
information to the user about the shapes rendered in the map.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "title" %}

```typescript
//tslint:disable
import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
let map: Maps = new Maps({
            titleSettings: {
                text: 'USA Election Results - 2016'
            },
   layers: [
        {
            shapeData: world_map,
            dataSource: [
                { "Country": "China", "Membership": "Permanent" },
                { "Country": "France", "Membership": "Permanent" },
                { "Country": "Russia", "Membership": "Permanent" },
                { "Country": "Kazakhstan", "Membership": "Non-Permanent" },
                { "Country": "Poland", "Membership": "Non-Permanent" },
                { "Country": "Sweden", "Membership": "Non-Permanent" }],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country',
            shapeSettings: {
                colorValuePath: 'Membership',
                colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }]
            }
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Enable Legend

You can show legend for the maps by setting true to the [`visible`](../api/maps/legendSettingsModel/#visible)
property in [`legendSettings`](../api/maps/legendSettingsModel/) object and by injecting the `Legend`
module using `Maps.Inject(Legend)` method.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "legend" %}

```typescript

import { Maps, Legend } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Legend);
let map: Maps = new Maps({
   layers: [
        {
            titleSettings: {
                text: 'USA Election Results - 2016'
            },
            shapeData: world_map,
            dataSource: [
                {  "Country": "China", "Membership": "Permanent" },
                { "Country": "France", "Membership": "Permanent" },
                { "Country": "Russia", "Membership": "Permanent" },
                { "Country": "Kazakhstan", "Membership": "Non-Permanent" },
                { "Country": "Poland", "Membership": "Non-Permanent" },
                { "Country": "Sweden", "Membership": "Non-Permanent" }],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country',
            shapeSettings: {
                colorValuePath: 'Membership',
                colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }]
            }
        }
    ],
    legendSettings: {
        visible: true
    }
});
map.appendTo('#element');

```

{% endtab %}

## Add Data Label

You can add data labels to show additional information of the shapes in map. This can be achieved by setting [`visible`](../api/maps/dataLabelSettingsModel/#visible) property to true in the [`dataLabelSettings`](../api/maps/dataLabelSettingsModel/) object and by injecting `DataLabel` module using `Maps.Inject(DataLabel)` method.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "label" %}

```typescript

import { Maps, Legend, DataLabel } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Legend, DataLabel);
let map: Maps = new Maps({
   layers: [
        {
            shapeData: world_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                smartLabelMode: 'Trim'
            }
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints.
You can enable tooltip by setting the [`visible`](../api/maps/tooltipSettingsModel/#visible) property as true
in [`tooltipSettings`](../api/maps/tooltipSettingsModel/) object and by injecting `MapsTooltip` module using
`Msps.Inject(MapsTooltip)` method.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "tooltip" %}

```typescript

import { Maps, DataLabel, MapsTooltip } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(DataLabel, MapsTooltip);

let map: Maps = new Maps({
   layers: [
        {
            shapeData: world_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                smartLabelMode: 'Trim'
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}
