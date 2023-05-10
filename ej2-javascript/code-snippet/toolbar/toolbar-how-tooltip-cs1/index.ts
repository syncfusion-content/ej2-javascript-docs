


import { Tooltip } from '@syncfusion/ej2-popups';
import { Toolbar } from '@syncfusion/ej2-navigations';

let toolbar: Toolbar = new Toolbar({
    width: 300,
    items: [
        { text: "Cut", tooltipText: 'Cut' },
        { text: "Copy", tooltipText: 'Copy' },
        { text: "Paste", tooltipText: 'Paste' },
        { text: "Undo", tooltipText: 'Undo' },
        { text: "Redo", tooltipText: 'Redo' }
    ]
});
toolbar.appendTo('#element');
let tooltip: Tooltip = new Tooltip({
  target: '#element [title]',
 });
tooltip.appendTo('#Tooltip');



