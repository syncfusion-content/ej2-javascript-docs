ej.base.enableRipple(true);
let currentUserModel = {
    id: "user1",
    user: "Albert"
};

let michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};

let chatMessages = [
    {
        id: "msg1",
        author: currentUserModel,
        text: "Hi, thinking of painting this weekend"
    },
    {
        id: "msg2",
        author: michaleUserModel,
        text: "That’s fun! What will you paint?"
    },
    {
        id: "msg3",
        author: currentUserModel,
        text: "Maybe landscapes."
    }
];
// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
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