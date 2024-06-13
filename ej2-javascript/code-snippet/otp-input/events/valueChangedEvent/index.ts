import { OtpInput, OtpChangedEventArgs } from "@syncfusion/ej2-inputs";

// Initializes the OTP Input control
let otpInput: OtpInput = new OtpInput({
    valueChanged: (args: OtpChangedEventArgs) => {
        alert("Entered OTP value: " + args.value);
    }
});

// Render initialized OTP Input.
otpInput.appendTo('#otp_default');
