var diagram;
var connector = {
    id: 'connector1',
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 100
    }
};
var node = {
    id: 'node1',
    width: 150,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7'
    },
};
var node2 = {
    id: 'node2',
    width: 80,
    height: 130,
    offsetX: 200,
    offsetY: 200,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7'
    },
};
var node3 = {
    id: 'node3',
    width: 100,
    height: 75,
    offsetX: 300,
    offsetY: 350,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7'
    },
};
diagram = new ej.diagrams.Diagram({
    width: 800,
    height: 800,
    nodes: [node, node2, node3],
    connectors: [connector],
    pageSettings: {
        boundaryConstraints: 'Page',
        width: 400,
        height: 400,
        getNodeDefaults: function(node) {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        },
        getConnectorDefaults: function(obj) {
            obj.style.strokeColor = '#6BA5D7';
            obj.style.fill = '#6BA5D7';
            obj.style.strokeWidth = 2;
            obj.targetDecorator.style.fill = '#6BA5D7';
            obj.targetDecorator.style.strokeColor = '#6BA5D7';
            return obj;
        },
        showPageBreaks: true,
    },
}, '#element');

