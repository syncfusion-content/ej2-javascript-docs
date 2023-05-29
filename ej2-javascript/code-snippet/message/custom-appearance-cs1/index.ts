

    import { Message } from '@syncfusion/ej2-notifications'

    let msgRounded: Message = new Message({
        content: "The license will expire today",
        severity: 'Warning',
        cssClass: "rounded"
    });
    msgRounded.appendTo('#msg_rounded');

    let msgSquare: Message = new Message({
        content: "The license key is invalid",
        severity: 'Error',
        cssClass: "square"
    });
    msgSquare.appendTo('#msg_square');


