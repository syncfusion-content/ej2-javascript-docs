import {
    Diagram,
    NodeModel,
    DiagramConstraints,
    NodeConstraints
} from '@syncfusion/ej2-diagrams';
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    tooltip: { content: 'node1', position: 'TopRight', relativeMode: 'Object' },
    constraints:NodeConstraints.Default | NodeConstraints.Tooltip,
    fixedUserHandles:[{tooltip: { content: 'tooltip1', position: 'TopRight', relativeMode: 'Object'},offset:{x:0,y:0} ,visibility:true, iconStrokeColor:'red', fill:'green', margin:{right:20},width:20,handleStrokeColor:'orange', height:20,id:'user1',pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z'}]
};
// initialize Diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node],
    constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
});
diagram.appendTo('#element');
