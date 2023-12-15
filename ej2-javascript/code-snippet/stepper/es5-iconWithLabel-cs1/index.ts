<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Essential JS 2 - Stepper</title>
    <!-- Essential JS 2 Stepper's dependent material theme -->
    <link href="resources/base/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/navigations/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Stepper's dependent global script -->
    <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
    <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>
  </head>
  <body>
    <!--Element to render the Stepper control-->
    <nav id="stepper"></nav>

    <script>
      var iconWithLabel = [
        { label: 'Cart', iconCss: 'sf-icon-cart' },
        { label: 'Address', iconCss: 'sf-icon-user' },
        { label: 'Delivery', iconCss: 'sf-icon-transport' },
        { label: 'Payment', iconCss: 'sf-icon-payment' },
        { label: 'Ordered', iconCss: 'sf-icon-success' }
        ];

        var iconLabelStepper = new ej.navigations.Stepper({
        steps: iconWithLabel
        });
        iconLabelStepper.appendTo("#stepper");
    </script>
  </body>
</html>