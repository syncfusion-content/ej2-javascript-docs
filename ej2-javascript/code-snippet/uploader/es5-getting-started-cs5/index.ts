

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2 Uploader with Drop area</title>
            <!-- Essential JS 2 material theme -->
            <link href="index.css" rel="stylesheet">
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader component's script -->
           <script src="http://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
    <div id='loader'>Loading....</div>
        <div id='container'>
            <input type="file" id="UploadFiles" name="UploadFiles"/>
        </div>
    </div>
<script>
var uploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    },
    success: onUploadSuccess,
    failure: onUploadFailure
});
// render initialized Uploader
uploadObj.appendTo('#UploadFiles');
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



