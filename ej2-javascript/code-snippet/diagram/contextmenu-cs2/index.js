var nodes = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        style: {
            fill:   '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
        annotations: [{
            id: 'label1',
            content: 'Rectangle1',
            offset: {
                x: 0.5,
                y: 0.5
            },
            style: {
                color: 'white'
            }
        }]
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        style: {
            fill:   '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
        annotations: [{
            id: 'label2',
            content: 'Rectangle2',
            offset: {
                x: 0.5,
                y: 0.5
            },
            style: {
                color: 'white'
            }
        }]
    },
];
var connector = {
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Straight',
    style: {
        strokeColor : '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth :  2,
        targetDecorator: {
            style: {
                fill : '#6BA5D7',
                strokeColor :   '#6BA5D7'
            }
        }
    }
};
var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '350px',
    nodes: nodes,
    connectors: [connector],
    contextMenuSettings: {
        //Enables the context menu
        show: true,
        // Defines the custom context menu items
        items: [{
                // Text to be displayed
                text: 'Save',
                id: 'save',
                target: '.e-elementcontent',
                // Sets the css icons for the item
                iconCss: 'e-save'
            },
            {
                text: 'Load',
                id: 'load',
                target: '.e-elementcontent',
                iconCss: 'e-load'
            },
            {
                text: 'Clear',
                id: 'clear',
                target: '.e-elementcontent',
                iconCss: 'e-clear'
            }
        ],
        // Hides the default context menu items
        showCustomMenuOnly: false,
    }

}, '#element');

