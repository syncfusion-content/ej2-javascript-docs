var L10n = ej.base.L10n;

L10n.load({
    'de': {
      'numerictextbox': { incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'}
    }
});

var currency = new ej.inputs.NumericTextBox({
    // sets `German` culture using the culture value 'de'
    locale: 'de',
    // sets the 'EUR' currency format
    currency: 'EUR',
    format: 'c2',
    value: 100,
 });

currency.appendTo('#numeric');

function loadCultureFiles(name) {
        var files = ['currencies.json', 'numbers.json'];
        var loader = ej.base.loadCldr;
        var loadCulture = function (prop) {
            var val, ajax;
            ajax = new ej.base.Ajax('http://ej2.syncfusion.com/javascript/demos/' + 'src/common/cldr-data/main/' + name + '/' + files[prop], 'GET', false);
            ajax.onSuccess = function (value) {
                val = value;
            };
            ajax.send();
            loader(JSON.parse(val));
        };
        for (var prop = 0; prop < files.length; prop++) {
            loadCulture(prop);
        }
    }

