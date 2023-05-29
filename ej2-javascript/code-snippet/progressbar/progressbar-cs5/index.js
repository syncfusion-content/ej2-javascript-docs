
var linearProgress1 = new ej.progressbar.ProgressBar({
    type: 'Linear',
        height: '60',
        width: '90%',
        trackThickness: 24,
        progressThickness: 24,
        secondaryProgressThickness: 20,
        value: 100,
        showProgressValue: true,
        labelStyle: {
            color: '#FFFFFF'
        },
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        }
    });
    linearProgress1.appendTo('#percentage');

