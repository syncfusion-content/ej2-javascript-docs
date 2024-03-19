


import { Uploader, FileInfo, SelectedEventArgs } from '@syncfusion/ej2-inputs';
import { Event, detach } from '@syncfusion/ej2-base';

let uploadObj: Uploader = new Uploader({
    asyncSettings: {
      saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    template: "<span class='wrapper'><span class='icon sf-icon-${type}'></span><span class='name file-name'>${name}</span></span>" +
    "<span class='file-size-td file-size'>${size} bytes</span> <span class='e-icons e-file-remove-btn' title='Remove'></span> <br/> " +
    "<progress id='progressBar' class='progressbar' value='0' max='100'></progress> <span class='percent-td percent'></span>",
    dropArea: document.getElementById('dropArea'),
    progress: onFileUpload,
    selected: onSelect,
    success: onuploadSuccess,
    failure: onuploadFailed
});
uploadObj.appendTo('#fileupload');

document.getElementById('browse').onclick = function() {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
    return false;
}
document.getElementById('clearbtn').onclick = () => {
        uploadObj.element.value = '';
        detach(document.getElementById('dropArea').querySelector('.e-upload-files'));
    };
function onFileUpload(args: any) {
    let li: HTMLElement = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
    let progressValue: number = Math.round((args.e.loaded / args.e.total) * 100);
    li.getElementsByTagName('progress')[0].value = progressValue;
    li.getElementsByClassName('percent')[0].textContent = progressValue.toString() + " %";
}
function onuploadSuccess(args: any) {
    if (args.operation === 'remove') {
        let height: string = document.getElementById('dropArea').style.height;
        height = (parseInt(height) - 40) + 'px';
        document.getElementById('dropArea').style.height = height;
    } else {
        let li: HTMLElement = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
        let progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
        progressBar.classList.add('e-upload-success');
        li.getElementsByClassName('percent')[0].classList.add('e-upload-success');
        let height: string = document.getElementById('dropArea').style.height;
        document.getElementById('dropArea').style.height = parseInt(height) - 15 + 'px';
    }
}
function onuploadFailed(args: any) {
    let li: HTMLElement = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
    let progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
    progressBar.classList.add('e-upload-failed');
    li.getElementsByClassName('percent')[0].classList.add('e-upload-failed');
}
function onSelect(args: SelectedEventArgs) {
    let length: number = args.filesData.length;
    let height: string = document.getElementById('dropArea').style.height;
    height = parseInt(height) + (length * 55) + 'px';
    document.getElementById('dropArea').style.height = height;
}
document.getElementById('dropArea')!.onclick = (e: any) => {
    let target: HTMLElement = <HTMLElement>e.target;
    if (target.classList.contains('e-file-delete-btn')) {
      for (let i: number = 0; i < uploadObj.getFilesData().length; i++) {
        if (
          (target.closest('li') as HTMLLIElement).getAttribute(
            'data-file-name'
          ) === uploadObj.getFilesData()[i].name
        ) {
          uploadObj.remove(uploadObj.getFilesData()[i]);
        }
      }
    } else if (target.classList.contains('e-file-remove-btn')) {
      detach(target.closest('li') as HTMLLIElement);
    }
  };

