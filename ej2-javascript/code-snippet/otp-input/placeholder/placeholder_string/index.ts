import { OtpInput } from "@syncfusion/ej2-inputs";

// Initializes the OTP Input control
let otpInput: OtpInput = new OtpInput({
    placeholder: "wxyz"
});

// Render initialized OTP Input.
otpInput.appendTo('#default_otp');
