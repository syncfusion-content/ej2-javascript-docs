---
layout: post
title: Add toolbar items in ##Platform_Name## File Manager | Syncfusion
description: Learn how to add a custom item to the toolbar in the ##Platform_Name## File Manager to extend built-in actions with custom controls.
control: File Manager
platform: ej2-javascript
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add a custom item to the toolbar in ##Platform_Name## File Manager

Use the [`toolbarItems`](../../api/file-manager#toolbaritems) API to modify the items displayed in the toolbar. When combining default and custom items, assign a unique `name` to each item so they can be managed independently. Default items can be customized by setting properties such as `tooltipText`, `iconCss`, `text`, `suffixIcon`, and `template`.

The example below demonstrates adding a custom checkbox to the toolbar using the `template` property. It also shows how to modify the default `NewFolder` item and add a custom toolbar item for selection.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/toolbar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/toolbar-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/toolbar-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/toolbar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/toolbar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/toolbar-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/toolbar-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/toolbar-cs2" %}
{% endif %}
