var L10n = ej.base.L10n;

L10n.load({
    'ar-AE': {
      'numerictextbox': { incrementTitle: 'قيمة الزيادة', decrementTitle: 'قيمة تناقص'}
    }
});

var currency = new ej.inputs.NumericTextBox({
    // sets `Arabic` culture using the culture value 'ar-AE'
    locale: 'ar-AE',
    value: 100,
    floatLabelType: 'Auto',
    enableRtl: true
 });

currency.appendTo('#numeric');


