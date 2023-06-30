


import {
    Diagram,
    NodeModel,
    SymbolPalette,
    SymbolInfo,
    NodeConstraints
} from '@syncfusion/ej2-diagrams';
//Initialize the basicshapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [{
            id: 'Rectangle',
            shape: {
                type: 'Basic',
                shape: 'Rectangle'
            },
            tooltip:{
                content:"Rectangle Tooltip",
            }
        },
        {
            id: 'Ellipse',
            shape: {
                type: 'Basic',
                shape: 'Ellipse'
            }
        },
        {
            id: 'Hexagon',
            shape: {
                type: 'Basic',
                shape: 'Hexagon'
            },
            tooltip: {
                content: 'Hexagon Tooltip',
            },
            //customized content of the Tooltip is enabled by Node Tooltip Cosnstraints
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip
        },
    ];
    return basicShapes;
}
//Initializes the symbol palette
let palette: SymbolPalette = new SymbolPalette({
    expandMode: 'Multiple',
    palettes: [{
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic'
    }, ],
    symbolHeight: 80,
    symbolWidth: 80,
    enableAnimation: false,
    //Specifies the preview size and position to symbol palette items.
    symbolPreview: {
        height: 100,
        width: 100,
        offset: {
            x: 0.5,
            y: 0.5
        }
    },
    //Sets the margin of the dragging helper relative to the mouse cursor
    symbolMargin: {
        left: 12,
        right: 12,
        top: 12,
        bottom: 12
    },
    getSymbolInfo: (symbol: NodeModel): SymbolInfo => {
        return {
            fit: true
        };
    }
});
palette.appendTo('#element');


