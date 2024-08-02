var nodes = [
  {
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
    annotations: [
      {
        id: 'label1',
        content: 'Rectangle1',
        offset: {
          x: 0.5,
          y: 0.5,
        },
        style: {
          color: 'white',
        },
      },
    ],
  },
  {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
    annotations: [
      {
        id: 'label2',
        content: 'Rectangle2',
        offset: {
          x: 0.5,
          y: 0.5,
        },
        style: {
          color: 'white',
        },
      },
    ],
  },
];
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '350px',
    nodes: nodes,
    contextMenuSettings: {
      //Enables the context menu
      show: true,
      items: [
        {
          text: 'Google.com',
          id: 'google',
          target: '.e-diagramcontent',
          url: 'https://www.google.co.in/',
        },
        {
          text: 'w3schools.com',
          id: 'W3Schools',
          target: '.e-diagramcontent',
          url: 'https://www.w3schools.com/',
        },
        {
          text: 'stackoverflow.com',
          id: 'stackoverflow',
          target: '.e-diagramcontent',
          url: 'https://stackoverflow.com/',
        },
      ],
      // Hides the default context menu items
      showCustomMenuOnly: true,
    },
  },
  '#element'
);
