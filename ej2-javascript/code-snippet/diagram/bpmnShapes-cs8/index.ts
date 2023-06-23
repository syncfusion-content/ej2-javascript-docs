


import { Diagram, NodeModel, BpmnShape, BpmnSubProcessModel, BpmnDiagrams, BpmnActivityModel, BpmnFlowModel, BpmnGatewayModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
            activity: 'SubProcess',
            //Sets collapsed as true and type as Transition
            subProcess: {
                collapsed: true,
                type: 'Transition',
                //Sets event as Intermediate and trigger as Cancel
                event: [{
                        event: 'Intermediate',
                        trigger: 'Cancel',
                        offset: {
                            x: 0.25,
                            y: 1
                        }
                    },
                    {
                        event: 'Intermediate',
                        trigger: 'Error',
                        offset: {
                            x: 0.25,
                            y: 1
                        }
                    },
                ]
            }
            as BpmnSubProcessModel
        },
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



