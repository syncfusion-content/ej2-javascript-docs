


import {Diagram,NodeModel,} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [{
        id: "rectangle1",
        offsetX: 100,
        offsetY: 100,
        width: 100,
        height: 100,
        annotations: [{
            content: 'rectangle1'
        }]
    }, {
        id: "rectangle2",
        offsetX: 200,
        offsetY: 200,
        width: 100,
        height: 100,
        annotations: [{
            content: 'rectangle2'
        }]
    },
     {
            id: "rectangle3",
            offsetX: 400,
            offsetY: 300,
            width: 100,
            height: 100,
            style: { fill: 'darkCyan', strokeWidth: 2 },
            annotations: [{ content: 'rectangle2' }]
        }
    // Grouping node 1 and node 2 into a single group
    {
        id: 'group',
        children: ['rectangle1', 'rectangle2'],
        padding:{left:10,right:10,top:10,bottom:10}
    },
];
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    getNodeDefaults: (node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
});
diagram.appendTo('#element');
diagram.selectAll();
// Adding the third node into the existing group
diagram.group();


