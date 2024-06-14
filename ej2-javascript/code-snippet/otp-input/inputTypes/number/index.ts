import { OtpInput } from "@syncfusion/ej2-inputs";

// Initializes the OTP Input control
let otpInput: OtpInput = new OtpInput({
    value: 1234,
    type: `number`
});

// Render initialized OTP Input.
otpInput.appendTo('#number_otp');
