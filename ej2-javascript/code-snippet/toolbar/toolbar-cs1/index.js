ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
width: 300,
overflowMode: 'Popup',
items: [
    { type: 'Button', prefixIcon: 'e-cut-icon', text:'Cut', showTextOn:'Overflow' },
    { type: 'Button', prefixIcon: 'e-copy-icon', text:'Copy', showTextOn:'Overflow' },
    { type: 'Button', prefixIcon: 'e-paste-icon', text:'Paste', showTextOn:'Overflow' },
    { type: 'Separator'},
    { type: 'Button', prefixIcon: 'e-bold-icon', text:'Bold', showTextOn:'Overflow' },
    { type: 'Button', prefixIcon: 'e-underline-icon', text:'Underline', showTextOn:'Overflow' },
    { type: 'Button', prefixIcon: 'e-italic-icon', text:'Italic', showTextOn:'Overflow' },
    { type: 'Separator'},
    { type: 'Button', prefixIcon: 'e-ascending-icon', text:'A-Z Sort', showTextOn:'Overflow' },
    { type: 'Button', prefixIcon: 'e-descending-icon', text:'Z-A Sort', showTextOn:'Overflow' },
    ]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        toolbar.element.focus();
    }
};

