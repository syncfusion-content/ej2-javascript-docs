---
layout: post
title: Disable keyboard interactions in ##Platform_Name## FileManager component | Syncfusion
description: Learn here all about How to Disable keyboard interactions in Syncfusion ##Platform_Name## FileManager component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Disable keyboard interactions
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Disable keyboard interactions in ##Platform_Name## FileManager component

The FileManager component supports keyboard shortcuts as default. If you wish to disable keyboard interactions, you can do so by utilizing the **keyup** event for the specific views (large icons, details) of the FileManager component and applying the **keyboard prevention** method. This approach will effectively disable all keyboard interactions within the FileManager component, including the **left** and **right** arrow keys.

The following example demonstrates how to prevent the keyboard interaction for the LargeIconsView and DetailsView.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/disable-keyboard-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/disable-keyboard-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/disable-keyboard-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/disable-keyboard-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/disable-keyboard-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/disable-keyboard-cs1" %}
{% endif %}