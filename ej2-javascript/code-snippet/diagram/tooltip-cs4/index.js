/**
 * Tooltip sample
 */
var diagram;

var node = {
    id: "node1",
    width: 100,
    height: 100,
    annotations: [{
        id: 'label',
        content: 'Rectangle',
        offset: {
            x: 0.5,
            y: 0.5
        },
        style: {
            color: 'white'
        }
    }],
    offsetX: 200,
    offsetY: 200,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7'
    },
    constraints: (ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.InheritTooltip) | ej.diagrams.NodeConstraints.Tooltip,
    //Defines mouse over tooltip for a node
    tooltip: {
        //Sets the content of the Tooltip
        content: 'Node1',
        //Sets the position of the Tooltip
        position: 'BottomRight',
        //Sets the tooltip position relative to the node
        relativeMode: 'Object'
    },
};
diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '350px',
    constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Tooltip,
    nodes: [node],
}, '#element');

