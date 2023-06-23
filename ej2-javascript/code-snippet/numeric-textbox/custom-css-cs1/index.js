// initializes the NumericTextBox component
var numeric = new ej.inputs.NumericTextBox({
    // sets value to the NumericTextBox
     value: 10,
     placeholder: 'Enter value :',
     floatLabelType: 'Always',
});

numeric.appendTo('#numeric1');

//adding custom css class to NumericTextBox
var x=document.getElementById("numeric1").ej2_instances[0];
x.cssClass="e-style";


