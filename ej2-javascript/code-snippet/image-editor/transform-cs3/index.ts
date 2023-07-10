

import { ImageEditor,ZoomSettingsModel } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    zoomSettings: {maxZoomFactor: 30},
    zoomLevel: 1,
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
            }
        }
    });
    imageEditorObj.appendTo('#imageeditor');

     //Button click
    let button: Button = new Button({cssClass: `e-primary`, content:'Click'}, '#btnClick');
    document.getElementById('btnClick').onclick = (): void => {
        if (imageEditorObj.zoomLevel < 1) {
            imageEditorObj.zoomLevel += 0.1;
        }
        else {
            imageEditorObj.zoomLevel += 1;
        }
        if (imageEditorObj.zoomLevel > imageEditorObj.zoomSettings.maxZoomFactor) {
            imageEditorObj.zoomLevel = imageEditorObj.zoomSettings.maxZoomFactor;
        }
        imageEditorObj.zoom(imageEditorObj.zoomLevel); // Zoom in
    }


