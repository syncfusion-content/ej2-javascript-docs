import { SmartTextArea } from '@syncfusion/ej2-inputs';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { NumericTextBox, TextBox, ChangedEventArgs } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Smart TextArea sample
 */
const serverAIRequest = async (settings: any) => {
    let output = '';
    try {
        console.log(settings);
        const response = await (window as any).AzureAIRequest(settings) as string;
        console.log("Success:", response);
        output = response;
    } catch (error) {
        console.error("Error:", error);
    }
    return output;
};

let textareaObj: SmartTextArea = new SmartTextArea({
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


let enabledCheckBox: CheckBox = new CheckBox({
    checked: true,
    cssClass: 'api',
    change: (args: any) => {
        textareaObj.enabled = args.checked;
    }
});
enabledCheckBox.appendTo('#enabled');
let readonlyCheckBox: CheckBox = new CheckBox({
    checked: false,
    cssClass: 'api',
    change: (args: any) => {
        textareaObj.readonly = args.checked;
    }
});
readonlyCheckBox.appendTo('#readonly');
let showClearIcon: CheckBox = new CheckBox({
    checked: false,
    cssClass: 'api',
    change: (args: any) => {
        textareaObj.showClearButton = args.checked;
    }
});
showClearIcon.appendTo('#clearicon');

let rows: NumericTextBox = new NumericTextBox({
    format: '##',
    min: 1,
    max: 10,
    value: 3,
    change: (args: any) => {
        textareaObj.rows = args.value;
    }
});
rows.appendTo('#rows');
let cols: NumericTextBox = new NumericTextBox({
    format: '##',
    min: 5,
    max: 40,
    value: 35,
    change: (args: any) => {
        textareaObj.cols = args.value;
    }
});
cols.appendTo('#cols');
let maxLength: NumericTextBox = new NumericTextBox({
    format: '##',
    value: -1,
    change: (args: any) => {
        textareaObj.maxLength = args.value;
    }
});
maxLength.appendTo('#maxlength');

let value: TextBox = new TextBox({
    value: '',
    placeholder: 'Enter a value',
    change: (args: ChangedEventArgs) => {
        textareaObj.value = args.value as string;
    }
});
value.appendTo('#value');



const rolesData: string[] = [
        "Maintainer of an open-source project replying to GitHub issues",
        "Employee communicating with internal team",
        "Customer support representative responding to customer queries",
        "Sales representative responding to client inquiries"
];

let presets: any = [
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

let dropDownPresets: DropDownList = new DropDownList({
    dataSource: rolesData,
    placeholder: "Select a role",
    value: "Maintainer of an open-source project replying to GitHub issues",
    popupHeight: "200px",
    change: (e: any) => {
        let selectedRole: string = e.value;
        let selectedPreset: any = presets.find((preset: any) => preset.userRole === selectedRole);
        textareaObj.userRole = selectedRole;
        textareaObj.UserPhrases = selectedPreset.userPhrases;
    }
});
dropDownPresets.appendTo('#user-role');