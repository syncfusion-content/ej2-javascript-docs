

import {Accordion, AccordionEffect} from '@syncfusion/ej2-navigations';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let accordion: Accordion = new Accordion({
    items: [
      { header: 'ASP.NET', content: 'Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.' },
      { header: 'ASP.NET MVC', content: 'The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.' },
      { header: 'JavaScript', content: 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.' },
    ]
});
accordion.appendTo('#element');
let listObjExpand: DropDownList = new DropDownList({
        index: 0,
        placeholder: 'Select a animate type',
        popupHeight: '150px',
        change: () => { valueChange();  }
    });
    listObjExpand.appendTo('#expandAnimation');
    valueChange();
let listObjCollapse: DropDownList = new DropDownList({
        index: 1,
        placeholder: 'Select a animate type',
        popupHeight: '150px',
        change: () => { valueChange1();  }
    });
    listObjCollapse.appendTo('#collapseAnimation');
    valueChange1();

function valueChange(): void {
  accordion.animation.expand.effect = <AccordionEffect>(listObjExpand.value);
  }
function valueChange1(): void {
  accordion.animation.collapse.effect = <AccordionEffect>(listObjCollapse.value);
  }


