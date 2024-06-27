


import {ConnectorModel,NodeModel,PointPortModel,Diagram,PortVisibility,} from'@syncfusion/ej2-diagrams';
let port1: PointPortModel = {
    style: {
        strokeColor: 'black',
        fill: 'yellow'
    }
}
port1.shape = 'Square';
port1.visibility = PortVisibility.Visible
//specify the direction of the port
port1.connectionDirection="Right"
port1.id = 'port';
port1.offset = {
    x: 0.5,
    y: 0.5
};
let port2: PointPortModel = {
    style: {
        strokeColor: 'black',
        fill: 'yellow'
    }
};
port2.offset = {
    x: 0,
    y: 0
};
port2.id = 'port1';
port2.visibility = PortVisibility.Visible
//specify the direction of the port
port2.connectionDirection="Left"
port2.shape = 'Square';

let nodes: NodeModel[] = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 200,
        ports: [port1]
    },
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        ports: [port2]
    },
];
let connectors: ConnectorModel = {
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
    sourcePortID: 'port',
    targetPortID: 'port1'
}
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
});
diagram.appendTo('#element');
