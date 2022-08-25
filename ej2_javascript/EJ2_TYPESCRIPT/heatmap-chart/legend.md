---
title: "Legend"
component: "HeatMap Chart"
description: "The legend section describes the legend types available in heatmap and other display options like legend placement, alignment and defining dimensions for legend in heatmap"
---

# Legend

The legend is used to provide the information about the heat map cell. You can enable the legend by setting the [`visible`](../api/heatmap/legendSettings/#visible) property to true and injecting the `Legend` module using the `HeatMap.Inject(Legend)`.

{% tab template= "heatmap/legend", es5Template="es5Legend" %}

```typescript

import { HeatMap, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend);

let heatmapData: any [] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]
];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        cellSettings: {
            showLabel: false,
        },
        paletteSettings: {
        palette: [
           { value: 0, color: '#C2E7EC' },
            { value: 10, color: '#AEDFE6' },
            { value: 20, color: '#9AD7E0' },
            { value: 30, color: '#72C7D4' },
            { value: 40, color: '#5EBFCE' },
            { value: 50, color: '#4AB7C8' },
            { value: 60, color: '#309DAE' },
            { value: 70, color: '#2B8C9B' },
            { value: 80, color: '#206974' },
            { value: 90, color: '#15464D' },
            { value: 100, color: '#000000' },
        ],
        },
        dataSource: heatmapData,
        legendSettings: {
            position: 'Right',
        }
});
heatmap.appendTo('#element');

```

{% endtab %}

## Legend types

Heat map supports two legend types: Gradient and list type.

* Gradient: This is a continuous color legend with smooth color transition between palette color values.
* List: List is a fixed color legend. Each palette color information is shown separately in the list item.

You can change the legend type by using the [`type`](../api/heatmap/paletteSettings/#type) property in the `paletteSettings` property.

{% tab template= "heatmap/legend", es5Template="es5LegendType" %}

```typescript

import { HeatMap, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend);

let heatmapData: any [] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        cellSettings: {
            showLabel: false,
        },
        paletteSettings: {
            type: 'Fixed'
        },
        dataSource: heatmapData,
        legendSettings: {
            position: 'Right',
        }
});
heatmap.appendTo('#element');

```

{% endtab %}

## Placement

You can place the legend at left, right, top, or bottom to the heat map layout by using the [`position`](../api/heatmap/legendSettings/#position) property. The legend is positioned at the right to the heat map by default.

{% tab template= "heatmap/legend", es5Template="es5LegendPlacement" %}

```typescript

import { HeatMap, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend);

let heatmapData: any [] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        dataSource: heatmapData,
        legendSettings: {
            position: 'Top',
        }
});
heatmap.appendTo('#element');

```

{% endtab %}

## Alignment

You can align the legend as center, far, or near to the heat map using the [`alignment`](../api/heatmap/legendSettings/#alignment) property.

{% tab template= "heatmap/legend", es5Template="es5LegendAlignment" %}

```typescript


import { HeatMap, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend);

let heatmapData: any [] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        dataSource: heatmapData,
        legendSettings: {
            position: 'Right',
            alignment: 'Near',
            height: '150px'
        }
});
heatmap.appendTo('#element');

```

{% endtab %}

## Legend dimensions

You can change the legend dimensions with values in pixels or percentage by using the [`width`](../api/heatmap/legendSettings/#width) and [`height`](../api/heatmap/legendSettings/#height) properties.

{% tab template= "heatmap/legend", es5Template="es5LegendSize" %}

```typescript

import { HeatMap, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend);

let heatmapData: any [] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        dataSource: heatmapData,
        legendSettings: {
            position: 'Right',
            height: '150px',
        }
});
heatmap.appendTo('#element');

```

{% endtab %}

## Paging for legend

Paging is available only for the list type legend in the heat map, and it can be enabled by default, when the legend items exceed the legend bounds. You can view each legend items by navigating between the pages using navigation buttons.

{% tab template= "heatmap/legend", es5Template="es5LegendPaging" %}

```typescript

import { HeatMap, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend);

let heatmapData: any [] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]
];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        paletteSettings: {
        palette: [
           { value: 0, color: '#C2E7EC' },
            { value: 10, color: '#AEDFE6' },
            { value: 20, color: '#9AD7E0' },
            { value: 25, color: '#86CFDA' },
            { value: 30, color: '#72C7D4' },
            { value: 40, color: '#5EBFCE' },
            { value: 50, color: '#4AB7C8' },
            { value: 55, color: '#36AFC2' },
            { value: 60, color: '#309DAE' },
            { value: 70, color: '#2B8C9B' },
            { value: 75, color: '#257A87' },
            { value: 80, color: '#206974' },
            { value: 85, color: '#1B5761' },
            { value: 90, color: '#15464D' },
            { value: 100, color: '#000000' },
        ],
            type: 'Fixed'
        },
        dataSource: heatmapData,
        legendSettings: {
            position: 'Right',
            height: "150px"
        }
});
heatmap.appendTo('#element');

```

{% endtab %}

>Note: To use legend feature, we need to inject `Legend` using `HeatMap.Inject(Legend)`.

## Smart Legend

Smart legend is another way of showing list type legend with responsiveness and readability, when the palette has more number of items. You can enable this smart legend by using the [`enableSmartLegend`](../api/heatmap/legendSettings/#enablesmartlegend) property when the palette type is set to `Fixed`.

In smart legend, you can change the display type of legend labels by using the [`labelDisplayType`](../api/heatmap/legendSettings/#labeldisplaytype) property.

The following are the legend label display types:
* All: Displays all labels in the legend.
* Edge: Displays the legend labels only at extreme ends.
* None: None of the labels are displayed. The tooltip will appear for this type of label display when hovering over the legend item.

{% tab template= "heatmap/legend", es5Template="es5SmartLegend" %}

```typescript

import { HeatMap, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend);

let heatmapData: any [] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        cellSettings: {
            showLabel: false,
        },
        paletteSettings: {
            palette: [
            { value: 0, color: '#C2E7EC' },
            { value: 10, color: '#AEDFE6' },
            { value: 20, color: '#9AD7E0' },
            { value: 30, color: '#72C7D4' },
            { value: 40, color: '#5EBFCE' },
            { value: 50, color: '#4AB7C8' },
            { value: 60, color: '#309DAE' },
            { value: 70, color: '#2B8C9B' },
            { value: 80, color: '#206974' },
            { value: 90, color: '#15464D' },
            { value: 100, color: '#000000' },
        ],
            type: 'Fixed'
        },
        dataSource: heatmapData,
        legendSettings: {
            position: 'Bottom',
            width: '75%',
            enableSmartLegend: true
        }
});
heatmap.appendTo('#element');

```

{% endtab %}

## Legend Selection

In the HeatMap, the legend selection is used to toggle the visibility of cell for view the specific range value. You can enable the legend selection using [`toggleVisibility`](../api/heatmap/legendSettings/#togglevisibility).

{% tab template= "heatmap/legend", es5Template="es5LegendSelection" %}

```typescript

import { HeatMap, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend);

let heatmapData: any [] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        cellSettings: {
            showLabel: false,
        },
        paletteSettings: {
            palette: [
            { value: 0, color: '#C2E7EC' },
            { value: 10, color: '#AEDFE6' },
            { value: 20, color: '#9AD7E0' },
            { value: 30, color: '#72C7D4' },
            { value: 40, color: '#5EBFCE' },
            { value: 50, color: '#4AB7C8' },
            { value: 60, color: '#309DAE' },
            { value: 70, color: '#2B8C9B' },
            { value: 80, color: '#206974' },
            { value: 90, color: '#15464D' },
            { value: 100, color: '#000000' },
        ],
            type: 'Fixed'
        },
        dataSource: heatmapData,
        legendSettings: {
            position: 'Bottom',
            width: '75%',
            enableSmartLegend: true,
            toggleVisibility: true
        }
});
  heatmap.appendTo('#element');

```

{% endtab %}

## Legend Title

The legend title displays a specific information about the legend. You can enable the legend title by setting the [`title`](../api/heatmap/legendSettings/#title) property by providing the text and customizing the legend title text style using the [`textStyle`](../api/heatmap/legendSettings/titleModel/#textStyle) property.

{% tab template= "heatmap/legend", es5Template="es5LegendTitle" %}

```typescript

import { HeatMap, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend);

let heatmapData: any [] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]
];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
        text: 'Sales Revenue per Employee'
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        cellSettings: {
            showLabel: false,
        },
        paletteSettings: {
        palette: [
            { value: 0, color: '#6EB5D0' },
            { value: 50, color: '#7EDCA2' },
            { value: 100, color: '#DCD57E' },
        ],
        },
        dataSource: heatmapData,
        legendSettings: {
            position: 'Right',
            title: {
                text: "1000 US$"
            }
        }
});
heatmap.appendTo('#element');

```

{% endtab %}