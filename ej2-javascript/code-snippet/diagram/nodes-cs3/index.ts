


import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    pivot: {
        x: 0,
        y: 0
    }
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Text(label) added to the node
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');
diagram.select([diagram.nodes[0]]);



