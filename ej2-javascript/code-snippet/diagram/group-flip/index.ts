import { Diagram, NodeModel, FlipDirection } from '@syncfusion/ej2-diagrams';

//Initialize nodes
let nodes: NodeModel[] = [
  {
    id: 'node1',
    width: 70,
    height: 70,
    offsetX: 100,
    offsetY: 100,
    //Sets the flip as Vertical
    flip: FlipDirection.Vertical,
    shape: {
      type: 'Basic',
      shape: 'RightTriangle',
    },
    style: {
      fill: '#6BA5D7',
    },
  },
  {
    id: 'node2',
    width: 70,
    height: 70,
    offsetX: 180,
    offsetY: 180,
    shape: {
      type: 'Basic',
      shape: 'RightTriangle',
    },
    style: {
      fill: '#6BA5D7',
    },

  },
  {
    id: 'group',
    children: ['node1', 'node2',],
    padding: { left: 20, right: 20, top: 20, bottom: 20 },
    //Sets the flip as Horizontal
    flip: FlipDirection.Horizontal,
  }
];

let diagram: Diagram = new Diagram({
  width: 900,
  height: 900,
  nodes: nodes,
});
diagram.appendTo('#element');
