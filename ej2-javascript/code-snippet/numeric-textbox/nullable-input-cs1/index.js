// initializes the NumericTextBox component
var numeric = new ej.inputs.NumericTextBox({
    // sets value to the NumericTextBox
    min: 10,
    max: 100,
    placeholder: 'NumericTextbox',
    floatLabelType: 'Always',
    created: function(args) {
        //  prevents nullable value during initialization
        if (this.value==null) {
          this.value=0;
        }
    },
    blur: function(args) {
         // prevents nullable input while focus out
            if (args.value==null) 
              this.value=0;
    }
});
// renders initialized NumericTextBox
numeric.appendTo('#numeric1');


