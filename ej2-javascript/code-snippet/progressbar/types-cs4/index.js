var linearProgress1 = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '60',
    value: 100,
    animation: {
      enable: true,
      duration: 2000,
      delay: 0,
    }
  });
  linearProgress1.appendTo('#lineardeterminate');

  var linearProgress2 = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '60',
    isIndeterminate: true,
    value: 20,
    animation: {
        enable: true,
        duration: 2000,
        delay: 0,
    },
  });
  linearProgress2.appendTo('#linearindeterminate');

  var linearProgress3 = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '60',
    segmentCount: 8,
    value: 100,
    animation: {
        enable: true,
        duration: 2000,
        delay: 0,
    },
  });
  linearProgress3.appendTo('#linearsegment');

  var linearProgress4 = new ej.progressbar.ProgressBar({
    type: 'Linear',
        height: '60',
        value: 40,
        secondaryProgress: 60,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
  });
  linearProgress4.appendTo('#linearbuffer');


