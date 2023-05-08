

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>JavaScript (ES5)</title>
            <!-- JavaScript (ES5) Rating's dependency style -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Rating's control style -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Rating's dependency global script -->
           <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
           <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>

           <!-- JavaScript (ES5) Rating's control global script -->
           <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!--Element to render the Rating control-->
            <div class='wrap' style= "margin: 50px auto; text-align: center;">
               <input id="rating"/>
            </div>
            <script>
                ej.base.enableRipple(true);

                // initialize Rating control
                var rating = new ej.inputs.Rating({});

                // Render initialized Rating.
                rating.appendTo('#rating');
            </script>
       </body>
  </html>



