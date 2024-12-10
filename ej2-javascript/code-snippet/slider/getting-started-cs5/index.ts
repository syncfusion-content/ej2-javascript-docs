


import { Slider } from '@syncfusion/ej2-inputs';

// Initialization of Slider
let slider: Slider = new Slider({value: 30});
// Render initialized Slider
slider.appendTo('#slider');

// Added code to hide the loader element.
let loader = document.getElementById('loader');
let container = document.getElementById('container');
if (loader) {
    loader.style.display = "none";
}
if (container) {
    container.style.visibility = "visible";
}


