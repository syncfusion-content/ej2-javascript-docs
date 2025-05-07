---
layout: post
title: Exporting grid in cordova application in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Exporting grid in cordova application in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Exporting grid in cordova application 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid in cordova application in ##Platform_Name## Grid control

Exporting the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid in a Cordova application can be beneficial in various scenarios where users need to generate and download reports, share data in Excel or PDF formats, or archive information for offline use. A Cordova application does not support direct file download. To export the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid component in a Cordova application, you need to utilize Blob streams. This can be achieved by using the appropriate exporting methods and export complete events to obtain the Blob stream.

The following example illustrates how to export a Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid in a Cordova application. It utilizes the [excelExportComplete](../../api/grid/#excelexportcomplete) and [pdfExportComplete](../../api/grid/#pdfexportcomplete) events to manage the export process for Excel and PDF formats and obtain the Blob stream. The `exportBlob` function is responsible for creating a downloadable link for the exported file.

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
