


var defaultSidebar = new ej.navigations.Sidebar({
    width: "280px",
    type: "Push",
    target: document.querySelector('.maincontent')
    });
    defaultSidebar.appendTo('#default-sidebar');
});
//end of Sidebar initialization

//toggle button initialization
var togglebtn = new ej.buttons.Button({iconCss: 'e-icons burg-icon', isToggle: true, content:'Open'}, '#toggle');

//Click Event.
document.getElementById('toggle').onclick = function () {
        if (document.getElementById('toggle').classList.contains('e-active')) {
            togglebtn.content = 'Close';
            defaultSidebar.show();
        } else {
            togglebtn.content = 'Open';
            defaultSidebar.hide();
        }
    };

// Close the Sidebar
document.getElementById('close').onclick = function () {
        defaultSidebar.hide();
        document.getElementById('toggle').classList.remove('e-active');
        togglebtn.content = 'Open'
    };

let positionLeft = new ej.buttons.RadioButton({ label: 'Left', name: 'state', checked: true,change:Change });
positionLeft.appendTo('#left');

//unchecked state.
let positionRight = new ej.buttons.RadioButton({ label: 'Right', name: 'state',change:Change });
positionRight.appendTo('#right');

function Change(args){
  defaultSidebar.position = (args.event.target.id == "left") ? "Left" : "Right";
}



