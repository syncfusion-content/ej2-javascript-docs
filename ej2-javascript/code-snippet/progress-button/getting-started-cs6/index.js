// Initialize ProgressButton component
var progressBtn = new ej.splitbuttons.ProgressButton({content: 'Progress', enableProgress: true, duration: 15000,
begin: (args) => {
    progressBtn.content = 'Progress ' + args.percent + '%';
},
progress: (args) => {
    progressBtn.content = 'Progress ' + args.percent + '%';
    if (args.percent === 40) {
        args.percent = 90
    }
},
end: (args) => {
    progressBtn.content = 'Progress ' + args.percent + '%';
},
cssClass: 'e-hide-spinner'});

// Render initialized ProgressButton.
progressBtn.appendTo('#progressbtn');

