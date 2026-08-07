---
layout: post
title: ##Platform_Name## Grid Cordova Export Support | Syncfusion
description: Learn how to export ##Platform_Name## Data Grid data in Cordova applications using Blob streams, Excel and PDF export events, and mobile-friendly file handling.
platform: ej2-javascript
control: Exporting grid in cordova application 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Cordova Export in ##Platform_Name## Data Grid

Exporting the ##Platform_Name## Grid in a Cordova application can be beneficial in various scenarios where users need to generate and download reports, share data in Excel or PDF formats, or archive information for offline use. A Cordova application does not support direct file download. To export the ##Platform_Name## Grid component in a Cordova application, you need to utilize Blob streams. This can be achieved by using the appropriate exporting methods and export complete events to obtain the Blob stream.

The following example illustrates how to export a ##Platform_Name## Grid in a Cordova application. It utilizes the [excelExportComplete](../../api/grid/#excelexportcomplete) and [pdfExportComplete](../../api/grid/#pdfexportcomplete) events to manage the export process for Excel and PDF formats and obtain the Blob stream. The `exportBlob` function is responsible for creating a downloadable link for the exported file.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/exporting-blob-data-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/exporting-blob-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/exporting-blob-data-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/exporting-blob-data-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/exporting-blob-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/exporting-blob-data-cs2" %}
{% endif %}
