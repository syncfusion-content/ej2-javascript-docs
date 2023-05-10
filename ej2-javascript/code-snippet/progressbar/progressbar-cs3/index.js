
var linearProgress1 = new ej.progressbar.ProgressBar({
  type: 'Linear',
        trackThickness: 24,
        progressThickness: 24,
        value: 50,
        showProgressValue: true,
        labelStyle: {
            color: '#FFFFFF'
        },
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        textRender: (args) => {
            args.text = '50';
        }
  });
  linearProgress1.appendTo('#percentage');

