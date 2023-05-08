var title = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    position: 'BottomCenter',
    opensOn: 'Hover',
    beforeRender: onBeforeRender,
    content: document.getElementById('tooltip')
});
title.appendTo('#Title');

var btn = new ej.buttons.Button();
btn.appendTo('#Title');

function onBeforeRender(){
    if(document.getElementById('tooltip')) {
        document.getElementById('tooltip').style.display = 'block';
    }
}


