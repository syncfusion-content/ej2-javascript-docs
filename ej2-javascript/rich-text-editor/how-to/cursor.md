---
layout: post
title: Cursor in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Cursor in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Cursor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Cursor in ##Platform_Name## Rich text editor control

This can be achieved by using `setRange` method in the Rich Text Editor using `NodeSelection` instance. In this below sample, we have passed the text node (specific location in Rich Text Editor content) in `setStart` method and passed the range in `setRange` method of Rich Text Editor.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/how-to-cursor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/how-to-cursor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to-cursor-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/how-to-cursor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/how-to-cursor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to-cursor-cs1" %}
{% endif %}
