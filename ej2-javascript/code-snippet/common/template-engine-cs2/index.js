var customHelper = {
    upperCase: function upperCase(str) {
        return str.toUpperCase();
    }
};

var data = { name: 'Aston Martin' };

var getDOMString = ej.base.compile('<div>${upperCase(name)}</div>', customHelper);

let opElem = getDOMString(data);

document.getElementById('element').appendChild(opElem[0]);

