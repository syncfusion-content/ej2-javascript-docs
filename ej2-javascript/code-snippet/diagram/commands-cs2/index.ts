import { Diagram, ConnectorModel, NodeModel } from '@syncfusion/ej2-diagrams';
//Initializes the nodes
let nodes: NodeModel[] = [
  {
    id: 'node1',
    width: 100,
    height: 70,
    offsetX: 100,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
  },
  {
    id: 'node2',
    width: 100,
    height: 70,
    offsetX: 300,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
  },
  {
    id: 'node3',
    width: 100,
    height: 70,
    offsetX: 200,
    offsetY: 200,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
  },
  {
    id: 'group',
    children: ['node1', 'node2', 'node3', 'connector1'],
  },
];
//Initializes the connector
let connector: ConnectorModel = {
  id: 'connector1',
  sourceID: 'node1',
  targetID: 'node2',
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
    strokeWidth: 2,
  },
  targetDecorator: {
    style: {
      fill: '#6BA5D7',
      strokeColor: '#6BA5D7',
    },
  },
};
//Initializes the diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '350px',
  nodes: nodes,
  connectors: [connector],
});
diagram.appendTo('#element');

(document.getElementById('group') as HTMLInputElement).onclick = () => {
  diagram.group();
};
(document.getElementById('unGroup') as HTMLInputElement).onclick = () => {
  diagram.unGroup();
};
