---
layout: post
title: How to Get an Instance of ##Platform_Name## Control | Syncfusion
description: Check out and learn how to create and get an instance of Syncfusion ##Platform_Name## control and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to Get an Instance of Syncfusion ##Platform_Name## Control?

This guide explains how to initialize a Syncfusion ##Platform_Name## control and retrieve its instance for further manipulation.

## Initialize the Syncfusion control

You first need to create a new instance of the desired Syncfusion control by using the constructor provided in the Syncfusion library. For example, to create a Grid control, the code looks like this:

```html
<script>
    var grid = new ej.grids.Grid({
        dataSource: data,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
            { field: 'OrderDate', headerText: 'Order Date', width: 150, format: 'yMd' }
        ]
    });
</script>
```
* `var grid`: A variable where the instance of the Grid control is stored.
* `ej.grids.Grid`: Constructor for creating the Grid, where you pass configuration options such as `dataSource` and `columns`

After creating the instance, the control needs to be rendered on the page by appending it to a DOM element. You can do this using the `appendTo` method, passing the target element's selector.

```html
<div>
    <!-- HTML grid element, which will render as Essential JS 2 Grid -->
    <div id="myGrid"></div>
</div>

<script>
    var grid = new ej.grids.Grid({...});
    grid.appendTo('#myGrid');
</script>
```
* `#myGrid`: This is the ID of the HTML element where the Grid will be rendered.

## Access the instance of the Syncfusion control

Once the control has been created and appended, the instance is stored in the variable (in this case, grid). You can use this instance to interact with the control, such as accessing its methods, properties, or updating the control. For example, you can get all rows of the Grid using this instance like below:

```html
<script>
console.log(grid.getRows());
</script>
```