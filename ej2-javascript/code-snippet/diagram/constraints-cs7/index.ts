import { Diagram, NodeModel, Snapping } from '@syncfusion/ej2-diagrams';
let diagram: Diagram;
Diagram.Inject(Snapping);
function getNodeDefaults(obj: NodeModel): NodeModel {
  obj.width = 100;
  obj.height = 100;
  return obj;
}

let nodes: NodeModel[] = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    annotations: [{ content: 'Node interactions restricted within page' }],
  },
];
//Initializes diagram control
diagram = new Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  getNodeDefaults: getNodeDefaults,
  pageSettings: {
    // Boundary set as page
    boundaryConstraints: 'Page',
    width: 500,
    height: 500,
    showPageBreaks: true,
    background: { color: 'grey' },
  },
});
diagram.appendTo('#element');
