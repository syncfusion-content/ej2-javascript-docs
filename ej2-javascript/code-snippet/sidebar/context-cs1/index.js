ej.base.enableRipple(true);
   //sidebar initialization
   var defaultSidebar = new ej.navigations.Sidebar({
        width: "280px",
        type: "Push",
        target: 'maincontent'
    });
    defaultSidebar.appendTo('#default-sidebar');
    //end of sidebar initialization

    //toggle button initialization
    var togglebtn = new  ej.buttons.Button({iconCss: 'e-icons burg-icon', isToggle: true, content:'Open'}, '#toggle');

    // Close the sidebar on clicking the close button
    document.getElementById('close').onclick = function() {
        defaultSidebar.hide();
        document.getElementById('toggle').classList.remove('e-active');
        togglebtn.content = 'Open'
    };

    //Click the toggle button to expand/collapse the sidebar.
    document.getElementById('toggle').onclick = function() {
        if (document.getElementById('toggle').classList.contains('e-active')) {
            togglebtn.content = 'Close';
            defaultSidebar.show();
        } else {
            togglebtn.content = 'Open';
            defaultSidebar.hide();
        }
    };



