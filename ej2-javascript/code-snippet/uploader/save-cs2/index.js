// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: '/api/FileUploader/Save'
    },
    success: OnSuccessHandler,
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');

function OnSuccessHandler(args) {
    if (args.e !== null) // Check if the event argument is not null
    {
        var responseText = args.e.target.responseText;
        if (responseText.trim() !== "") {

            // for JSON and File Datas
            var jsonResponse = JSON.parse(responseText);
            if (jsonResponse !== null && jsonResponse.hasOwnProperty("Success"))
            {
                var isSuccess = jsonResponse["Success"];
                if (isSuccess) {
                    // File upload success
                    var message = jsonResponse.hasOwnProperty("Message") ? jsonResponse["Message"] : "File uploaded successfully";
                    // Additional processing as needed
                }
            }

            // for string Data
            var message = responseText;
            // Additional processing as needed
        }
    }
}