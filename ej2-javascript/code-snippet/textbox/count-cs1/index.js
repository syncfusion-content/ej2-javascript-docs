// Initialize TextBox component
var countChar = new ej.inputs.TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Auto',
    input: function () {
        var word, addresscountRem, addressCount;
        word = this.element.value;
        addressCount = word.length;
        addresscountRem = document.getElementById('numbercount');
        addresscountRem.textContent = addressCount+"/25";
    }
});

// Render initialized TextBox
countChar.appendTo('#default');

