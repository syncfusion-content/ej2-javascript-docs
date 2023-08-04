

import { ImageEditor,ZoomSettingsModel } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    zoomSettings: {minZoomFactor: 0.1},
    zoomLevel: 1,
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
            }
        }
    });
    imageEditorObj.appendTo('#imageeditor');

     //Button click
    let button: Button = new Button({cssClass: `e-primary`, content:'Click'}, '#btnClick');
    document.getElementById('btnClick').onclick = (): void => {
        if (imageEditorObj.zoomLevel < 1) {
            imageEditorObj.zoomLevel -= 0.1;
        }
        else {
            imageEditorObj.zoomLevel -= 1;
        }
        if (imageEditorObj.zoomLevel < imageEditorObj.zoomSettings.minZoomFactor) {
            imageEditorObj.zoomLevel = imageEditorObj.zoomSettings.minZoomFactor;
        }
        imageEditorObj.zoom(imageEditorObj.zoomLevel); // Zoom out
    }


