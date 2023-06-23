  var msgDefault = new ej.notifications.Message({
    content: "Editing is restricted",
    showIcon: false
  });
  msgDefault.appendTo('#msg_default');

  var msgInfo = new ej.notifications.Message({
    content: "Please read the comments carefully",
    severity: "Info",
    showIcon: false
  });
  msgInfo.appendTo('#msg_info');

  var msgSuccess = new ej.notifications.Message({
    content: "Your message has been sent successfully",
    severity: "Success",
    showIcon: false
  });
  msgSuccess.appendTo('#msg_success');

  var msgWarning = new ej.notifications.Message({
    content: "There was a problem with your network connection",
    severity: "Warning",
    showIcon: false
  });
  msgWarning.appendTo('#msg_warning');

  var msgError = new ej.notifications.Message({
    content: "A problem occurred while submitting your data",
    severity: "Error",
    showIcon: false
  });
  msgError.appendTo('#msg_error');

