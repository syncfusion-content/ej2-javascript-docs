import { OtpInput, OtpFocusEventArgs } from "@syncfusion/ej2-inputs";

// Initializes the OTP Input control
let otpInput: OtpInput = new OtpInput({
    focus: (args: OtpFocusEventArgs) => {
        //your required action here 
    }
});

// Render initialized OTP Input.
otpInput.appendTo('#otp_default');
