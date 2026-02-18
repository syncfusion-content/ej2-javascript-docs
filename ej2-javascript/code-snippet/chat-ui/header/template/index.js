ej.base.enableRipple(true);
var currentUserModel = {
    id: "user1",
    user: "Albert"
};
var michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};

var chatMessages = [
    {
        author: currentUserModel,
        text: "Hi Michale, are we on track for the deadline?"
    },
    {
        author: michaleUserModel,
        text: "Yes, the design phase is complete."
    },
    {
        author: currentUserModel,
        text: "I’ll review it and send feedback by today."
    }
];
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    headerToolbar: {
        items: [ { type: 'Input', template: '<div id="ddMenu"></div>', align: 'Right' } ]
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#template');

new ej.splitbuttons.DropDownButton({
    items: [
        { text: 'Info' },
        { text: 'Search' },
        { text: 'Add to list' },
        { text: 'Mute' }
      ],
      content: 'Menu',
      iconCss: 'e-icons e-menu',
      cssClass: 'custom-dropdown'
}, '#ddMenu');