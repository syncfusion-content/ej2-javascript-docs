---
title: " RangeNavigator Selecting Range | TypeScript "

component: "RangeNavigator"

description: "we can able to select the particular range data by dragging thumbs or by tapping on the labels or by setting the start and end value properties. "
---

# Selecting Range

The Range Selector's left and right thumbs are used to indicate the selected range in the large collection of data. A range can be selected in the following ways:

* By dragging the thumbs.
* By tapping on the labels.
* By setting the start and the end through the `value` property.

{% tab template= "rangenavigator/getting-started", es5Template="es5default" %}

```typescript

import { RangeNavigator, AreaSeries, DateTime}  from "@syncfusion/ej2-charts";
RangeNavigator.Inject(AreaSeries, DateTime);
import { datasrc } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    valueType: 'DateTime',
    value: [new Date('2017-09-01'), new Date('2018-02-01')],
    labelFormat: 'MMM-yy',
    series: [{
                dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
            }],
}, '#element');

```

{% endtab %}