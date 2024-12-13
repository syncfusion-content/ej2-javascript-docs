import { ChatUI, UserModel, MessageModel } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let currentUserModel: UserModel = {
    id: "user1",
    user: "Albert"
};

let michaleUserModel: UserModel = {
    id: "user2",
    user: "Michale Suyama"
};

let chatMessages: MessageModel[] = [];
for (let i = 1; i <= 150; i++) {
    chatMessages.push({
        text: i % 2 === 0 
            ? `Message ${i} from Michale` 
            : `Message ${i} from Albert`,
        author: i % 2 === 0 ? michaleUserModel : currentUserModel
    });
}

// Initialize the Chat UI control
let chatUI: ChatUI = new ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    loadOnDemand: true
});

// Render the initialized Chat UI
chatUI.appendTo('#loadOnDemand');
