// Initialize Diagram component.
var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    nodeTemplate: '#nodeTemplate'
});

// Initialize the symbol palette.
var palette = new ej.diagrams.SymbolPalette({
    palettes: [
        {
            id: 'basic', expanded: true, symbols: [
                {
                    id: 'node1',
                    width: 100,
                    height: 100,
                    style: { fill: 'red', strokeColor: 'white' },
                    shape: {
                        type: 'HTML'
                    }
                },
                {
                    id: 'node2',
                    width: 100,
                    height: 100,
                    style: { fill: '#6BA5D7', strokeColor: 'white' },
                    shape: {
                        type: 'Native',
                        scale: 'Stretch'
                    }
                }
            ], title: 'Basic Shapes'
        }
    ],
    nodeTemplate: '#nodeTemplate'
});

// Render initialized symbol palette.
palette.appendTo('#element');

// Render initialized diagram.
diagram.appendTo('#diagram');