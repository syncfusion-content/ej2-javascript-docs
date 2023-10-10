//Render iframe Button
var iframeContent = new ej.buttons.Button({
    cssClass: 'e-outline',
    isPrimary: true
});
iframeContent.appendTo('#iframeContent');

//Render iframe Tooltip
var TooltipContent = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    content: '<iframe src="https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard" id="tooltipFrame"></iframe>',
    position: 'BottomCenter',
    opensOn: 'Click',
    width: '350',
    height: '250'
});
TooltipContent.appendTo('#iframeContent');

