---
layout: post
title: Hierarchy grid in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Hierarchy grid in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Hierarchy grid 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchy grid in ##Platform_Name## Grid control

The Hierarchy Grid in an ##Platform_Name## Grid control is typically used when you need to display hierarchical data in a tabular format with expandable and collapsible rows. It allows you to represent parent and child relationships within the grid, making it easier for you to navigate and understand the data.

This feature can be enabled by utilizing the [childGrid](../api/grid/#childgrid) and [childGrid.queryString](../api/grid/#querystring) properties of the grid control.

To enable the Hierarchy Grid feature:

1. Inject the **DetailRow** module in the grid. This module is Essential<sup style="font-size:70%">&reg;</sup> for handling the hierarchy grid functionality.

2. Define the `childGrid` property within the Grid control configuration. This property describes the options of the child grid.

3. Specify the `childGrid.queryString` property to establish the relation between the parent and child grids and visualizes the data in a hierarchical structure. This property determines how the child records are fetched based on the parent record.

The following example demonstrates how to enable the hierarchy feature in the grid

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs85/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs85/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs85" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs85/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs85/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs85" %}
{% endif %}

> * Grid supports n level of child grids.
> * Hierarchical binding is not supported when [DetailTemplate](../api/grid/#detailtemplate) is enabled.

## Bind hierarchy grid with different field

By default, the parent and child grids have the same field name to map and render a hierarchical grid. However, the control supports establishing a parent-child relationship between grids with different field names. This feature is beneficial when you want to create a parent-child relationship between grids but need to use distinct field names for mapping the data. As a result, you can easily establish the desired relationship between the parent and child grids, even with different field names for data mapping.

By default, the parent and child grid relation is maintained using the [queryString](../api/grid/#querystring) property, which requires the same field name for both grids. However, to achieve the parent and child relation with different fields, you need to modify the mapping value in the [load](../api/grid/#load) event of child grid. 

In the following example, the `load` event is utilized to customize the mapping value for the child grid. By accessing the `parentDetails` property and its **parentKeyFieldValue**, you can set the desired mapping value. The `parentRowData` property contains the data of the parent row, and by using the **EmployeeID** field name, you can extract the corresponding value from the parent row data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs88/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs88/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs88" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs88/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs88/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs88" %}
{% endif %}

> Make sure to adjust the field name according to your specific scenario.

## Expand child grid initially

Expanding the child grid initially in the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid control is helpful when you want to display the child rows of the hierarchical grid expanded by default upon grid load. This can be beneficial in scenarios where you want to provide immediate visibility into the hierarchical data without requiring you to manually expand each child row.

To achieve this, you can use the [expand](../api/grid/detailRow/#expand) method with the desired target index (number) in the [dataBound](../api/grid/#databound) event of the grid. 

In the provided example, expand the third record of the grid by utilizing the `expand` method within the `dataBound` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs86/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs86/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs86" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs86/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs86/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs86" %}
{% endif %}

> Index values begin with **"0"**, allowing you to provide the desired target index to expand a specific child grid initially.

## Dynamically load child grid data

Dynamically load child grid data in Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid helps improve performance, optimize data transmission, and enhance the your experience by providing on-demand access to relevant information. Additionally, it offers flexibility in data presentation, which helps improve the overall efficiency of your application.

To dynamically load the `dataSource` of a child grid in the Grid, you can utilize the [load](../api/grid/#load) event of parent grid. This event allows you to customize the loading behavior of the child grid based on the data of parent grid.

The following example demonstrates how to dynamically load child grid data using the `load` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs87/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs87/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs87" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs87/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs87/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs87" %}
{% endif %}

## Dynamically bind data to child grid based on parent row Data

Dynamically binding data to a child grid based on the parent row data in the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid control is useful when you want to display child grid data that is specific to each parent row. This feature allows for a dynamic and contextual representation of data within the child grid.

To dynamically bind data to the child grid based on the parent row data instead of using the [queryString](../api/grid/#querystring) property, you can utilize the [detailDataBound](../api/grid/#detaildatabound) event of the grid. This event is triggered when expanding the child grid.

In the `detailDataBound` event handler, you can filter the child grid's dataSource based on the **EmployeeID** column value of the parent row data. This can be achieved by using the `DataManager` plugin and applying a filter to the child grid's dataSource. The filtered data can be assigned as the new dataSource for the child grid. This can be demonstrated by the following sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs90/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs90/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs90" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs90/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs90/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs90" %}
{% endif %}

## Adding record in child grid

Adding a record in a child grid within the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid control is useful when you want to provide the ability to add new records to the child grid. This feature allows you to input and save additional data specific to each parent row.

To maintain the parent-child relationship in the Grid when adding a record to the child grid, you need to set the value for the `queryString` in the added data. This can be done using the [actionBegin](../api/grid/#actionbegin) event.

In the following example, the parent and child grids are related by the **EmployeeID** field. To add a new record in the child grid, the **EmployeeID** field needs to be set with the value of the parent record's `queryString` in the `actionBegin` event. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs89/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs89/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs89" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs89/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs89/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs89" %}
{% endif %}

## Template column in child grid

A template column in a child grid within the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid control is valuable when you want to customize the appearance and functionality of specific columns in the child grid. It is useful for incorporating interactive elements, custom formatting, or complex data representation within specific columns of the child grid.

To achieve this, you can utilize the [template](../api/grid/column/#template) property of a column to display a custom element instead of a field value in the Grid. 

The following example demonstrates, how to show a custom image in the **Employee Image** column of the child grid by utilizing the `template` property of the column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/hierarchygrid-templatecolumn-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchygrid-templatecolumn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchygrid-templatecolumn-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/hierarchygrid-templatecolumn-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchygrid-templatecolumn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/hierarchygrid-templatecolumn-cs1" %}
{% endif %}

## How to get parent detail in child grid

Getting parent details in a child grid in an ##Platform_Name## Grid control is useful when you want to display and utilize information from the parent row within the child grid. This can be beneficial in scenarios where you need to provide additional context or perform calculations based on the parent row's data

To achieve this, you can utilize the [created](../api/grid/#created) event. This event is triggered when the child grid is created and can be used to handle the child grid.

The following example demonstrates how to obtain parent details in a child grid using the `created` event. Within the `created` event, you can access the parent row data using `this.parentDetails.parentRowData` and display the desired details in the message.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/hierarchygrid-parentdetails-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchygrid-parentdetails-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchygrid-parentdetails-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/hierarchygrid-parentdetails-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchygrid-parentdetails-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/hierarchygrid-parentdetails-cs1" %}
{% endif %}

## Render aggregates in child grid

The Aggregates feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid component allows you to display aggregate values in the footer, group footer, and group caption of the child grid. With this feature, you can easily perform calculations on specific columns and show summary information. 

Rendering aggregates in a child grid involves displaying summary data at the footer or group caption of the grid. This can be particularly useful in hierarchical grids where each child grid represents detailed data that needs to be summarized.

The following example demonstrates how to render aggregates in a child grid to display the sum and maximum values of the **Freight** column.


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-hierarchygrid-render/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-hierarchygrid-render/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-hierarchygrid-render" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-hierarchygrid-render/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-hierarchygrid-render/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-hierarchygrid-render" %}
{% endif %}

## Expand all by external button

The Hierarchy Grid in the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid control allows you to expand all child grid rows using an external button. This feature provides you with a convenient overview of all the hierarchical data within the grid, eliminating the need to manually expand each row individually.

By default, Grid renders all child grid rows in collapsed state. To expand all child grid rows in the Grid using an external button, you can utilize the [expandAll](../api/grid/detailRow/#expandall) method provided by the DetailRow module. Similarly, to collapse all grid rows, you can use the [collapseAll](../api/grid/detailRow/#collapseall) method. 

The following example demonstrates how to expand and collapse the hierarchy grid using an external button click function.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/hierarchy-method-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchy-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-method-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/hierarchy-method-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchy-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/hierarchy-method-cs1" %}
{% endif %}

> The `expandAll` and `collapseAll` methods are not recommended for large datasets due to the considerable time it takes to update the changes in the UI.

## Hide the expand/collapse icon in parent row when no record in child grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid allows you to hide the expand/collapse icon in the parent row when there are no records in the child grid. However, in certain scenarios, you may want to hide the expand/collapse icon for parent rows that do not have any child records, providing a cleaner and more intuitive interface by eliminating unnecessary icons in empty parent rows.

To achieve this, you can utilize the [rowDataBound](../api/grid/#rowdatabound) event to hide the icon when there are no records in the child grid.

To hide the expand/collapse icon in parent row when no records in child grid, follow the given steps:

1. **Create a CSS Class with Custom Style**: Define a CSS class that overrides the default appearance of the Grid. This class will be used to customize the background color of the parent row when it is selected and when hovering over rows.

```css
    .e-row[aria-selected="true"] .e-customizedexpandcell {
        background-color: #e0e0e0;
    }

    .e-grid.e-gridhover tr[role='row']:hover {
        background-color: #eee;
    }
```

2. **Implement the rowDataBound Event Handler:** This event is triggered for each row in the grid when data is bound, allowing you to customize the row's appearance and behavior. In the provided code, the handler checks if the current row has any child records associated with it. If not, it hides the content of the first element, which contains the expand/collapse icon, and applies a custom CSS class (e-customizedexpandcell) to modify its appearance.

{% if page.publishingplatform == "typescript" %}
 
```ts
    function rowDataBound(args: RowDataBoundEventArgs) {
        let parentData: number = (args.data as Employee)['EmployeeID'];
        let childrecord: object[] = new DataManager(childData as JSON[]).
            executeLocal(new Query().where('EmployeeID', 'equal', parentData, true));
        if (childrecord.length === 0) {
            // Here hide which parent row has no child records
            let rowElement = args.row as HTMLTableRowElement;
            let cellElement= rowElement.querySelector('td') as HTMLTableCellElement
            cellElement.innerHTML = ' '; 
            cellElement.className = 'e-customizedexpandcell';
        }
    }
```

 {% elsif page.publishingplatform == "javascript" %}
 
```js
function rowDataBound(args){
   var parentData = (args.data)['EmployeeID'];
   var childrecord = new ej.data.DataManager(childData).executeLocal(new ej.data.Query().where('EmployeeID', 'equal', parentData, true));
    if (childrecord.length === 0) {
        // Here hide which parent row has no child records
       var rowElement = args.row;
       var cellElement= rowElement.querySelector('td')
        cellElement.innerHTML = ' '; 
        cellElement.className = 'e-customizedexpandcell';
    }
}
```

{% endif %}

The following example demonstrates how to hide the expand/collapse icon in the row with **EmployeeID** as **1**, which does not have record in child Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/hierarchy-grid-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchy-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/hierarchy-grid-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchy-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid-cs1" %}
{% endif %}

## Customize hierarchy grid icons

You can customize the default expand/collapse icons in the Hierarchy Grid of Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component using custom CSS, allowing you to modify their visual representation. To achieve this, add the following CSS to your index.html file:

```
    .e-grid .e-icon-grightarrow::before,
        .e-grid-menu .e-icon-grightarrow::before {
            content: '\e7f9';
        }
    .e-grid .e-icon-gdownarrow::before,
        .e-grid-menu .e-icon-gdownarrow::before {
            content: '\e934';
        }

```

In the demo below, the expand/collapse icons have been changed to arrow-down and arrow-right icons.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/changeicon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/changeicon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/changeicon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/changeicon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/changeicon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/changeicon-cs1" %}
{% endif %}

## Customize the child grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid control offers various ways to customize the child grid appearance using both default CSS and custom themes. To access the child grid elements, you can use the **.e-detailcell** class selector, which targets the child grid.

### Header

You can customize the appearance of the header elements in the child grid using CSS. Here are examples of how to customize the child grid header, header cell, and header cell div element.

**Customizing the child grid header**

To customize the appearance of the chid grid header root element, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-headercontent{
    border: 2px solid green;
}
```
In this example, the **.e-detailcell** class targets the child grid and **.e-headercontent** targets its header root element. You can modify the `border` property to change the style of the header border. This customization allows you to override the thin line between the header and content of the child grid.

![Child grid header](images/child-grid-header.png)

**Customizing the child grid header cell**

To customize the appearance of the grid header cell elements, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-headercontent .e-headercell{
    color: #ffffff;
    background-color: #1ea8bd;
}
```
In this example, the **.e-headercell** class targets the header cell elements. You can modify the `color` and `background-color` properties to change the text color and background of the child grid's header cells.

![Child grid header cell](images/child-grid-header-cell.png)

**Customizing the child grid header cell div element**

To customize the appearance of the child grid header cell div element, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-headercelldiv {
    font-size: 15px;
    font-weight: bold;
    color: darkblue;
}
```
In this example, the **.e-headercelldiv** class targets the div element within the header cell of the child grid. You can modify the `font-size`, `font-weight`, `color` properties to change the font size, font-weight and color of the header text content.

![Child grid header cell div element](images/child-grid-header-cell-div-element.png)

### Paging

You can customize the appearance of the paging elements in the child grid using CSS. Here are examples of how to customize the pager root element, pager container element, pager navigation elements, pager page numeric link elements, and pager current page numeric element of the child grid.

**Customizing the child grid pager root element**

To customize the appearance of the child grid pager root element, you can use the following CSS code:

```css
.e-detailcell .e-grid  .e-gridpager {
    font-family: cursive;
    background-color: #deecf9;
}
```
In this example, the **.e-detailcell** class targets the child grid and the **.e-gridpager** class targets the pager root element. You can modify the `font-family` to change the font family and `background-color` property to change the background color of the pager.

![Child grid pager root element](images/child-grid-pager-root-element.png)

**Customizing the child grid pager container element**

To customize the appearance of the child grid pager container element, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-pagercontainer {
    border: 2px solid #00b5ff;
    font-family: cursive;
}
```

In this example, the **.e-pagercontainer** class targets the pager container element. You can modify the `border` property and `font-family` property to change the border color and font family of the pager container.

![Child grid pager container element](images/child-grid-pager-container-element.png)

**Customizing the child grid pager navigation elements**

To customize the appearance of the child grid pager navigation elements, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-gridpager .e-prevpagedisabled,
.e-detailcell .e-grid .e-gridpager .e-prevpage,
.e-detailcell .e-grid .e-gridpager .e-nextpage,
.e-detailcell .e-grid .e-gridpager .e-nextpagedisabled,
.e-detailcell .e-grid .e-gridpager .e-lastpagedisabled,
.e-detailcell .e-grid .e-gridpager .e-lastpage,
.e-detailcell .e-grid .e-gridpager .e-firstpage,
.e-detailcell .e-grid .e-gridpager .e-firstpagedisabled {
    background-color: #deecf9;
}
```

In this example, the classes **.e-prevpagedisabled, .e-prevpage, .e-nextpage, .e-nextpagedisabled, .e-lastpagedisabled, .e-lastpage, .e-firstpage,** and **.e-firstpagedisabled** target the various pager navigation elements of the child grid. You can modify the `background-color` property to change the background color of these elements.

![Child grid pager navigation elements](images/child-grid-pager-navigation-element.png)

**Customizing the child grid pager page numeric link elements**

To customize the appearance of the child grid pager current page numeric link elements, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-gridpager .e-numericitem {
    background-color: #5290cb;
    color: #ffffff;
    cursor: pointer;
}

.e-detailcell .e-grid .e-gridpager .e-numericitem:hover {
    background-color: white;
    color: #007bff;
}
```

In this example, the **.e-numericitem** class targets the page numeric link elements. You can modify the `background-color`, `color` properties to change the background color and text color of these elements.

![Child grid pager page numeric link elements](images/child-grid-pager-page-numeric-link-elements.png)

**Customizing the child grid pager current page numeric element**

To customize the appearance of the child grid pager current page numeric element, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-gridpager .e-currentitem {
    background-color: #0078d7;
    color: #fff;
}
```

In this example, the **.e-currentitem** class targets the current page numeric item. You can modify the `background-color` property to change the background color of this element and `color` property to change the text color.

![Child grid pager current page numeric element](images/child-grid-pager-current-page-numeric-element.png)

### Sorting

You can customize the appearance of the sorting icons and multi sorting icons in the child grid using CSS.You can use the available Syncfusion<sup style="font-size:70%">&reg;</sup> [icons](../appearance/icons#material) based on your theme. Here's how to do it:

**Customizing the child grid sorting icon**

To customize the sorting icon that appears in the child grid header when sorting is applied, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-icon-ascending::before {
    content: '\e7a3';
    /* Icon code for ascending order */
}

.e-detailcell .e-grid .e-icon-descending::before {
    content: '\e7b6';
    /* Icon code for descending order */
}
```
In this example, the **.e-detailcell** class targets the child grid and the **.e-icon-ascending::before** class targets the sorting icon for ascending order, and the **.e-icon-descending::before** class targets the sorting icon for descending order.

![Child grid sorting icon](images/child-grid-sorting-icons.png)

**Customizing the child grid multi sorting icon**

To customize the multi sorting icon that appears in the child grid header when multiple columns are sorted, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-sortnumber {
    background-color: #deecf9;
    font-family: cursive;
}
```

In this example, the **.e-sortnumber** class targets the background color and font family of the multi sorting icon. You can modify the `background-color` and `font-family` properties to customize the appearance of the multi sorting icon.

![Child grid multi sorting icon](images/child-grid-multi-sorting-icon.png)

### Filtering

You can customize the appearance of filtering elements in the child grid using CSS. Below are examples of how to customize various filtering elements, including filter bar cell elements, filter bar input elements, focus styles, clear icons, filter icons, filter dialog content, filter dialog footer, filter dialog input elements, filter dialog button elements, and Excel filter dialog number filters.

**Customizing the child grid filter bar cell element**

To customize the appearance of the filter bar cell element in the child grid header, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-filterbar .e-filterbarcell {
  background-color: #045fb4;
}

```
In this example, the **.e-detailcell** class targets the child grid and the **.e-filterbarcell** class targets the filter bar cell element in the child grid header. You can modify the `background-color` property to change the color of the filter bar cell element.

![Child gird filter bar cell element](images/child-grid-filter-bar-cell-element.png)

**Customizing the child grid filter bar input element**

To customize the appearance of the filter bar input element in the child grid header, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-filterbarcell .e-input-group input.e-input{
    font-family: cursive;
}
```
In this example, the **.e-filterbarcell** class targets the filter bar cell element, and the **.e-input** class targets the input element within the cell. You can modify the `font-family` property to change the font of the filter bar input element.

![Child gird filter bar input element](images/child-grid-filter-bar-input-element.png)

**Customizing the child grid filter bar input focus**

To customize the appearance of the child grid's filter bar input element's focus highlight, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-filterbarcell .e-input-group.e-input-focus{
    background-color: #deecf9;
}
```
In this example, the **.e-filterbarcell** class targets the filter bar cell element, and the **.e-input-group.e-input-focus** class targets the focused input element. You can modify the `background-color` property to change the color of the focus highlight.

![Child gird filter bar input focus](images/child-grid-filter-bar-input-element-focus.png)

**Customizing the child grid filter bar input clear icon**

To customize the appearance of the child grid's filter bar input element's clear icon, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-filterbarcell .e-input-group .e-clear-icon::before {
    content: '\e72c';
}
```
In this example, the **.e-clear-icon** class targets the clear icon element within the input group. You can modify the `content` property to change the icon displayed.

![Child gird filter bar input clear icon](images/child-grid-filter-bar-input-clear-icon.png)

**Customizing the child grid child grid filtering icon**

To customize the appearance of the filtering icon in the child grid header, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-icon-filter::before{
    content: '\e81e';
}
```
In this example, the **.e-icon-filter** class targets the filtering icon element. You can modify the `content` property to change the icon displayed.

![Child gird filtering icon](images/child-grid-filtering-icon.png)

**Customizing the child grid filter dialog content**

To customize the appearance of the child grid's filter dialog's content element, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-filter-popup .e-dlg-content {
    background-color: #deecf9;
}
```
In this example, the **.e-filter-popup .e-dlg-content** classes target the content element within the filter dialog. You can modify the `background-color` property to change the color of the dialog's content.

![Child grid filter dialog content](images/child-grid-filter-dialog-content.png)

**Customizing the child grid filter dialog footer**

To customize the appearance of the child grid's filter dialog's footer element, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-filter-popup .e-footer-content {
    background-color: #deecf9;
}
```
In this example, the **.e-filter-popup .e-footer-content** classes target the footer element within the filter dialog. You can modify the `background-color` property to change the color of the dialog's footer.

![Child grid filter dialog footer](images/child-grid-filter-dialog-footer.png)

**Customizing the child grid filter dialog input element**

To customize the appearance of the child grid's filter dialog's input elements, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-filter-popup .e-input-group input.e-input{
    font-family: cursive;
}
```
In this example, the **.e-filter-popup** class targets the filter dialog, and the **.e-input** class targets the input elements within the dialog. You can modify the `font-family` property to change the font of the input elements.

![Child grid filter dialog input element](images/child-grid-filter-dialog-input-element.png)

**Customizing the child grid filter dialog button element**

To customize the appearance of the child grid's filter dialog's button elements, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-filter-popup .e-btn{
    font-family: cursive;
}
```
In this example, the **.e-filter-popup** class targets the filter dialog, and the **.e-btn** class targets the button elements within the dialog. You can modify the `font-family` property to change the font of the button elements.

![Child grid filter dialog button element](images/child-grid-filter-dialog-button-element.png)

**Customizing the child grid excel filter dialog number filters element**

To customize the appearance of the excel filter dialog's number filters in the child grid, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-filter-popup .e-contextmenu-wrapper ul{
    background-color: #deecf9;
}
```
In this example, the **.e-filter-popup .e-contextmenu-wrapper** ul classes target the number filter elements within the excel filter dialog. You can modify the `background-color` property to change the color of these elements.

![Child grid excel filter dialog number filters element](images/child-grid-excel-filter-dialog-number-filters-element.png)

### Grouping

You can customize the appearance of grouping elements in the child grid using CSS. Here are examples of how to customize the group header, group expand/collapse icons, group caption row, and grouping indent cell.

**Customizing the child grid group header**

To customize the appearance of the child grid's group header element, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-groupdroparea {
    background-color: #132f49;
}
```
In this example, the **.e-detailcell** class targets the child grid and the **.e-groupdroparea** class targets the group header element. You can modify the `background-color` property to change the color of the group header.

![Child grid group header](images/child-grid-group-header.png)

**Customizing the child grid group expand or collapse icons**

To customize the appearance of the group expand/collapse icons in the child grid, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-icon-gdownarrow::before{
    content:'\e7c9'
}
.e-detailcell .e-grid .e-icon-grightarrow::before{
    content:'\e80f'
}
```

In this example, the **.e-icon-gdownarrow** and **.e-icon-grightarrow** classes target the expand and collapse icons, respectively. You can modify the `content` property to change the icon displayed. You can use the available Syncfusion<sup style="font-size:70%">&reg;</sup> icons based on your theme.

![Child grid group expand or collapse icons](images/child-grid-group-expand-or-collapse-icons.png)

**Customizing the child grid group caption row**

To customize the appearance of the child grid's group caption row and the icons indicating record expansion or collapse, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-groupcaption {
    background-color: #deecf9;
}

.e-detailcell .e-grid .e-recordplusexpand,
.e-detailcell .e-grid .e-recordpluscollapse {
    background-color: #deecf9;
}
```

In this example, the **.e-groupcaption** class targets the group caption row element, and the **.e-recordplusexpand** and **.e-recordpluscollapse** classes target the icons indicating record expansion or collapse. You can modify the `background-color` property to change the color of these elements.

![Child grid group caption row](images/child-grid-group-caption-row.png)

**Customizing the child grid grouping indent cell**

To customize the appearance of the child grid's grouping indent cell element, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-indentcell {
    background-color: #deecf9;
}
```

In this example, the **.e-indentcell** class targets the grouping indent cell element. You can modify the `background-color` property to change the color of the indent cell.

![Child grid grouping indent cell](images/child-grid-indent-cell.png)

### Toolbar

You can customize the appearance of the toolbar in the child grid using CSS. Here are examples of how to customize the toolbar root element and toolbar button element.

**Customizing the child grid toolbar root element**

To customize the appearance of the child grid's toolbar root element, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-toolbar-items {
    background-color: #deecf9;
}
```

In this example, the **.e-detailcell** class targets the child grid and the **.e-toolbar-items** class targets the background color of the toolbar root element. You can modify the `background-color` property to change the background color of the toolbar.

![Child grid toolbar root element](images/child-grid-toolbar-root-element.png)

**Customizing the child grid toolbar button element**

To customize the appearance of the child grid's toolbar buttons, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-toolbar .e-btn {
    background-color: #deecf9;
}
```

In this example, the **.e-toolbar .e-btn** selector targets the background color of the toolbar button elements. You can modify the `background-color` property to change the background color of the toolbar buttons.

![Child grid toolbar button element](images/child-grid-toolbar-button-element.png)

### Editing

You can customize the appearance of editing-related elements in the child grid using CSS. Below are examples of how to customize various editing-related elements.

**Customizing the child grid edited and added row element**

To customize the appearance of edited and added row table elements in the child grid, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-editedrow table, 
.e-detailcell .e-grid .e-addedrow table {
	background-color: #62b2eb;
}
```
In this example, the **.e-detailcell** class targets the child grid and the .**e-editedrow** class represents the edited row element, and the **.e-addedrow** class represents the added row element. You can modify the `background-color` property to change the color of these row table elements.

![Child grid customizing the edited row element](images/child-grid-edited-row-element.png)
![Child grid customizing the added row element](images/child-grid-added-row-element.png)

**Customizing the child grid edited row input element**

To customize the appearance of edited row input elements in the child grid, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-editedrow .e-input-group input.e-input{
  font-family: cursive;
  color:rgb(214, 33, 123)
}
```
In this example, the **.e-editedrow** class represents the edited row element, and the **.e-input** class represents the input elements within the form. You can modify the `font-family` property to change the font and `color` property  to change text color of the input elements.

![Child grid customizing the edited row input element](images/child-grid-edited-row-input-element.png)

**Customizing the child grid edit dialog header element**

To customize the appearance of the edit dialog header element in the child grid, you can use the following CSS code:

```css
.e-edit-dialog .e-dlg-header-content {
    background-color: #deecf9;
}
```
In this example, the **.e-edit-dialog** class represents the edit dialog, and the **.e-dlg-header-content** class targets the header content within the dialog. You can modify the `background-color` property to change the color of the header element.

![Child grid customizing the edit dialog header element](images/child-grid-edit-dialog-header-element.png)

**Customizing the child grid edited row input element in dialog edit mode**

To customize the appearance of the child grid's edited row input elements in dialog edit mode, you can use the following CSS code:

```css
.e-grid .e-gridform .e-rowcell .e-float-input .e-field {
    font-family: cursive;
}
```
In this example, the **.e-gridform** class represents the editing form, and the **.e-float-input** class targets the floating input elements within the form. You can modify the `font-family` property to change the font of the input elements.

![Child grid customizing the edited row input element in dialog](images/child-grid-edited-row-input-element-in-dialog.png)

**Customizing the child grid command column buttons**

To customize the appearance of the child grid's command column buttons such as edit, delete, update, and cancel, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-delete::before ,.e-grid .e-cancel-icon::before{
    color: #f51717;
}
.e-detailcell .e-grid .e-edit::before, .e-grid .e-update::before {
    color: #077005;
}
```
In this example, the **.e-edit, .e-delete, .e-update, and .e-cancel-icon** classes represent the respective command column buttons. You can modify the `color` property to change the color of these buttons.

![Child grid customize command column button](images/child-grid-commandbutton-1.png)
![Child grid customize command column button](images/child-grid-commandbutton-2.png)

### Aggregate

You can customize the appearance of aggregate elements in the child grid using CSS. Below are examples of how to customize the aggregate root element and the aggregate cell elements.

**Customizing the child grid aggregate root element**

To customize the appearance of the child grid's aggregate root elements, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-gridfooter {
    font-family: cursive;
}
```

In this example, the **.e-detailcell** class targets the child grid and the **e-gridfooter** class represents the root element of the aggregate row in the grid footer. You can modify the `font-family` property to change the font of the aggregate root element.

![Child grid customize aggregate root element](images/child-grid-aggregate-root-element.png)

**Customizing the child grid aggregate cell elements**

To customize the appearance of the child grid's aggregate cell elements (summary row cell elements), you can use the following CSS code:

```css
.e-detailcell .e-grid .e-summaryrow .e-summarycell {
    background-color: #deecf9;
}
```

In this example, the **e-summaryrow** class represents the summary row containing aggregate cells, and the **e-summarycell** class targets individual aggregate cells within the summary row. You can modify the `background-color` property to change the `color` of the aggregate cell elements.

![Child grid customize aggregate cell element](images/child-grid-aggregate-cell-element.png)

### Selection

You can customize the appearance of the selection in the child grid using CSS. Here are examples of how to customize the row selection background, cell selection background, and column selection background.

**Customizing the child grid row selection background**

To customize the appearance of the child grid's row selection, you can use the following CSS code:

```css
.e-detailcell .e-grid td.e-selectionbackground {
    background-color: #00b7ea;
}
```
In this example, the **.e-detailcell** class targets the child grid and the **.e-selectionbackground** class targets the background color of the row selection. You can modify the `background-color` property to change the background color of the selected rows.

![Child grid row selection](images/child-grid-row-selection.png)

**Customizing the child grid cell selection background**

To customize the appearance of the child grid's cell selection, you can use the following CSS code:

```css
.e-detailcell .e-grid td.e-cellselectionbackground {
    background-color: #00b7ea;
}
```

In this example, the **.e-cellselectionbackground** class targets the background color of the cell selection. You can modify the `background-color` property to change the background color of the selected cells.

![Child grid cell selection](images/child-grid-cell-selection.png)

**Customizing the child grid column selection background**

To customize the appearance of the child grid's column selection, you can use the following CSS code:

```css
.e-detailcell .e-grid .e-columnselection {
    background-color: #aec2ec;
}
```
In this example, the **.e-columnselection** class targets the background color of the column selection. You can modify the `background-color` property to change the background color of the selected columns.

![Child grid cell selection](images/child-grid-column-selection.png)