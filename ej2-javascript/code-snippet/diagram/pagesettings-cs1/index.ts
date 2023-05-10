


import {Diagram,ConnectorModel,NodeModel} from '@syncfusion/ej2-diagrams';
let diagram: Diagram;
let connector: ConnectorModel = {
    id: 'connector1',
    style: { strokeColor: '#6BA5D7', fill: '#6BA5D7', strokeWidth: 2 },
    targetDecorator: { style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' } },
    sourceID: 'node1',
    targetID: 'node2',
};
let node: NodeModel = {
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{
        content: 'Node1'
    }]
};
let node2: NodeModel = {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 350,
    annotations: [{
        content: 'Node3'
    }]
};
diagram = new Diagram({
    width: '1000px',
    height: '500px',
    getNodeDefaults: (node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
    nodes: [node, node2],
    connectors: [connector],
    // Defines the pageSettings for the diagram
    pageSettings: {
        // Sets the PageOrientation for the diagram to page
        orientation: 'Landscape',
        // Sets the Page Break for diagram
        showPageBreaks: true,
        // Defines the background color and image  of diagram
        background: {
            color: 'grey'
        },
        // Sets the width for the Page
        width: 300,
        // Sets the height for the Page
        height: 300,
        // Sets the space to be left between an annotation and its parent node/connector
        margin: {
            left: 10,
            top: 10,
            bottom: 10
        },
    }
});
diagram.appendTo('#element');



