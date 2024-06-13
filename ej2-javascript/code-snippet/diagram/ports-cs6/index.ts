import { Diagram, NodeModel, PortVisibility } from '@syncfusion/ej2-diagrams';

// Define port properties
let port1: NodeModel = {
    style: {
        strokeColor: '#000000',
        fill: ' #FFFF00'
    },
    //Define the portConnection direction
    connectionDirection:'Right',
    shape: 'Square', 
    id: 'port1', 
    visibility: PortVisibility.Visible, 
    offset: {
        x: 0.5,
        y: 0.5
    },
};

// Define another port with similar properties
let port2: NodeModel = {
    style: {
        strokeColor: '#000000',
        fill: ' #FFFF00'
    },
    offset: {
        x: 0,
        y: 0
    },
    id: 'port2',
    visibility: PortVisibility.Visible,
    shape: 'Square',
    //Define the portConnection direction
    connectionDirection:'Left',
};

// Define nodes with the previously defined ports
let nodes: NodeModel[] = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 600,
        offsetY: 300,
        ports: [port1, port2] ,
        fill:'#87CEEB',
    },
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 800,
        offsetY: 200,
        ports: [port1, port2],
        fill:'#87CEEB',
    },
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

// Initialize the Diagram component with the defined nodes and connectors
let diagram: Diagram = new Diagram({
    width: 900,
    height: 900,
    nodes: nodes,
    connectors: [connectors],
    getNodeDefaults: (node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
}, '#element');
