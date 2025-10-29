---
layout: post
title: Mail Merge in ##Platform_Name## Rich Text Editor Control | Syncfusion
description: Learn all about Mail Merge in the Syncfusion ##Platform_Name## Rich Text Editor control, part of Essential JS 2.
platform: ej2-javascript
control: Mail Merge 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Mail merge in ##Platform_Name## Rich Text Editor control

The Syncfusion Rich Text Editor can be customized to implement **Mail Merge** functionality by inserting placeholders into the editor using custom toolbar items. These placeholders are later replaced with actual data to generate personalized content such as letters, invoices, and reports.

This feature simplifies the creation of dynamic documents by allowing users to insert merge fields that are automatically populated with real data during content generation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/mail-merge/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/mail-merge/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/mail-merge" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/mail-merge/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/mail-merge/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/mail-merge" %}
{% endif %}
