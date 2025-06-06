var diagram;
var node = [
    { id: "rectangle1", offsetX: 100, offsetY: 100, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: "rectangle2", offsetX: 200, offsetY: 200, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'group', children: ['rectangle1', 'rectangle2'] },
    { id: "rectangle3", offsetX: 400, offsetY: 400, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: "rectangle4", offsetX: 500, offsetY: 500, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'group2', children: ['rectangle3', 'rectangle4'], padding: { left: 10, right: 10, top: 10, bottom: 10 } },
];
//Initializes diagram control
diagram = new ej.diagrams.Diagram({
    width: 900,
    height: 900,
  }, '#element');
//Add collection of group nodes
diagram.addElements(node);
