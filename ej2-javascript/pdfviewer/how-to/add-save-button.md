---
layout: post
title: Add save button in Toolbar in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about How to add Save button in toolbar in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Toolbar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add Save button in Built-In Toolbar

PDF Viewer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Save button - New 'save' button-item can defined by [**CustomToolbarItemModel**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/customToolbarItem/) and with existing items in [**ToolbarSettings**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarSettings/) property. Newly added save button-item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/javascript/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - save button-item can be shown or hidden using the [`ToolbarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarSettings/) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enabletoolbaritem`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar/#enabletoolbaritem)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
 var toolItem1 = {
    prefixIcon: 'e-icons e-save',
    id: 'download',
    text: 'Save',
    tooltipText: 'Save button',
    align: 'Left'
};
var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
                    resourceUrl:'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib',
                    toolbarSettings : { toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm'] }
               });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields);
               
//PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbarClick = function (args) {
    if (args.item && args.item.id === 'download') {
        pdfviewer.download();
    }
};
function OnCreateSearch() {
    this.addIcon('prepend', 'e-icons e-search');
}

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

var toolItem1 = {
    prefixIcon: 'e-icons e-save',
    id: 'download',
    text: 'Save',
    tooltipText: 'Save button',
    align: 'Left'
};
var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
                    serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer',
                    toolbarSettings : { toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm'] }
               });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields);
               
//PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbarClick = function (args) {
    if (args.item && args.item.id === 'download') {
        pdfviewer.download();
    }
};
function OnCreateSearch() {
    this.addIcon('prepend', 'e-icons e-search');
}

{% endhighlight %}
{% endtabs %}


N> Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm'] 

### Align Property

The align property is used to specify the alignment of a `save` button-item within the toolbar.

`Left`: Aligns the item to the left side of the toolbar.
`Right`: Aligns the item to the right side of the toolbar.

### Tooltip Property

The tooltip property is used to set the tooltip text for a `save` button-item. Tooltip provides additional information when a user hovers over the item.

### CssClass Property

The cssClass property is used to apply custom CSS classes to a `save` button-item. It allows custom styling of the `save` button-item.

### Prefix Property

The prefix property is used to set the CSS class or icon that should be added as a prefix to the existing content of the `save` button-item.

### ID Property

The id property within a CustomToolbarItemModel is a compulsory attribute that plays a vital role in toolbar customization. It serves as a unique identifier for each toolbar item, facilitating distinct references and interactions.

When defining or customizing toolbar items, it is mandatory to assign a specific and descriptive id to each item. 
These properties are commonly used when defining custom toolbar items with the `CustomToolbarItemModel`` in the context of Syncfusion PDF Viewer. When configuring the toolbar using the `ToolbarSettings`` property, you can include these properties to customize the appearance and behavior of each toolbar item.

N> When customizing save button-item, you have the flexibility to include either icons or text based on your design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)
