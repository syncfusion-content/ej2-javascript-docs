

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="https://cdn.syncfusion.com/ej2/34.2.2/fluent2.css" rel="stylesheet" />

            <!-- Essential JS 2 Base's global script (Dependency Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 Button's global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the <div> element  -->
              <div id="chip">Janet Leverling</div>
            <script>
              // initialize and Render chip control
              new ej.buttons.ChipList({ chips: ["Janet Leverling"]}, '#chip');
            </script>
       </body>
  </html>



