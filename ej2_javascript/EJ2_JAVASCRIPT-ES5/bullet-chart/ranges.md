---
title: " Bullet Chart Ranges | TypeScript "

component: "Bullet Chart"

description: "Bullet Chart scale can be rendered by using different types of end values. They are used to represnt the status of each data. "
---
<!-- markdownlint-disable MD036 -->

# Ranges

Ranges represent the quality of a specific range such as **Good**, **Bad** and **Satisfactory** in the Bullet Chart scale. The ending point of a qualitative range is specified in the `end` property in `ranges`. The `minimum` value of a quantitative scale is considered the starting point of the first range or the previous range end point.

{% tab template= "bullet-chart/ranges", es5Template="es5Ranges" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
      title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 75, category: 'Year 1'  },
        { value: 70, target: 70, category: 'Year 2'  },
        { value: 85, target: 75, category: 'Year 3'  }
        ],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        categoryField: 'category',
        categoryLabelStyle: { color: 'red', size: '13', fontWeight: 'bold'},
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20,
        height: '400'
}, '#element');

```

{% endtab %}

## Color Customization

Enhance the readability of ranges with color and opacity. It can be applied using the `color` and `opacity` properties in `ranges`.

{% tab template= "bullet-chart/ranges", es5Template="es5RangeCustom" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
     title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 75, category: 'Year 1'  },
        { value: 70, target: 70, category: 'Year 2'  },
        { value: 85, target: 75, category: 'Year 3'  }
        ],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        categoryField: 'category',
        categoryLabelStyle: { color: 'red', size: '13', fontWeight: 'bold'},
        ranges: [ { end: 35, color: 'darkred', opacity: 0.5 },
        { end: 50, color: 'red', opacity: 1 },
        { end: 75, color: 'blue', opacity: 0.7 },
        { end: 90, color: 'lightgreen', opacity: 1 },
        { end: 100, color: 'green', opacity: 1 }
        ],
        minimum: 0, maximum: 100, interval: 10,
        height: '400'
}, '#element');

```

{% endtab %}