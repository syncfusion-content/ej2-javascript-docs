

  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
      <title>Essential JS 2</title>

      <!-- EJ2 Document Editor dependent theme -->
      <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
      <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
      <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
      <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
      <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
      <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
      <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />
      <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />

      <!-- EJ2 Document Editor theme -->
      <link href="https://cdn.syncfusion.com/ej2/ej2-documenteditor/styles/material.css" rel="stylesheet" type="text/css" rel='nofollow' />

      <!-- EJ2 Document Editor dependent scripts -->
      <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js"type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
      <script src="https://cdn.syncfusion.com/ej2/ej2-office-chart/dist/global/ej2-office-chart.min.js" type="text/javascript"></script>
      <!-- EJ2 Document Editor script -->
      <script src="https://cdn.syncfusion.com/ej2/ej2-documenteditor/dist/global/ej2-documenteditor.min.js" type="text/javascript"></script>
  </head>
  <body>
  <!--Element which is going to render as Document Editor-->
  <div id='DocumentEditor' style='height:620px'>

  </div>
  <script>
      // Initialize DocumentEditorContainer component.
      var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true, height: '590px' });
      ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
      documenteditorContainer.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';
      //DocumentEditorContainer control rendering starts
      documenteditorContainer.appendTo('#DocumentEditor');
  </script>
  </body>

  </html>


