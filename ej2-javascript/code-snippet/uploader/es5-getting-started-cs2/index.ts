

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2 Dialog component</title>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader component's script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
        <body>
    <div id='container' style="margin:0 auto; width:300px;">
        <!--element which is going to render the Uploader-->
    <input type="file" id='UploadFiles' />
    </div>
</body>
<script>
 var uploadObj = new ej.inputs.Uploader();
 // render initialized Uploader
uploadObj.appendTo('#UploadFiles');
</script>
</body>
</html>



