

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>

            <link href="https://cdn.syncfusion.com/ej2/34.2.2/fluent2.css" rel="stylesheet" />

            <!-- Essential JS 2 Base's global script (Dependency Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 CheckBox's global script (Control Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>

            <link href="styles.css" rel="stylesheet">
       </head>
       <body>
           <!--element which is going to render-->
            <input id="element" type="checkbox"/>
            <script>
                ej.base.enableRipple(true);

                // Initialize CheckBox control.
                var checkbox = new ej.buttons.CheckBox({ label: 'Default' });

                // Render initialized CheckBox.
                checkbox.appendTo('#element');
            </script>
       </body>
  </html>



