

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>

            <!-- Essential JS 2 Base's material theme (Dependency Styles) -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Button's material theme (Control Styles) -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Base's global script (Dependency Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 Button's global script (Control Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>

       </head>
       <body>
           <!-- Add the HTML <button> element  -->
             <button id="element">Flat</button>
            <script>
                ej.base.enableRipple(true);

                // initialize button control
                var button = new ej.buttons.Button({ cssClass: 'e-flat', content: 'Button' });

                // Render initialized button.
                button.appendTo('#element')
            </script>
       </body>
  </html>



