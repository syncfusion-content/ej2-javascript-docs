


import { TextBox } from '@syncfusion/ej2-inputs';

// Initialize TextBox component
let autoResize: TextBox = new TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Auto',
    value: "Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center",
    created: (args: any)=> {
        autoResize.addAttributes({rows: "1"});
        autoResize.element.style.height = "auto";
        autoResize.element.style.height = (autoResize.element.scrollHeight-7) +"px";
    },
    input: (args: any)=> {
        args.event.currentTarget.style.height = "auto";
        args.event.currentTarget.style.height = (args.event.currentTarget.scrollHeight)+"px";
    }
});

// Render initialized TextBox
autoResize.appendTo('#default');


