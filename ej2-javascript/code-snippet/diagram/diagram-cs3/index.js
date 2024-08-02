var diagram;

//Defines the nodes collection in diagram
var nodes = [
  {
    id: 'NewIdea',
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 60,
    shape: { type: 'Flow', shape: 'Terminator' },
    annotations: [{ content: 'Node' }],
  },
];

diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  //Sets backgrounf color for diagram
  backgroundColor: 'yellow',
});
diagram.appendTo('#element');
