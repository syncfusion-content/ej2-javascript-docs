// initializes the MaskedTextBox component
var mask1 = new ej.inputs.MaskedTextBox({
        // sets mask with the mask element '#' which accepts any single digit from '0' to '9',
        // space, + and - signs
        mask: '#####',
        placeholder: 'Mask ##### (ex: 012+-)',
        floatLabelType: 'Always'
});

mask1.appendTo('#mask1');

var mask2 = new ej.inputs.MaskedTextBox({
        // sets mask format with the mask element 'L' which allows only alphabets('A-Z and a-z')
        mask: 'LLLLLL',
        placeholder: 'Mask LLLLLL (ex: Sample)',
        floatLabelType: 'Always'
});

mask2.appendTo('#mask2');

var mask3 = new ej.inputs.MaskedTextBox({
        // sets mask format with the mask element '&' which allows `alphabets`, `numbers`
        // and `special characters`
        mask: '&&&&&',
        placeholder: 'Mask &&&&& (ex: A12@#)',
        floatLabelType: 'Always'
});

mask3.appendTo('#mask3');

var mask4 = new ej.inputs.MaskedTextBox({
        // sets mask format with the mask element `>` which converts all characters that follow
        // to upper case and `<` which converts all characters that follow to lower case
        mask: '>LLL<LLL',
        placeholder: 'Mask >LLL<LL (ex: SAMple)',
        floatLabelType: 'Always'
});

mask4.appendTo('#mask4');

var mask5 = new ej.inputs.MaskedTextBox({
        // sets mask format with the mask element '\\' which turns mask element `A` into
        // a literal and it displays the alphabet `A`
        mask: '\\A999',
        placeholder: 'Mask \\A999 (ex: A321)',
        floatLabelType: 'Always'
});

mask5.appendTo('#mask5');

