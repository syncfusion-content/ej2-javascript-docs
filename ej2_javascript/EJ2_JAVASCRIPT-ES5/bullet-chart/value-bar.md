---
title: " Bullet Chart Value Bar | TypeScript "

component: "Bullet Chart"

description: "The main data value is encoded by a length of the main bar in the middle of the chart, known as the Feature Measure. "
---
<!-- markdownlint-disable MD036 -->

# Actual Bar

To display the primary data or the current value of the data being measured known as the **Feature Measure** that should be encoded as a bar. This is called as the **Actual Bar** or the **Feature Bar** in the Bullet Chart, and to display the actual bar the `valueField` should be mapped to the appropriate field from the data source.

{% tab template= "bullet-chart/featurebar", es5Template="es5ValueBar" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
      title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 75, category: 'Year 1'  },
        ],
        animation: { enable: false },
        valueField: 'value',
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

## Types of Actual Bar

The shape of the actual bar can be customized using the `type` property of the Bullet Chart. The actual bar contains `Rect` and `Dot` shapes. By default, the actual bar shape is Rect.

{% tab template= "bullet-chart/featurebar", es5Template="es5ValueType" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 75, category: 'Year 1'  },
        ],
        animation: { enable: false },
        valueField: 'value',
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        type: 'Dot',
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

## Actual Bar Customization

### Border Customization

Using the `valueBorder` property of the bullet chart, you can customize the border `color` and `width` of the actual bar.

{% tab template= "bullet-chart/featurebar", es5Template="es5ValueBorder" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
       title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 75, category: 'Year 1'  },
        ],
        animation: { enable: false },
        valueField: 'value',
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        valueBorder: { color: 'red', width: 3 },
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

### Fill color and height Customization

Customize the fill color and height of the actual bar using the `valueFill` and `valueHeight` properties of the bullet chart.

{% tab template= "bullet-chart/featurebar", es5Template="es5valueFill" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
       title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 75, category: 'Year 1'  },
        ],
        animation: { enable: false },
        valueField: 'value',
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        valueFill: 'blue',
        valueHeight: 15,
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}