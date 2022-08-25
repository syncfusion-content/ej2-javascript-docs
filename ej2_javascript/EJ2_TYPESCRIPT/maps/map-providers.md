---
title: " Maps providers in EJ2 Maps control | Syncfusion "

component: "Maps"

description: "Learn here all about Maps providers of Syncfusion EJ2 Maps control and more."
---

# Map Providers in EJ2 Maps control

Maps control support map providers such as OpenStreetMap that can be added to any layers in maps.

## Open Street Map

OpenStreetMap(OSM) is a online map provider. The OpenStreetMap allows you to view, edit and use geographical data in a collaborative way from any place on the Earth. One of the most important features in Maps control is the built-in online map provider support. By using this feature, you can render OpenStreetMaps in the maps component. This provides the ability to visualize street map tiles without using any external shape files.

``` typescript
import { Maps } from '@syncfusion/ej2-maps';
let map: Maps = new Maps({
    layers: [
        {
            urlTemplate: 'http://a.tile.openstreetmap.org/level/tileX/tileY.png'
        }]
});
map.appendTo('container');

```

## Bing Maps

Bing Maps is a online map provider for accessing the external geospatial imagery services for deep-zoom satellite view which is supported in the Maps control. This provides the ability to visualize satellite, aerial, and street maps without using any external shape files.

```typescript
import { Maps } from '@syncfusion/ej2-maps';
let map: Maps = new Maps({
     load: function(args){
        args.maps.getBingUrlTemplate("https://dev.virtualearth.net/REST/V1/Imagery/Metadata/Aerial?output=json&uriScheme=https&key=?").then(function(url) {
            args.maps.layers[0].urlTemplate= url;
        });
    },
    layers: [{
    }]
});
map.appendTo('container');

```

## See Also

* [Adding multiple layers in map](../maps/how-to/multiple-layer)