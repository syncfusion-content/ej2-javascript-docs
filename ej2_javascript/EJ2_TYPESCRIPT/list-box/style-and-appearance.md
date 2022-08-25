---
title: "Styles and Appearances"
component: "ListBox"
description: "This section explains the details of the styles and appearances of the ListBox"
---

# Styles and Appearances

To modify the ListBox appearance, you need to override the default CSS of ListBox component. Please find the list of CSS classes and its corresponding section in ListBox component. Also, you have an option to create your own custom theme for the controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

CSS Class | Purpose of Class
-----|-----
|.e-listbox-wrapper|To customize the listbox wrapper
|.e-list-parent .e-list-item|To customize the listbox list items
|.e-list-parent .e-list-item:hover|To customize the listbox list items on hover
|.e-list-parent .e-list-item.e-selected|To customize the listbox selected list item
|.e-listboxtool-wrapper .e-listbox-tool|To customize the listbox toolbar
|.e-listboxtool-wrapper .e-listbox-tool .e-btn|To customize the listbox toolbar button
|.e-listboxtool-wrapper .e-listbox-tool .e-btn .e-btn-icon.e-icons::before|To customize the listbox toolbar icon

## Horizontal ListBox

You can use [cssClass](../api/list-box/#cssClass) property to display the Listbox horizontally.

{% tab template="list-box/horizontal-listbox", es5Template="horizontal-listbox", isDefaultActive = "true", sourceFiles="app.ts,index.html,style.css", iframeHeight="500px" %}

```typescript

import { ListBox } from '@syncfusion/ej2-dropdowns';

// define the array of object
let data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom' },
    { text: 'Bugatti Chiron' },
    { text: 'Bugatti Veyron Super Sport' },
    { text: 'SSC Ultimate Aero' },
    { text: 'Koenigsegg CCR' },
    { text: 'McLaren F1' },
    { text: 'Aston Martin One- 77' },
    { text: 'Jaguar XJ220' },
    { text: 'McLaren P1' },
    { text: 'Ferrari LaFerrari' },
];

// initialize ListBox component
let listObj: ListBox = new ListBox({
    //set the data to dataSource property
    dataSource: data,
    cssClass: 'e-horizontal-listbox'
});
listObj.appendTo('#listbox');

```

{% endtab %}
