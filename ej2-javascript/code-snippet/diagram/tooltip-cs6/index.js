/**
 * Tooltip sample
 */
var diagram;
diagram = new ej.diagrams.Diagram({
    width: '650px',
    height: '350px',
    constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Tooltip,
    //Defines nodes
    nodes: [{
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
        constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
            content: 'Node1',
            position: 'BottomCenter',
            relativeMode: 'Object',
            animation: {
                //Animation settings to be applied on the Tooltip, while it is being shown over the target.
                open: {
                    //Animation effect on the Tooltip is applied during open and close actions.
                    effect: 'FadeIn',
                    //Duration of the animation that is completed per animation cycle.
                    duration: 150,
                    //Indicating the waiting time before animation begins.
                    delay: 0
                },
                //Animation settings to be applied on the Tooltip, when it is closed.
                close: {
                    effect: 'FadeOut',
                    delay: 0
                }
            }
        },
    }]
}, '#element');

