import { OtpInput } from "@syncfusion/ej2-inputs";

// Initializes the OTP Input control
let otpInput: OtpInput = new OtpInput({
    length: 5
});

// Render initialized OTP Input.
otpInput.appendTo('#otp_default');
