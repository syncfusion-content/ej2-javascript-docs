

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
  width: '550px',
  height: '330px',
  fontFamily: {
    default: 'Arial', items: [{ id: 'arial', text: 'Arial' }, { id: 'brush script mt', text: 'Brush Script MT' },
    { id: 'papyrus', text: 'Papyrus' }, { id: 'times new roman', text: 'Times New Roman' }, { id: 'courier new', text: 'Courier New' }]
  },
  created: () => {
    if (Browser.isDevice) {
      imageEditorObj.open('bee-eater.png');
    } else {
      imageEditorObj.open('bee-eater.png');
    }
  }
});
imageEditorObj.appendTo('#imageeditor');
