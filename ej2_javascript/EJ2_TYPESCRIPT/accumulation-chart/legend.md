---
title: "Accumulation Chart Legend | TypeScript "

component: "Accumulation Chart"

description: "Accumulation Chart legend is used to give additional information about the chart series."
---

# Legend

As like a chart, the legend is also available for accumulation charts, which gives information about the points.
By default, the legend will be placed on the right, if the width of the chart is high or will be placed on the bottom,
if the height of the chart is high. Other customization features regarding the legend element are same as the
[`chart legend`](http://ej2.syncfusion.com/documentation/chart/legend).
Here, the legend for a point can be collapsed by giving the empty string to the x value of the point.

{% tab template="chart/chart-types", es5Template="es5AccLegend" %}

```typescript

import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: [{ x: 'Jan', y: 13, text: 'Jan: 13' }, { x: 'Feb', y: 13, text: 'Feb: 13' },
{ x: 'Mar', y: 17, text: 'Mar: 17' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }],
            xName: 'x',
            yName: 'y'
        }
    ],
    legendSettings: {
        visible: true,
    }
}, '#element');

```

{% endtab %}

>Note: To use the legends feature, inject the `AccumulationLegend` using the `Chart.Inject(AccumulationLegend)` method.

## Position and Alignment

By using the position property, you can position the legend at the `left`, `right`, `top` or `bottom` of the chart.
You can also align the legend to `center`, `far` or `near` of the chart using the alignment property.

{% tab template="chart/chart-types", es5Template="es5AccLegend" %}

```typescript

import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { labelData } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y'
        }
    ],
    legendSettings:{ position:'Top' ,alignment:'Near'}
}, '#element');

```

{% endtab %}

## Legend Reverse

You can reverse the order of the legend items by using the [`reverse`](https://ej2.syncfusion.com/documentation/api/accumulation-chart/legendSettingsModel/#reverse) property. By default, legend for the first series in the collection will be placed first.

{% tab template="chart/chart-types", es5Template="es5AccLegendReverse" %}

```typescript

import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { labelData } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y',
            legendShape: 'Rectangle'
        }
    ],
    legendSettings:{ visible: true, reverse: true}
}, '#element');

```

{% endtab %}

## Legend Shape

To change the legend icon shape, use the `legendShape` property in the `series`. By default, legend icon shape
is `seriesType`.

{% tab template="chart/chart-types", es5Template="es5AccLegend" %}

```typescript

import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { labelData } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y',
            legendShape: 'Rectangle'
        }
    ],
    legendSettings:{ visible: true}
}, '#element');

```

{% endtab %}

## Legend Size

The legend size can be changed by using the `width` and `height` properties of the `legendSettings`.

{% tab template="chart/chart-types", es5Template="es5AccLegend" %}

```typescript

import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { labelData } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y',
        }
    ],
    legendSettings:{ width: '150', height: '100', border: { width: 1, color: 'pink'}}
}, '#element');

```

{% endtab %}

## Legend Item Size

You can customize the size of the legend items by using the `shapeHeight` and `shapeWidth` properties.

{% tab template="chart/chart-types", es5Template="es5AccLegend" %}

```typescript

import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { labelData } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y',
        }
    ],
    legendSettings:{  shapeHeight: 15, shapeWidth: 15}
}, '#element');

```

{% endtab %}

## Paging for Legend

Paging will be enabled by default, when the legend items exceeds the legend bounds. You can view the each legend
item by navigating between the pages using the navigation buttons.

{% tab template="chart/chart-types", es5Template="es5AccLegend" %}

```typescript

import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { data } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: data,
            xName: 'x',
            yName: 'y',
        }
    ],
    legendSettings:{  height: '150', width:'80'}
}, '#element');

```

{% endtab %}

## Legend Text Wrap

When the legend text exceeds the container, the text can be wrapped by using `textWrap` Property. End user can also wrap the legend text based on the `maximumLabelWidth` property.

{% tab template="chart/chart-types", es5Template="es5AccLegendWrap" %}

```typescript

import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { labelData } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: [
                    { 'x': 'Net-tution', y: 21, text: '21%' },
                    { 'x': 'Private Gifts', y: 8, text: '8%' },
                    { 'x': 'All Other', y: 9, text: '9%' },
                    { 'x': 'Local Revenue', y: 4, text: '4%' },
                    { 'x': 'State Revenue', y: 21, text: '21%' },
                    { 'x': 'Federal Revenue', y: 16, text: '16%' },
                    { 'x': 'Self-supporting Operations', y: 21, text: '21%' },
                ],
                xName: 'x', yName: 'y', startAngle: 0, endAngle: 360,
                innerRadius: '40%',
                type: 'Pie',
            }
    ],
    legendSettings:{ visible: true, position: 'Right', textWrap:'Wrap',
                     maximumLabelWidth:60, height: '44%', width: '64%' }
}, '#element');

```

{% endtab %}

## Legend Title

You can set title for legend using `title` property in `legendSettings`. You can also customize the `fontStyle`, `size`, `fontWeight`,
`color`, `textAlignment`, `fontFamily`, `opacity` and `textOverflow` of legend title. `titlePosition` is used to set the legend position in `Top`, `Left` and `Right` position. `maximumTitleWidth` is used to set the width of the legend title. By default, it will be `100px`.

{% tab template="chart/chart-types", es5Template="es5AccLegendTitle" %}

```typescript

import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { labelData } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y',
            type: 'Pie'
        }
    ],
    legendSettings:{ visible: true, title: 'Months', position: 'Bottom' }
}, '#element');

```

{% endtab %}

## Arrow Page Navigation

By default, the page number will be enabled while legend paging. Now, you can disable that page number and also you can get left and right arrows for page navigation. You have to set `false` value to `enablePages` to get this support.

{% tab template="chart/chart-types", es5Template="es5AccLegendArrNav" %}

```typescript

import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { data } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: data,
            xName: 'x',
            yName: 'y',
        }
    ],
    legendSettings:{  width: '260px', height: '50px', enablePages: false, position: 'Bottom'}
}, '#element');

```

{% endtab %}
