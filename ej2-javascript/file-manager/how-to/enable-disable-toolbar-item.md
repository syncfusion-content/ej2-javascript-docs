---
layout: post
title: Manage Toolbar Items in ##Platform_Name## File Manager | Syncfusion
description: Learn how to enable or disable toolbar items in the Syncfusion ##Platform_Name## File Manager component.
platform: ej2-javascript
control: File Manager
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Enable or Disable Toolbar Item in ##Platform_Name## File Manager

Toolbar items can be enabled or disabled using the [`enableToolbarItems`](../../api/file-manager#enabletoolbaritems) and [`disableToolbarItems`](../../api/file-manager#disabletoolbaritems) methods.

The example below demonstrates enabling and disabling toolbar items via button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/toolbar-items-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/toolbar-items-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/toolbar-items-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/toolbar-items-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/toolbar-items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/toolbar-items-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/toolbar-items-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/toolbar-items-cs1" %}
{% endif %}