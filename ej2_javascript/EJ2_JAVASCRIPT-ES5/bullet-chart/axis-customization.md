---
title: " Bullet Chart Axis Customization | TypeScript "

component: "Bullet Chart"

description: "Bullet Chart axis contains different customization like majortick and minortick, axis label, axis range customizations"
---

# Axis Customization

## MajorTickLines and MinorTickLines Customization

You can customize the `width`, `color`, and `size` of minor and major tick lines using the
[`majorTickLines`](../api/bullet-chart/bulletChartModel/) and
[`minorTickLines`](../api/bullet-chart/bulletChartModel/) properties of the bullet-chart.

The following properties can be used to customize `majorTicklines` and `minorTicklines`.

* **width** - Specifies the width of ticklines.
* **height** - Specifies the height of ticklines.
* **color** - Specifies the color of ticklines.
* **useRangeColor** - Specifies the color of ticklines and represents the color from corresponding range colors.

{% tab template= "bullet-chart/bullet-chart-axis", es5Template="es5TickCustom" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let chart: BulletChart = new BulletChart({
        //color and width customization of the major and minor ticks
        majorTickLines: { color: 'blue', width: 5 },
        minorTickLines: {width: 4, color: 'red'},
        dataSource: [{ value: 23, target: 22 }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        ranges: [{ end: 20 },
            { end: 25 },
            { end: 30 }
        ],
        minimum: 0, maximum: 30, interval: 5
}, '#element');

```

{% endtab %}

## Tick Placement

You can place major and minor ticks `inside` or `outside` the ranges using the [`tickPosition`](../api/bullet-chart/bulletChartModel/) property of bullet-chart.
The major and the minor ticks can be placed **inside** or **outside** the ranges using the `tickPosition` property.

{% tab template= "bullet-chart/bullet-chart-axis", es5Template="es5TickPlacement" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let chart: BulletChart = new BulletChart({
        // To place the ticks inside of the bullet-chart
        tickPosition: 'Inside',
        dataSource: [{ value: 23, target: 22 }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        ranges: [{ end: 20 },
            { end: 25 },
            { end: 30 }
        ],
        minimum: 0, maximum: 30, interval: 5
}, '#element');

```

{% endtab %}

## Label Format

***Axis Label Format***

Axis numeric labels can be formatted by using the [`labelFormat`](../api/bullet-chart/bulletChartModel/#labelformat)property. Axis labels support all globalize formats. The following table describes the result of applying some commonly used label formats on numeric axis values.
Axis numeric labels can be formatted by using the `labelFormat` property. Axis labels support all globalize formats.

{% tab template= "bullet-chart/bullet-chart-axis", es5Template="es5LabelFormat" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let chart: BulletChart = new BulletChart({
        //Label format as currency
        labelFormat: 'c',
        title: 'Sales Rate',
        dataSource: [{ value: 1500, target: 1300 }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        ranges: [{ end: 500 },
            { end: 1500 },
            { end: 2500 }
        ],
        minimum: 0, maximum: 2500, interval: 250
}, '#element');

```

{% endtab %}

The following table describes the result of applying some commonly used formats to numeric axis labels.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format property value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>The Number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>The Number is rounded to 2 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>The Number is rounded to 3 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>The Number is converted to percentage with 1 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>The Number is converted to percentage with 2 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>The Number is converted to percentage with 3 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1000.0</td>
<td>The Currency symbol is appended to number and number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>The Currency symbol is appended to number and number is rounded to 2 decimal place</td>
</tr>
</table>

## GroupingSeparator

To separate groups of thousands, use the [`enableGroupSeparator`](../api/bullet-chart/bulletChartModel/#enablegroupseparator) property of bullet-chart.
To separate the groups of thousands, set the `enableGroupSeparator` property to **true**.

{% tab template= "bullet-chart/bullet-chart-axis", es5Template="es5GroupingSep" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let chart: BulletChart = new BulletChart({
        enableGroupSeparator: true,
        title: 'Sales Rate',
        dataSource: [{ value: 1500, target: 1300 }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        ranges: [{ end: 500 },
            { end: 1500 },
            { end: 2500 }
        ],
        minimum: 0, maximum: 2500, interval: 250
}, '#element');

```

{% endtab %}

## Custom Label Format

Using the `labelFormat` property, axis labels can be specified with a custom defined format in addition to the axis value. The label format uses a placeholder such as **${value}K**, which represents the axis label.

{% tab template= "bullet-chart/bullet-chart-axis", es5Template="es5CustomFormat" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let chart: BulletChart = new BulletChart({
        labelFormat: '${value}K',
        title: 'Sales Rate',
        dataSource: [{ value: 1500, target: 1300, category: 'Product A'  }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        ranges: [{ end: 500 },
            { end: 1500 },
            { end: 2500 }
        ],
        minimum: 0, maximum: 2500, interval: 250
}, '#element');

```

{% endtab %}

## Label Placement

You can customize the axis labels `inside` or `outside` the bullet-chart using the [`labelPosition`](../api/bullet-chart/bulletChartModel/#labelposition) property.
Label can be placed **Inside** or **Outside** of the ranges using the `labelPosition` property.

{% tab template= "bullet-chart/bullet-chart-axis", es5Template="es5labelPlacement" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let chart: BulletChart = new BulletChart({
        // To place the axis label inside of the bullet-chart
        labelPosition: 'Inside',
        dataSource: [{ value: 23, target: 22 }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        ranges: [{ end: 20 },
            { end: 25 },
            { end: 30 }
        ],
        minimum: 0, interval: 5
}, '#element');

```

{% endtab %}

## Opposed Position

To place an axis opposite to its original position,
set the [`opposedPosition`](../api/bullet-chart/bulletChartModel/#opposedposition) property to true.
To place an axis opposite to its original position, set the `opposedPosition`] property to **true**.

{% tab template= "bullet-chart/bullet-chart-axis", es5Template="es5Opposed" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let chart: BulletChart = new BulletChart({
        opposedPosition: true,
        dataSource: [{ value: 23, target: 22 }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        ranges: [{ end: 20 },
            { end: 25 },
            { end: 30 }
        ],
        minimum: 0, maximum: 30, interval: 5
}, '#element');

```

{% endtab %}

## Category Label

The Bullet Chart supports X-axis label by specifying the property from the data source to the `categoryField`. It helps to understand the input data in a more efficient way.

{% tab template= "bullet-chart/bullet-chart-axis", es5Template="es5Category" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        dataSource: [{ value: 1500, target: 1300, category: 'Product A'  }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        categoryField: 'category',
        ranges: [{ end: 500 },
            { end: 1500 },
            { end: 2500 }
        ],
        minimum: 0, maximum: 2500, interval: 250
}, '#element');

```

{% endtab %}

## Category Label Customization

The label color, opacity, font size, font family, font weight, and font style can be customized by using the `categoryLabelStyle` setting for category and the `labelStyle` setting for axis label. The `useRangeColor` property specifies the color of the axis label and represents the color from the corresponding range colors.

{% tab template= "bullet-chart/bullet-chart-axis", es5Template="es5CategoryStyle" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let chart: BulletChart = new BulletChart({
       title: 'Sales Rate',
        dataSource: [{ value: 1500, target: 1300, category: 'Product A'  }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        categoryField: 'category',
        categoryLabelStyle: { color: 'Orange'},
        ranges: [{ end: 500 },
            { end: 1500 },
            { end: 2500 }
        ],
        minimum: 0, maximum: 2500, interval: 250
}, '#element');

```

{% endtab %}