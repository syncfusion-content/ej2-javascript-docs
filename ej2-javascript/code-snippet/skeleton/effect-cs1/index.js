ej.base.enableRipple(true);

// Initialize Skeleton control
var listProfile = new ej.notifications.Skeleton({
    shape: 'Circle',
    width: '40px',
    height: '40px',
    shimmerEffect: 'Pulse'
});

// Render initialized Skeleton.
listProfile.appendTo('#listProfile');

var listProfile1 = new ej.notifications.Skeleton({
    shape: 'Circle',
    width: '40px',
    height: '40px',
    shimmerEffect: 'Pulse'
});

listProfile1.appendTo('#listProfile1');

var listCtn = new ej.notifications.Skeleton({
    width: '60%',
    height: '15px',
    shimmerEffect: 'Pulse'
});

listCtn.appendTo('#listCtn');

var listCtn1 = new ej.notifications.Skeleton({
    width: '60%',
    height: '15px',
    shimmerEffect: 'Pulse'
});

listCtn1.appendTo('#listCtn1');

var distCtn = new ej.notifications.Skeleton({
    width: '40%',
    height: '15px',
    shimmerEffect: 'Pulse'
});

distCtn.appendTo('#distCtn');

var distCtn1 = new ej.notifications.Skeleton({
    width: '40%',
    height: '15px',
    shimmerEffect: 'Pulse'
});

distCtn1.appendTo('#distCtn1');

