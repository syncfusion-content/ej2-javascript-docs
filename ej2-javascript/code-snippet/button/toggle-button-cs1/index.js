ej.base.enableRipple(true);

var togglebtn = new ej.buttons.Button({cssClass: `e-flat`, iconCss: 'e-btn-sb-icon e-play-icon', isToggle: true, content:'Play'}, '#toggelbtn');

//Click Event.
    document.getElementById('toggelbtn').onclick = function () {
        if (document.getElementById('toggelbtn').classList.contains('e-active')) {
            togglebtn.content = 'Pause';
            togglebtn.iconCss = 'e-btn-sb-icon e-pause-icon';
        } else {
            togglebtn.content = 'Play';
            togglebtn.iconCss = 'e-btn-sb-icon e-play-icon';
        }
    };

