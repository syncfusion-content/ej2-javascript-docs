

import {Accordion} from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { Ajax } from '@syncfusion/ej2-base';

enableRipple(true);

let ajax: Ajax = new Ajax('./ajax.html', 'GET', true);
ajax.send().then();
ajax.onSuccess = (data: string): void => {
  let ctn2: string = data;
  let accordion: Accordion = new Accordion({
    items: [
      { header: 'Department', content: '#acrdnContent1' },
      { header: 'Platform', content: '#acrdnContent2' },
      { header: 'Employee Details', content: ctn2 }
    ]
 });
  accordion.appendTo('#element');
}



