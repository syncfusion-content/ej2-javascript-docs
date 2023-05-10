---
layout: post
title: Open default document in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Open default document in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Open default document 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open default document in ##Platform_Name## Document editor control

In this article, we are going to see how to open a default document when DocumentEditor & DocumentEditorContainer is initialized.

## Opening a default document in DocumentEditor

By default, Document Editor will open blank document. You can use [`open`](../../api/document-editor/#open) API in Document Editor to open the sfdt content.

Document editor have [`created`](../../api/document-editor/#created) event which gets triggered once Document editor control created. So, if you want to open the document by default, you can use [`open`](../../api/document-editor/#open) and [`created`](../../api/document-editor/#created) API.

The following example illustrates how to open the default SFDT content once Document editor control gets created.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/open-default-document-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/open-default-document-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/open-default-document-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/open-default-document-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/open-default-document-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/open-default-document-cs1" %}
{% endif %}

## Opening a default document in DocumentEditorContainer

By default, Document Editor Container will open a blank document. You can use [`open`](../../api/document-editor/#open) API in Document Editor to open the SFDT content.

Document editor Container have [`created`](../../api/document-editor-container/#created) event which gets triggered once Document editor container control created. So, if you want to open the document by default, you can use [`open`](../../api/document-editor/#open) and [`created`](../../api/document-editor-container/#created) API.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/open-default-document-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/open-default-document-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/open-default-document-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/open-default-document-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/open-default-document-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/open-default-document-cs2" %}
{% endif %}
