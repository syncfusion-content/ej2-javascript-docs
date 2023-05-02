

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 DropDownButton's dependency style -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 DropDownButton's control style -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 DropDownButton's dependency global script -->
           <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
           <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
           <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>

           <!-- Essential JS 2 DropDownButton's control global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!--element which is going to render-->
            <button id='element'>Edit</button>
            <script>
                ej.base.enableRipple(true);

                //Initialize action items.
                var items = [
                {
                  text: 'Cut'
                },
                {
                  text: 'Copy'
                },
                {
                  text: 'Paste'
                }];

                // initialize DropDownButton control
                var drpDownBtn = new ej.splitbuttons.DropDownButton({items: items});

                // Render initialized DropDownButton.
                drpDownBtn.appendTo('#element');
            </script>
       </body>
  </html>



