

    import { Message } from '@syncfusion/ej2-notifications'

    let msgDefault: Message = new Message({
        content: "Editing is restricted",
        showIcon: false
    });
    msgDefault.appendTo('#msg_default');

    let msgInfo: Message = new Message({
        content: "Please read the comments carefully",
        severity: "Info",
        showIcon: false
    });
    msgInfo.appendTo('#msg_info');

    let msgSuccess: Message = new Message({
        content: "Your message has been sent successfully",
        severity: "Success",
        showIcon: false
    });
    msgSuccess.appendTo('#msg_success');

    let msgWarning: Message = new Message({
        content: "There was a problem with your network connection",
        severity: "Warning",
        showIcon: false
    });
    msgWarning.appendTo('#msg_warning');

    let msgError: Message = new Message({
        content: "A problem occurred while submitting your data",
        severity: "Error",
        showIcon: false
    });
    msgError.appendTo('#msg_error');


