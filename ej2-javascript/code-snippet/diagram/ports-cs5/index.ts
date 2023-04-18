


import { Diagram, NodeModel, PortVisibility } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Initialize port collection
    ports: [{
        offset: {
            x: 1,
            y: 0.5
        },
        visibility: PortVisibility.Visible,
        //Set the style for the port
        style: {
            fill: 'red',
            strokeWidth: 2,
            strokeColor: 'black'
        },
        width: 12,
        height: 12,
        // Sets the shape of the port as Circle
        shape: 'Circle'
    }]
};
// initialize Diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized Diagram
diagram.appendTo('#element');



