import { Diagram, NodeConstraints } from '@syncfusion/ej2-diagrams';

//Initializes the diagram component
let diagram: Diagram = new Diagram(
  {
    width: '100%',
    height: '350px',
    //Defines nodes
    nodes: [
      {
        id: 'node1',
        width: 100,
        height: 100,
        annotations: [
          {
            id: 'label',
            content: 'Rectangle',
            offset: {
              x: 0.5,
              y: 0.5,
            },
            style: {
              color: 'white',
            },
          },
        ],
        offsetX: 200,
        offsetY: 200,
        style: {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
        },
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
          content: 'Node1',
          //Sets to show tooltip at mouse position
          relativeMode: 'Mouse',
        },
      },
    ],
  },
  '#element'
);
