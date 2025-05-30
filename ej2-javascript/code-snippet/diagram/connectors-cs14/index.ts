


import {Diagram,ConnectorModel, ConnectorEditing} from '@syncfusion/ej2-diagrams';
Diagram.Inject(ConnectorEditing)

let connectors: ConnectorModel[] = [

    {
        id: 'connector3',
        type: 'Bezier',
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        segments: [{
            type: 'Bezier',
            // First control point: an absolute position from the page origin
            point1: {
                x: 100,
                y: 100
            },
            // Second control point: an absolute position from the page origin
            point2: {
                x: 200,
                y: 200
            }
        }],
        sourcePoint: {
            x: 100,
            y: 200
        },
        targetPoint: {
            x: 200,
            y: 100
        },
    },
];

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
});

diagram.appendTo('#element');



