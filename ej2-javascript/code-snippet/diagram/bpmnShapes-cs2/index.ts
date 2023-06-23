


import { Diagram, NodeModel, BpmnShape, BpmnSubProcessModel, BpmnDiagrams, BpmnActivityModel, BpmnFlowModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as event
    shape: {
        type: 'Bpmn',
        shape: 'Event',
        // Sets event as End and trigger as None
        event: {
            event: 'End',
            trigger: 'None'
        }
    },
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



