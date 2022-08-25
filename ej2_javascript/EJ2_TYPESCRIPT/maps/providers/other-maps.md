---
title: "Other Map Providers in EJ2 Maps control | Syncfusion"

component: "Maps"

description: "Learn here all about other Map Providers of Syncfusion EJ2 Maps control and more."
---

# Other Maps providers in EJ2 Maps control

Apart from OpenStreetMap and Bing Maps, you can also render Maps from other online map service providers by specifying the URL provided by those providers in the [`urlTemplate`](../../api/maps/layerSettingsModel/#urltemplate) property. The URL template concept has been implemented in such a way that any online map service providers using the following template can benefit from previewing their Map in the Syncfusion EJ2 Maps control.

<!-- markdownlint-disable MD034 -->

Sample Template: https://< domain_name >/maps/basic/{z}/{x}/{y}.png

* "${z}" - It represents zoom factor (level).
* "${x}" - It indicates tile image x-position (tileX).
* "${y}" - It indicates tile image y-position (tileY).

In this case, the key generated for those online map service providers can also be appended to the URL. This allows to create personalized Maps with your own content and imagery. In this example, Google Maps is rendered.

>Refer to [Google Maps Licensing](https://developers.google.com/maps/terms#10-license-restrictions).

{% tab template="maps/Providers", sourceFiles="index.ts,index.html", es5Template="es5OSM" %}

```typescript

import { Maps } from '@syncfusion/ej2-maps';
let map: Maps = new Maps({
    layers: [
        {
            urlTemplate: "http://mt1.google.com/vt/lyrs=m@129&hl=en&x=tileX&y=tileY&z=level"
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Enabling zooming and panning

Tile Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a Maps for in-depth analysis. Panning helps to move a Maps around to focus the targeted area.

{% tab template="maps/default-map", sourceFiles="index.ts,index.html", es5Template="es5OSMZoom %}

```typescript

import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true
    },
    layers: [
        {
            urlTemplate: "http://mt1.google.com/vt/lyrs=m@129&hl=en&x=tileX&y=tileY&z=level"
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Adding markers and navigation line

Markers can be added to the layers of tile Maps by setting the corresponding location's coordinates of latitude and longitude using [`markerSettings`](../../api/maps/layerSettingsModel/#markersettings). Navigation lines can be added on top of an tile Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [`navigationLineSettings`](../../api/maps/layerSettingsModel/#navigationlinesettings).

{% tab template="maps/default-map", sourceFiles="index.ts,index.html", es5Template="es5OSMMarkers" %}

```typescript

import { Maps, NavigationLine, Marker, MarkerSettings } from '@syncfusion/ej2-maps';
Maps.Inject(NavigationLine, Marker);
let map: Maps = new Maps({
    zoomSettings: {
        zoomFactor: 4
    },
    centerPosition: {
        latitude: 29.394708,
        longitude: -94.954653
    },
    layers: [
        {
            urlTemplate: "http://mt1.google.com/vt/lyrs=m@129&hl=en&x=tileX&y=tileY&z=level",
            markerSettings: [{
                visible: true,
                height: 25,
                width: 15,
                dataSource: [{
                    latitude: 34.060620,
                    longitude: -118.330491,
                    name: "California"
                },
                {
                    latitude: 40.724546,
                    longitude: -73.850344,
                    name: "New York"
                }]
            }],
            navigationLineSettings: [{
                visible: true,
                color: "blue",
                width: 5,
                angle: 0.1,
                latitude: [34.060620, 40.724546],
                longitude: [-118.330491,-73.850344]
            }]
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Adding sublayer

Any GeoJSON shape can be rendered as a sublayer on top of the tile Maps layer for highlighting a particular continent or country in tile Maps by adding another layer and specifying the [`type`](../../api/maps/layerSettingsModel/#type) property of Maps layer to **SubLayer**.

{% tab template="maps/default-map", sourceFiles="index.ts,index.html", es5Template="es5OSMSublayer" %}

```typescript

import { Maps } from '@syncfusion/ej2-maps';
import { Africa_Continent } from './Africa_Continent.ts';
let map: Maps = new Maps({
    layers: [
        {
            urlTemplate: "http://mt1.google.com/vt/lyrs=m@129&hl=en&x=tileX&y=tileY&z=level"
        },
        {
            shapeData: Africa_Continent,
            type: "SubLayer",
            shapeSettings: {
                fill: "blue"
            }
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Enabling legend

The legend can be added to the tile Maps by setting the [`visible`](../../api/maps/legendSettingsModel/#visible) property of [`legendSettings`](../../api/maps/legendSettingsModel) to **true**.

{% tab template="maps/default-map", sourceFiles="index.ts,index.html", es5Template = "OtherMapsLegend" %}

```typescript

import { Maps, Legend, Marker } from '@syncfusion/ej2-maps';
import { markerDataSource } from './markerdata.ts';

Maps.Inject(Legend, Marker);
let map: Maps = new Maps({
    legendSettings: {
        visible: true,
        type: 'Markers',
        useMarkerShape:true,
        toggleLegendSettings: {
          enable: true,
          applyShapeSettings: false,
          border: {
            color: 'green',
            width: 2
          }
        }
    },
    layers: [
        {
          urlTemplate:"http://mt1.google.com/vt/lyrs=m@129&hl=en&x=tileX&y=tileY&z=level",
          shapeDataPath: 'name',
          shapePropertyPath: 'name',
          shapeSettings: {
            fill: '#E5E5E5'
          },
          markerSettings: [
            {
              dataSource: markerDataSource,
              colorValuePath: 'color',
              shapeValuePath:'shape',
              legendText: 'country',
              visible: true
            }
          ]
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}