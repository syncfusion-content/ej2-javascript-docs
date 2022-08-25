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

{% tab template= "maps/Providers", es5Template="es5OSM" %}

{% endtab %}

## Enabling zooming and panning

Tile Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a map for in-depth analysis. Panning helps to move a map around to focus the targeted area.

{% tab template= "maps/Providers", es5Template="es5OSMZoom" %}

{% endtab %}

## Adding markers and navigation line

Markers can be added to the layers of tile Maps by setting the corresponding location's coordinates of latitude and longitude using [`markerSettings`](../../api/maps/layerSettingsModel/#markersettings). Navigation lines can be added on top of an tile Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [`navigationLineSettings`](../../api/maps/layerSettingsModel/#navigationlinesettings).

{% tab template= "maps/Providers", es5Template="es5OSMMarkers" %}

{% endtab %}

## Adding sublayer

Any GeoJSON shape can be rendered as a sublayer on top of the tile Maps layer for highlighting a particular continent or country in tile Maps by adding another layer and specifying the [`type`](../../api/maps/layerSettingsModel/#type) property of Maps layer to **SubLayer**.

{% tab template= "maps/default-map", es5Template="es5OSMSublayer" %}

{% endtab %}

## Enabling legend

The legend can be added to the tile Maps by setting the [`visible`](../../api/maps/legendSettingsModel/#visible) property of [`legendSettings`](../../api/maps/legendSettingsModel) to **true**.

{% tab template= "maps/default-map", es5Template="legend-position-othermaps" %}

{% endtab %}
