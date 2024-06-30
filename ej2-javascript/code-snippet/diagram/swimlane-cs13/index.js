var node = {
    shape: {
      type: 'SwimLane',
      orientation: 'Horizontal',
      //Intialize header to swimlane
      header: {
        annotation: {
          content: 'ONLINE PURCHASE STATUS',
          style: { fill: '#111111' },
        },
        height: 50,
        style: { fontSize: 11 },
      },
      lanes: [
        {
          id: 'stackCanvas1',
          height: 100,
          header: {
            annotation: { content: 'CUSTOMER' },
            width: 50,
            style: { fontSize: 11 },
          },
        },
      ],
      phases: [
        {
          id: 'phase1',
          offset: 150,
          addInfo: { name: 'phase1' },
          header: { annotation: { content: 'Phase' } },
        },
        {
          id: 'phase2',
          offset: 200,
          header: { annotation: { content: 'Phase' } },
        },
      ],
      phaseSize: 20,
    },
    offsetX: 300,
    offsetY: 200,
    height: 200,
    width: 350,
  };
  
  // initialize Diagram component
  
  var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    nodes: [node],
  });
  diagram.appendTo('#element');
  document.getElementById('addPhase').onclick = () => {
    var phase = [
      {
        id: 'phase3',
        offset: 250,
        header: { annotation: { content: 'New Phase' } },
      },
    ];
    diagram.addPhases(diagram.nodes[0], phase);
  };
  