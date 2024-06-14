import { OtpInput } from "@syncfusion/ej2-inputs";

// Initializes the OTP Input control
let otpInput: OtpInput = new OtpInput({
    created: () => {
        //your required action here 
    }
});

// Render initialized OTP Input.
otpInput.appendTo('#otp_default');
