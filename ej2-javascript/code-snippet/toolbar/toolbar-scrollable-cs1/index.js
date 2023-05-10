ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
width:600,
items: [
        { type: 'Button', prefixIcon: 'e-cut-icon', text:'Cut' },
        { type: 'Button', prefixIcon: 'e-copy-icon', text:'Copy' },
        { type: 'Button', prefixIcon: 'e-paste-icon', text:'Paste' },
        { type: 'Separator'},
        { type: 'Button', prefixIcon: 'e-bold-icon', text:'Bold' },
        { type: 'Button', prefixIcon: 'e-underline-icon', text:'Underline' },
        { type: 'Button', prefixIcon: 'e-italic-icon', text:'Italic' },
        { type: 'Button', prefixIcon: 'e-color-icon', text:'Color-Picker' },
        { type: 'Separator'},
        { type: 'Button', prefixIcon: 'e-ascending-icon', text:'A-Z Sort' },
        { type: 'Button', prefixIcon: 'e-descending-icon', text:'Z-A Sort' },
        { type: 'Button', prefixIcon: 'e-clear-icon', text:'Clear' }
        ]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

