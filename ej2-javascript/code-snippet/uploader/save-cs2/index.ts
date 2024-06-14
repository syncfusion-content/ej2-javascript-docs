

import { Uploader, SuccessEventArgs } from '@syncfusion/ej2-inputs';

// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: '/api/FileUploader/Save'
    },
    success: OnSuccessHandler,
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');

function OnSuccessHandler(args: SuccessEventArgs): void {
    if (args.e !== null) // Check if the event argument is not null
    { 
        const responseText: string = args.e.target.responseText;
        if (responseText.trim() !== "") {

            // for JSON and File Datas
            var jsonResponse = JSON.parse(responseText);
            if (jsonResponse !== null && jsonResponse.hasOwnProperty("Success"))
            {
                var isSuccess = jsonResponse["Success"];
                if (isSuccess) {
                    // File upload success
                    const message: string = jsonResponse.hasOwnProperty("Message") ? jsonResponse["Message"] : "File uploaded successfully";
                    // Additional processing as needed
                }
            }

            // for string Data
            const message: string = responseText;
            // Additional processing as needed
        }
    }
}


