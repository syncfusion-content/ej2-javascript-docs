<!DOCTYPE html>
     <html xmlns="http://www.w3.org/1999/xhtml">

          <head>
               <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
               <title>JavaScript (ES5)</title>
               <!-- JavaScript (ES5) SpeechToText's dependency style -->
               <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />

               <!-- JavaScript (ES5) SpeechToText's control style -->
               <link href="https://cdn.syncfusion.com/ej2/21.2.3/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" />

               <!-- JavaScript (ES5) SpeechToText's dependency global script -->
               <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

               <!-- JavaScript (ES5) SpeechToText's control global script -->
               <script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>

               <!--style reference from app-->
               <link href="index.css" rel="stylesheet" />
          </head>

          <body>
               <!--Element to render the SpeechToText control-->
               <div id="container">
                    <button id="speechtotext_default"></button>
               </div>
               <script>
                    // Initializes the SpeechToText control
                    var speechToText = new ej.inputs.SpeechToText({});

                    // Render initialized SpeechToText.
                    speechToText.appendTo('#speechtotext_default');
               </script>
          </body>
     </html>