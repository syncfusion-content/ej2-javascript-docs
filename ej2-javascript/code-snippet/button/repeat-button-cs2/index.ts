import { Button, ClickedEventArgs } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let initialCount: number = 0;
let repeatCount: number = 0;

let btnObj: Button = new Button({ enableRepeat: true, repeatDelay: 400, repeatInterval: 100 });
btnObj.appendTo('#repeat-btn');

btnObj.clicked = (args: ClickedEventArgs) => {
    if (args.isRepeat) {
        repeatCount++;
        (document.getElementById('repeat-count') as HTMLElement).textContent = String(repeatCount);
    } else {
        initialCount++;
        (document.getElementById('initial-count') as HTMLElement).textContent = String(initialCount);
    }
};

(document.getElementById('delay-input') as HTMLInputElement).addEventListener('change', (e: Event) => {
    const val: number = parseInt((e.target as HTMLInputElement).value, 10);
    if (!isNaN(val) && val >= 0) {
        btnObj.repeatDelay = val;
    }
});

(document.getElementById('interval-input') as HTMLInputElement).addEventListener('change', (e: Event) => {
    const val: number = parseInt((e.target as HTMLInputElement).value, 10);
    if (!isNaN(val) && val >= 0) {
        btnObj.repeatInterval = val;
    }
});

(document.getElementById('disabled-toggle') as HTMLInputElement).addEventListener('change', (e: Event) => {
    btnObj.disabled = (e.target as HTMLInputElement).checked;
});

(document.getElementById('reset-btn') as HTMLInputElement).addEventListener('click', () => {
    initialCount = 0;
    repeatCount = 0;
    (document.getElementById('initial-count') as HTMLElement).textContent = '0';
    (document.getElementById('repeat-count') as HTMLElement).textContent = '0';
});

