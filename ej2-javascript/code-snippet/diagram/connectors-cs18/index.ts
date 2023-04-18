


import {Diagram,ConnectorModel} from '@syncfusion/ej2-diagrams';


let connectors: ConnectorModel = {
    id: "connector1",
    type: 'Straight',
    // Decorator shape- circle
    sourceDecorator: {
        shape: 'Circle',
        // Defines the style for the sourceDecorator
        style: {
            // Defines the strokeWidth for the sourceDecorator
            strokeWidth: 3,
            // Defines the strokeColor for the sourceDecorator
            strokeColor: 'red'
        },

    },
    // Decorator shape - Diamond
    targetDecorator: {
        // Defines the custom shape for the connector's target decorator
        shape: 'Custom',
        //Defines the  path for the connector's target decorator
        pathData: 'M80.5,12.5 C80.5,19.127417 62.59139,24.5 40.5,24.5 C18.40861,24.5 0.5,19.127417 0.5,12.5' +
            'C0.5,5.872583 18.40861,0.5 40.5,0.5 C62.59139,0.5 80.5,5.872583 80.5,12.5 z'
        //defines the style for the target decorator
        style: {
            // Defines the strokeWidth for the targetDecorator
            strokeWidth: 3,
            // Defines the strokeColor for the sourceDecorator
            strokeColor: 'green',
            // Defines the opacity for the sourceDecorator
            opacity: .8
        },
    },
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
};
let connectors2: ConnectorModel = {
    id: "connectors2",
    type: 'Straight',
    // Decorator shape - IndentedArrow
    sourceDecorator: {
        shape: 'IndentedArrow',
        style: {
            strokeWidth: 3,
            strokeColor: 'blue'
        },

    },
    // Decorator shape - OutdentedArrow
    targetDecorator: {
        shape: 'OutdentedArrow',
        style: {
            strokeWidth: 3,
            strokeColor: 'yellow'
        },
    },
    sourcePoint: {
        x: 400,
        y: 100
    },
    targetPoint: {
        x: 300,
        y: 200
    }
}

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: [connectors, connectors2],
});

diagram.appendTo('#element');



