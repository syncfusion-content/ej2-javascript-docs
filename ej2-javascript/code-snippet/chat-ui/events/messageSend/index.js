ej.base.enableRipple(true);

// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    messageSend: () => {
        // Your required action here
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#messageSend');
