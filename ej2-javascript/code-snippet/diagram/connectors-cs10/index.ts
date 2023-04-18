


import {Diagram,ConnectorModel,OrthogonalSegmentModel} from '@syncfusion/ej2-diagrams';

let connectors: ConnectorModel = [{
        id: "connector1",
        type: 'Orthogonal',
        segments: [{
            type: 'Orthogonal',
            // Defines the direction for the segment lines
            direction: 'Right',
            // Defines the length for the segment lines
            length: 50
        }],
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
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        }
    },
    {
        id: "connector2",
        type: 'Orthogonal',
        // Defines multile segemnts for the connectors
        segments: [{
                type: 'Orthogonal',
                direction: 'Bottom',
                length: 150
            },
            {
                type: 'Orthogonal',
                direction: 'Right',
                length: 150
            }
        ],
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
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 400,
            y: 200
        }
    }
]

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
});

diagram.appendTo('#element');



