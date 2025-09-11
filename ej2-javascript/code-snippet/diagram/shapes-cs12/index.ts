import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
  {
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    shape: {
      type: 'Native',
      scale: 'Stretch'
    },
  },
  {
    id: 'node2',
    offsetX: 450,
    offsetY: 250,
    width: 70,
    height: 55,
    shape: {
      type: 'Native',
      scale: 'Stretch'
    }
  },
];

// Initialize Diagram component.
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  nodeTemplate: '#nodeTemplate'
});

// Render initialized diagram.
diagram.appendTo('#element');