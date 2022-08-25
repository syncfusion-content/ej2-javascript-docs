---
title: " Bullet Chart Customization | TypeScript "

component: "Bullet Chart"

description: "Bullet Chart have different customizable features like different orientation, flow directions and animation features"
---
<!-- markdownlint-disable MD036 -->

# Customization

## Orientation

The Bullet Chart can be rendered in different orientations such as **Horizontal** or **Vertical** via the `orientation` property. By default, the Bullet Chart is rendered in the **Horizontal** orientation.

{% tab template= "bullet-chart/customize", es5Template="es5Orientation" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate in dollars',
        subtitle: '(in dollars $)',
        dataSource: [
        { value: 55, target: 45, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        labelFormat: '${value}',
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        width: '20%',
        orientation: 'Vertical',
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

## Right-to-left (RTL)

The Bullet Chart supports the right-to-left rendering that can be enabled by setting the `enableRtl` property to **true**.

{% tab template= "bullet-chart/customize", es5Template="es5Flow" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        dataSource: [
        { value: 1500, target: 1000, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        ranges: [{ end: 500 },
        { end: 1500 },
        { end: 2000 }
        ],
        enableRtl: true,
        minimum: 0, maximum: 2000, interval: 200
}, '#element');

```

{% endtab %}

## Animation

The actual and the target bar supports the linear animation via the `animation` setting. The speed and the delay are controlled using the `duration` and `delay` properties respectively.

{% tab template= "bullet-chart/customize", es5Template="es5animation" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        dataSource: [
        { value: 1500, target: 1000, category: 'Year 1'  },
        ],
        animation: { enable: true },
        targetField: 'target',
        valueField: 'value',
        ranges: [ { end: 500 },
        { end: 1500 },
        { end: 2000 }
        ],
        minimum: 0, maximum: 2000, interval: 200
}, '#element');

```

{% endtab %}

## Theme

The Bullet Chart supports different type of themes via the `theme` property.

{% tab template= "bullet-chart/customize", es5Template="es5theme" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Profit in %',
        dataSource: [
        { value: 50, target: 45, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        ranges: [ { end: 15 },
        { end: 50 },
        { end: 100 }
        ],
        theme: 'HighContrast',
        minimum: 0, maximum: 100, interval: 10
}, '#element');

```

{% endtab %}