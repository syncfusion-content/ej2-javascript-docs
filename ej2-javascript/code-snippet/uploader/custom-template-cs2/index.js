ej.base.enableRipple(true);
    var dropElement = document.querySelector('.control_wrapper');
    var filesDetails = [];
    var filesList = [];
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
        }, dropArea: dropElement, selected: onFileSelect, progress: onFileUpload, success: onUploadSuccess,
        failure: onUploadFailed, removing: onFileRemove,
    });
    uploadObj.appendTo('#fileupload');
    document.getElementById('browse').onclick = function () {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
        return false;
    };
    document.getElementById('clearbtn').onclick = function () {
        uploadObj.element.value = '';
        ej.base.detach(document.getElementById('dropArea').querySelector('.upload-list-root'));
        filesDetails = [];
        filesList = [];
    };
    var parentElement;
    var proxy;
    var progressbarContainer;
    function onFileSelect(args) {
        if (ej.base.isNullOrUndefined(document.getElementById('dropArea').querySelector('.upload-list-root'))) {
            parentElement = ej.base.createElement('div', { className: 'upload-list-root' });
            parentElement.appendChild(ej.base.createElement('ul', { className: 'ul-element' }));
            document.getElementById('dropArea').appendChild(parentElement);
        }
        for (var i = 0; i < args.filesData.length; i++) {
            formSelectedData(args.filesData[i], this);
        }
        filesDetails = filesDetails.concat(args.filesData);
        this.upload(args.filesData, true);
        args.cancel = true;
    }
    function formSelectedData(selectedFiles, proxy) {
        var liEle = ej.base.createElement('li', { className: 'file-lists', attrs: { 'data-file-name': selectedFiles.name } });
        liEle.appendChild(ej.base.createElement('span', { className: 'file-name ', innerHTML: selectedFiles.name }));
        liEle.appendChild(ej.base.createElement('span', { className: 'file-size ', innerHTML: proxy.bytesToSize(selectedFiles.size) }));
        if (selectedFiles.statusCode === '1') {
            progressbarContainer = ej.base.createElement('span', { className: 'progress-bar-container' });
            progressbarContainer.appendChild(ej.base.createElement('progress', { className: 'progress', attrs: { value: '0', max: '100' } }));
            liEle.appendChild(progressbarContainer);
        }
        else {
            liEle.querySelector('.file-name').classList.add('upload-fails');
        }
        var closeIconContainer = ej.base.createElement('span', { className: 'e-icons close-icon-container' });
        ej.base.EventHandler.add(closeIconContainer, 'click', removeFiles, proxy);
        liEle.appendChild(closeIconContainer);
        document.querySelector('.ul-element').appendChild(liEle);
        filesList.push(liEle);
    }
    function onFileUpload(args) {
        var li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        ej.base.EventHandler.remove(li.querySelector('.close-icon-container'), 'click', removeFiles);
        var progressValue = Math.round((args.e.loaded / args.e.total) * 100);
        if (!isNaN(progressValue)) {
            li.getElementsByTagName('progress')[0].value = progressValue;
        }
    }
    function onUploadSuccess(args) {
        var li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        if (!ej.base.isNullOrUndefined(li.querySelector('.progress-bar-container'))) {
            ej.base.detach(li.querySelector('.progress-bar-container'));
        }
        if (args.operation === 'upload') {
            li.querySelector('.file-name').classList.add('upload-success');
            li.querySelector('.close-icon-container').classList.add('delete-icon');
        }
        if (args.operation === 'remove') {
            filesList.splice(this.fileList.indexOf(li), 1);
            filesDetails.splice(this.fileList.indexOf(li), 1);
        }
        ej.base.EventHandler.add(li.querySelector('.close-icon-container'), 'click', removeFiles, this);
    }
    function onUploadFailed(args) {
        var li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        ej.base.EventHandler.add(li.querySelector('.close-icon-container'), 'click', removeFiles, this);
        li.querySelector('.file-name ').classList.add('upload-fails');
        if (args.operation === 'upload') {
            ej.base.detach(li.querySelector('.progress-bar-container'));
        }
    }
    function removeFiles(args) {
        if (!ej.base.isNullOrUndefined(args.currentTarget)) {
            if (filesDetails[filesList.indexOf(args.currentTarget.parentElement)].statusCode === '2') {
                this.remove(filesDetails[filesList.indexOf(args.currentTarget.parentElement)]);
                filesDetails.splice(filesList.indexOf(args.currentTarget.parentElement), 1);
            }
            else {
                onFileRemove(args);
            }
        }
    }
    function onFileRemove(args) {
        if (!ej.base.isNullOrUndefined(args.currentTarget)) {
            if (filesDetails[filesList.indexOf(args.currentTarget.parentElement)].statusCode !== '2') {
                ej.base.detach(args.currentTarget.parentElement);
                filesList.splice(filesList.indexOf(args.currentTarget.parentElement), 1);
            }
        }
    }
    


