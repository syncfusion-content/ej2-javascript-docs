

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
    <title>Essential JS 2 - Breadcrumb</title>

    <!-- Essential JS 2 Breadcrumb's dependent material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Breadcrumb's material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Breadcrumb's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Breadcrumb's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>

    <!--style reference from app-->
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <!--element which is going to render-->
    <div id="breadcrumb-control">
        <div class="header"><b>EnableNavigation - false</b></div><br />
        <nav id="breadcrumb"></nav>
        <br /><br/>
        <div class="header"><b>EnableNavigation - true</b></div><br />
        <nav id="breadcrumb2"></nav>
    </div>

    <script>
        ej.base.enableRipple(true);
        //Breadcrumb items definition
        var items = [
            {
                iconCss: 'e-icons e-home',
                url: "https://ej2.syncfusion.com/javascript/demos",
            },
            {
                text: "Components",
                url: "https://ej2.syncfusion.com/javascript/demos/#/material/grid/grid-overview",
            },
            {
                text: "Navigations",
                url: "https://ej2.syncfusion.com/javascript/demos/#/material/grid/breadcrumb/default",
            },
            {
                text: "Breadcrumb",
                url: "./breadcrumb/default",
            }
        ];

        new ej.navigations.Breadcrumb({
            items: items,
            enableNavigation: false
        }, '#breadcrumb');
        new ej.navigations.Breadcrumb({
            items: items,
            enableNavigation: true
        }, '#breadcrumb2');
    </script>
</body>

</html>


