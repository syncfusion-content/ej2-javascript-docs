import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('flower.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
    }
});
imageEditorObj.appendTo('#imageeditor');

(document.getElementById('fitwidth') as HTMLElement).onclick = function () {
    imageEditorObj.zoom(1); // Reset zoom to original size before applying Fit Width
    const containerWidth: number = imageEditorObj.upperCanvas.width;
    const { width: oldWidth }: { width: number } = imageEditorObj.getImageDimension();
    let imageWidth: number = oldWidth, zoomFactor: number = 0.1, newZoom: number = 1;
    while (imageWidth < containerWidth) {
        newZoom++;
        imageWidth = oldWidth * (1 + zoomFactor);
        zoomFactor += 0.1;
    }
    imageEditorObj.zoom(newZoom);
};

(document.getElementById('fitheight') as HTMLElement).onclick = function () {
    imageEditorObj.zoom(1); // Reset zoom to original size before applying Fit Height
    const containerHeight: number = imageEditorObj.upperCanvas.height;
    const { height: oldHeight }: { height: number } = imageEditorObj.getImageDimension();
    let imageHeight: number = oldHeight, zoomFactor: number = 0.1, newZoom: number = 1;
    while (imageHeight < containerHeight) {
        newZoom++;
        imageHeight = oldHeight * (1 + zoomFactor);
        zoomFactor += 0.1;
    }
    imageEditorObj.zoom(newZoom);
};
