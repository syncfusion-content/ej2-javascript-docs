

import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize Skeleton control
let listProfile: Skeleton = new Skeleton({
    shape: 'Circle',
    width: '40px',
    height: '40px',
    shimmerEffect: 'Pulse'
});

// Render initialized Skeleton.
listProfile.appendTo('#listProfile');

let listProfile1: Skeleton = new Skeleton({
    shape: 'Circle',
    width: '40px',
    height: '40px',
    shimmerEffect: 'Pulse'
});

listProfile1.appendTo('#listProfile1');

let listCtn: Skeleton = new Skeleton({
    width: '60%',
    height: '15px',
    shimmerEffect: 'Pulse'
});

listCtn.appendTo('#listCtn');

let listCtn1: Skeleton = new Skeleton({
    width: '60%',
    height: '15px',
    shimmerEffect: 'Pulse'
});

listCtn1.appendTo('#listCtn1');

let distCtn: Skeleton = new Skeleton({
    width: '40%',
    height: '15px',
    shimmerEffect: 'Pulse'
});

distCtn.appendTo('#distCtn');

let distCtn1: Skeleton = new Skeleton({
    width: '40%',
    height: '15px',
    shimmerEffect: 'Pulse'
});

distCtn1.appendTo('#distCtn1');


