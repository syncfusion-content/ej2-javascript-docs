// Import necessary modules
const ej2_diagrams_1 = require("@syncfusion/ej2-diagrams");

// Define ports
let port1 = {
    style: {
        strokeColor: '#000000',
        fill: ' #FFFF00'
    },
    // Define port connection direction
    connectionDirection: 'Right',
    shape: 'Square',
    id: 'port1',
    visibility: ej2_diagrams_1.PortVisibility.Visible,
    offset: {
        x: 0.5,
        y: 0.5
    }
};

let port2 = {
    style: {
        strokeColor: '#000000',
        fill: ' #FFFF00'
    },
    offset: {
        x: 0,
        y: 0
    },
    id: 'port2',
    visibility: ej2_diagrams_1.PortVisibility.Visible,
    shape: 'Square',
    // Define port connection direction
    connectionDirection: 'Left'
};

// Define nodes
let nodes = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 600,
        offsetY: 300,
        ports: [port1],
        fill: '#87CEEB'
    },
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 800,
        offsetY: 200,
        ports: [port2],
        fill: 'red'
    }
];

// Define a connector between the nodes
let connectors = {
    id: "connector1",
    sourcePoint: {
        x: 100,
        y: 100
    },
    type: 'Orthogonal',
    targetPoint: {
        x: 200,
        y: 200
    },
    sourceID: 'node',
    targetID: 'node1',
    sourcePortID: 'port1',
    targetPortID: 'port2'
};

// Initialize diagram component
let diagram = new ej2_diagrams_1.Diagram({
    width: '100%',
    height: '600px',
    // Add nodes and connectors
    nodes: nodes,
    connectors: [connectors],
    getNodeDefaults: (node) => {
        // Customize default node appearance
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    }
});

// Render initialized diagram
diagram.appendTo('#element');
