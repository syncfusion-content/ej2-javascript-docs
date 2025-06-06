// A node is created and stored in nodes array.
var nodes = [
    // Layer 1 Nodes
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      shape: { type: 'Basic', shape: 'Rectangle' },
      annotations: [{ content: 'Basic rectangle' }],
    },
    {
      id: 'node2',
      width: 100,
      height: 100,
      offsetX: 250,
      offsetY: 100,
      shape: { type: 'Basic', shape: 'Ellipse' },
      annotations: [{ content: 'Basic Ellipse' }],
    },
    {
      id: 'node3',
      width: 100,
      height: 100,
      offsetX: 400,
      offsetY: 100,
      shape: { type: 'Basic', shape: 'RightTriangle' },
      annotations: [{ content: 'Basic RightTriangle' }],
    },
    {
      id: 'node4',
      width: 100,
      height: 100,
      offsetX: 550,
      offsetY: 100,
      shape: { type: 'Basic', shape: 'Plus' },
      annotations: [{ content: 'Basic Plus' }],
    },
  
    // Layer 2 Nodes
  
    {
      id: 'node5',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 300,
      shape: { type: 'Flow', shape: 'Terminator' },
      annotations: [{ content: 'Flow Terminator' }],
    },
    {
      id: 'node6',
      width: 100,
      height: 100,
      offsetX: 250,
      offsetY: 300,
      shape: { type: 'Flow', shape: 'Process' },
      annotations: [{ content: 'Flow Process' }],
    },
    {
      id: 'node7',
      width: 100,
      height: 100,
      offsetX: 400,
      offsetY: 300,
      shape: { type: 'Flow', shape: 'Decision' },
      annotations: [{ content: 'Flow Decision' }],
    },
    {
      id: 'node8',
      width: 100,
      height: 100,
      offsetX: 550,
      offsetY: 300,
      shape: { type: 'Flow', shape: 'Document' },
      annotations: [{ content: 'Flow Document' }],
    },
  ];
  // initialize diagram component
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: nodes,
      layers: [
        {
          id: 'layer1',
          //Layer 1 objects
          objects: ['node1', 'node2', 'node3', 'node4'],
        },
        {
          id: 'layer2',
          //Layer 2 objects
          objects: ['node5', 'node6', 'node7', 'node8'],
        },
      ],
    },
    '#element'
  );
  