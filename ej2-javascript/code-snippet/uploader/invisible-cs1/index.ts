

import { Uploader, SelectedEventArgs } from '@syncfusion/ej2-inputs';
import { createElement } from '@syncfusion/ej2-base';

let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    selected : onupload,
    locale: 'en-US',
    allowedExtensions: '.png, .jpg, .jpeg'
});
uploadObj.appendTo('#fileupload')

function onupload(args: SelectedEventArgs){
    for(let i = 0; i< args.filesData.length ; i++){
        let liparentDiv = createElement('div',  { className: 'image-list'});
        let liImage = createElement('img',  { className: 'image'});
        liparentDiv.appendChild(liImage);
        readURL(liImage, args.filesData[i]);
        document.getElementById('preview').appendChild(liparentDiv);
    }
    args.cancel=true;
}

function readURL(liImage: HTMLElement, file: any) {
    let imgPreview: HTMLImageElement = liImage as HTMLImageElement;
    let imageFile: File = file.rawFile;
    let reader: FileReader = new FileReader();
    reader.addEventListener( 'load', () => {
        imgPreview.src = reader.result;
    }, false);
    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }
};


