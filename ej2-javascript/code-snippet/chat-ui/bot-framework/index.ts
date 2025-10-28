import { Chat, UserModel } from '@syncfusion/ej2-interactive-chat';
import { DirectLine } from 'directline-js';
import {axios} from 'axios';

const currentUserModel: UserModel = {
    id: "user1",
    user: "You"
};
const botUserModel: UserModel = {
    id: "bot",
    user: "Bot",
    avatarUrl:'https://ej2.syncfusion.com/demos/src/chat-ui/images/bot.png'
};

let chat: Chat;
let directLine: DirectLine | null = null;

// Function to initialize the chat and Direct Line connection
async function initialize(): Promise<void> {
    try {
        // 1. Fetch the Direct Line token from your backend server
        const response = await axios.post<{ token: string }>('http://localhost:5000/directline/token');
        const { token } = response.data;

        // 2. Create a new Direct Line instance
        directLine = new DirectLine({ token });

        // 3. Subscribe to incoming activities (messages) from the bot
        directLine.activity$
            .filter(activity => activity.type === 'message' && activity.from.id !== currentUserModel.id)
            .subscribe(message => {
                chat.addMessage({ text: message.text, author: botUserModel });
            });

    } catch (error) {
        console.error("Failed to connect to the bot service:", error);
        chat.addMessage({ text: "Sorry, I couldn't connect to the bot.", author: botUserModel });
    }
}

// Initialize Chat UI
chat = new Chat({
    user: currentUserModel,
    messageSend: function(args) {
        args.cancel=true;
        if (!directLine) {
            console.error("Direct Line connection not established.");
            return;
        }

        // Add the user's message to the UI immediately
        chat.addMessage({ text: args.message.text, author: currentUserModel });

        // Send the message activity to the bot via Direct Line
        directLine.postActivity({
            from: { id: currentUserModel.id, name: currentUserModel.user },
            type: 'message',
            text: args.message.text
        }).subscribe(
            id => console.log("Sent message with ID: ", id),
            error => console.error("Error sending message: ", error)
        );
    }
});
chat.appendTo('#chat-container');

// Start the initialization
initialize();