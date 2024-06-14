
// Initializes the OTP Input control
var otpInput = new ej.inputs.OtpInput({
    valueChanged: (args) => {
        alert("Entered OTP value: " + args.value);
    }
});

// Render initialized OTP Input.
otpInput.appendTo('#otp_default');
