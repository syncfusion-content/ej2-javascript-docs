---
title: " Layers in EJ2 Maps control | Syncfusion "

component: "Maps"

description: "Learn here all about Layers feature of Syncfusion EJ2 Maps control and more."
---

# Layers in EJ2 Maps control

The Maps control is rendered through [`layers`](../api/maps/#layers) and any number of layers can be added to the Maps.

## Multilayer

The Multilayer support allows loading multiple shape files and map providers in a single container, enabling Maps to display more information. The shape layer or map providers are the main layers of the Maps. Multiple layers can be added as **SubLayer** over the main layers using the [`type`](../api/maps/layerSettingsModel/#type) property of [`layers`](../api/maps/#layers).

## Sublayer

Sublayer is a type of shape file layer. It allows loading multiple shape files in a single map view. For example, a sublayer can be added over the main layer to view geographic features such as rivers, valleys and cities in a map of a country. Similar to the main layer, elements in the Maps such as markers, bubbles, color mapping and legends can be added to the sub-layer.

In this example, the United States map shape is used as shape data by utilizing **usa.ts** file, and **texas.ts** and **california.ts** files are used as sub-layers in the United States map.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "multiple-layer" %}

```typescript
import { usa_map } from './usa.ts';
import { california } from './california.ts';
import { texas } from './texas.ts';
import { Maps } from '@syncfusion/ej2-maps';

// initialize Maps component
let map: Maps = new Maps({
    layers: [
        {
            shapeData: usa_map,
            shapeSettings: {
                fill: '#E5E5E5',
                border: {
                    color: 'black',
                    width: 0.1
                }
            }
        },
        {
            shapeData: texas,
            type: 'SubLayer',
            shapeSettings: {
                fill: 'rgba(141, 206, 255, 0.6)',
                border: {
                    color: '#1a9cff',
                    width: 0.25
                }
            }
        },
        {
            shapeData: california,
            type: 'SubLayer',
            shapeSettings: {
                fill: 'rgba(141, 206, 255, 0.6)',
                border: {
                    color: '#1a9cff',
                    width: 0.25
                }
            }
        }
    ]
});
map.appendTo('#element');
```

{% endtab %}

## Displaying different layer in the view

Multiple shape files and map providers can be loaded simultaneously in Maps. The [`baseLayerIndex`](../api/maps/mapsModel/#baselayerindex) property is used to determine which layer on the user interface should be displayed. This property is used for the Maps drill-down feature, so when the [`baseLayerIndex`](../api/maps/mapsModel/#baselayerindex) value is changed, the corresponding shape is loaded. In this example, two layers can be loaded with the World map and the United States map. Based on the given [`baseLayerIndex`](../api/maps/mapsModel/#baselayerindex) value the corresponding shape will be loaded in the user interface. If the [`baseLayerIndex`](../api/maps/mapsModel/#baselayerindex) value is set to **0**, then the world map will be loaded.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "layerView" %}

```typescript
import { world_map } from './world-map.ts';
import { usa_map } from '../default-map-cs1/usa.ts';
import { Maps} from '@syncfusion/ej2-maps';
let map: Maps = new Maps({
    baseLayerIndex: 1,
    layers: [
        {
           shapeData: world_map,
        },
        {
           shapeData: usa_map
        }
   ]
});
map.appendTo('#element');
```

{% endtab %}

## Rendering custom shapes

Custom shapes (also known as custom maps) can be rendered in Maps to represent bus seat booking, cricket stadium, basic home plan/sketch, and so on. To accomplish this, a JSON file in GeoJSON format with proper geometries must be created manually or with the assistance of any online map vendor. The GeoJSON file created must be set to the [`shapeData`](../api/maps/layerSettingsModel/#shapedata) in the Maps layer, and the [`geometryType`](../api/maps/layerSettingsModel/#geometrytype) must be set as **Normal**.

Please refer this [`link`](https://cdn.syncfusion.com/maps/map-data/seat.json) for an example GeoJSON file containing information about bus seat selection.

Please refer this [`link`](https://ej2.syncfusion.com/demos/#/bootstrap5/maps/seat-selection.html) for more information and a live demonstration.

## See Also

* [Adding multiple layers in map](../maps/how-to/multiple-layer)
* [Custom path map](../maps/how-to/custom-path)