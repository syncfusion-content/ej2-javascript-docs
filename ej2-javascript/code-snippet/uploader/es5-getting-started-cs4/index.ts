

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
            <input type="file" id="fileupload" name="UploadFiles"/>
        </div>
    </div>
<script>
// initialize Uploader component
var uploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    }
});
 // render initialized Uploader
uploadObj.appendTo('#UploadFiles');
</script>
</body>
</html>



