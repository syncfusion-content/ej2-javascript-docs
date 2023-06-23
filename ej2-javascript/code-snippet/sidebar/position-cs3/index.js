ej.base.enableRipple(true);
   //sidebar initialization
   var defaultSidebar = new ej.navigations.Sidebar({
        showBackdrop: true,
        enablePersistence:true,
        type: "Push",
        width: '280px'
    });
    defaultSidebar.appendTo('#default-sidebar');
    //end of Sidebar initialization

    //toggle button initialization

    var togglebtn = new ej.buttons.Button({iconCss: 'e-icons burg-icon', isToggle: true, content:'Open'}, '#toggle');

    //Click Event for toggle button to triger show/hide methods of Sidebar
    document.getElementById('toggle').onclick = function(){
        if (document.getElementById('toggle').classList.contains('e-active')) {
            togglebtn.content = 'Close';
            defaultSidebar.show();
        } else {
            togglebtn.content = 'Open';
            defaultSidebar.hide();
        }
    };

    // Close the sidebar
    document.getElementById('close').onclick = function() {
        defaultSidebar.hide();
        document.getElementById('toggle').classList.remove('e-active');
        togglebtn.content = 'Open'
    };

    var positionLeft = new ej.buttons.RadioButton({ label: 'Left', name: 'state', checked: true,change:Change });
    positionLeft.appendTo('#left');

    //unchecked state
    var positionRight = new ej.buttons.RadioButton({ label: 'Right', name: 'state',change:Change });
    positionRight.appendTo('#right');

    //change the position of the Sidebars
    function Change(args){
    defaultSidebar.position = (args.event.target.id == "left") ? "Left" : "Right";
    }

