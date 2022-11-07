# Tooltip

Tooltip is used to display details about the items in the TreeMap. When space constraints prevent us from displaying the information using Data Labels, the tooltip comes in handy.

## Default tooltip

The tooltip is not visible by default, to make it visible, set the `visible` property in the `tooltipSettings` to **true** and injecting the `TreeMapTooltip` module using the `TreeMap.Inject(TreeMapTooltip)`.

{% tab template= "treemap/tooltip", sourceFiles="index.ts,index.html", isDefaultActive=true, es5Template = "es5Tooltip" %}

```typescript
let fruits:Object[] = [{ fruit:'Apple', count:5000 },
                       { fruit:'Mango', count:3000 },
                       { fruit:'Orange', count:2300 },
                       { fruit:'Banana', count:500 },
                       { fruit:'Grape', count:4300 },
                       { fruit:'Papaya', count:1200 },
                       { fruit:'Melon', count:4500 }
                     ];

import { TreeMap, TreeMapTooltip } from '@syncfusion/ej2-treemap';
TreeMap.Inject(TreeMapTooltip);

let treemap: TreeMap = new TreeMap({
    dataSource: fruits ,
    weightValuePath: 'count',
     tooltipSettings: {
            visible: true
    },
    leafItemSettings: {
        labelPath: 'fruit'
     }
}, '#container');

```

{% endtab %}

## Format tooltip

The tooltip content is displayed by default based on the `weightValuePath`. In addition, to show more information in the tooltip, use the `format` property and define field from the data source as `${datafield}`.

{% tab template= "treemap/tooltip", sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "es5TooltipFormat" %}

```typescript
let fruits:Object[] = [{ fruit:'Apple', count:5000 },
                       { fruit:'Mango', count:3000 },
                       { fruit:'Orange', count:2300 },
                       { fruit:'Banana', count:500 },
                       { fruit:'Grape', count:4300 },
                       { fruit:'Papaya', count:1200 },
                       { fruit:'Melon', count:4500 }
                     ];

import { TreeMap, TreeMapTooltip } from '@syncfusion/ej2-treemap';
TreeMap.Inject(TreeMapTooltip);

let treemap: TreeMap = new TreeMap({
    dataSource: fruits ,
    weightValuePath: 'count',
     tooltipSettings: {
            visible: true,
            format:'Name:${fruit} - TotalCount:${count}'
    },
    leafItemSettings: {
        labelPath: 'fruit'
     }
}, '#container');

```

{% endtab %}

## Tooltip template

Tooltip can be rendered as a custom component using the `template` property in the `tooltipSettings` which accepts one or more UI elements as an input, that can be rendered as a part of the tooltip rendering. You can use `${datafield}` as placeholder in HTML element to display the values from data source.

{% tab template= "treemap/tooltip", sourceFiles="index.ts,index.html" , isDefaultActive=true , es5Template = "es5TooltipTemplate" %}

```typescript
let fruits:Object[] = [{ fruit:'Apple', count:5000 },
                       { fruit:'Mango', count:3000 },
                       { fruit:'Orange', count:2300 },
                       { fruit:'Banana', count:500 },
                       { fruit:'Grape', count:4300 },
                       { fruit:'Papaya', count:1200 },
                       { fruit:'Melon', count:4500 }
                     ];

import { TreeMap, TreeMapTooltip } from '@syncfusion/ej2-treemap';
TreeMap.Inject(TreeMapTooltip);

let treemap: TreeMap = new TreeMap({
    dataSource: fruits ,
    weightValuePath: 'count',
     tooltipSettings: {
            visible: true,
            template:'<div><p>Name: ${fruit}</p><p>Total Count: ${count}</p></div>'
    },
    leafItemSettings: {
        labelPath: 'fruit'
     }
}, '#container');

```

{% endtab %}