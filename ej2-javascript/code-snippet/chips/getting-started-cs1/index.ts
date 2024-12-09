

import { ChipList } from '@syncfusion/ej2-buttons';

// Initialize and Render Chip control

 new ChipList({ chips: ["Janet Leverling"]}, '#chip');

 let loader = document.getElementById('loader');
 let container = document.getElementById('container');
 if (loader) {
     loader.style.display = "none";
 }
 if (container) {
     container.style.visibility = "visible";
 }
