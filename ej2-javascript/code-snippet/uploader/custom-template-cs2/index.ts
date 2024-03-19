


import { enableRipple } from '@syncfusion/ej2-base';
import { Uploader, FileInfo } from '@syncfusion/ej2-inputs';
import { createElement, isNullOrUndefined, detach, EventHandler } from '@syncfusion/ej2-base';

    enableRipple(true);
    let dropElement: HTMLElement = document.querySelector('.control_wrapper') as HTMLElement; let filesDetails : FileInfo[] = [];
    let filesList: HTMLElement[] = [];
    let uploadObj: Uploader = new Uploader({
        asyncSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        }, dropArea: dropElement, selected: onFileSelect, progress: onFileUpload, success: onUploadSuccess,
        failure: onUploadFailed, removing: onFileRemove,
    });
    uploadObj.appendTo('#fileupload');
    document.getElementById('browse').onclick = () => {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click(); return false;
    };
    document.getElementById('clearbtn').onclick = () => {
        uploadObj.element.value = '';
        detach(document.getElementById('dropArea').querySelector('.upload-list-root')); filesDetails = []; filesList = [];
    };
    let parentElement : HTMLElement; let proxy : any; let progressbarContainer : HTMLElement;
    function onFileSelect(args : any) : void  {
        if (isNullOrUndefined(document.getElementById('dropArea').querySelector('.upload-list-root'))) {
            parentElement = createElement('div', { className: 'upload-list-root' });
            parentElement.appendChild(createElement('ul', {className: 'ul-element' }));
            document.getElementById('dropArea').appendChild(parentElement);
        }
        for (let i : number = 0; i < args.filesData.length; i++) { formSelectedData(args.filesData[i], this); }
        filesDetails = filesDetails.concat(args.filesData);
        this.upload(args.filesData, true); args.cancel = true;
    }
    function formSelectedData ( selectedFiles : FileInfo, proxy: any ) : void {
        let liEle : HTMLElement = createElement('li',  { className: 'file-lists', attrs: {'data-file-name' : selectedFiles.name} });
        liEle.appendChild(createElement('span', {className: 'file-name ', innerHTML: selectedFiles.name }));
        liEle.appendChild(createElement('span', {className: 'file-size ', innerHTML: proxy.bytesToSize(selectedFiles.size) }));
        if (selectedFiles.statusCode === '1') {
            progressbarContainer = createElement('span', {className: 'progress-bar-container'});
            progressbarContainer.appendChild(createElement('progress', {className: 'progress', attrs: {value : '0', max : '100'}} ));
            liEle.appendChild(progressbarContainer);
        } else { liEle.querySelector('.file-name').classList.add('upload-fails'); }
        let closeIconContainer : HTMLElement = createElement('span', {className: 'e-icons close-icon-container'});
        EventHandler.add(closeIconContainer, 'click', removeFiles, proxy);
        liEle.appendChild(closeIconContainer); document.querySelector('.ul-element').appendChild(liEle);
        filesList.push(liEle);
    }
    function onFileUpload(args : any) : void {
        let li : Element = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        EventHandler.remove(li.querySelector('.close-icon-container'), 'click', removeFiles);
        let progressValue : number = Math.round((args.e.loaded / args.e.total) * 100);
        if (!isNaN(progressValue)) { li.getElementsByTagName('progress')[0].value = progressValue; }
    }
    function onUploadSuccess(args : any) : void {
        let li : Element = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        if (!isNullOrUndefined(li.querySelector('.progress-bar-container'))) {
             detach(li.querySelector('.progress-bar-container')); }
        if (args.operation === 'upload') {
            li.querySelector('.file-name').classList.add('upload-success');
            li.querySelector('.close-icon-container').classList.add('delete-icon');
        }
        if (args.operation === 'remove') {
            filesList.splice(this.fileList.indexOf(li), 1); filesDetails.splice(this.fileList.indexOf(li), 1);
        }
        EventHandler.add(li.querySelector('.close-icon-container'), 'click', removeFiles, this);
    }
    function onUploadFailed(args : any) : void {
        let li : Element = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        EventHandler.add(li.querySelector('.close-icon-container'), 'click', removeFiles, this);
        li.querySelector('.file-name ').classList.add('upload-fails');
        if (args.operation === 'upload') {detach(li.querySelector('.progress-bar-container')); }
    }
    function removeFiles(args : any) : void {
        if (!isNullOrUndefined(args.currentTarget)) {
            if (filesDetails[filesList.indexOf(args.currentTarget.parentElement)].statusCode === '2' ) {
                this.remove(filesDetails[filesList.indexOf(args.currentTarget.parentElement)]);
                filesDetails.splice(filesList.indexOf(args.currentTarget.parentElement), 1);
            } else  { onFileRemove(args); }
        }
    }
    function onFileRemove(args: any) : void {
        if (!isNullOrUndefined(args.currentTarget)) {
            if (filesDetails[filesList.indexOf(args.currentTarget.parentElement)].statusCode !== '2') {
                detach(args.currentTarget.parentElement); filesList.splice(filesList.indexOf(args.currentTarget.parentElement), 1);
            }
        }
    }


