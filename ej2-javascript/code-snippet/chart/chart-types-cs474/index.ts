/**
 * Funnel Series
 */
import {
    AccumulationChart, AccumulationDataLabel, FunnelSeries, PieSeries,
    PyramidSeries, AccumulationAnnotation, AccumulationLegend, IAccLegendRenderEventArgs
} from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationDataLabel, FunnelSeries, PieSeries, PyramidSeries);
AccumulationChart.Inject(AccumulationLegend, AccumulationAnnotation);
import { StatisticsDetails } from './datasource.ts';

const chart: AccumulationChart = new AccumulationChart({
      title: 'Mobile Browser Statistics',

    legendSettings: {
        visible: true,
        template:  `<div style="display:flex; align-items:center; gap:8px; padding:4px 0; line-height:1.1;">
      <div style="display:flex; flex-direction:column;">
          <span class="browser-name" style="font-weight:800; font-size:14px; color:;"></span>
          <span class="browser-info" style="font-size:12px; opacity:0.85;"></span>
      </div>
   </div>`
    },

    tooltip: { enable: true },

    series: [{
        type: 'Pie',
        dataSource: StatisticsDetails,
        xName: 'Browser',
        yName: 'Users',
        pointColorMapping: 'Color',
        dataLabel: {
            visible: true,
            format: '{value}M',
            position: 'Outside'
        }
    }],

    legendRender: (args: IAccLegendRenderEventArgs) => {
        const points = (chart.series[0] as any).points;
        const pt = points.find((p: any) => p.x === args.text);

        const browser = args.text;
        const users = pt.y;
        const color = args.fill;

        args.template = args.template
            .replace('color:;', `color:${color};`)
            .replace('<span class="browser-name"', `<span class="browser-name">${browser}`)
            .replace('<span class="browser-info"', `<span class="browser-info"><b>${users} million</b> people use ${browser}`);
    }
});
chart.appendTo('#element');
