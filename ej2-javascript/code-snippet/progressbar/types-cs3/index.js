var linearProgress1 = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '60',
    value: 100,
    animation: {
      enable: true,
      duration: 2000,
      delay: 0,
    },
    tooltip:{
        enable: true,
        format: "Progress: ${value}"
    },
    textStyle: {
      fontWeight: '900',
      size: '15px',
      color: 'red',
      fontFamily: 'Roboto',
      fontStyle: 'Italic'
    }
  });
  linearProgress1.appendTo('#lineardeterminate');

