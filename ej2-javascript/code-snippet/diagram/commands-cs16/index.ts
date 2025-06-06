import { ConnectorModel, Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
    id: 'node1',
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node1' }],
  },
  {
    id: 'node2',
    width: 100,
    height: 60,
    offsetX: 200,
    offsetY: 170,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node2' }],
  },
  {
    id: 'node3',
    width: 100,
    height: 60,
    offsetX: 400,
    offsetY: 240,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node3' }],
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
});

diagram.appendTo('#element');
let selArray: (NodeModel | ConnectorModel)[] = [];
selArray.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2]);
//Selects the nodes
diagram.select(selArray);
//Distributes space between the nodes
diagram.distribute('RightToLeft', diagram.selectedItems.nodes);
