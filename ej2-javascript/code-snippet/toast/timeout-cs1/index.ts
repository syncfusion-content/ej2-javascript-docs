

import {Toast} from '@syncfusion/ej2-notifications';
import { enableRipple, closest} from '@syncfusion/ej2-base';

enableRipple(true);
let toast: Toast = new Toast({
    title: 'Anjolie Stokes',
    content: '<p><img src="https://ej2.syncfusion.com/vue/demos/src/toast/resource/laura.png"></p>',
    position: { X: "Right", Y: "Bottom" },
    width: 230,
    height: 250,
        buttons : [{
        model: { content: "Ignore" }
    }, {
      model: { content: "reply" }
    }]
});
toast.appendTo('#elementToastTime');
toast.show();

document.getElementById('show_toast').onclick = () => {
  let value = parseInt(document.getElementById('toast_input_index').value)
  toast.show({timeOut: value});
}



