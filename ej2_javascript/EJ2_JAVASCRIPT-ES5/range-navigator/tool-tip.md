---
title: " RangeNavigator Tooltip | TypeScript "

component: "RangeNavigator"

description: "The range navigator supports tooltips for sliders.Tooltips  display the selected start and end values."
---

# Tooltip

<!-- markdownlint-disable MD036 -->

The tooltip for sliders are supported by the Range Selector. Sliders are used in the Range Selector to select data from a specific range. The tooltip displays the selected start and end values.

<!-- markdownlint-disable MD013 -->

## Customization

Tooltip can be customized using the following properties:

* enable - Customizes the visibility of the tooltip.
* fill - Customizes the background color of the tooltip.
* opacity - Customizes the opacity of the tooltip.
* textStyle - Customizes the font size, color, family, style, weight, alignment, and overflow of the tooltip.

{% tab template= "rangenavigator/getting-started", es5Template="es5Tooltip" %}

```typescript

import { RangeNavigator, AreaSeries,  DateTime, RangeTooltip}  from "@syncfusion/ej2-charts";
RangeNavigator.Inject(AreaSeries, DateTime, RangeTooltip);
import { datasrc } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    valueType: 'DateTime',
    value: [new Date('2017-09-01'), new Date('2018-02-01')],
    tooltip: { enable: true, displayMode: 'Always', fill:'red', opacity: 0.6, textStyle:{ style: 'Italic', color:'blue', size:'12px'} },
    labelFormat: 'MMM-yy',
    series: [{
                dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
            }],
}, '#element');

```

{% endtab %}

## Label Format

The `labelFormat` property in the tooltip is used to format and parse the date to all globalize formats.

{% tab template= "rangenavigator/getting-started", es5Template="es5Tooltip" %}

```typescript

import { RangeNavigator, AreaSeries,  DateTime, RangeTooltip}  from "@syncfusion/ej2-charts";
RangeNavigator.Inject(AreaSeries, DateTime, RangeTooltip);
import { datasrc } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    valueType: 'DateTime',
    value: [new Date('2017-09-01'), new Date('2018-02-01')],
    tooltip: { enable: true, displayMode: 'Always', labelFormat: 'y/M/d' },
    series: [{
                dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
            }],
}, '#element');

```

{% endtab %}

The following table shows the results of applying some common date and time formats to the `labelFormat` property.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format Property Value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>EEEE</td>
<td>Monday</td>
<td>The Date is displayed in day format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>The Date is displayed in month/date/year format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td> MMM </td>
<td>Apr</td>
<td>The Shorthand month for the date is displayed</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>Time of the date value is displayed as label</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>The Label is displayed in hours:minutes:seconds format</td>
</tr>
</table>