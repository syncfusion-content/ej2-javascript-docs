---
layout: post
title: Getting started with ##Platform_Name## Maps component | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Maps component of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Maps component

This section explains how to create a Maps component and configure its available functionalities in TypeScript using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Prerequisites

Before getting started, ensure you have:
- Node.js `v14.15.0` or higher installed
- Basic knowledge of TypeScript and webpack
- A code editor (Visual Studio Code recommended)

## Dependencies

The Maps component requires the following minimum dependencies:

```javascript
|-- @syncfusion/ej2-maps
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-svg-base
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Add Maps component to the project

The Essential<sup style="font-size:70%">&reg;</sup> JS2 Maps component can be added to the application. To get started, add the Maps component to the **app.ts** and **index.html** files using the following code.

Add an HTML div element to act as the Maps element in the **index.html** file using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Maps</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <!--container which is going to render the Map-->
    <div id='container'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the Maps component in the `app.ts` to initialize a Maps and append the Maps instance to the `#container`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Maps } from '@syncfusion/ej2-maps';

// initialize Maps component
let map: Maps = new Maps();

// render initialized Map
map.appendTo('#container');

{% endhighlight %}
{% endtabs %}

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Since no shape data is specified, the Maps displays as an empty SVG element. The next sections demonstrate how to add geographic data and customize the map.

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

Elements in the maps will get rendered in the layers. So add a layer collection to the maps by using [`layers`](../api/maps/layers) property. Now bind the GeoJSON data to the [`shapeData`](../api/maps/layerSettingsModel/shapedata) property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/maps/default-map-cs170/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs170/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="world-map.ts" %}
{% include code-snippet/maps/default-map-cs170/world-map.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs170" %}

>Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-710289613) here.

## Bind data source to map

The following properties in layers are used for binding data source to map.

* `dataSource`
* `shapeDataPath`
* `shapePropertyPath`

The [`dataSource`](../api/maps/layerSettingsModel/datasource) property takes a collection value as input. For example, a list of objects can be provided as input. This data is further used in tooltips, data labels, bubbles, legends, and color mapping.

The [`shapeDataPath`](../api/maps/layerSettingsModel/shapedatapath) property is used to refer to the data ID in the dataSource. The [`shapePropertyPath`](../api/maps/layerSettingsModel/shapepropertypath) property is used to refer to the column name in shapeData to identify the shape. Both properties are related to each other. When the values of the shapeDataPath property in the dataSource and the value of shapePropertyPath in the shapeData match, the associated object from the dataSource is bound to the corresponding shape.

The JSON object "electionData" is used as data source below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/maps/default-map-cs171/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs171/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="world-map.ts" %}
{% include code-snippet/maps/default-map-cs171/world-map.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs171" %}
