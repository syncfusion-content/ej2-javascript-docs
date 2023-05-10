ej.base.enableRipple(true);

var dialogObj = new ej.popups.Dialog({
    header: `<span class='title'>Dialog</span>
    <span class='e-icons sf-icon-Maximize' id='max-btn' title='Maximize'></span>
    <span class='e-icons sf-icon-Minimize' id='min-btn' title='Minimize'></span>`,
    content: "This is a dialog with minimize and maximize buttons",
    showCloseIcon: true,
    buttons: [{ buttonModel: { isPrimary: true, content: 'Yes', iconCss: 'e-icons e-ok-icon' }, click: btnClick }, { buttonModel: { content: 'No', iconCss: 'e-icons e-close-icon' }, click: btnClick }],
    target: document.body,
    height: 'auto',
    width: '300px',
    animationSettings: { effect: 'Zoom' },
    closeOnEscape: true
});
dialogObj.appendTo('#dialog');

document.getElementById('openBtn').onclick = function () {
    dialogObj.show();
};

function btnClick() {
    dialogObj.hide();
}

let hide;
let isFullScreen;
let dialogOldPositions;

document.getElementById("max-btn").addEventListener("click", function() {
    let maximizeIcon;
      if (dialogObj.element.classList.contains('dialog-minimized')) {
        dialogObj.element.querySelector('#min-btn').classList.add('sf-icon-Minimize');
        dialogObj.element.querySelector('#min-btn').classList.remove('sf-icon-Restore');
        dialogObj.element.querySelector('#min-btn').setAttribute('title', 'Minimize');
      }
      if (!dialogObj.element.classList.contains('dialog-maximized') && !isFullScreen) {
        maximizeIcon = dialogObj.element.querySelector(".e-dlg-header-content .sf-icon-Maximize");
      } else {
        maximizeIcon = dialogObj.element.querySelector(".e-dlg-header-content .sf-icon-Restore");
      }
      if (!dialogObj.element.classList.contains('dialog-maximized')) {
        dialogObj.element.classList.add('dialog-maximized');
        dialogObj.show(true);
        maximizeIcon.classList.add('sf-icon-Restore');
        maximizeIcon.setAttribute('title', 'Restore');
        maximizeIcon.classList.remove('sf-icon-Maximize');
        dialogObj.element.querySelector('.e-dlg-content').classList.remove('hide-content');
        isFullScreen = true;
      } else {
        dialogObj.element.classList.remove('dialog-maximized');
        dialogObj.show(false);
        maximizeIcon.classList.remove('sf-icon-Restore');
        maximizeIcon.classList.add('sf-icon-Maximize');
        maximizeIcon.setAttribute('title', 'Maximize');
        dialogObj.element.querySelector('.e-dlg-content').classList.remove('hide-content');
        dialogObj.position = dialogOldPositions;
        dialogObj.dataBind();
        isFullScreen = false;
      }
  });
  
    document.getElementById("min-btn").addEventListener("click", function() {
      let minimizeIcon = dialogObj.element.querySelector(".e-dlg-header-content .sf-icon-Minimize");
      if (!dialogObj.element.classList.contains('e-dlg-fullscreen')) {
        if (!dialogObj.element.classList.contains('dialog-minimized')) {
          dialogOldPositions = { X: dialogObj.position.X, Y: dialogObj.position.Y }
          dialogObj.element.classList.add('dialog-minimized');
          dialogObj.element.classList.remove('dialog-maximized');
          dialogObj.element.querySelector('.e-dlg-content').classList.add('hide-content');
          dialogObj.position = { X: 'center', Y: 'bottom' };
          dialogObj.dataBind();
          minimizeIcon.classList.add('sf-icon-Restore');
          minimizeIcon.setAttribute('title', 'Restore');
        } else {
          dialogObj.element.classList.remove('dialog-minimized');
          dialogObj.element.querySelector('.e-dlg-content').classList.remove('hide-content');
          minimizeIcon.classList.add('sf-icon-Minimize');
          minimizeIcon.setAttribute('title', 'Minimize');
          minimizeIcon.classList.remove('sf-icon-Restore');
          dialogObj.position = dialogOldPositions;
          dialogObj.dataBind();
        }
      } else {
        dialogObj.show(false);
        dialogObj.element.classList.remove('dialog-maximized');
        dialogObj.element.classList.add('dialog-minimized');
        dialogObj.element.querySelector('.e-dlg-content').classList.add('hide-content');
        minimizeIcon.classList.remove('sf-icon-Minimize');
        minimizeIcon.removeAttribute('title');
        dialogObj.position = { X: 'center', Y: 'bottom' };
        dialogObj.dataBind();
        isFullScreen = true;
      }
    });

  

