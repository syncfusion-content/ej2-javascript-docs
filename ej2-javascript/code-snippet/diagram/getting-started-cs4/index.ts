


import {
    Diagram, NodeModel, ConnectorModel
} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
    { id: 'Start', offsetY: 50, annotations: [{ content: 'Start' }], shape: { type: 'Flow', shape: 'Terminator' } },
    { id: 'Init', offsetY: 140, annotations: [{ content: 'var i = 0;' }], shape: { type: 'Flow', shape: 'Process' } },
    { id: 'Condition', offsetY: 230, annotations: [{ content: 'i < 10?' }], shape: { type: 'Flow', shape: 'Decision' } },
    { id: 'Print', offsetY: 320, annotations: [{ content: 'print(\'Hello!!\');' }], shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
    { id: 'Increment', offsetY: 410, annotations: [{ content: 'i++;' }], shape: { type: 'Flow', shape: 'Process' } },
    { id: 'End', offsetY: 500, annotations: [{ content: 'End' }], shape: { type: 'Flow', shape: 'Terminator' } },
];
let connector: ConnectorModel[] = [
    { id: 'connector1', sourceID: 'Start', targetID: 'Init' },
    { id: 'connector2', sourceID: 'Init', targetID: 'Condition' },
    { id: 'connector3', sourceID: 'Condition', targetID: 'Print', annotations: [{ content: 'Yes' }] },
    {
        id: 'connector4', sourceID: 'Condition', targetID: 'End', annotations: [{ content: 'No' }],
        type: 'Orthogonal',
        segments: [
            { type: 'Orthogonal', length: 30, direction: "Right" },
            { type: 'Orthogonal', length: 300, direction: "Bottom" }
        ]
    },
    { id: 'connector5', sourceID: 'Print', targetID: 'Increment' },
    {
        id: 'connector6', sourceID: 'Increment', targetID: 'Condition',
        type: 'Orthogonal',
        segments: [
            { type: 'Orthogonal', length: 30, direction: "Left" },
            { type: 'Orthogonal', length: 200, direction: "Top" }
        ]
    }];
let diagram: Diagram = new Diagram({
    width: '100%', height: '600px', nodes: nodes, connectors: connector,
    getNodeDefaults: (node: NodeModel) => {
        node.height = 50;
        node.width = 140;
        node.offsetX = 300;
        return node;
    },
    getConnectorDefaults: (obj: ConnectorModel): ConnectorModel => {
        obj.type = "Orthogonal";
        obj.targetDecorator = { shape: 'Arrow', width: 10, height: 10 };
        return obj;
    }
});
diagram.appendTo('#element');



