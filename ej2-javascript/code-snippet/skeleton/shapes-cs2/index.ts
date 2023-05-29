

import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize Skeleton control for circle shape
let cardProfile: Skeleton = new Skeleton({shape: 'Circle', width: '60px', height: '60px'});

// Render initialized Skeleton.
cardProfile.appendTo('#cardProfile');

let text1: Skeleton = new Skeleton({width: '30%', height: '15px'});
text1.appendTo('#text1');

let text2: Skeleton = new Skeleton({width: '15%', height: '15px'});
text2.appendTo('#text2');

let cardImage: Skeleton = new Skeleton({shape: 'Rectangle', width: '100%', height: '150px'});
cardImage.appendTo('#cardImage');

let rightOption: Skeleton = new Skeleton({shape: 'Rectangle', width: '20%', height: '32px'});
rightOption.appendTo('#rightOption');

let leftOption: Skeleton = new Skeleton({shape: 'Rectangle', width: '20%', height: '32px'});
leftOption.appendTo('#leftOption');


