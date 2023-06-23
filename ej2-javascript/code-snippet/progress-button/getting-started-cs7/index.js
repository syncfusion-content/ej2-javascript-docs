// Initialize ProgressButton component
var progressBtn = new ej.splitbuttons.ProgressButton({content: 'Download', enableProgress: true, iconCss: 'e-btn-sb-icon e-download',
end: function() {
    progressBtn.content = 'Download';
    progressBtn.iconCss = 'e-btn-sb-icon e-download';
    progressBtn.dataBind();
},
cssClass: 'e-hide-spinner'});

// Render initialized ProgressButton.
progressBtn.appendTo('#progressbtn');

progressBtn.element.addEventListener('click', clickHandler);

function clickHandler() {
    if(progressBtn.content === 'Download') {
        progressBtn.content = 'Pause';
        progressBtn.iconCss = 'e-btn-sb-icon e-pause';
        progressBtn.dataBind();
    }
    else if(progressBtn.content === 'Pause') {
        progressBtn.content = 'Resume';
        progressBtn.iconCss = 'e-btn-sb-icon e-play';
        progressBtn.dataBind();
        progressBtn.stop();
    }
    else if(progressBtn.content === 'Resume') {
        progressBtn.content = 'Pause';
        progressBtn.iconCss = 'e-btn-sb-icon e-pause';
        progressBtn.dataBind();
        progressBtn.start();
    }
}

