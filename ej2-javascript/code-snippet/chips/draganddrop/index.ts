

import { ChipList } from '@syncfusion/ej2-buttons';

// Initialize and Render Chip control

new ChipList({
    chips: [
        { text: 'Report', cssClass: 'e-info' },
        { text: 'Meeting', cssClass: 'e-warning' },
        { text: 'Review', cssClass: 'e-warning' },
        { text: 'Budget', cssClass: 'e-danger' },
        { text: 'Design', cssClass: 'e-primary' },
        { text: 'Presentation', cssClass: 'e-success' },
        { text: 'Email', cssClass: 'e-success' },
        { text: 'Research', cssClass: 'e-success' }
    ],
    allowDragAndDrop: true,
}, '#choice-container');

new ChipList({
    chips: [],
    allowDragAndDrop: true 
}, '#selection-container');
