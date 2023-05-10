


import { CircularGauge, GaugeTooltip, Legend } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(GaugeTooltip, Legend);
let gauge: CircularGauge = new CircularGauge({
    enableRtl:true,
    tooltip: {
        type:['Pointer', 'Range'],
        format:'Pointer : {value} ',
        enable: true,
        enableAnimation: false
    },
    legendSettings:{
        visible:true
    },
    axes: [{
        direction: 'AntiClockWise',
        lineStyle: { width: 10, color: 'transparent' },
        labelStyle: {
            position: 'Inside', useRangeColor: false,
            font: {
                size: '12px',
                color: '#424242',
                fontFamily: 'Roboto',
                fontStyle: 'Regular'
            }
        },
        majorTicks: {
            height: 10,
            offset: 5,
            color: '#9E9E9E'
        },
        minorTicks: { height: 0 },
        startAngle: 210,
        endAngle: 150,
        minimum: 0,
        maximum: 120,
        radius: '80%',
        ranges: [{
            start: 0,
            end: 40,
            color: '#30B32D'
        },
        {
            start: 40,
            end: 80,
            color: '#FFDD00'
        },
        {
            start: 80,
            end: 120,
            color: '#F03E3E'
        }],
        pointers: [{
            animation: { enable: false },
            value: 65,
            radius: '60%',
            color: '#757575',
            pointerWidth: 8,
            cap: {
                radius: 7,
                color: '#757575'
            },
            needleTail: {
                length: '18%'
            }
        }]
    }]
}, '#element');



