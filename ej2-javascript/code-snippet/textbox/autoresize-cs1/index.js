// Initialize TextBox component
var autoResize = new ej.inputs.TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Auto',
    value: "Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center",
    created: function () {
        this.addAttributes({rows: "1"});
        this.element.style.height = "auto";
        this.element.style.height = (this.element.scrollHeight-7) +"px";
    },
    input: function () {
        this.element.style.height = "auto";
        this.element.style.height = (this.element.scrollHeight)+"px";
    }
});

// Render initialized TextBox
autoResize.appendTo('#default');

