---
title: "Pie and Doughnut | TypeScript "

component: "Accumulation Chart"

description: "Pie and doughnut charts are used to presents the relationship of different parts of data and also known biggest data easily"
---

# Pie & Doughnut

## Pie Chart

To render a pie series, use the series [`type`](../api/accumulation-chart/accumulationSeriesModel/#type) as `Pie` and
inject the `PieSeries` module using `AccumulationChart.Inject(PieSeries)` method. If the `PieSeries` module is not
injected, this module will be loaded by default.

{% tab template="chart/chart-types", es5Template="es5AccRadius"%}

```typescript

import { AccumulationChart, PieSeries } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(PieSeries);

let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: [{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },{ x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
            { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }],
            type:'Pie',
            xName: 'x',
            yName: 'y'
        }
    ]
}, '#element');

```

{% endtab %}

## Radius Customization

By default, radius of the pie series will be 80% of the size (minimum of chart width and height).
You can customize this using [`radius`](../api/accumulation-chart/accumulationSeriesModel/#radius) property of the series.

{% tab template="chart/chart-types", es5Template="es5AccRadius"%}

```typescript

import { AccumulationChart } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: data,
            radius: '100%',
            xName: 'x',
            yName: 'y'
        }
    ]
}, '#element');

```

{% endtab %}

## Pie Center

The center position of the pie can be changed by Center X and Center Y. By default, center value of the pie series x and y is 50%. You can customize this using [`center`](../api/accumulation-chart/accumulationChartModel/#center) property of the series.

{% tab template="chart/chart-types", es5Template="es5AccCenter"%}

```typescript

import { AccumulationChart, PieSeries } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(PieSeries);

let piechart: AccumulationChart = new AccumulationChart({
  // Initialize the chart series
        series: [
            {
                dataSource: [
                    { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
                    { 'x': 'iPhone', y: 19, text: '19%' },
                    { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
                    { 'x': 'Android', y: 12, text: '12%' }
                ],
                dataLabel: {
                    visible: true, position: 'Inside', name: 'text', font: { fontWeight: '600' }
                },
                radius: '70%', xName: 'x', yName: 'y', name: 'Browser'
            }
        ],
        center: { x: '60%', y: '60%' },
        enableSmartLabels: true,
        enableAnimation: false,
        legendSettings: { visible: false },
        // Initialize tht tooltip
        tooltip: { enable: true, format: '${point.x} : <b>${point.y}%</b>' },
        title: 'Mobile Browser Statistics'

}, '#element');

```

{% endtab %}

## Various Radius Pie Chart

You can use radius mapping to render the slice with different [`radius`](../api/accumulation-chart/accumulationSeries/#radius) pie and also use [`border`](../api/accumulation-chart/accumulationSeries/#border) , fill properties to customize the point. dataLabel is used to represent individual data and its value.

{% tab template="chart/chart-types", es5Template="es5AccVariesRadius"%}

```typescript

import { AccumulationChart, AccumulationLegend, PieSeries, AccumulationDataLabel } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationChart, AccumulationLegend, PieSeries, AccumulationDataLabel );

let piechart: AccumulationChart = new AccumulationChart({
   series: [
            {

                dataSource: [
                    { x: 'Argentina', y: 505370, r: '100' },
                    { x: 'Belgium', y: 551500, r: '118.7' },
                    { x: 'Cuba', y: 312685, r: '124.6' },
                    { x: 'Dominican Republic', y: 350000, r: '137.5' },
                    { x: 'Egypt', y: 301000, r: '150.8' },
                    { x: 'Kazakhstan', y: 300000, r: '155.5' },
                    { x: 'Somalia', y: 357022, r: '160.6' }

                ],
                dataLabel: {
                    visible: true, position: 'Outside',
                    name: 'x'

                },
                radius: 'r', xName: 'x',
                yName: 'y', innerRadius: '20%'
            },

        ],
        enableSmartLabels: true,
        legendSettings: {
            visible: true,
        },
        enableAnimation: true,
        title: 'Countries compared by population density and total area'
}, '#element');

```

{% endtab %}

## Doughnut Chart

To achieve a doughnut in pie series, customize the [`innerRadius`](../api/accumulation-chart/accumulationSeries/#innerradius)
property of the series. By setting value greater than 0%, a doughnut will appear.
The `innerRadius` property takes value from 0% to 100% of the pie radius.

{% tab template="chart/chart-types", es5Template="es5AccDoughnut" %}

```typescript

import { AccumulationChart } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: data,
            innerRadius: '40%',
            xName: 'x',
            yName: 'y'
        }
    ]
}, '#element');

```

{% endtab %}

## Start and End angles

You can customize the start and end angle of the pie series using the
[`startAngle`](../api/accumulation-chart/accumulationSeries/#startangle) and
[`endAngle`](../api/accumulation-chart/accumulationSeries/#endangle) properties. The default value of  `startAngle` is 0 degree,
 and `endAngle` is 360 degrees. By customizing this, you can achieve a semi pie series.

{% tab template="chart/chart-types", es5Template="es5AccAngles" %}

```typescript

import { AccumulationChart, AccumulationDataLabel  } from '@syncfusion/ej2-charts';
import { dataMapping } from './datasource.ts';
AccumulationChart.Inject(AccumulationDataLabel);

let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: dataMapping,
            startAngle: 270,
            endAngle: 90,
            xName: 'x',
            yName: 'y'
        }
    ]
}, '#element');

```

{% endtab %}

## Color & Text Mapping

The fill color and the text in the data source can be mapped to the chart using `pointColorMapping` in series and
`name` in datalabel respectively.

{% tab template="chart/chart-types", es5Template="es5AccAngles" %}

```typescript

import { AccumulationChart, AccumulationDataLabel  } from '@syncfusion/ej2-charts';
import { dataMapping } from './datasource.ts';
AccumulationChart.Inject(AccumulationDataLabel);

let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource:dataMapping ,
            //Map the fill color from data source
            pointColorMapping: 'fill',
            //Map the fill color from data source
            name: ''
            xName: 'x',
            yName: 'y',
            dataLabel: { visible: true, name:'text' }
        }
    ]
}, '#element');

```

{% endtab %}

## Customization

Individual points can be customized using the `pointRender` event.

{% tab template="chart/chart-types", es5Template="es5AccGroupTo" %}

```typescript

import { AccumulationChart, AccumulationDataLabel, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { dataMapping } from './datasource.ts';
AccumulationChart.Inject(AccumulationDataLabel);
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: dataMapping,
            xName: 'x',
            yName: 'y',
            border:{color: 'white', width: 1},
        }
    ],
    pointRender: (args: IAccPointRenderEventArgs) => {
        if ((args.point.x as string).indexOf('Apr') > -1) {
            args.fill = '#f4bc42';
        }
        else {
            args.fill = '#597cf9';
        }
    },
}, '#element');

```

{% endtab %}

## Hide pie or doughnut border

By default, the border will appear in the pie/doughnut chart while mouse hover on the chart. You can disable the the border by
setting `enableBorderOnMouseMove` property is `false`.

{% tab template="chart/chart-types", es5Template="es5AccBorder" %}

```typescript

import { AccumulationChart, AccumulationDataLabel, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { dataMapping } from './datasource.ts';
AccumulationChart.Inject(AccumulationDataLabel);
let piechart: AccumulationChart = new AccumulationChart({
    enableBorderOnMouseMove: false,
    series: [
        {
            dataSource: dataMapping,
            xName: 'x',
            yName: 'y',
        }
    ]
}, '#element');

```

{% endtab %}

## Multi-level pie chart

You can achieve a multi-level drill down in pie and doughnut charts using [pointClick](../../api/accumulation-chart/accumulationChartModel/#pointclick) event. If user clicks any point in the chart, that corresponding data will be shown in the next level and so on based on point clicked.

You can also achieve drill-up (back to the initial state) by using [chartMouseClick](../../api/accumulation-chart/accumulationChartModel/#chartmouseclick) event. In below sample, you can drill-up by clicking back button in the center of the chart.

{% tab template= "chart/grid-visual", es5Template="es5PieChartDrilldown" %}

```typescript

import { getElement, AccumulationChart, AccumulationLegend, PieSeries, AccumulationTooltip,
IMouseEventArgs, AccumulationDataLabel, AccumulationChartModel, AccumulationAnnotation,ChartAnnotationSettingsModel,
} from '@syncfusion/ej2-charts';
import { EmitType } from '@syncfusion/ej2-base';
import { Grid } from '@syncfusion/ej2-grids';
AccumulationChart.Inject( AccumulationLegend, PieSeries, AccumulationTooltip,
AccumulationDataLabel, AccumulationAnnotation);
/**
 * Sample fro Drill Down in Pie chart
 */
//tslint:disable:max-func-body-length

let pointIndex: number = -1;
const data = [
  {
    x: 'SUV',
    y: 25,
    z: [
      {
        title: 'Automobile Sales in the SUV Segment',
        x: 'Toyota',
        y: 8,
        z: [
          { x: '2000', y: 20 },
          { x: '2001', y: 30 },
          { x: '2002', y: 40 },
        ],
      },
      { x: 'Ford', y: 12 },
      { x: 'GM', y: 17 },
      { x: 'Renault', y: 6 },
    ],
  },
  {
    x: 'Car',
    y: 37,
    z: [
      { title: 'Automobile Sales in the Car Segment', x: 'Toyota', y: 7 },
      { x: 'Chrysler', y: 12 },
      { x: 'Nissan', y: 9 },
      { x: 'Ford', y: 15 },
    ],
  },
  {
    x: 'Pickup',
    y: 15,
    z: [
      { title: 'Automobile Sales in the Pickup Segment', x: 'Nissan', y: 9 },
      { x: 'Chrysler', y: 4 },
      { x: 'Ford', y: 7 },
      { x: 'Toyota', y: 20 },
    ],
  },
  {
    x: 'Minivan',
    y: 23,
    z: [
      { title: 'Automobile Sales in the Minivan Segment', x: 'Hummer', y: 11 },
      { x: 'Ford', y: 5 },
      { x: 'GM', y: 12 },
      { x: 'Chrysler', y: 3 },
    ],
  },
];

const click = (args: IMouseEventArgs) => {
  if (pie.series[0].name !== 'Level 3') {
    switch (args.pointIndex) {
      case 0:
        pie.series[0].dataSource = data[0].z[0].z;
        pie.title = 'SUV Sales by Years';
        pie.series[0].name = 'Level 3';
        grid.columns[0].headerText = 'Year';
        grid.refresh();
        pie.refresh();
        break;
    }
    grid.dataSource = pie.series[0].dataSource;
  }
};
const pointClick: EmitType<IMouseEventArgs> = (args: IMouseEventArgs) => {
  if ( getElement( pie.element.id + '_Series_' + args.seriesIndex + '_Point_' + args.pointIndex)
) {
    pie.series[0].dataSource = data[args.pointIndex].z;
    pie.title = data[args.pointIndex].z[0].title;
    pointIndex = args.pointIndex;

    pie.series[0].name = 'Level 2';
    pie.series[0].innerRadius = '30%';
    pie.annotations = [
      {
        content:
          '<div id="back" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
          '<img src="https://ej2.syncfusion.com/javascript/demos/src/chart/images/back.png" id="back" />',
        region: 'Series',
        x: '50%',
        y: '50%',
      },
    ];
    pie.pointClick = click;
  }
  grid.dataSource = pie.series[0].dataSource;
  grid.columns[0].headerText = data[args.pointIndex].x;
  grid.refresh();
  pie.refresh();
};
let instance: AccumulationChartModel = {
  series: [
    {
      dataSource: data,
      dataLabel: {
        visible: true,
        position: 'Inside',
        connectorStyle: { type: 'Curve', length: '10%' },
        font: { fontWeight: '600', color: 'white' },
      },
      radius: '70%',
      xName: 'x',
      yName: 'y',
      startAngle: 0,
      endAngle: 360,
      innerRadius: '0%',
      explode: false,
    },
  ],
  enableSmartLabels: false,
  legendSettings: { visible: true },
  chartMouseClick: (args: IMouseEventArgs) => {
    if (args.target.indexOf('back') > -1) {
      if (pie.series[0].name === 'Level 3') {
        pie.series[0].dataSource = data[pointIndex].z;
        pie.series[0].name = 'Level 2';
        pie.title = data[pointIndex].z[0].title;
        pie.series[0].innerRadius = '30%';
        grid.dataSource = pie.series[0].dataSource;
        grid.columns[0].headerText = data[pointIndex].x;
        grid.refresh();
        pie.refresh();
      } else if (pie.series[0].name === 'Level 2') {
        pie.series[0].dataSource = data;
        pie.series[0].name = 'Level 1';
        pie.series[0].innerRadius = '0%';
        pie.title = 'Automobile Sales by Category';
        pie.annotations = null;
        pie.pointClick = pointClick;
        grid.dataSource = pie.series[0].dataSource;
        grid.columns[0].headerText = 'Vehicle';
        grid.refresh();
        pie.refresh();
      }
    }
    grid.dataSource = pie.series[0].dataSource;
  },
  pointClick: pointClick,
  tooltip: { enable: false, format: '${point.x} <br> ${point.y} %' },
  title: 'Automobile Sales by Category',
};
let pie: AccumulationChart = new AccumulationChart(instance);
pie.appendTo('#element');

let grid = new Grid({
  dataSource: data,
  columns: [
    { field: 'x', headerText: 'Vehicle', type: 'string' },
    { field: 'y', headerText: 'Sales', type: 'string' },
  ],
});
grid.appendTo('#Grid');

```

{% endtab %}

## See Also

* [Data label](./data-label/)
* [Grouping](./grouping/)