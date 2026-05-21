---
layout: post
title: Module in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Module in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Module 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Module in JavaScript Grid control

The available Grid modules are:

| Feature | Module | Description |
|---------|--------|-------------|
| [Page](../api/grid/page) | `Page` | This module is used for the paging feature. |
| [Sort](../api/grid/sort) | `Sort` | This module is used for the sorting feature. |
| [Filter](../api/grid/filter) | `Filter` | This module is used for the filtering feature. |
| [Group](../api/grid/group) | `Group` | This module is used for the grouping feature. |
| [LazyLoadGroup](../api/grid/lazyLoadGroup) | `LazyLoadGroup` | This module is used for the lazy load grouping feature. |
| [Edit](../api/grid/edit) | `Edit` | This module is used for the editing feature. |
| [Aggregate](../api/grid/aggregate) | `Aggregate` | This module is used for the aggregate feature. |
| [ColumnChooser](../api/grid/columnChooser) | `ColumnChooser` | This module is used for the column chooser feature. |
| [ColumnMenu](../api/grid/columnmenumodule) | `ColumnMenu` | This module is used for the column menu feature. |
| [CommandColumn](../api/grid/commandColumn) | `CommandColumn` | This module is used for the command column feature. |
| [ContextMenu](../api/grid/contextMenu) | `ContextMenu` | This module is used for the context menu feature. |
| [DetailRow](../api/grid/detailRow) | `DetailRow` | This module is used for the detail template feature. |
| [ForeignKey](../api/grid/foreignkey) | `ForeignKey` | This module is used for the foreign key feature. |
| [Freeze](../api/grid/freeze) | `Freeze` | This module is used for the frozen rows and columns feature. |
| [Resize](../api/grid/resize) | `Resize` | This module is used for the resize feature. |
| [Reorder](../api/grid/reorder) | `Reorder` | This module is used for the reorder feature. |
| [RowDD](../api/grid/rowdd) | `RowDD` | This module is used for the row drag and drop feature. |
| [Search](../api/grid/search) | `Search` | This module is used for the search feature and this is a default injected module. |
| [Selection](../api/grid/selection) | `Selection` | This module is used for the selection feature and this is a default injected module. |
| [VirtualScroll](../api/grid/virtualscroll) | `VirtualScroll` | This module is used for the virtual scrolling feature. |
| [InfiniteScroll](../api/grid/infinitescroll) | `InfiniteScroll` | This module is used for the infinite scrolling feature. |
| [Toolbar](../api/grid/toolbarmodule) | `Toolbar` | This module is used for the toolbar feature. |
| [ExcelExport](../api/grid/excelexportmodule) | `ExcelExport` | This module is used for the excel export feature. |
| [PdfExport](../api/grid/pdfexportmodule) | `PdfExport` | This module is used for the PDF export feature. |

## Enabling basic features

The following example demonstrates how to enable basic features such as Paging, Sorting, Filtering, Toolbar and Editing in the grid component.

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/grid/modules-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/modules-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.js" %}
{% include code-snippet/grid/modules-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/modules-cs1" %}