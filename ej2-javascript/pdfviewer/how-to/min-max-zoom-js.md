---
layout: post
title: Minimum and Maximum Zoom in ##Platform_Name## PDF Viewer control | Syncfusion
description: Learn here all about Minimum and Maximum Zoom in Syncfusion ##Platform_Name## PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Minimum and Maximum Zoom Properties

The Syncfusion PDF Viewer provides the ability to control zoom levels for viewing PDF documents. The [minZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#minzoom) and [maxZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#maxzoom) properties enable developers to set the minimum and maximum zoom levels, ensuring a consistent and controlled viewing experience.

### minZoom

The [minZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#minzoom) property specifies the minimum zoom percentage allowed in the PDF Viewer. This ensures that users cannot zoom out beyond a certain limit, which helps maintain readability and performance. Developers can set the `minZoom` property programmatically, defining the minimum zoom level based on the application's requirements. This is particularly useful for preventing users from zooming out too much, which could make the content difficult to read.

### maxZoom

The [maxZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#maxzoom) property defines the maximum zoom percentage allowed in the PDF Viewer. By setting this property, developers can prevent users from zooming in too much, helping to avoid performance issues and maintain a smooth viewing experience. The `maxZoom` property can be set programmatically to control the upper limit of the zoom level. This is useful for applications where extremely high zoom levels might degrade performance or user experience.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib",
                    maxZoom : 100,
                    minZoom : 10,

                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer',
                    maxZoom : 100,
                    minZoom : 10,
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

#### Restrict Zoom Percentage on Mobile Devices

You can easily restrict the zoom percentage on mobile devices using the [minZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#minzoom) and [maxZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#maxzoom) properties. This feature allows you to set specific limits for zooming, ensuring smoother scrolling performance and efficient document loading on mobile devices. By controlling the zoom levels, you can provide a better user experience across different devices.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib"
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = (): void => {
    if (Browser.isDevice && !viewer.enableDesktopMode) {
        pdfviewer.maxZoom = 200;
        pdfviewer.minZoom = 10;
    }
    else{
        pdfviewer.zoomMode = 'Default';
    }
};

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer'
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = (): void => {
    if (Browser.isDevice && !viewer.enableDesktopMode) {
        pdfviewer.maxZoom = 200;
        pdfviewer.minZoom = 10;
    }
    else{
        pdfviewer.zoomMode = 'Default';
    }
};

{% endhighlight %}
{% endtabs %}

By implementing this, you ensure that the maximum zoom percentage on mobile devices is limited to 200% and the minimum zoom percentage is set to 10%. This prevents performance issues that may arise from excessive zooming on mobile platforms.