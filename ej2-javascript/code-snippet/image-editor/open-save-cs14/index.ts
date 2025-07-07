

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition
let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    created: () => {
        imageEditorObj.open('bee-eater.png');
    }
});
imageEditorObj.appendTo('#imageEditor');

let containsBtn: Button = new Button({}, '#contains');
let coverBtn: Button = new Button({}, '#cover');
let stretchBtn: Button = new Button({}, '#stretch');

containsBtn.element.onclick = function () {
    imageEditorObj.open('bee-eater.png', true, {
        backgroundColor: '',
        width: 550,
        height: null,
        isAspectRatio: true
    });
};
coverBtn.element.onclick = function () {
    imageEditorObj.open('bee-eater.png', true, {
        backgroundColor: '',
        width: 550,
        height: 550,
        isAspectRatio: true
    });
};
stretchBtn.element.onclick = function () {
    imageEditorObj.open('bee-eater.png', true, {
        backgroundColor: '',
        width: 330,
        height: 330,
        isAspectRatio: false
    });
};