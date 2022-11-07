# Data Label

Data Labels are used to identify the name of items or groups in the TreeMap component. Data Labels will be shown by specifying the data source properties in the `labelPath` of the `leafItemSettings`.

## Format

Customize the labels for each item using the `labelFormat` property in the `leafItemSettings`.

{% tab template= "treemap/datalabel", sourceFiles="index.ts,index.html", es5Template="es5DataLabelFormat" %}

```typescript
let CarDetails:Object[] = [{ Car:'Mustang', Brand:'Ford', count:232 },
                       { Car:'EcoSport', Brand:'Ford', count:121 },
                       { Car:'Swift', Brand:'Maruti', count:143 },
                       { Car:'Baleno', Brand:'Maruti', count:454 },
                       { Car:'Vitara Brezza', Brand:'Maruti', count:545 },
                       { Car:'A3 Cabriolet', Brand:'Audi',count:123 },
                       { car:'RS7 Sportback', Brand:'Audi', count:523 }
                     ];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    dataSource: CarDetails ,
    weightValuePath: 'count',
    leafItemSettings: {
        labelPath: 'Car',
        labelFormat:'${Car}-${Brand}'
     }
}, '#container');

```

{% endtab %}

## Template

The template supports customizing labels of each leaf node using the `labelTemplate` property. It uses Essential JS2 template engine to render elements and the position of templates can be customize using the `templatePosition` property.

{% tab template= "treemap/datalabel", sourceFiles="index.ts,index.html", es5Template="es5DataLabelTemplate" %}

```typescript
let CarDetails:Object[] = [{ Car:'Mustang', Brand:'Ford', count:232 },
                       { Car:'EcoSport', Brand:'Ford', count:121 },
                       { Car:'Swift', Brand:'Maruti', count:143 },
                       { Car:'Baleno', Brand:'Maruti', count:454 },
                       { Car:'Vitara Brezza', Brand:'Maruti', count:545 },
                       { Car:'A3 Cabriolet', Brand:'Audi',count:123 },
                       { car:'RS7 Sportback', Brand:'Audi', count:523 }
                     ];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    dataSource: CarDetails ,
    weightValuePath: 'count',
    leafItemSettings: {
        labelPath: 'Car',
        labelTemplate:'<div>{{:Car}}-{{:Brand}}</div>',
        templatePosition:'Center'
     }
}, '#container');

```

{% endtab %}

## InterSectAction

When the label size in each item exceeds the actual size, use the `interSectAction` property in the `leafItemSettings` to customise the labels.

{% tab template= "treemap/datalabel", sourceFiles="index.ts,index.html", es5Template="es5LabelInteSectAction" %}

```typescript
let CarDetails:Object[] = [{ Car:'Mustang', Brand:'Ford', count:232 },
                       { Car:'EcoSport', Brand:'Ford', count:121 },
                       { Car:'Swift', Brand:'Maruti', count:143 },
                       { Car:'Baleno', Brand:'Maruti', count:454 },
                       { Car:'Vitara Brezza', Brand:'Maruti', count:545 },
                       { Car:'A3 Cabriolet Purvis Eureka LIoyd-Hartnett', Brand:'Audi',count:123 },
                       { car:'RS7 Sportback', Brand:'Audi', count:523 }
                     ];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    dataSource: CarDetails ,
    weightValuePath: 'count',
    leafItemSettings: {
        labelPath: 'Car',
        labelFormat:'${Car}-${Brand}',
        interSectAction:'WrapByWord'
     }
}, '#container');

```

{% endtab %}