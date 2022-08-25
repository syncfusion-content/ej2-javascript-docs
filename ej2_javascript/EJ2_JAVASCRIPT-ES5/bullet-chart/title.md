---
title: " Bullet Chart Title and SubTitle | TypeScript "

component: "Bullet Chart"

description: "The title and sub-title is very useful to understand the bullet chart in efficient way. It describes what kind of data which represtend by the bullet-chart. "
---
<!-- markdownlint-disable MD036 -->

# Title and Subtitle

## Title

The title of the Bullet Chart displays the information about the data plotted by specifying it in the `title` property.

{% tab template= "bullet-chart/title", es5Template="es5Title" %}

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

## Subtitle

To show additional information about the data plotted, the Bullet Chart can also be given a subtitle using the `subtitle` property.

{% tab template= "bullet-chart/title", es5Template="es5SubTitle" %}

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
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

## Title and SubTitle Position

The title and the subtitle positions can be customized using the `titlePosition` property. Possible positions are **Left**, **Right**, **Top**, and **Bottom**.

### Position as Left

By setting the `titlePosition` to **Left**, you can display the title and subtitle at the left side of the Bullet Chart.

{% tab template= "bullet-chart/title", es5Template="es5TitleLeft" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        subtitle: '(in dollars $)',
        dataSource: [
        { value: 55, target: 45, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        titlePosition: 'Left',
        labelFormat: '${value}',
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

### Position as Right

By setting the `titlePosition` to **Right**, you can display the title and subtitle at the right side of the Bullet Chart.

{% tab template= "bullet-chart/title", es5Template="es5TitleRight" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        subtitle: '(in dollars $)',
        dataSource: [
        { value: 55, target: 45, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        titlePosition: 'Right',
        labelFormat: '${value}',
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

### Position as Top

By setting the `titlePosition` to **Top**, you can display the title and subtitle at the top of the Bullet Chart. The default title and subtitle positions of the Bullet Chart is **Top**.

{% tab template= "bullet-chart/title", es5Template="es5TitleTop" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        subtitle: '(in dollars $)',
        dataSource: [
        { value: 55, target: 45, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        titlePosition: 'Top',
        labelFormat: '${value}',
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

### Position as Bottom

By setting the `titlePosition` to **Bottom**, you can display the title and subtitle at the bottom of the Bullet Chart.

{% tab template= "bullet-chart/title", es5Template="es5TitleBottom" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        subtitle: '(in dollars $)',
        dataSource: [
        { value: 55, target: 45, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        titlePosition: 'Bottom',
        labelFormat: '${value}',
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

## Title Customization

The title color, opacity, font size, font family, font weight, and font style can be customized using the `titleStyle` property.

{% tab template= "bullet-chart/title", es5Template="es5TitleStyle" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 45, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        labelFormat: '${value}',
        titleStyle: { size: '22px', color: 'red', fontFamily: 'cursive', fontWeight: 'Bold'},
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}

## SubTitle Customization

The sub-title color, opacity, font size, font family, font weight, and font style can be customized using the `subtitleStyle` property.

{% tab template= "bullet-chart/title", es5Template="es5subtitleStyle" %}

```typescript

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 45, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        labelFormat: '${value}',
        subtitleStyle: { size: '22px', color: 'red', fontFamily: 'cursive', fontWeight: 'Bold'},
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

```

{% endtab %}