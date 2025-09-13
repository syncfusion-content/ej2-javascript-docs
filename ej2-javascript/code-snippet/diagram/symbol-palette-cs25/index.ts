import {
  SymbolPalette, NodeModel
} from '@syncfusion/ej2-diagrams';

const checkBox = document.getElementById("showTooltip");

// Initialize the basic shapes for the symbol palette.
function getBasicShapes() {
  const basicShapes: NodeModel[] = [
    { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
    { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
    { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
    { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
    { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
    { id: 'Diamond', shape: { type: 'Basic', shape: 'Diamond' } },
    { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
    { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' } },
  ];
  return basicShapes;
}

// Initialize the flow shapes for the symbol palette.
function getFlowShapes() {
  const flowShapes: NodeModel[] = [
    { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
    { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
    { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
    { id: 'Document', shape: { type: 'Flow', shape: 'Document' } },
    { id: 'PreDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
    { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' } },
    { id: 'Card', shape: { type: 'Flow', shape: 'Card' } },
    { id: 'Collate', shape: { type: 'Flow', shape: 'Collate' } },
  ];
  return flowShapes;
}

// Initializes the symbol palette.
let palette: SymbolPalette = new SymbolPalette({
  expandMode: 'Multiple',
  palettes: [
        { id: 'flow', expanded: true, symbols: getFlowShapes(), title: 'Flow Shapes' },
        { id: 'basic', expanded: true, symbols: getBasicShapes(), title: 'Basic Shapes' }
    ],
  getNodeDefaults: function (symbol) {
    symbol.style.fill = '#6495ED';
    symbol.style.strokeColor = '#6495ED';
    return symbol;
  },
  width: '600px',
  height: '300px',
  symbolHeight: 70,
  symbolWidth: 70,
  symbolPreview: { height: 80, width: 80 },
  symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },

  // Enable/disable tooltip for the symbols.
  getSymbolInfo: function (symbol) {
    return { showTooltip: (checkBox as any).checked };
  },
});
palette.appendTo('#element');

let tooltipCheckBox = document.getElementById('showTooltip');
if (tooltipCheckBox) {
  tooltipCheckBox.onclick = function (args) {
    palette.refresh();
  };
}