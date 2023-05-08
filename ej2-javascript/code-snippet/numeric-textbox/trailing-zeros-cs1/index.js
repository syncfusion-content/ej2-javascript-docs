var numericFocus= function () { 
      var numericObj = this.ej2_instances ? this.ej2_instances[0] : this;
      numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
    }
    // Render the Numeric Textbox
  var numeric = new ej.inputs.NumericTextBox({
        value: 10,
        decimals:2,
        format: 'n2',
        change: numericFocus
    });
    numeric.appendTo('#numeric');
    document.getElementById('numeric').addEventListener('focus', numericFocus);
    
    
    



