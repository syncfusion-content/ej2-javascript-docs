var documenteditor = new ej.documenteditor.DocumentEditor({ });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('file_upload').setAttribute('accept', '.sfdt');

document.getElementById("import").addEventListener("click", function () {
    document.getElementById('file_upload').click();
});

document.getElementById('file_upload').addEventListener("change", function (e) {
    if (e.target.files[0]) {
        var file = e.target.files[0];
        if (file.name.substr(file.name.lastIndexOf('.')) === '.sfdt') {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                var contents = e.target.result;
                documenteditor.open(contents);
            };
            fileReader.readAsText(file);
            documenteditor.documentName = file.name.substr(0, file.name.lastIndexOf('.'));
        }
    }
});

