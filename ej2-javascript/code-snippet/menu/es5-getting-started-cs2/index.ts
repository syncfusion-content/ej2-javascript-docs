

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
    <title>Essential JS 2 - Menu</title>

    <!-- Essential JS 2 Menu's dependent material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Menu's material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Menu's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Menu's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>

    <!--style reference from app-->
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <!--element which is going to render-->
    <ul id="menu"></ul>

    <script>
        ej.base.enableRipple(true);
        //Menu items definition
        var menuItems = [
            {
                text: 'File',
                items: [
                    { text: 'Open' },
                    { text: 'Save' },
                    { separator: true },
                    { text: 'Exit' }
                ]
            },
            {
                text: 'Edit',
                items: [
                    { text: 'Cut' },
                    { text: 'Copy' },
                    { text: 'Paste' }
                ]
            },
            {
                text: 'View',
                items: [
                    { text: 'Toolbar' },
                    { text: 'Sidebar' },
                    { text: 'Full Screen' }
                ]
            },
            {
                text: 'Tools',
                items: [
                    { text: 'Spelling & Grammar' },
                    { text: 'Customize' },
                    { text: 'Options' }
                ]
            },
            { text: 'Go' },
            { text: 'Help' }
        ];

        // Initialize Menu control.
        var menuObj = new ej.navigations.Menu({ items: menuItems }, '#menu');
    </script>
</body>

</html>


