import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
    id: 'rectangle1',
    offsetX: 100,
    offsetY: 100,
    width: 100,
    height: 100,
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
    },
    annotations: [
      {
        content: 'rectangle1',
      },
    ],
  },
  {
    id: 'rectangle2',
    offsetX: 200,
    offsetY: 200,
    width: 100,
    height: 100,
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
    },
    annotations: [
      {
        content: 'rectangle2',
      },
    ],
  },
  {
    id: 'group',
    children: ['rectangle1', 'rectangle2'],
    style: { strokeColor: 'green' },
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
});
diagram.appendTo('#element');
// Update the group node at runtime
(document.getElementById('updateGroupPadding') as HTMLInputElement).onclick =
  () => {
    let group = diagram.nameTable['group'];
    (group.padding = { left: 10, right: 10, top: 10, bottom: 10 }), group.style;
    diagram.dataBind();
  };

(document.getElementById('updateGroupStyle') as HTMLInputElement).onclick =
  () => {
    let group = diagram.nameTable['group'];
    group.style = { fill: 'yellow' };
    diagram.dataBind();
  };
