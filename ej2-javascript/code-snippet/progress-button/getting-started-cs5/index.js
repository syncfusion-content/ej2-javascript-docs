// Initialize ProgressButton component
var progressBtn = new ej.splitbuttons.ProgressButton({content: 'Progress Step', enableProgress: true,
begin: function(args) {
    args.step = 20;
}, cssClass: 'e-hide-spinner'});

// Render initialized ProgressButton.
progressBtn.appendTo('#progressbtn');

