---
title: " Annotations in EJ2 Maps control | Syncfusion "

component: "Maps"

description: "Learn here all about Annotations feature of Syncfusion EJ2 Maps control and more."
---

# Annotations

<!-- markdownlint-disable MD013 -->

Annotations are used to mark the specific area of interest in the Maps with texts, shapes, or images. Any number of annotations can be added to the Maps control.

## Annotation

By using the [`content`](../api/maps/annotationModel/#content) property of [`annotations`](../api/maps/annotationModel), text content or id of an element or an HTML string can be specified to render a new HTML element in Maps.

<!-- markdownlint-disable MD036 -->

 ```html
<script id='annotation' type="text/x-template">
    <div id='template'>
        <img src='src/maps/images/flight.png'>
    </div>
</script>

```

```typescript

import { Maps, Annotations } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Annotations);

let maps: Maps = new Maps({
    annotations: [
        {
            content: '#annotation',
            x: '0%', y: '50%'
        }
    ],
    layers: [
        {
            shapeData: world_map,
        }
    ]
});
maps.appendTo('#element');

```

## Annotation customization

### Changing the z-index

The stack order of an annotation element can be changed using the [`zIndex`](../api/maps/annotationModel/#zindex) property in the [`annotations`](../api/maps/annotationModel) property.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "annotationZOrder" %}

```typescript

import { Maps, Annotations } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Annotations);
let map: Maps = new Maps({
    annotations: [{
        content: '<div id="first"><h1>Maps</h1></div>',
        x: '0%', y: '50%',
        zIndex: '-1'
    }],
    layers: [{
        shapeData: world_map
    }]
});
map.appendTo('#element');

```

{% endtab %}

<!-- markdownlint-disable MD036 -->

### Positioning an annotation

Annotations can be placed anywhere in the Maps by specifying pixel or percentage values to the [`x`](../api/maps/annotationModel/#x) and [`y`](../api/maps/annotationModel/#y) properties in the [`annotations`](../api/maps/annotationModel) property.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "annotationPosition" %}

```typescript

import { Maps, Annotations } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Annotations);
let map: Maps = new Maps({
    annotations: [{
        content: '<div id="first"><h1>Maps</h1></div>',
        x: '20%', y: '50%',
        zIndex: '-1'
    }],
    layers: [{
        shapeData: world_map
    }]
});
map.appendTo('#element');

```

{% endtab %}

<!-- markdownlint-disable MD036 -->

### Alignment of an annotation

Annotations can be aligned using the [`horizontalAlignment`](../api/maps/annotationModel/#horizontalalignment) and [`verticalAlignment`](../api/maps/annotationModel/#verticalalignment) properties in the [`annotations`](../api/maps/annotationModel) property. The possible values can be "**Center**", "**Far**", "**Near**" and "**None**".

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "annotationAlignment" %}

```typescript

import { Maps, Annotations } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Annotations);
let map: Maps = new Maps({
    annotations: [{
        content: '<div id="first"><h1>Maps</h1></div>',
        verticalAlignment: 'Center',
        horizontalAlignment: 'Center',
        x: '20%', y: '50%',
        zIndex: '-1'
    }],
    layers: [{
        shapeData: world_map
    }]
});
map.appendTo('#element');

```

{% endtab %}

## Multiple Annotation

Multiple annotations can be added to the Maps using the [`annotations`](../api/maps/annotationModel) property in which the properties of annotation are added as an array. The customization for the annotations can be done with the [`annotation`](../api/maps/annotationModel) property.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html,index.css" , isDefaultActive=true , es5Template = "annotation-multiple" %}

```typescript

import { Maps, Annotations } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Annotations);
let map: Maps = new Maps({
    annotations: [{
        content: '<div id="first"><h1>Maps-Annotation</h1></div>',
        x: '50%', y: '0%',
        zIndex: '-1'
    },
    {
        content: '<div id="first"><h1>Maps</h1></div>',
        x: '20%', y: '50%',
        zIndex: '-1'
    }],
   layers: [{
        shapeData: world_map
    }]
});
map.appendTo('#element');

```

{% endtab %}