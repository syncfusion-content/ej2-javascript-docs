var diagram;

var connectors = [
  {
    id: 'connector1',
    //Define connector start and end points
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'OneToOne',
      },
    },
  },
  {
    id: 'connector2',
    //Define connector start and end points
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 400, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'ManyToOne',
        //Set source label to connector
        source: {
          optional: true,
          lowerBounds: '89',
          upperBounds: '67',
        },
        //Set target label to connector
        target: {
          optional: true,
          lowerBounds: '78',
          upperBounds: '90',
        },
      },
    },
  },
  {
    id: 'connector3',
    //Define connector start and end points
    sourcePoint: { x: 300, y: 100 },
    targetPoint: { x: 500, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'OneToMany',
        //Set source label to connector
        source: {
          optional: true,
          lowerBounds: '89',
          upperBounds: '67',
        },
        //Set target label to connector
        target: {
          optional: true,
          lowerBounds: '78',
          upperBounds: '90',
        },
      },
    },
  },
  {
    id: 'connector4',
    //Define connector start and end points
    sourcePoint: { x: 400, y: 100 },
    targetPoint: { x: 600, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'ManyToMany',
        //Set source label to connector
        source: {
          optional: true,
          lowerBounds: '89',
          upperBounds: '67',
        },
        //Set target label to connector
        target: {
          optional: true,
          lowerBounds: '78',
          upperBounds: '90',
        },
      },
    },
  },
];
diagram = new ej.diagrams.Diagram(
  {
    width: '650px',
    height: '350px',
    connectors: connectors,
  },
  '#element'
);
