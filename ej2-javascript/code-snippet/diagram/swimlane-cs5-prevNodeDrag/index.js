var node = {
  shape: {
    type: 'SwimLane',
    orientation: 'Horizontal',
    //Intialize header to swimlane
    header: {
      annotation: { content: 'ONLINE PURCHASE STATUS' },
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
        // Set the children of lane
        children: [
          {
            id: 'node1',
            //Preventing node movement outside the lanes
            constraints:
              ej.diagrams.NodeConstraints.Default |
              ej.diagrams.NodeConstraints.AllowMovingOutsideLane,
            annotations: [
              {
                content: 'Node dragding disabled outside lane',
                style: { fontSize: 11 },
              },
            ],
            margin: { left: 200, top: 20 },
            height: 60,
            width: 120,
          },
        ],
      },
    ],
    phases: [
      {
        id: 'phase1',
        offset: 170,
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
