

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Tooltip's global script -->
            <script src="//cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML span element  -->
            <div id='container'>
                <div style="margin: 50px;">
                    <span id='target'>Show Tooltip</span>
                </div>
            </div>
            <script>
                //Initialize Essential JS 2 JavaScript Tooltip component
                var tooltip = new ej.popups.Tooltip({
                    width: '150px',
                    height: '40px',
                    content: 'Tooltip with specific width and height'
                });
                tooltip.appendTo('#target');
            </script>
       </body>
  </html>



