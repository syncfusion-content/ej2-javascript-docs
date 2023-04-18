


import {Diagram,ConnectorModel} from '@syncfusion/ej2-diagrams';

let connectors: ConnectorModel[] = [{
        id: "connector1",
        targetDecorator: {
            style: {
                strokeColor: '#6BA5D7',
                fill: '#6BA5D7',
                strokeWidth: 2
            }
        },
        style: {
            // Stroke color
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            // Stroke width of the line
            strokeWidth: 2,
            // Line style
            strokeDashArray: '2,2'
        },
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        },
        segments: [{
            type: 'Orthogonal',
            direction: 'Right',
            length: 50
        }],
    },
    {
        id: "connector2",
        // Set the visibility of the connector to false
        visible: false,
        targetDecorator: {
            style: {
                strokeColor: '#6BA5D7',
                fill: '#6BA5D7',
                strokeWidth: 2
            }
        },
        style: {
            // Stroke color
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            // Stroke width of the line
            strokeWidth: 2,
            // Line style
            strokeDashArray: '2,2'
        },
        sourcePoint: {
            x: 300,
            y: 300
        },
        targetPoint: {
            x: 400,
            y: 400
        },
        segments: [{
            type: 'Orthogonal',
            direction: 'Right',
            length: 50
        }],
    }
]

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Define the default values for all the connector.Similary we can add all the properties
    getConnectorDefaults: (obj: ConnectorModel): ConnectorModel => {
        obj.type = 'Orthogonal'
        return obj;
    }
    connectors: connectors,
});

diagram.appendTo('#element');



