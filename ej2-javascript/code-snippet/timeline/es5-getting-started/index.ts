<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Essential JS 2 - Timeline</title>
    <!-- Essential JS 2 Timeline's dependent material theme -->
    <link href="resources/base/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/layouts/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Timeline's dependent global script -->
    <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/layouts/ej2-layouts.min.js" type="text/javascript"></script>
  </head>
  <body>
    <!--Element to render the Timeline control-->
    <div id="container" style="height: 350px;">
      <div id="timeline"></div>
    </div>

    <script>
        // Initialize Timeline control
        var timeline = new ej.layouts.Timeline({
            items: [{}, {}, {}, {}],
        });
        // Render initialized Timeline.
        timeline.appendTo("#timeline");
    </script>
  </body>
</html>