---
title: "Open Street Maps in EJ2 Maps control | Syncfusion"

component: "Maps"

description: "Learn here all about Open Street Maps of Syncfusion EJ2 Maps control and more."
---

# OpenStreetMaps in EJ2 Maps control

The OpenStreetMap (OSM) is the online Maps provider built by a community of developers; it is free to use under an open license. It allows to view geographical data in a collaborative way from anywhere on the earth. The OSM Maps provides small tile images based on our requests and combines those images into a single image to display the Maps area in the Maps component.

## Adding OpenStreetMap

The OSM Maps can be rendered using the [`urlTemplate`](../../api/maps/layerSettingsModel/#urltemplate) property.

{% tab template= "maps/Providers",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "OSM" %}

```typescript

import { Maps } from '@syncfusion/ej2-maps';
let map: Maps = new Maps({
    layers: [
        {
            urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png"
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

### Changing the tile server of the OpenStreetMap

The OSM tile server can be changed by setting the tile URL in the [`urlTemplate`](../../api/maps/layerSettingsModel/#urltemplate) property. For more details about the OSM tile server, refer [here](https://wiki.openstreetmap.org/wiki/Tiles).

## Enabling zooming and panning

The OSM Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a Maps for in-depth analysis. Panning helps to move a Maps around to focus the targeted area.

{% tab template= "maps/Providers",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "OSMZoom" %}

```typescript
import { Maps , Zoom} from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        toolbars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"]
    },
    layers: [
        {
            urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png"
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Adding markers and navigation line

Markers can be added to the layers of OSM Maps by setting the corresponding location's coordinates of latitude and longitude using [`markerSettings`](../../api/maps/layerSettingsModel/#markersettings). Navigation lines can be added on top of an OSM Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [`navigationLineSettings`](../../api/maps/layerSettingsModel/#navigationlinesettings).

{% tab template= "maps/Providers",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "OSMMarkers" %}

```typescript

import { Maps, NavigationLine, Marker } from '@syncfusion/ej2-maps';
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
            urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png",
            markerSettings: [{
                visible: true,
                height: 25,
                width: 15,
                dataSource: [
                    {
                        latitude: 34.060620,
                        longitude: -118.330491,
                        name: "California"
                    },
                    {
                        latitude: 40.724546,
                        longitude: -73.850344,
                        name: "New York"
                    }
                ]
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

Any GeoJSON shape can be rendered as a sublayer on top of the OSM Maps layer for highlighting a particular continent or country in OSM Maps by adding another layer and specifying the [`type`](../../api/maps/layerSettingsModel/#type) property of Maps layer to **SubLayer**.

{% tab template="maps/default-map", sourceFiles="index.ts,index.html", es5Template="OSMSublayer" %}

```typescript

import { Maps } from '@syncfusion/ej2-maps';
import { Africa_Continent } from './Africa_Continent.ts';
let map: Maps = new Maps({
    layers: [
        {
            urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png"
        },
        {
            shapeData: Africa_Continent,
            type: 'SubLayer',
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

{% tab template="maps/default-map", sourceFiles="index.ts,index.html", es5Template="OSMLegend" %}

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
          urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png",
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
