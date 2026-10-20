

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 SplitButton's dependency style -->
            <link href="https://cdn.syncfusion.com/ej2/34.2.2/fluent2.css" rel="stylesheet" />

            <!-- Essential JS 2 SplitButton's dependency global script -->
           <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
           <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
           <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>

           <!-- Essential JS 2 SplitButton's control global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!--element which is going to render-->
            <button id='element'>Paste</button>
            <script>
                ej.base.enableRipple(true);

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

                // initialize SplitButton control
                var splitBtn = new ej.splitbuttons.SplitButton({items: items});

                // Render initialized SplitButton.
                splitBtn.appendTo('#element');
            </script>
       </body>
  </html>



