import { OtpInput } from "@syncfusion/ej2-inputs";

// Initializes the OTP Input control
let otpInput: OtpInput = new OtpInput({
    value: 1234,
    htmlAttributes: { title : "One-Time Password"}
});

// Render initialized OTP Input.
otpInput.appendTo('#otp_input');
