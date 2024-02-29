---
layout: post
title: Batch editing in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Batch editing in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Batch editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Batch editing in ##Platform_Name## Grid control

Batch editing is a powerful feature in the Grid control that allows you to edit multiple cells simultaneously. It provides a convenient way to make changes to multiple cells and save them in a single request to the data source. This feature is particularly useful when dealing with large datasets or when you need to update multiple cells at once.

In batch edit mode, when you double-click on a grid cell, the target cell changes to an editable state. You can perform bulk update of the added, changed, and deleted data by either clicking on the toolbar's **Update** button or by externally invoking the [batchSave](../../api/grid/edit/#batchsave) method.

To enable batch editing mode, you need to set the [editSettings->mode](../../api/grid/editSettings/#mode) property to **Batch**. This property determines the editing mode of the Grid and allows you to activate the batch editing feature.

Here's an example how to enable batch editing in the javascript grid control:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs17" %}
{% endif %}

## Automatically update the column based on another column edited value 

You can automatically update the value of a column based on the edited value of another column in batch mode. This feature is useful when you want to dynamically calculate and update a column's value in real-time based on the changes made in another related column. This can be achieved using the [Cell Edit Template](../../editing/edit-types#custom-editors-using-template) feature in the Grid control.

In the following example, the **TotalCost** column value is updated based on changes to the **UnitPrice** and **UnitInStock** columns during batch editing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs18" %}
{% endif %}

> * You can utilize the [updateCell](../../api/grid/#updatecell) method to update cells in batch mode.

## Cancel edit based on condition 

The Grid control provides to cancel the CRUD operations (Edit, Add, Delete) for particular row or cell in batch edit mode based on specific conditions. This feature allows you to control over whether editing should be allowed or prevented for certain rows or cells in the grid.

To cancel the edit action, you need to handle the [cellEdit](../../api/grid/#cellEdit) event. This event is triggered when a cell enters the edit mode. Within the event handler, you can add a condition to check whether the edit operation should be allowed or canceled. If the condition is met, set the `args.cancel` property to **true** to cancel the edit operation.

To cancel the add action, you need to handle the [beforeBatchAdd](../../api/grid/#beforeBatchAdd) event. This event is triggered before a new record is added to the batch changes. Within the event handler, you can add a condition to determine whether the add operation should proceed or be canceled. If the condition is met, set the `args.cancel` property to **true** to cancel the add operation.

To cancel the delete action, you need to handle the [beforeBatchDelete](../../api/grid/#beforeBatchDelete) event. This event is triggered before a record is deleted from the batch changes. Within the event handler, you can add a condition to control whether the delete operation should take place or be canceled. If the condition is met, set the `args.cancel` property to **true** to cancel the delete operation.

In the below demo, prevent the CRUD operation based on the **Role** column value. If the Role Column is **Admin**, then edit/delete action is prevented for that row.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs19" %}
{% endif %}

## Adding a new row at the bottom of the grid

The grid control allows you to add a new row at the bottom of the grid, allowing you to insert a new record at the end of the existing data set. This feature is particularly useful when you want to conveniently add new records without the need to scroll up or manually reposition the newly added row. To achieve this, you can make use of the [newRowPosition](../../api/grid/editSettings/#newrowposition) property in the `editSettings` configuration and set it to **Bottom**.

>* If you set `newRowPosition` as **Bottom**, you can use the **TAB** key to easily move between cells or rows in edit mode. As you enter data in each cell and press **TAB**, the grid will automatically create new rows below the current row, allowing you to conveniently add data for multiple rows without having to leave the edit mode.
>* If you set `newRowPosition` as **Top**, the grid will display a blank row form at the top by default, allowing you to enter data for the new record. However, when the data is saved or updated, it will be inserted at the bottom of the grid ,ensuring the new record appears at the end of the existing data set. 
>* If the paging feature is enabled, updating the row will automatically move it to the last page based on the page size.This behavior applies to both local and remote data binding.
>* If scrolling is enabled, you can use the **TAB** key to add a new row, even if the new row is added beyond the currently visible area of the grid.
>* Add `newRowPosition` is supported for **Normal** and **Batch** editing modes.

Here's an example that demonstrates how to enable adding new rows at the bottom of the grid using `newRowPosition` property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs19-BatchEdit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs19-BatchEdit/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs19-BatchEdit" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs19-BatchEdit/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs19-BatchEdit/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs19-BatchEdit" %}
{% endif %}

## Confirmation dialog

Displaying a confirmation dialog provides an additional layer of confirmation when performing actions like saving a record or canceling changes in the grid. This dialog prompts for confirmation before proceeding with the action, ensuring that accidental or undesired changes are avoided. The grid control offers a built-in confirmation dialog that can be used to confirm save, cancel, and other actions.

To enable the confirmation dialog, you can set the [editSettings->showConfirmDialog](../../api/grid/editSettings/#showconfirmdialog) property of the `editSettings` configuration to **true**. The default value is **true**.

> * `editSettings.showConfirmDialog` requires the [editSettings->mode](../../api/grid/editSettings/#mode) to be **Batch**
> * If `editSettings.showConfirmDialog` set to **false**, then confirmation dialog does not display in batch editing.
> * While performing both update and delete operations, a separate delete confirmation dialog is shown at the time of clicking the delete button or pressing the delete key itself.

Here's an example that demonstrates how to enable/disable the confirmation dialog using the `showConfirmDialog` property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs20" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs20" %}
{% endif %}

## How to make editing in single click and arrow keys

You can enable editing in a single click and navigate between cells or rows using arrow keys without having to double-click or use the mouse for navigation. By default, in batch mode, the **TAB** key can be used to edit or move to the next cell or row and the **Enter** key is used to move to the next row cell. However, you can customize this behavior to enable editing with a single click or using arrow keys.

To enable editing in a single click, you can handle the [created](../../api/grid/#created) event of the Grid. Within the event handler,bind the click event to the grid cells and call the `editCell` method to make the clicked cell editable.

To enable editing using arrow keys, you can handle the [load](../../api/grid/#load) event of the Grid control. Inside the event handler, you can bind the keydown event to the grid element and check for arrow key presses. Based on the arrow key pressed, you can identify the next or previous cell using the `editCell` method and make it editable.

Here's an example that demonstrates how to achieve both single-click editing and arrow key navigation using the `created` and `load` events in conjunction with the `editCell` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs21" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs21" %}
{% endif %}

## Disable editing for a particular cell

You can prevent editing of specific cells based on certain conditions in the Grid control. This feature is useful when you want to restrict editing for certain cells, such as read-only data, calculated values, or protected information. It helps maintain data integrity and ensures that only authorized changes can be made in the grid.

To disable editing for a particular cell in batch mode, use the [cellEdit](../../api/grid/#celledit) event of the grid. You can then use the **args.cancel** property and set it to **true**  to prevent editing for that cell.

Here's an example demonstrating how you can disable editing for cells containing the value **France** using the `cellEdit` event:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs21-PreventEdit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs21-PreventEdit/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs21-PreventEdit" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs21-PreventEdit/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs21-PreventEdit/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs21-PreventEdit" %}
{% endif %}

## Save or update the changes immediately

The Grid control provides a convenient way to save or update changes immediately in batch mode without the need for a separate Save button. This feature is particularly useful when you want to allow you to edit data efficiently without having to manually trigger a save action. You can achieve this by utilizing the [cellSaved](../../api/grid/#cellsaved) event and the [batchSave](../../api/grid/edit/#batchsave) method. 

By default, when you use the `batchSave` method to save or update data, a confirmation dialog is displayed. This dialog prompts for confirmation before proceeding with the save or cancel action, ensuring that accidental or undesired changes are avoided.

The `cellSaved` event is triggered when a cell is saved in the Grid. It provides a way to perform custom logic when a cell is saved or updated.

The `batchSave` method is a built-in function provided by the Grid's edit service. It is used to save multiple changes made to added, edited, and deleted records in the batch mode.

> * To avoid the confirmation dialog when using the `batchSave` method, you can set `editSettings.showConfirmDialog` to **false**. However, please note that to use this property, the `editSettings.mode` must be set to **Batch**. This combination of properties allows you to save or update changes immediately without the need for a confirmation dialog.

Here's an example that demonstrates how to achieve immediate saving or updating of changes using the `cellSaved` event and the `batchSave` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs21-SaveUpdate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs21-SaveUpdate/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs21-SaveUpdate" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs21-SaveUpdate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs21-SaveUpdate/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs21-SaveUpdate" %}
{% endif %}