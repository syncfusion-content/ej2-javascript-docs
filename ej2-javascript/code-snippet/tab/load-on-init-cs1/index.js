ej.base.enableRipple(true);
var tabObj = new ej.navigations.Tab({
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
        }
    ],
    loadOn: 'Init'
    
  });
tabObj.appendTo('#element');

var userNameObj = new ej.inputs.TextBox({
    placeholder: 'Enter Name',
    floatLabelType: 'Auto',
});
userNameObj.appendTo('#username');

var passWordObj = new ej.inputs.TextBox({
    placeholder: 'Enter Password',
    floatLabelType: 'Auto',
});
passWordObj.appendTo('#password');
var signButton = new ej.buttons.Button({
    content: 'Sign in',
    isPrimary: true,
});
signButton.appendTo('#sign-btn');

var skipButton = new ej.buttons.Button({
    content: 'Skip',
    isPrimary: true,
});
skipButton.appendTo('#skip-btn');

var signInName = new ej.inputs.TextBox({
    placeholder: 'Entenr Name',
    floatLabelType: 'Auto'
});
signInName.appendTo('#sign-in-name');

var mail = new ej.inputs.TextBox({
    placeholder: 'Enter Mail',
    floatLabelType: 'Auto',
});
mail.appendTo('#mail');

var comments = new ej.inputs.TextBox({
    placeholder: 'Share your comments',
    floatLabelType: 'Auto',
});
comments.appendTo('#comments');

var submit = new ej.buttons.Button({
    content: 'submit',
    isPrimary: true,
});
submit.appendTo('#submit');
signButton.element.onclick = function () {
    var userName = userNameObj.value;
    var password = passWordObj.value;
    if (signInName) {
        signInName.value = userName;
    }
    if (!userName && !password) {
        window.alert('Enter both username and password');
    } else if (!userName) {
        window.alert('Enter the username');
    } else if (!password) {
        window.alert('Enter the password');
    } else if (userName.length < 4) {
        window.alert('Username must be at least 4 characters long');
    }
    tabObj.select(1);
};
skipButton.element.onclick = function () {
    tabObj.select(1);
};
submit.element.onclick = function () {
    userNameObj.value = passWordObj.value = signInName.value = '';
    tabObj.select(0);
};
