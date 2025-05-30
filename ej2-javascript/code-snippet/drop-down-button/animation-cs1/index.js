ej.base.enableRipple(true);

//Initialize action items.
var items = [
    {
        text: 'Unread'
    },
    {
        text: 'Has Attachments'
    },
    {
        text: 'Categorized'
    },
    {
        separator: true
    },
    {
        text: 'Important'
    },
    {
        text: 'More Filters'
    }
];

// initialize DropDownButton component
var slideDownBtn = new ej.splitbuttons.DropDownButton({
    items: items,
    animationSettings: { effect: 'SlideDown', duration: 800, easing: 'ease' }
}, '#slideDownButton');
var fadeInBtn = new ej.splitbuttons.DropDownButton({
    items: items,
    animationSettings: { effect: 'FadeIn', duration: 800, easing: 'ease' }
}, '#fadeInButton');
var zoomInBtn = new ej.splitbuttons.DropDownButton({
    items: items,
    animationSettings: { effect: 'ZoomIn', duration: 800, easing: 'ease' }
}, '#zoomInButton');
