import { OtpInput } from "@syncfusion/ej2-inputs";

// Initializes the OTP Input control
let otpInput: OtpInput = new OtpInput({
    value: "e3c7",
    type: 'text'
});

// Render initialized OTP Input.
otpInput.appendTo('#text_otp');
