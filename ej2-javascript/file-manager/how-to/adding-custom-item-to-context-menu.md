---
layout: post
title: Add context menu items in ##Platform_Name## File Manager | Syncfusion
description: Learn how to add a custom item to the context menu in the ##Platform_Name## File Manager with custom icons and click handlers.
control: File Manager
platform: ej2-javascript
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add custom item to context menu in ##Platform_Name## File Manager

The context menu can be customized using the [`contextMenuSettings`](../../api/file-manager#contextmenusettings), [`menuOpen`](../../api/file-manager#menuopen), and [`menuClick`](../../api/file-manager#menuclick) events.

The example below shows how to add a custom item to the context menu. Use the `contextMenuSettings` property to add the item, the `menuOpen` event to add an icon, and the `menuClick` event to handle the item's action.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/contextmenu-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/contextmenu-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/contextmenu-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/contextmenu-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/contextmenu-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/contextmenu-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/contextmenu-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/contextmenu-cs2" %}
{% endif %}