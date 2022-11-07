---
title: " Localization in EJ2 Maps control | Syncfusion "

component: "Maps"

description: "Learn here all about Localization of Syncfusion EJ2 Maps control and more."
---

# Localization in EJ2 Maps

The localization library allows localizing the default text content of the Maps control. The Maps control has the static text of some features such as tooltip of zoom toolbar, and that can be changed to any other culture(Arabic, Deutsch, French, etc) by defining the locale value and translation object.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Locale key words</b></td>
<td><b>Text to display</b></td>
</tr>
<tr>
<td>Zoom</td>
<td>Zoom</td>
</tr>
<tr>
<td>ZoomIn</td>
<td>Zoom In</td>
</tr>
<tr>
<td>ZoomOut</td>
<td>Zoom Out</td>
</tr>
<tr>
<td>Reset</td>
<td>Reset</td>
</tr>
<tr>
<td>Pan</td>
<td>Pan</td>
</tr>
</table>

To load translation object in the application, use `load` function of **L10n** class. For more information about localization, refer [here](http://ej2.syncfusion.com/documentation/base/localization.html).

{% tab template="maps/default-map", sourceFiles="index.ts,index.html", es5Template="localization" %}

```typescript

import { Maps, Zoom } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
import { L10n } from '@syncfusion/ej2-base';
Maps.Inject(Zoom);

L10n.load({
    'ar-AR': {
        'maps': {
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Zoom: 'زوم',
            Pan: 'مقلاة',
            Reset: 'إعادة تعيين'
        },
    }
});

let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        toolbars: ['ZoomIn', 'ZoomOut', 'Zoom', 'Pan', 'Reset' ]
    },
    locale: 'ar-AR',
    layers: [
        {
            shapeData: world_map
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}