ej.base.L10n.load({
    'de-DE': {
        'slider': {
            incrementTitle: 'Erhöhen, ansteigen', decrementTitle: 'verringern'
        }
    }
});
// Initialize range Slider component
var rangeObj = new ej.inputs.Slider({
    value: [30, 70],
    type: 'Range',
    locale: 'de-DE',
    showButtons: true
});
rangeObj.appendTo('#slider');


