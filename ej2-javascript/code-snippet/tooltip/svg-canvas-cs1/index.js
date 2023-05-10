//Render Tooltip component
var square = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'SVG Square',
    target: '#square'
});
square.appendTo('#box');

var ellipse = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'SVG Ellipse',
    target: '#ellipse'
});
ellipse.appendTo('#box');

var polyline = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'SVG Polyline',
    target: '#polyline'
});
polyline.appendTo('#box');

var circle = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'Canvas Circle',
    target: '#circle'
});
circle.appendTo('#box');

var triangle = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'Canvas Triangle',
    target: '#triangle'
});

triangle.appendTo('#box');
var canvas = document.getElementById('triangle');
var context;
if (canvas.getContext) {
    context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(0, 50);
    context.lineTo(100, 50);
    context.lineTo(50, 0);
    context.fillStyle = "#FDA600";
    context.fill();
}
canvas = document.getElementById('circle');
context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 30;
context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = '#0450C2';
context.fill();

