

import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize Skeleton control
let circle: Skeleton = new Skeleton({
    shape: 'Circle',
    width: "60px",
    cssClass: 'e-customize'
});

// Render initialized Skeleton
circle.appendTo('#circleSkeleton');


