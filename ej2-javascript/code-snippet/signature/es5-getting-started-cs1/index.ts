

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
    <title>Essential JS 2 - Signature</title>

    <!-- Essential JS 2 Signature's dependent material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Signature's material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Signature's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Signature's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>

    <!--style reference from app-->
    <link href="index.css" rel="stylesheet" />
</head>

<body>
    <h4>Sign here</h4>
    <!--element which is going to render-->
    <div id="signature-control">
        <canvas id="signature"></canvas>
    </div>
</body>

<script>
    var signature = new ej.inputs.Signature({}, '#signature');
</script>

</html>


