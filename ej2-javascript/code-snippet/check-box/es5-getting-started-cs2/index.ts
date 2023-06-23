

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>

            <!-- Essential JS 2 Base's material theme (Dependency Styles) -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 CheckBox's material theme (Control Styles) -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Base's global script (Dependency Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 CheckBox's global script (Control Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>

            <link href="styles.css" rel="stylesheet">
  
       </head>
       <body>
           <!--element which is going to render-->
            <input type="checkbox" id="checkbox1"/>
            <input type="checkbox" id="checkbox2"/>
            <input type="checkbox" id="checkbox3"/>
            <script>
                ej.base.enableRipple(true);

                //checked state.
                var checkbox = new ej.buttons.CheckBox({ label: 'Checked State', checked: true });
                checkbox.appendTo('#checkbox1');

                //unchecked state.
                checkbox = new ej.buttons.CheckBox({ label: 'Unchecked State' });
                checkbox.appendTo('#checkbox2');

                //indeterminate state.
                checkbox = new ej.buttons.CheckBox({ label: 'Indeterminate State', indeterminate: true });
                checkbox.appendTo('#checkbox3');
            </script>
       </body>
  </html>



