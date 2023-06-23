ej.base.enableRipple(true);

//Initialize Accordion component

    var accordion = new ej.navigations.Accordion({
    items: [
        { header: 'ASP.NET', expanded: 'true', content: 'Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.' },
        { header: 'ASP.NET MVC', content: 'The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.' },
        { header: 'JavaScript', content: 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.' },
    ]
    });

//Render initialized Accordion component
    accordion.appendTo('#element');

    var listObjExpand = new ej.dropdowns.DropDownList({ 
        index: 0,
        placeholder: 'Select a animate type',
        popupHeight: '150px',
        change: () => { valueChange();  }
     });
    listObjExpand.appendTo('#expandAnimation');
    valueChange();
    
    var listObjCollapse = new ej.dropdowns.DropDownList({ 
        index: 1,
        placeholder: 'Select a animate type',
        popupHeight: '150px',
        change: () => { valueChange1();  }
     });
    listObjCollapse.appendTo('#collapseAnimation');
    valueChange1();

    function valueChange() {
      accordion.animation.expand.effect = (listObjExpand.value);
    }
    function valueChange1() {
      accordion.animation.collapse.effect = (listObjCollapse.value);
    }

