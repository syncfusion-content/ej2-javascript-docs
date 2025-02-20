

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition
let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [
        {
            id: 'rotate-left',
            prefixIcon: 'e-icons e-anti-clock-wise',
            tooltipText: 'Rotate Left',
            align: 'Left',
        },
        {
            id: 'rotate-right',
            prefixIcon: 'e-icons e-clock-wise',
            tooltipText: 'Rotate Right',
            align: 'Left',
        },
        {
            id: 'annotate',
            prefixIcon: 'e-icons e-annotation',
            tooltipText: 'Annotate',
            align: 'Center',
            disabled: true,
        },
        {
            id: 'save',
            prefixIcon: 'e-icons e-save',
            tooltipText: 'Save',
            align: 'Right',
        },
    ],
    toolbarItemClicked: (args: any) => {
        if (args.item.id === 'rotate-left') {
            imageEditorObj.rotate(-90);
        } else if (args.item.id === 'rotate-right') {
            imageEditorObj.rotate(90);
        } else if (args.item.id === 'save') {
            imageEditorObj.export('PNG');
        }
    },
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
    },
});
imageEditorObj.appendTo('#imageeditor');
