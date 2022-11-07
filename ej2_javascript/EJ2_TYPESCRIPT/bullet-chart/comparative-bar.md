---
title: " Bullet Chart Target Bar | TypeScript "

component: "Bullet Chart"

description: "The line marker that runs perpendicular to the orientation of the graph is known as the `Comparative Measure`. "
---
<!-- markdownlint-disable MD036 -->

# Target Bar

The line marker that runs perpendicular to the orientation of the graph is known as the **Comparative Measure** and it is used as a target marker to compare against the feature measure value. This is also called as the **Target Bar** in the Bullet Chart. To display the target bar, the `targetField` should be mapped to the appropriate field from the datasource.

{% tab template= "bullet-chart/targetbar", es5Template="es5TargetBar" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 75, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

## Types of Target Bar

The shape of the target bar can be customized using the `targetTypes` property and it supports **Circle**, **Cross**, and **Rect** shapes. The default type of the target bar is **Rect**.

{% tab template= "bullet-chart/targetbar", es5Template="es5TargetTypes" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 75, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        targetTypes: ['Circle'],
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

## Target Bar Customization

The following properties can be used to customize the Target Bar.

* `targetColor` - Specifies the fill color of Target Bar.
* `targetWidth` - Specifies the width of Target Bar.

{% tab template= "bullet-chart/targetbar", es5Template="es5targetColor" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
     title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 75, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        targetColor: 'red',
        targetWidth: 15,
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}