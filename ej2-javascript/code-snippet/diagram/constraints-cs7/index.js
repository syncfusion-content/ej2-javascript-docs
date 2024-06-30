var diagram;

var nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    annotations: [{ content: 'Node interactions restricted within page' }],
  },
];
//Initialize the diagram
diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  //Sets the default values of a nodes
  getNodeDefaults: function (obj) {
    obj.width = 100;
    obj.height = 100;
    return obj;
  },
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
