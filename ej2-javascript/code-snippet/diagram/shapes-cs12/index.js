var nodes = [
  {
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    shape: {
      type: 'Native',
      scale: 'Stretch'
    }
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
  }
];

// Initialize Diagram component.
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  nodeTemplate: '#nodeTemplate'
});

// Render initialized diagram.
diagram.appendTo('#element');