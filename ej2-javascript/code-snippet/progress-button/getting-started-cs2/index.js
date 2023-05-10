// Initialize ProgressButton component
var uploadBtn = new ej.splitbuttons.ProgressButton({
    content: 'Upload',
    cssClass: 'e-hide-spinner',
    enableProgress: true,
    duration: 4000,
    begin: function() {
        uploadBtn.content = 'Uploading...';
        uploadBtn.cssClass = 'e-hide-spinner e-info';
        uploadBtn.dataBind();
    },
    end: function() {
        uploadBtn.content = 'Success';
        uploadBtn.cssClass = 'e-hide-spinner e-success';
        uploadBtn.dataBind();
        setTimeout(function() {
            uploadBtn.content = 'Upload';
            uploadBtn.cssClass = 'e-hide-spinner';
            uploadBtn.dataBind();
        }, 500)
    }});

// Render initialized ProgressButton.
uploadBtn.appendTo('#progressbtn');

