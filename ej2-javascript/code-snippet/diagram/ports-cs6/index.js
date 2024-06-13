var port1 = {
    style: {
        strokeColor: '#000000',
        fill: ' #FFFF00'
    },
}
port1.shape = 'Square';
port1.visibility = ej.diagrams.PortVisibility.Visible;
port1.id = 'port1';
connectionDirection:'Right';
port1.offset = {
    x: 0.5,
    y: 0.5
};
var port2 = {
    style: {
        strokeColor: '#000000',
        fill: ' #FFFF00'
    },
};
port2.offset = {
    x: 0,
    y: 0
};
port2.id = 'port2';
connectionDirection:'Left';
port2.visibility = ej.diagrams.PortVisibility.Visible;
port2.shape = 'Square';

var nodes = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 600,
        offsetY: 300,
        ports: [port1,port2],
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

var connectors = {
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
}

var diagram = new ej.diagrams.Diagram({
    width: 900,
    height: 900,
    nodes: nodes,
    connectors: [connectors],
    getNodeDefaults: (node) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
}, '#element');