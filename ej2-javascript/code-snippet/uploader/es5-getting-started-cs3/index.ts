

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
     <div id='container' style='width: 90%'>
      <div id='droparea'>Drop files here to upload</div>
     <div id='uploadfile' >
      <input type="file" id="fileupload" name="UploadFiles"/>
    </div>
</div>
<script>
    var uploadObj = new ej.inputs.Uploader({
    autoUpload: false,
    dropArea: document.getElementById('droparea')
});
 // render initialized Uploader
uploadObj.appendTo('#UploadFiles');
</script>
</body>
</html>



