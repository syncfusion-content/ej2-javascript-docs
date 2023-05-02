

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>JavaScript (ES5)</title>
            <!-- JavaScript (ES5) Floating Action Button's dependency style -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Floating Action Button's control style -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Floating Action Button's dependency global script -->
           <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

           <!-- JavaScript (ES5) Floating Action Button's control global script -->
           <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!--Element to render the Floating Action Button control-->
            <button id='fab'></button>
            <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
            <script>
                ej.base.enableRipple(true);

                // initialize Floating Action Button control
                var fab = new ej.buttons.Fab({ content:'Add', target:"#targetElement"});

                // Render initialized Floating Action Button.
                fab.appendTo('#fab');
            </script>
       </body>
  </html>



