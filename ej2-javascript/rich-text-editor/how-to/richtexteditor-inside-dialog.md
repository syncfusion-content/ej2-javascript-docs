---
layout: post
title: Editor inside Dialog in ##Platform_Name## Richtexteditor control | Syncfusion
description: Learn here all about Rich Text Editor inside Dialog in ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Integrating Rich Text Editor in Dialog control 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integrating Rich Text Editor in Dialog Control

When rendering the Rich Text Editor inside a Dialog control, the dialog container and its wrapper elements are initially styled with `display: none`. This styling prevents the editor's toolbar from calculating the proper offset width. As a result, the toolbar may render incorrectly, appearing above the edit area container.

To resolve this issue, we can utilize the [refreshUI](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#refreshui) method of the Rich Text Editor in conjunction with the [open](https://ej2.syncfusion.com/documentation/api/dialog/#open) event. This approach ensures that the Rich Text Editor's UI is properly refreshed and rendered once the Dialog is visible.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/richtexteditor-inside-dialog/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/richtexteditor-inside-dialog/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/richtexteditor-inside-dialog" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/richtexteditor-inside-dialog/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/richtexteditor-inside-dialog/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/richtexteditor-inside-dialog" %}
{% endif %}