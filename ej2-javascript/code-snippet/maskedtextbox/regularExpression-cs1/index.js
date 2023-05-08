// initializes the MaskedTextBox component
var mask = new ej.inputs.MaskedTextBox({
        // sets set of regular expression for each input place as mask
         placeholder: 'IP Address (ex: 212.212.111.222)',
         floatLabelType: 'Always', 
         mask: '[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]' 
});

mask.appendTo('#mask');

