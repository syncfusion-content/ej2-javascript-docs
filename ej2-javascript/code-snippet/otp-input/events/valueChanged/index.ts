import { OtpInput, OtpChangedEventArgs } from "@syncfusion/ej2-inputs";

// Initializes the OTP Input control
let otpInput: OtpInput = new OtpInput({
    valueChanged: (args: OtpChangedEventArgs) => {
        //your required action here 
    }
});

// Render initialized OTP Input.
otpInput.appendTo('#otp_default');
