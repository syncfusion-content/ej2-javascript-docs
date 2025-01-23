---
layout: post
title: Adding a custom item to the context menu in ##Platform_Name## File Manager control | Syncfusion
description: Learn about adding a custom item to the context menu in the Syncfusion ##Platform_Name## File Manager control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Adding custom item to the context menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adding a custom item to the context menu in ##Platform_Name## File Manager control

The context menu can be customized using the [contextMenuSettings](../../api/file-manager/#contextmenusettings), [menuOpen](../../api/file-manager/#menuopen), and [menuClick](../../api/file-manager/#menuclick) events.

The following example shows how to add a custom item to the context menu.

The [contextMenuSettings](../../api/file-manager/#contextmenusettings) property is used to add a new menu item. The [menuOpen](../../api/file-manager/#menuopen) event is used to add an icon to the new menu item. The [menuClick](../../api/file-manager/#menuclick) event is used to add an event handler to the new menu item.

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