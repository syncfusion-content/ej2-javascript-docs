
**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential JS 2 Uploader** component.

## Adding drop area

By default, the uploader component allows to upload files by drag the files from file explorer, and drop into the drop area.  You can configure any other external element as drop target using [dropArea](../api/uploader/#droparea) property.

In the following sample, drop target is configured.


<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <ink href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader's global script -->
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
            <div id="droparea"> </div>
            <!-- Add the HTML <input> element  -->
              <input type="file" id="fileupload" name="UploadFiles">
            <script>
                // initialize Uploader component
              var uploadObj = new Uploader({
                autoUpload: false,
                dropArea: document.getElementById('droparea');
            });
                // Render initialized Uploader component.
                uploadObj.appendTo('#fileupload');
            </script>
       </body>
  </html>


{% tab template="uploader/es5-getting-started", sourceFiles="index.html %}

## Configure asynchronous settings

The uploader component process the files to upload in Asynchronous mode by default. Define the properties [saveUrl](api-asyncSettingsModel.html?lang=typescript) and [removeUrl](api-asyncSettingsModel.html?lang=typescript) to handle the save and remove action as shown below.


<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <ink href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader's global script -->
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
            <div id="droparea"> </div>
            <!-- Add the HTML <input> element  -->
              <input type="file" id="fileupload" name="UploadFiles">
            <script>
                // initialize Uploader component
              var uploadObj = new Uploader({
              asyncSettings: {
                  saveUrl:'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
                  removeUrl:'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
                  }
              });
            // Render initialized Uploader component.
            uploadObj.appendTo('#fileupload');
            </script>
       </body>
  </html>


{% tab template="uploader/es5-getting-started", sourceFiles="index.html %}

## Handle success and failed Upload

You can handle the success and failure actions using the [success](../api/uploader/#success) and [failure](../api/uploader/#failure) &nbsp;events. To handle these event, define the function and assign it to corresponding event as shown below.


<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <ink href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader's global script -->
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
            <div id="droparea"> </div>
            <!-- Add the HTML <input> element  -->
              <input type="file" id="fileupload" name="UploadFiles">
            <script>
                // initialize Uploader component
              var uploadObj = new Uploader({
              asyncSettings: {
                  saveUrl:'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
                  removeUrl:'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
                  },
                  success: onUploadSuccess,
                  failure: onUploadFailure
              });
            // Render initialized Uploader component.
            uploadObj.appendTo('#fileupload');
          function onUploadSuccess(args) {
            if (args.operation === 'upload') {
                console.log('File uploaded successfully');
              }
          }
          function onUploadFailure(args) {
            console.log('File failed to upload');
          }
            </script>
       </body>
  </html>


