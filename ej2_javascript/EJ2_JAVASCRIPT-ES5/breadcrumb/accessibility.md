---
title: "Breadcrumb Accessibility"
component: "Breadcrumb"
description: "TypeScript Breadcrumb component has accessibility support to help access the features via keyboard, on-screen readers, or other assistive technology devices."
---

# Accessibility

## ARIA attributes

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies.
The breadcrumb provides a built-in compliance with `WAI-ARIA` specifications. The `WAI-ARIA` support is achieved using the attributes such as `aria-label`and `aria-disabled`.
It helps the people with disabilities by providing information about the widget for assistive technology in the screen readers. The breadcrumb component contains the `breadcrumb` roles.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | Indicates the type of input element. |
| aria-label | Indicates the breadcrumb item text. |
| aria-disabled | Indicates the state of breadcrumb item whether it is disabled. |

## User interaction with keyboard

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Tab</kbd></td><td>
Navigate to the next item and also next item in the popup of menu type overflow.</td></tr>
<tr>
<td>
<kbd>Shift + Tab</kbd></td><td>
Navigate to the previous item also previous item in the popup of menu type overflow.</td></tr>
<tr>
<td>
<kbd>Enter key in normal mode</kbd></td><td>
 Select the breadcrumb item.</td></tr>
<tr>
<td>
<kbd>Enter key in collapsed mode</kbd></td><td>
 To open the popup of menu type overflow mode when you press enter on collapsed button and It will expand the items of collapsed type overflow mode when you press enter on collapsed button.</td></tr>
</table>

{% tab template="breadcrumb/accessibility", sourceFiles="index.html, styles.css", isDefaultActive=true %}

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
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
    <ul id="breadcrumb"></ul>

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
    </script>
</body>

</html>
```

{% endtab %}
