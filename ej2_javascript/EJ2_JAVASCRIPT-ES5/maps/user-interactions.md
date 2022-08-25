---
title: " User interactions in EJ2 Maps control | Syncfusion "

component: "Maps"

description: "Learn here all about User interactions of Syncfusion EJ2 Maps control and more."
---

# User Interactions in EJ2 Maps control

## Zooming

The zooming feature is used to zoom in and out of Maps to show in-depth information. It is controlled by the [`zoomFactor`](../api/maps/zoomSettingsModel/#zoomfactor) property of the [`zoomSettings`](../api/maps/zoomSettingsModel) of the Maps. The [`zoomFactor`](../api/maps/zoomSettingsModel/#zoomfactor) is increased or decrease dynamically based on zoom in and out interaction.

<b>Enable zooming</b>

Zooming of Maps is enabled by setting the [`enable`](../api/maps/zoomSettingsModel/#enable) property of [`zoomSettings`](../api/maps/zoomSettingsModel/) to **true**.

<b>Enable panning</b>

To enable the panning feature, set the [`enablePanning`](../api/maps/zoomSettingsModel/#enablepanning) property of [`zoomSettings`](../api/maps/zoomSettingsModel) to **true**.

```typescript
import { world_map } from './world-map.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
    }],
    zoomSettings:{
        enable:true,
        enablePanning:true
    }
});

```

### Various type of zooming

Zooming can be performed in following types:

#### Zooming toolbar

By default, the toolbar is rendered with **zoom-in**, **zoom-out**, and **reset** options when it is set to **true** in the [`enable`](../api/maps/zoomSettingsModel/#enable) property of [`zoomSettings`](../api/maps/zoomSettingsModel/).

The following options are available in toolbar.

1. Zoom - Provides rectangular zoom support.
2. ZoomIn - Zooms in the Maps.
3. ZoomOut - Zooms out the Maps.
4. Pan - Switches to panning if rectangular zoom is activated.
5. Reset - Restores the Maps to the default view.

The following properties are available in toolbars to customize the zooming toolbars.

* [`color`](../api/maps/zoomSettingsModel/#color) - To apply the color for toolbars in Maps.
* [`highlightColor`](../api/maps/zoomSettingsModel/#highlightcolor) - To apply the color for the zooming toolbar when the mouse has hovered on the toolbar element in Maps.
* [`horizontalAlignment`](../api/maps/zoomSettingsModel/#horizontalalignment) - To customize the position type of toolbar when it is placed horizontally.
* [`selectionColor`](../api/maps/zoomSettingsModel/#selectioncolor) - To apply the color for the zooming toolbar when clicking the zooming toolbar in Maps.
* [`toolBarOrientation`](../api/maps/zoomSettingsModel/#toolbarorientation) - To customize the orientation of the zooming toolbar.
* [`toolbars`](../api/maps/zoomSettingsModel/#toolbars) - To customize the items that are to be shown in the zooming toolbar in Maps.
* [`verticalAlignment`](../api/maps/zoomSettingsModel/#verticalalignment) - To customize the position type of toolbar when it is placed vertically.

```typescript
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        color: 'green',
        highlightColor: 'blue',
        selectionColor: 'orange',
        horizontalAlignment: 'Center',
        toolbars: ['ZoomIn', 'ZoomOut', 'Pan', 'Reset']
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

#### Pinch zooming

To enable or disable the pinch zooming, use the [`pinchZooming`](../api/maps/zoomSettingsModel/#pinchzooming) property in [`zoomSettings`](../api/maps/zoomSettingsModel).

```typescript
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        pinchZooming: true
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

#### Single-click zooming

To enable or disable the single-click zooming, use the [`zoomOnClick`](../api/maps/zoomSettingsModel/#zoomonclick) property in [`zoomSettings`](../api/maps/zoomSettingsModel).

```typescript
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        zoomOnClick: true
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

#### Double-click zooming

To enable or disable the double-click zooming, use the [`doubleClickZoom`](../api/maps/zoomSettingsModel/#doubleclickzoom) property in [`zoomSettings`](../api/maps/zoomSettingsModel/).

```typescript
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        doubleClickZoom: true
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

#### Mouse wheel zooming

To enable or disable mouse wheel zooming, use the [`mouseWheelZoom`](../api/maps/zoomSettingsModel/#mousewheelzoom) property in [`zoomSettings`](../api/maps/zoomSettingsModel/).

```typescript
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        mouseWheelZoom: true
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

#### Selection zooming

To enable or disable selection zooming, use the [`enableSelectionZooming`](../api/maps/zoomSettingsModel/#enableselectionzooming) property in [`zoomSettings`](../api/maps/zoomSettingsModel/). The [`enablePanning`](../api/maps/zoomSettingsModel/#enablepanning) property must be set to **false** to enable the selection zooming in Maps.

```typescript
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        enableSelectionZooming: true,
        enablePanning: false
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

### Setting minimum and maximum values for zoom factor

The zooming range can be adjusted using the [`minZoom`](../api/maps/zoomSettingsModel/#minzoom) and [`maxZoom`](../api/maps/zoomSettingsModel/#maxzoom) properties in [`zoomSettings`](../api/maps/zoomSettingsModel/). The minZoom value is set to 1 by default, and the maxZoom value is set to 10.

```typescript
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        minZoom: 2,
        maxZoom: 12
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

### Zooming with animation

To zoom in or zoom out the Maps with animation, use the [`animationDuration`](../api/maps/layerSettingsModel/#animationduration) property in [`layers`](../api/maps/layerSettingsModel).

```typescript
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
    },
    layers: [{
        shapeData: usmap,
        animationDuration: 500
    }]
});
map.appendTo('#element');
```

## Selection

Each shape in the Maps can be selected and deselected during interaction with the shapes. Selection is enabled by setting the [`enable`](../api/maps/selectionSettingsModel/#enable) property of [`selectionSettings`](../api/maps/selectionSettingsModel) to **true**.

The following properties are available to customize the selection of Maps elements such as shapes, bubbles, markers and legends.

* [`border`](../api/maps/selectionSettingsModel/#border) - To customize the color, width and opacity of the border of which element is selected in Maps.
* [`fill`](../api/maps/selectionSettingsModel/#fill) - Applies the color for the element that is selected.
* [`opacity`](../api/maps/selectionSettingsModel/#opacity) - To customize the transparency for the element that is selected.
* [`enableMultiSelect`](../api/maps/selectionSettingsModel/#enablemultiselect) - To enable or disable the selection for multiple shapes or markers or bubbles in the Maps.

By tapping on the specific legend, the shapes which are bounded to the selected legend is also selected and vice versa.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "selection" %}

```typescript
import { world_map } from './world-map.ts';
import { Maps, Selection, Legend } from '@syncfusion/ej2-maps';
Maps.Inject(Selection, Legend);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: world_map,
            dataSource: [{  "Country": "China", "Membership": "Permanent"},
            {"Country": "France","Membership": "Permanent" },
            { "Country": "Russia","Membership": "Permanent"},
            {"Country": "Kazakhstan","Membership": "Non-Permanent"},
            { "Country": "Poland","Membership": "Non-Permanent"},
            {"Country": "Sweden","Membership": "Non-Permanent"}],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country',
            selectionSettings: {
               enable: true,
               fill: 'blue',
               border: { color: 'white', width: 2}
            },
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

### Enable selection for bubbles

To enable the selection for bubbles in Maps, set the [`selectionSettings`](../api/maps/selectionSettingsModel) in [`bubbleSettings`](../api/maps/bubbleSettingsModel/) and set the [`enable`](../api/maps/selectionSettingsModel/#enable) property of [`selectionSettings`](../api/maps/selectionSettingsModel) as **true**.

>To use the bubble feature, the Bubble module must be injected.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "bubble-selection" %}

```typescript
import { world_map } from './world-map.ts';
import { Maps, Bubble, Selection } from '@syncfusion/ej2-maps';
Maps.Inject(Selection, Bubble);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        bubbleSettings: [{
            visible: true,
            dataSource: [
                { name: 'India', population: '38332521' },
                { name: 'South Africa', population: '19651127' },
                { name: 'Pakistan', population: '3090416' }
            ],
            selectionSettings: {
                enable: true,
                fill: 'green',
                border: { color: 'white', width: 2}
            },
            valuePath: 'population'
        }]
    }]
});
map.appendTo('#element');
```

{% endtab %}

### Enable selection for markers

To enable the selection for markers in Maps, set the [`selectionSettings`](../api/maps/selectionSettingsModel) in the [`markerSettings`](../api/maps/markerSettingsModel) and set the [`enable`](../api/maps/selectionSettingsModel/#enable) property of the [`selectionSettings`](../api/maps/selectionSettingsModel) as **true**.

>To use the marker feature, the Marker module must be injected.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "marker-selection" %}

```typescript
import { world_map } from './world-map.ts';
import { Maps, Marker, Selection } from '@syncfusion/ej2-maps';
Maps.Inject(Selection, Marker);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        markerSettings: [{
            visible: true,
            height: 20,
            width: 20,
            fill: 'green',
            shape:'Balloon',
            selectionSettings: {
                enable: true,
                fill: 'blue',
                border: { color: 'white', width: 2}
            },
            dataSource: [
                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America'},
                { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America'}
            ]
        }],
    }]
});
map.appendTo('#element');
```

{% endtab %}

### Public method for the shape selection

The [`shapeSelection`](../api/maps/#shapeselection) method can be used to select each shape in the Maps.
LayerIndex, propertyName, country name, and selected value as a boolean state(true / false) are the input parameters for this method.

{% tab template= "maps/selection-method",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "shapeSelectionMethod" %}

```typescript
import { world_map } from '../default-map-cs1/world-map.ts';
import { Maps, Selection } from '@syncfusion/ej2-maps';
Maps.Inject(Selection);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        selectionSettings: {
            enable: true,
            fill: 'green',
            border: { color: 'white', width: 2}
        }
    }]
});
map.appendTo('#element');
document.getElementById('selection').onclick = () => {
    map.shapeSelection(0, "continent", "Asia", true);
};
document.getElementById('unselection').onclick = () => {
    map.shapeSelection(0, "continent", "Asia", false);
};
```

{% endtab %}

### Initial shape selection

The shape is initially selected using the [`initialShapeSelection`](../api/maps/initialShapeSelectionSettingsModel/), and the values are mapped to the [`shapePath`](../api/maps/initialShapeSelectionSettingsModel/#shapepath) and [`shapeValue`](../api/maps/initialShapeSelectionSettingsModel/#shapevalue).

>initialShapeSelection is an Array property.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "initialSelection" %}

```typescript
import { world_map } from './world-map.ts';
import { Maps, Selection } from '@syncfusion/ej2-maps';
Maps.Inject(Selection);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        initialShapeSelection: [
            { shapePath: 'continent', shapeValue: 'Africa' },
            { shapePath: 'name', shapeValue: 'India' }
        ],
        selectionSettings: {
            enable: true,
            fill: 'green',
            border: { color: 'white', width: 2}
        }
    }]
});
map.appendTo('#element');
```

{% endtab %}

### Initial marker selection

Using the [`initialMarkerSelection`](../api/maps/initialMarkerSelectionSettingsModel), the marker shape can be selected initially. Markers render based on the [`latitude`](../api/maps/initialMarkerSelectionSettingsModel/#latitude) and [`longitude`](../api/maps/initialMarkerSelectionSettingsModel/#longitude) values.

>initialMarkerSelection is an Array property.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "initial-marker-selection" %}

```typescript
import { world_map } from './world-map.ts';
import { Maps, Marker, Selection } from '@syncfusion/ej2-maps';
Maps.Inject(Selection, Marker);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        markerSettings: [{
            visible: true,
            height: 20,
            width: 20,
            fill: 'green',
            shape:'Balloon',
            initialMarkerSelection: [{
               latitude: -6.64607562172573, longitude: -55.54687499999999
            }],
            selectionSettings: {
                enable: true,
                fill: 'blue',
                border: { color: 'white', width: 2}
            },
            dataSource: [
                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America'},
                { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America'}
            ]
        }],
    }]
});
map.appendTo('#element');
```

{% endtab %}

## Highlight

Each shape in the Maps elements such as shapes, bubbles, markers and legends. Highlight is enabled by setting the [`enable`](../api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](../api/maps/highlightSettingsModel) to **true**.

The following properties are available to customize the highlight of Maps elements such as shapes, bubbles, markers and legends.

* [`border`](../api/maps/highlightSettingsModel/#border) - To customize the color, width and opacity of the border of which element is highlighted in Maps.
* [`fill`](../api/maps/highlightSettingsModel/#fill) - Applies the color for the element that is highlighted.
* [`opacity`](../api/maps/highlightSettingsModel/#opacity) - To customize the transparency for the element that is highlighted.

Hovering on the specific legend, the shapes which are bounded to the selected legend is also highlighted and vice versa.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "highlight" %}

```typescript
import { world_map } from './world-map.ts';
import { Maps, Highlight, Legend } from '@syncfusion/ej2-maps';
Maps.Inject(Highlight, Legend);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: world_map,
            dataSource: [
                { "Country": "China", "Membership": "Permanent"},
                { "Country": "France", "Membership": "Permanent" },
                { "Country": "Russia", "Membership": "Permanent"},
                { "Country": "Kazakhstan", "Membership": "Non-Permanent"},
                { "Country": "Poland", "Membership": "Non-Permanent"},
                { "Country": "Sweden", "Membership": "Non-Permanent"}
            ],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country',
            highlightSettings: {
               enable: true,
               fill: 'blue',
               border: { color: 'white', width: 2}
            },
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

### Enable highlight for bubbles

To enable the highlight for bubbles in Maps, set the [`highlightSettings`](../api/maps/highlightSettingsModel) in [`bubbleSettings`](../api/maps/bubbleSettingsModel) and set the [`enable`](../api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](../api/maps/highlightSettingsModel) as **true**.

>To use the bubble feature, the Bubble module must be injected.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "bubble-highlight" %}

```typescript
import { world_map } from './world-map.ts';
import { Maps, Bubble, Highlight } from '@syncfusion/ej2-maps';
Maps.Inject(Highlight, Bubble);
let map: Maps = new Maps({
   layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        bubbleSettings: [{
            visible: true,
            dataSource: [
                { name: 'India', population: '38332521' },
                { name: 'South Africa', population: '19651127' },
                { name: 'Pakistan', population: '3090416' }
            ],
            highlightSettings: {
                enable: true,
                fill: 'green',
                border: { color: 'white', width: 2}
            },
            valuePath: 'population'
        }]
    }]
});
map.appendTo('#element');
```

{% endtab %}

### Enable highlight for markers

To enable the highlight for markers in Maps, set the [`highlightSettings`](../api/maps/highlightSettingsModel) in [`markerSettings`](../api/maps/markerSettingsModel) and set the [`enable`](../api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](../api/maps/highlightSettingsModel) as **true**.

>To use the marker feature, the Marker module must be injected.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "marker-highlight" %}

```typescript
import { world_map } from './world-map.ts';
import { Maps, Marker, Highlight } from '@syncfusion/ej2-maps';
Maps.Inject(Highlight, Marker);
let map: Maps = new Maps({
      layers: [{
        shapeData: world_map,
        markerSettings: [{
            visible: true,
            height: 20,
            width: 20,
            fill: 'green',
            shape:'Balloon',
            highlightSettings: {
                enable: true,
                fill: 'blue',
                border: { color: 'white', width: 2}
            },
            dataSource: [
                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America'},
                { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America'}
            ]
        }],
    }]
});
map.appendTo('#element');
```

{% endtab %}

## Tooltip

On mouse over or touch end event, the tooltip is used to get more information about the layer, bubble, or marker. To enable tooltip in Maps, the **Tooltip** module must be injected into Maps using **Maps.Inject(Tooltip)** method. It can be enabled separately for layer or bubble or marker by using the [`visible`](../api/maps/tooltipSettingsModel/#visible) property of [`tooltipSettings`](../api/maps/tooltipSettingsModel/) as **true**. The [`valuePath`](../api/maps/tooltipSettingsModel/#valuepath) property in the tooltip takes the field name that presents in data source and displays that value as tooltip text. The [`tooltipDisplayMode`](../api/maps/mapsModel/#tooltipdisplaymode) property is used to change the display mode of the tooltip in Maps. Following display modes of tooltip are available in the Maps component. By default, [`tooltipDisplayMode`](../api/maps/mapsModel/#tooltipdisplaymode) is set to **MouseMove**.

* MouseMove
* Click
* DoubleClick

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "tooltips" %}

```typescript
import { world_map } from './world-map.ts';
import { Maps, MapsTooltip } from '@syncfusion/ej2-maps';
Maps.Inject(MapsTooltip);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        tooltipSettings: {
            visible: true,
            valuePath: 'name'
        }
    }]
});
map.appendTo('#element');
```

{% endtab %}

### Customization

The following properties are available in the [`tooltipSettings`](../api/maps/tooltipSettingsModel/) to customize the tooltip of the Maps component.

* [`border`](../api/maps/tooltipSettingsModel/#border) - To customize the color, width and opacity of the border of the tooltip in layers, markers, and bubbles of Maps.
* [`fill`](../api/maps/tooltipSettingsModel/#fill) - Applies the color of the tooltip in layers, markers, and bubbles of Maps.
* [`format`](../api/maps/tooltipSettingsModel/#format) - To customize the format of the tooltip in layers, markers, and bubbles of Maps
* [`textStyle`](../api/maps/tooltipSettingsModel/#textstyle) - To customize the style of the text in the tooltip for layers, markers, and bubbles of Maps.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "tooltip-customization" %}

```typescript
import { world_map } from './world-map.ts';
import { Maps, MapsTooltip, ITooltipRenderEventArgs } from '@syncfusion/ej2-maps';
Maps.Inject(MapsTooltip);
let map: Maps = new Maps({
    tooltipRender: (args: ITooltipRenderEventArgs) => {
        if (!args.options['data']) {
            args.cancel = true;
        }
        },
    layers: [{
        shapeData: world_map,
        shapePropertyPath: 'name',
        shapeDataPath: 'name',
        shapeSettings: {
            fill: '#E5E5E5',
            colorMapping: [
                { color: '#b3daff', value: '1' },
                { color: '#80c1ff', value: '2' },
                { color: '#1a90ff', value: '3' },
                { color: '#005cb3', value: '7' }
            ],
            colorValuePath: 'value1'
        },
        dataSource: [
            { "name": "India", "value1": "3", "value2": "2", "country": "India" },
            { "name": "Dominican Rep.", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Cuba", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Jamaica", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Haiti", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Guyana", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Suriname", "value1": "3", "value2": "2", "country": "West Indies"},
            { "name": "Trinidad and Tobago", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Sri Lanka", "value1": "3", "value2": "1", "country": "Sri Lanka" },
            { "name": "United Kingdom", "value1": "3", "value2": "0", "country": "England" },
            { "name": "Pakistan", "value1": "2", "value2": "1", "country": "Pakistan" },
            { "name": "New Zealand", "value1": "1", "value2": "0", "country": "New Zealand" },
            { "name": "Australia", "value1": "7", "value2": "5", "country": "Australia" }
        ],
        tooltipSettings: {
            visible: true,
            valuePath: 'name',
            format: '${name}: ${value1}',
            fill: '#D0D0D0',
            textStyle: {
                color: 'green',
                fontFamily: 'Times New Roman',
                fontStyle: 'Sans-serif'
            }
        }
    }]
});
map.appendTo('#element');
```

{% endtab %}

### Tooltip template

The HTML element can be rendered in the tooltip of the Maps using the [`template`](../api/maps/tooltipSettingsModel/#template) property of the [`tooltipSettings`](../api/maps/tooltipSettingsModel/). In the following example, ${value1} and ${value2} are the place holders in the HTML element to display the value1 and value2 values of the corresponding shape.

{% tab template= "maps/tooltip-template",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "tooltipTemplate" %}

```typescript
import { Maps, MapsTooltip, Legend, ITooltipRenderEventArgs, ILoadEventArgs, MapsTheme, MapAjax } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
import { tooltipData } from './tooltip-datasource.ts';
Maps.Inject(MapsTooltip, Legend);
let maps: Maps = new Maps({
    tooltipRender: (args: ITooltipRenderEventArgs) => {
        if (!args.options['data']) {
            args.cancel = true;
        }
    },
    legendSettings: {
        visible: true,
        mode: 'Interactive',
        position: 'Left',
        orientation: 'Vertical',
        height: '70%',
        width: '10'
    },
    layers: [{
        shapeData: world_map,
        shapePropertyPath: 'name',
        shapeDataPath: 'name',
        dataSource: tooltipData,
        tooltipSettings: {
            visible: true,
            valuePath: 'name',
            template: '#template'
        },
        shapeSettings: {
            fill: '#E5E5E5',
            colorMapping: [
                { color: '#b3daff', value: '1' },
                { color: '#80c1ff', value: '2' },
                { color: '#1a90ff', value: '3' },
                { color: '#005cb3', value: '7' }
            ],
            colorValuePath: 'value1'
        }
    }]
});
maps.appendTo('#container');
```

{% endtab %}

## See Also

* [Center position zooming](../maps/how-to/zooming)
* [Tooltip for marker](../maps/how-to/marker-type)
* [Navigating to particular country](../maps/how-to/navigation-line)