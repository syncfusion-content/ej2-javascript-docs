

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
    <title>Essential JS 2 - AppBar</title>
    <!-- Essential JS 2 AppBar's dependent material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 AppBar's material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 AppBar's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <!-- Essential JS 2 AppBar's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
  </head>

  <body>
    <!--element which is going to render-->
    <div class="control-container">
      <header id="appbar">
        <button id="defaultButtonMenu"></button>
        <span class="regular" style="margin:0 5px">EJ2 AppBar</span>
        <div class="e-appbar-spacer"></div>
        <button id="defaultButtonLogin"></button>
      </header>
    </div>

    <script>
      var appbarObj = new ej.navigations.AppBar({
        colorMode: 'Primary'
      });
      appbarObj.appendTo("#appbar");

      var defaultButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
      defaultButtonMenuObj.appendTo('#defaultButtonMenu');

      var defaultButtonLoginObj = new ej.buttons.Button({ cssClass: 'e-inherit', content: 'FREE TRIAL' });
      defaultButtonLoginObj.appendTo('#defaultButtonLogin');
    </script>
  </body>
</html>


