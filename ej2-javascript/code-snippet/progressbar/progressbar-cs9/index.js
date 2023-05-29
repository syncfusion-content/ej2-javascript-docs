var linearProgress1 = new ej.progressbar.ProgressBar({
  type: 'Linear',
        trackThickness: 24,
        progressThickness: 24,
        value: 90,
        minimum: 10,
        maximum:90,
        showProgressValue: true,
        cornerRadius: 'Round',
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
 

