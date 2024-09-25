ej.base.enableRipple(true);

/**
 * Smart TextArea sample
 */
const serverAIRequest = async (settings) => {
    let output = '';
    try {
        console.log(settings);
        const response = await (window).AzureAIRequest(settings);
        console.log("Success:", response);
        output = response;
    } catch (error) {
        console.error("Error:", error);
    }
    return output;
};

let textareaObj = new ej.inputs.SmartTextArea({
    placeholder: 'Enter your queries here',
    floatLabelType: 'Auto',
    resizeMode: 'Both',
    rows: 3,
    cols: 35,
    userRole: 'Employee communicating with internal team',
    UserPhrases: [
        "Please find the attached report.",
        "Let's schedule a meeting to discuss this further.",
        "Can you provide an update on this task?",
        "I appreciate your prompt response.",
        "Let's collaborate on this project to ensure timely delivery."
    ],
    aiSuggestionHandler: serverAIRequest
});
textareaObj.appendTo('#smart-textarea');

let enabledCheckBox = new ej.buttons.CheckBox({
    checked: true,
    cssClass: 'api',
    change: (args) => {
        textareaObj.enabled = args.checked;
    }
});
enabledCheckBox.appendTo('#enabled');

let readonlyCheckBox = new ej.buttons.CheckBox({
    checked: false,
    cssClass: 'api',
    change: (args) => {
        textareaObj.readonly = args.checked;
    }
});
readonlyCheckBox.appendTo('#readonly');

let showClearIcon = new ej.buttons.CheckBox({
    checked: false,
    cssClass: 'api',
    change: (args) => {
        textareaObj.showClearButton = args.checked;
    }
});
showClearIcon.appendTo('#clearicon');

let rows = new ej.inputs.NumericTextBox({
    format: '##',
    min: 1,
    max: 10,
    value: 3,
    change: (args) => {
        textareaObj.rows = args.value;
    }
});
rows.appendTo('#rows');

let cols = new ej.inputs.NumericTextBox({
    format: '##',
    min: 5,
    max: 40,
    value: 35,
    change: (args) => {
        textareaObj.cols = args.value;
    }
});
cols.appendTo('#cols');

let maxLength = new ej.inputs.NumericTextBox({
    format: '##',
    value: -1,
    change: (args) => {
        textareaObj.maxLength = args.value;
    }
});
maxLength.appendTo('#maxlength');

let value = new ej.inputs.TextBox({
    value: '',
    placeholder: 'Enter a value',
    change: (args) => {
        textareaObj.value = args.value;
    }
});
value.appendTo('#value');

const rolesData = [
    "Maintainer of an open-source project replying to GitHub issues",
    "Employee communicating with internal team",
    "Customer support representative responding to customer queries",
    "Sales representative responding to client inquiries"
];

let presets = [
    {
        userRole: "Maintainer of an open-source project replying to GitHub issues",
        userPhrases: [
            "Thank you for contacting us.",
            "To investigate, we'll need a repro as a public Git repo.",
            "Could you please post a screenshot of NEED_INFO?",
            "This sounds like a usage question. This issue tracker is intended for bugs and feature proposals. Unfortunately, we don't have the capacity to answer general usage questions and would recommend StackOverflow for a faster response.",
            "We don't accept ZIP files as repros."
        ]
    },
    {
        userRole: "Customer support representative responding to customer queries",
        userPhrases: [
            "Thank you for reaching out to us.",
            "Can you please provide your order number?",
            "We apologize for the inconvenience.",
            "Our team is looking into this issue and will get back to you shortly.",
            "For urgent matters, please call our support line."
        ]
    },
    {
        userRole: "Employee communicating with internal team",
        userPhrases: [
            "Please find the attached report.",
            "Let's schedule a meeting to discuss this further.",
            "Can you provide an update on this task?",
            "I appreciate your prompt response.",
            "Let's collaborate on this project to ensure timely delivery."
        ]
    },
    {
        userRole: "Sales representative responding to client inquiries",
        userPhrases: [
            "Thank you for your interest in our product.",
            "Can I schedule a demo for you?",
            "Please find the pricing details attached.",
            "Our team is excited to work with you.",
            "Let me know if you have any further questions."
        ]
    }
];

let dropDownPresets = new ej.dropdowns.DropDownList({
    dataSource: rolesData,
    placeholder: "Select a role",
    value: "Maintainer of an open-source project replying to GitHub issues",
    popupHeight: "200px",
    change: (e) => {
        let selectedRole = e.value;
        let selectedPreset = presets.find((preset) => preset.userRole === selectedRole);
        textareaObj.userRole = selectedRole;
        textareaObj.UserPhrases = selectedPreset.userPhrases;
    }
});
dropDownPresets.appendTo('#user-role');