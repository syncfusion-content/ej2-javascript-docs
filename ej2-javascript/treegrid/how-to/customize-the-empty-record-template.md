---
layout: post
title: Empty Record Template in ##Platform_Name## TreeGrid | Syncfusion
description: Learn here all about Customize the Empty Record Template in Syncfusion ##Platform_Name## TreeGrid of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize the Empty Record Template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize the empty record template in ##Platform_Name## TreeGrid

The empty record template feature in the TreeGrid allows you to use custom content such as images, text, or other components, when the TreeGrid doesn't contain any records to display. This feature replaces the default message of **No records to display** typically shown in the TreeGrid.

To activate this feature, set the `emptyRecordTemplate` property of the TreeGrid. The `emptyRecordTemplate` property expects the HTML element or a function that returns the HTML element.

In the following example, an image and text have been rendered as a template to indicate that the TreeGrid has no data to display.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/empty-records-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/empty-records-template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/empty-records-template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/empty-records-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/empty-records-template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/empty-records-template" %}
{% endif %}