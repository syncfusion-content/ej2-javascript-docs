# Layout

Determine the visual representation of nodes belonging to all the TreeMap levels using the `layoutType` property.

## Types of layout

The available layout types are,

* Squarified
* SliceAndDiceVertical
* SliceAndDiceHorizontal
* SliceAndDiceAuto

### Squarified

The `Squarified` layout displays the nested rectangles based on aspect ratio in the TreeMap. The rectangles will be split based on the height and width of the parent. The default rendering type of layout is `Squarified`.

{% tab template= "treemap/layout", sourceFiles="index.ts,index.html", es5Template="es5Squarified" %}

```typescript
import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
     dataSource: [
    {State:"United States", GDP:17946, percentage:11.08, Rank:1},
    {State:"China", GDP:10866, percentage: 28.42, Rank:2},
    {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},
    {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},
    {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},
    {State:"France", GDP:2421, percentage:-9.69, Rank:6},
    {State:"India", GDP:2073, percentage:13.65, Rank:7},
    {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},
    {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},
    {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}
],
        weightValuePath: 'GDP'
}, '#container');

```

{% endtab %}

### SliceAndDiceVertical

The `SliceAndDiceVertical` layout creates rectangles with high aspect ratio and displays items in a vertically sorted order.

{% tab template= "treemap/layout", sourceFiles="index.ts,index.html", es5Template="es5SliceVertical" %}

```typescript

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
     dataSource: [
    {State:"United States", GDP:17946, percentage:11.08, Rank:1},
    {State:"China", GDP:10866, percentage: 28.42, Rank:2},
    {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},
    {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},
    {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},
    {State:"France", GDP:2421, percentage:-9.69, Rank:6},
    {State:"India", GDP:2073, percentage:13.65, Rank:7},
    {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},
    {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},
    {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}
],
        layoutType : 'SliceAndDiceVertical',
        weightValuePath: 'GDP'
}, '#container');

```

{% endtab %}

### SliceAndDiceHorizontal

The `SliceAndDiceHorizontal` layout creates rectangles with high aspect ratio and displays items in a horizontally sorted order.

{% tab template= "treemap/layout", sourceFiles="index.ts,index.html", es5Template="es5SliceHorizontal" %}

```typescript

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
      dataSource: [
    {State:"United States", GDP:17946, percentage:11.08, Rank:1},
    {State:"China", GDP:10866, percentage: 28.42, Rank:2},
    {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},
    {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},
    {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},
    {State:"France", GDP:2421, percentage:-9.69, Rank:6},
    {State:"India", GDP:2073, percentage:13.65, Rank:7},
    {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},
    {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},
    {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}
],
        layoutType : 'SliceAndDiceHorizontal',
        weightValuePath: 'GDP'
}, '#container');

```

{% endtab %}

### SliceAndDiceAuto

The `SliceAndDiceAuto` layout creates rectangles with high aspect ratio and display items sorted both horizontally and vertically.

{% tab template= "treemap/layout", sourceFiles="index.ts,index.html", es5Template="es5SliceAuto" %}

```typescript

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
     dataSource: [
    {State:"United States", GDP:17946, percentage:11.08, Rank:1},
    {State:"China", GDP:10866, percentage: 28.42, Rank:2},
    {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},
    {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},
    {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},
    {State:"France", GDP:2421, percentage:-9.69, Rank:6},
    {State:"India", GDP:2073, percentage:13.65, Rank:7},
    {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},
    {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},
    {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}
],
        layoutType : 'SliceAndDiceAuto',
        weightValuePath: 'GDP'
}, '#container');

```

{% endtab %}