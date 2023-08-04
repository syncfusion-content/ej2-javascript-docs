

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
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
    document.getElementById('rectangleClick').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawRectangle(dimension.x, dimension.y);
    }
    document.getElementById('ellipseClick').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawEllipse(dimension.x, dimension.y);
    }
    document.getElementById('lineClick').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawLine(dimension.x, dimension.y);
    }
    document.getElementById('arrowClick').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawArrow(dimension.x, dimension.y+10, dimension.x+50, dimension.y+10, 10);
    }
    document.getElementById('pathClick').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawPath([{x: dimension.x, y: dimension.y}, {x: dimension.x+50, y: dimension.y+50}, {x: dimension.x+20, y: dimension.y+50}], 8);
    }


