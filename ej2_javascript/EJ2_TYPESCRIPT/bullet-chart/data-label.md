---
title: " Bullet Chart Data Labels | TypeScript "

component: "Bullet Chart"

description: "Bullet Chart can be rendered by using different types of data source. They are called local data, remote data. "
---
<!-- markdownlint-disable MD036 -->

# Data Label

Data Labels are used to identify the value of actual bar in the Bullet Chart component. The Data Labels will be shown by specifying the `dataLabel` setting's `enable` property to **true**.

{% tab template= "bullet-chart/datalabel", es5Template="es5Label" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let localData: any[] = [
        {
            value: 5, comparativeMeasureValue: 7.5,
            category: '2001'
        },
        {
            value: 7, comparativeMeasureValue: 5,
            category: '2002'
        },
        {
            value: 10, comparativeMeasureValue: 6,
            category: '2003'
        },
        {
            value: 5, comparativeMeasureValue: 8,
            category: '2004'
        },
        {
            value: 12, comparativeMeasureValue: 5,
            category: '2005'
        },
        {
            value: 8, comparativeMeasureValue: 6,
            category: '2006'
        }
];

let chart: BulletChart = new BulletChart({
        dataSource: localData,
        animation: { enable: false },
        valueField: 'value',
        targetField: 'comparativeMeasureValue',
        title: 'Profit in percentage',
        height: '400',
        ranges: [{ end: 5 },
            { end: 15 },
            { end: 20 }
        ],
        labelFormat: '{value}%',
        dataLabel: { enable: true },
        minimum: 0, maximum: 20, interval: 5,
}, '#element');

```

{% endtab %}

## Data Label Customization

Data Labels color, opacity, font size, font family, font weight, and font style can be customized using the `labelStyle`.

{% tab template= "bullet-chart/datalabel", es5Template="es5LabelCustom" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let localData: any[] = [
        {
            value: 5, comparativeMeasureValue: 7.5,
            category: '2001'
        },
        {
            value: 7, comparativeMeasureValue: 5,
            category: '2002'
        },
        {
            value: 10, comparativeMeasureValue: 6,
            category: '2003'
        },
        {
            value: 5, comparativeMeasureValue: 8,
            category: '2004'
        },
        {
            value: 12, comparativeMeasureValue: 5,
            category: '2005'
        },
        {
            value: 8, comparativeMeasureValue: 6,
            category: '2006'
        }
];

let chart: BulletChart = new BulletChart({
        dataSource: localData,
        animation: { enable: false },
        valueField: 'value',
        targetField: 'comparativeMeasureValue',
        title: 'Profit in percentage',
        height: '400',
        ranges: [{ end: 5 },
            { end: 15 },
            { end: 20 }
        ],
        labelFormat: '{value}%',
        dataLabel: { enable: true, labelStyle:{ color: 'yellow', size: '20'} },
        minimum: 0, maximum: 20, interval: 5,
}, '#element');

```

{% endtab %}