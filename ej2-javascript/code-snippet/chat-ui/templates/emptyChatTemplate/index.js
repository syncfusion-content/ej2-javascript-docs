ej.base.enableRipple(true);

// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    emptyChatTemplate: '<div class="empty-chat-text"><h4><span class="e-icons e-comment-show"></span></h4><h4>No Messages Yet</h4><p>Start a conversation to see your messages here.</p></div>',
});

// Render initialized Chat UI.
chatUI.appendTo('#emptyChatTemplate');
