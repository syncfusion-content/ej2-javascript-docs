ej.base.enableRipple(true);
   //Sidebar initialization
   var defaultSidebar = new ej.navigations.Sidebar({
        type: "Push",
        target: document.querySelector('.maincontent')
    });
    defaultSidebar.appendTo('#default-sidebar');
    //end of sidebar initialization

    //toggle button initialization

    var togglebtn = new ej.buttons.Button({iconCss: 'e-icons burg-icon', isToggle: true, content:'Open'}, '#toggle');

    //Click Event.
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
    document.getElementById('close').onclick = function(){
        defaultSidebar.hide();
        document.getElementById('toggle').classList.remove('e-active');
        togglebtn.content = 'Open'
    };

    var typeOver = new ej.buttons.RadioButton({ label: 'Over', name: 'state', checked: true, change: Change });
    typeOver.appendTo('#over');

    //unchecked state.
    var typePush = new ej.buttons.RadioButton({ label: 'Push', name: 'state', change: Change });
    typePush.appendTo('#push');

    var typeSlide = new ej.buttons.RadioButton({ label: 'Slide', name: 'state', change: Change });
    typeSlide.appendTo('#slide');

    //unchecked state.
    var typeAuto = new ej.buttons.RadioButton({ label: 'Auto', name: 'state', change: Change });
    typeAuto.appendTo('#auto');

    // Change the type of the Sidebar
  function Change(args) {
        if (args.event.target.id == "over") {
            defaultSidebar.type = "Over";
             defaultSidebar.dataBind();
        } else if (args.event.target.id == "push") {
            defaultSidebar.type = "Push";
             defaultSidebar.dataBind();
        }
        else if (args.event.target.id == "slide") {
            defaultSidebar.type = "Slide";
             defaultSidebar.dataBind();
        }
        else {
            defaultSidebar.type = "Auto";
            defaultSidebar.dataBind();
        }
}

