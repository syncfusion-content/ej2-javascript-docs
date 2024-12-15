import { enableRipple } from '@syncfusion/ej2-base';
import { Tab } from '@syncfusion/ej2-navigations';
import { TextBox } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

enableRipple(true);

//Initialize Tab component

let tabObj: Tab = new Tab({
    items: [
        {
            header: { text: 'SignIn' },
            content: '.login-form',
        },
        {
            header: { text: 'Syncfusion EJ2' },
            content: '.over-view',
        },
        {
            header: { text: 'FeedBack' },
            content: '.feed-back',
        },
    ],
    loadOn: 'Init',
});
tabObj.appendTo('#element');

let userNameObj: TextBox = new TextBox({
    placeholder: 'Enter Name',
    floatLabelType: 'Auto',
});
userNameObj.appendTo('#username');

let passWordObj: TextBox = new TextBox({
    placeholder: 'Enter Password',
    floatLabelType: 'Auto',
});
passWordObj.appendTo('#password');

let signButton: Button = new Button({
    content: 'Sign in',
    isPrimary: true,
});
signButton.appendTo('#sign-btn');

let skipButton: Button = new Button({
    content: 'Skip',
    isPrimary: true,
});
skipButton.appendTo('#skip-btn');

let signInName: TextBox = new TextBox({
    placeholder: 'Entenr Name',
    floatLabelType: 'Auto'
});
signInName.appendTo('#sign-in-name');

let mail: TextBox = new TextBox({
    placeholder: 'Enter Mail',
    floatLabelType: 'Auto',
});
mail.appendTo('#mail');

let comments: TextBox = new TextBox({
    placeholder: 'Share your comments',
    floatLabelType: 'Auto',
});
comments.appendTo('#comments');

let submit: Button = new Button({
    content: 'submit',
    isPrimary: true,
});
submit.appendTo('#submit');

signButton.element.onclick = () => {
    let userName = userNameObj.value;
    let password = passWordObj.value;
    if (!userName && !password) {
        window.alert('Enter both username and password');
    } else if (!userName) {
        window.alert('Enter the username');
    } else if (!password) {
        window.alert('Enter the password');
    } else if (userName.length < 4) {
        window.alert('Username must be at least 4 characters long');
    }
};

skipButton.element.onclick = () => {
    tabObj.select(1);
};

submit.element.onclick = () => {
    tabObj.select(0);
};

