import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

// Image Editor items definition
let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    created: () => {
        imageEditorObj.open('bee-eater.png');
    },
    showQuickAccessToolbar: false
});
imageEditorObj.appendTo('#imageEditor');

let isTextInserted: boolean = false;
let textBtn: Button = new Button({}, '#text');

textBtn.element.onclick = function () {
    if (!isTextInserted) {
        isTextInserted = true;
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawText(dimension.x, dimension.y, 'Syncfusion');
        textBtn.element.classList.add('e-disabled');
    }
};
(document.getElementById('bold') as HTMLElement).addEventListener('change', function () {
    updateFontStyle('bold', (this as HTMLInputElement).checked);
});
(document.getElementById('italic') as HTMLElement).addEventListener('change', function () {
    updateFontStyle('italic', (this as HTMLInputElement).checked);
});
(document.getElementById('underline') as HTMLElement).addEventListener('change', function () {
    updateFontStyle('underline', (this as HTMLInputElement).checked);
});
(document.getElementById('strikethrough') as HTMLElement).addEventListener('change', function () {
    updateFontStyle('strikethrough', (this as HTMLInputElement).checked);
});
function updateFontStyle(style: string, isChecked: boolean) {
    let shapes: any = imageEditorObj.getShapeSettings();
    if (shapes && shapes[0]) {
        if (isChecked) {
            if (!shapes[0].fontStyle.includes(style)) {
                shapes[0].fontStyle.push(style);
            }
        } else {
            shapes[0].fontStyle = shapes[0].fontStyle.filter((item: string) => item !== style);
        }
        imageEditorObj.updateShape(shapes[0]);
    }
}