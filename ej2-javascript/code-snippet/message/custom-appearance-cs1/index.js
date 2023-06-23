  var msgCenter = new ej.notifications.Message({
    content: "The license will expire today",
    cssClass: "rounded",
    severity: 'Warning'
  });
  msgCenter.appendTo('#msg_rounded');

  var msgRight = new ej.notifications.Message({
    content: "The license key is invalid",
    cssClass: "square",
    severity: 'Error'
  });
  msgRight.appendTo('#msg_square');

