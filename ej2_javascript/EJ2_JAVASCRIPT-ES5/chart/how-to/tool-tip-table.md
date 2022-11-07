---
title: " Chart How To | TypeScript "

component: "Chart"

description: "How to section explains knowledge base samples and howto access different types properties and events of the chart."
---

# Create a table in tooltip

You can show the tooltip as table by using template property in tooltip.

Follow the given steps to show the table tooltip,

**Step 1**:

Initialize the tooltip template div as shown in the following html page,

```html
    <div id='templateWrap'>
        <table style="width:100%;  border: 1px solid black;">
        <tr><th colspan="2" bgcolor="#00FFFF">Female</th></tr>
        <tr><td bgcolor="#00FFFF">${x}:</td><td bgcolor="#00FFFF">${y}</td></tr>
        </table>
    </div>

```

**Step 2**:

To show that tooltip template, set the element id to the `template` property in tooltip.

{% tab template= "chart/table", es5Template="es5Table" %}

```typescript
import {
    Chart, LineSeries, Legend, Category, Tooltip
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category, Legend,Tooltip);
import { Browser } from '@syncfusion/ej2-base';

let chart: Chart = new Chart({
        title: 'Population of India ( 2010 - 2016 )',
        // Initialize the chart axes
        primaryXAxis: {
            minimum: 2010, maximum: 2016,
            edgeLabelPlacement: 'Shift',

        },
        primaryYAxis: {
            minimum: 900, maximum: 1300,
            labelFormat: '{value}M',
        },
        // Initialize the chart series
        series: [
           {
                name: 'Female',
                dataSource: [
                    { x: 2010, y: 990 }, { x: 2011, y: 1010 },
                    { x: 2012, y: 1030 }, { x: 2013, y: 1070 },
                    { x: 2014, y: 1105 }, { x: 2015, y: 1138 },
                    { x: 2016, y: 1155 }
                ], xName: 'x', yName: 'y',
                marker: {
                    visible: true,
                    shape: 'Rectangle',
                    width: 2
            }
        ],
        tooltip: {
            enable: true,
            template:'#Female-Material'
        },
    width:'650px',
    height: '350px'
    });
    chart.appendTo('#element');
```

{% endtab %}