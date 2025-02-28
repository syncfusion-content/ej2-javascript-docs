import { Tooltip } from '@syncfusion/ej2-popups';
import { Draggable } from '@syncfusion/ej2-base';

let tooltip: Tooltip;
tooltip = new Tooltip({
    content: 'Drag me !!!',
    target: '#demoSmart',
    animation: { open: { effect: 'None' }, close: { effect: 'None' } }
}, '#targetContainer');
let element: HTMLElement = document.getElementById('demoSmart') as HTMLElement;
let drag: Draggable = new Draggable(element, {
    clone: false,
    dragArea: '#targetContainer',
    drag: (args: any) => {
        tooltip.refresh(args.element);
    },
    dragStart: (args: any) => {
        tooltip.open(args.element);
    },
    dragStop: (args: any) => {
        tooltip.close();
    }
});