---
title: "BulletChart Tooltip | TypeScript "

component: "BulletChart"

description: "Tooltip is used to show the data value when mouse hover on the chart.We can able to customize format,template and appearance."
---

# Tooltip

When the mouse is hovered over a bar in the Bullet Chart, the tooltip displays important summary about the actual and the target bar values.

## Default Tooltip

By setting [`enable`](https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel/#enable)the property to 'True' and by injecting `BulletTooltip` module
using `BulletChart.Inject(BulletTooltip)`.The 'Tooltip' is visible in the 'Bullet chart' by default.
The tooltip is not visible by default. To make it visible, set the `enable` property in the `tooltip` to **true** and injecting `BulletTooltip` module using `BulletChart.Inject(BulletTooltip)`.

{% tab template= "bullet-chart/user-interaction", es5Template="es5Tooltip" %}

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
        minimum: 0, maximum: 100, interval: 20,
        tooltip: { enable: true }
}, '#element');

```

{% endtab %}

## Tooltip Template

Any HTML elements can be displayed in the tooltip by using the `template` property of the `tooltip`. You can use the **${target}** and **${value}** as place holders in the HTML element to display the value and target values from the data source of corresponding data point.

{% tab template= "bullet-chart/user-interaction", es5Template="es5TooltipTemplate" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        height: '110px',
        tooltip: { enable: true, template : '#Tooltip' },
        dataSource: [{ value: 70, target: 50 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        ranges: [{ end: 30, color: '#599C20' },
        { end: 60, color: '#EFC820' },
        { end: 100, color: '#CA4218' }
        ],
        minimum: 0, maximum: 100, interval: 10,
        title: 'Revenue YTD',
        labelFormat: '${value}K'
}, '#element');

```

{% endtab %}

## Customization of the appearance of 'Tooltip'

The [`fill`](https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel/#fill) and [`border`](https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel/#textstyle) property in the tooltip is used to customize the font of the tooltip text.

The following properties can be used to customize the Bullet Chart tooltip.

* `fill` - Specifies the color of tooltip.
* `border` - Specifies the tooltip border color and width.
* `textStyle` - Specifies the tooltip font family, font style, font weight, color and size.

{% tab template= "chart/user-interaction", es5Template="es5Appearance" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        height: '110px',
        tooltip: { enable: true, fill: 'red', border:{ color: 'green', width: 10 } },
        dataSource: [{ value: 70, target: 50 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        ranges: [{ end: 30, color: '#599C20' },
        { end: 60, color: '#EFC820' },
        { end: 100, color: '#CA4218' }
        ],
        minimum: 0, maximum: 100, interval: 10,
        title: 'Revenue YTD',
        labelFormat: '${value}K'
}, '#element');

```

{% endtab %}