---
title: "Data Labels in EJ2 Maps control | Syncfusion"

component: "Maps"

description: "Learn here all about Data Labels of Syncfusion EJ2 Maps control and more."
---

# Data labels in EJ2 Maps

Data labels provide information to users about the shapes of the Maps control. It can be enabled by setting the [`visible`](../api/maps/dataLabelSettingsModel/#visible) property of the [`dataLabelSettings`](../api/maps/dataLabelSettingsModel/) to **true**.

```typescript
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({ });
```

## Adding data labels

To display data labels in the Maps, the [`labelPath`](../api/maps/dataLabelSettingsModel/#labelpath) property of [`dataLabelSettings`](../api/maps/dataLabelSettingsModel/) must be used. The value of the [`labelPath`](../api/maps/dataLabelSettingsModel/#labelpath) property can be taken from the field name in the shape data or data source. In the following example, the value of the [`labelPath`](../api/maps/dataLabelSettingsModel/#labelpath) property is the field name in the shape data of the Maps layer.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "label" %}

```typescript

import { usa_map } from './usa.ts';
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: usa_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'name'
            }
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

In the following example, the value of [`labelPath`](../api/maps/dataLabelSettingsModel/#labelpath) property is set from the field name in the data source of the layer settings.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "label-datasource" %}

```typescript

import { world_map } from './world-map.ts';
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapePropertyPath: 'name',
        shapeDataPath: 'name',
        dataLabelSettings: {
            visible: true,
            labelPath: "continent",
            smartLabelMode: 'Trim'
        },
        dataSource: [
            { "name": "Afghanistan", "value": 53, "countryCode": "AF", "population": "29863010", "color": "red", "density": "119", "continent": "Asia" },
            { "name": "Albania", "value": 117, "countryCode": "AL", "population": "3195000", "color": "Blue", "density": "111", "continent": "Europe" },
            { "name": "Algeria", "value": 15, "countryCode": "DZ", "population": "34895000", "color": "Green", "density": "15", "continent": "Africa" }
        ],
        shapeSettings: {
                autofill: true
        }
    }]
});
map.appendTo('#element');

```

{% endtab %}

## Customization

The following properties are available in the [`dataLabelSettings`](../api/maps/dataLabelSettingsModel/) to customize the data label of the Maps control.

* [`border`](../api/maps/dataLabelSettingsModel/#border) - To customize the color, width and opacity for the border of the data labels in Maps.
* [`fill`](../api/maps/dataLabelSettingsModel/#fill) - To apply the color of the data labels in Maps.
* [`opacity`](../api/maps/dataLabelSettingsModel/#opacity) - To customize the transparency of the data labels in Maps.
* [`textStyle`](../api/maps/dataLabelSettingsModel/#textstyle) - To customize the text style of the data labels in Maps.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "labelCustomization" %}

```typescript

import { usa_map } from './usa.ts';
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: usa_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                border: {
                    color: 'green',
                    width: 2
                },
                fill: 'red',
                opacity: 0.9,
                textStyle: {
                    color: 'blue',
                    size: '10px',
                    fontStyle: 'Sans-serif',
                    fontWeight: 'normal'
                }
            }
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Smart labels

The Maps control provides an option to handle the labels when they intersect with the corresponding shape borders using the [`smartLabelMode`](../api/maps/dataLabelSettingsModel/#smartlabelmode) property. The following options are available in the [`smartLabelMode`](../api/maps/dataLabelSettingsModel/#smartlabelmode) property.

* None
* Hide
* Trim

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "labelSmartMode" %}

```typescript

import { usa_map } from './usa.ts';
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: usa_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                smartLabelMode: 'Hide'
            }
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Intersect action

The Maps component provides an option to handle the labels when a label intersects with another label using the [`intersectionAction`](../api/maps/dataLabelSettingsModel/#intersectionaction) property. The following options are available in the [`intersectionAction`](../api/maps/dataLabelSettingsModel/#intersectionaction) property.

* None
* Hide
* Trim

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "labelIntersect" %}

```typescript

import { usa_map } from './usa.ts';
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: usa_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                intersectionAction: 'Trim'
            }
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}

## Adding data label as a template

The data label can be added as a template in the Maps component. The [`template`](../api/maps/dataLabelSettingsModel/#template) property of [`dataLabelSettings`](../api/maps/dataLabelSettingsModel) is used to set the data label as a template. Any text or HTML element can be added as the template in data labels.

>The customization properties of data label, [`smartLabelMode`](../api/maps/dataLabelSettingsModel/#smartlabelmode) and [`intersectionAction`](../api/maps/dataLabelSettingsModel/#intersectionaction) properties are not applicable to [`template`](../api/maps/dataLabelSettingsModel/#template) property. The styles can be applied to the label template using the CSS styles of the template element.

{% tab template= "maps/default-map",sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "labelTemplate" %}

```typescript

import { usa_map } from './usa.ts';
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: usa_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                template: 'Label'
            }
        }
    ]
});
map.appendTo('#element');

```

{% endtab %}