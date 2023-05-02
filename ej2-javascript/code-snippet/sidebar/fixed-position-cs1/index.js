ej.base.enableRipple(true);
   //Initialization of sidebar 
   var defaultSidebar = new ej.navigations.Sidebar({
       width:'260px',created:oncreate
    });
    defaultSidebar.appendTo('#default-sidebar');
    //End of sidebar element

           // Toggle the Sidebar
    document.getElementById('hamburger').addEventListener('click', function () {
        defaultSidebar.toggle();
    });

    function oncreate() {
        this.element.style.visibility = '';
    }

