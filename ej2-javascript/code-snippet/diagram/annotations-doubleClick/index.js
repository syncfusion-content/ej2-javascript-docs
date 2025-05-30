var node = {
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  style: { fill: '#6BA5D7', strokeColor: 'white' },
  annotations: [{ content: 'Center' }],
};
// initialize Diagram component
let color = 'pink';
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: [node],
    doubleClick: function (args) {
      console.log(args.name);
    },
  },
  '#element'
);
