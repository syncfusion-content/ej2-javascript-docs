ej.base.enableRipple(true);

// Initialize Skeleton control for circle shape
var cardProfile = new ej.notifications.Skeleton({shape: 'Circle', width: '60px', height: '60px'});

// Render initialized Skeleton.
cardProfile.appendTo('#cardProfile');

var text1 = new ej.notifications.Skeleton({width: '30%', height: '15px'});
text1.appendTo('#text1');

var text2 = new ej.notifications.Skeleton({width: '15%', height: '15px'});
text2.appendTo('#text2');

var cardImage = new ej.notifications.Skeleton({shape: 'Rectangle', width: '100%', height: '150px'});
cardImage.appendTo('#cardImage');

var rightOption = new ej.notifications.Skeleton({shape: 'Rectangle', width: '20%', height: '32px'});
rightOption.appendTo('#rightOption');

var leftOption = new ej.notifications.Skeleton({shape: 'Rectangle', width: '20%', height: '32px'});
leftOption.appendTo('#leftOption');

