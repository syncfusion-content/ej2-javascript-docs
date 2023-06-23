

<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
    <title>Essential JS 2 NumericTextBox component</title>
    <!-- Essential JS 2 Input's's dependent material theme -->
  <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="//cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

  <!-- Essential JS 2 all script -->
  <!-- <script src="//cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

  <!-- Essential JS 2 Input's's dependent scripts -->
  <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
  <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
</head>

<body>
    <div id='container' style="width: 240px; margin: 0 auto;padding-top:100px;">
            <!--element which is going to render the NumericTextBox -->
          <input id="numeric" type="text" />
    </div>

<script>
// initializes NumericTextBox component
var currency = new ej.inputs.NumericTextBox({
    // sets currency with 2 numbers of decimal places format
    format: 'c2',
    // sets value to the NumericTextBox
    value: 10
});

// renders initialized NumericTextBox
currency.appendTo('#numeric');
</script>
</body>

</html>



