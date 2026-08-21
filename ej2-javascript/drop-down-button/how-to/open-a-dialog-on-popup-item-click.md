---
layout: post
title: How to open a dialog on popup item click in ##Platform_Name## Dropdown Menu | Syncfusion
description: Learn how to open a ##Platform_Name## Dialog when a ##Platform_Name## Dropdown Menu popup item is clicked using the select event.
platform: ej2-javascript
control: Open a dialog on popup item click 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to open a dialog on popup item click in ##Platform_Name## Dropdown Menu

This section explains about how to open a dialog on DropdownButton popup item click. This can be achieved by handling dialog open in [`select`](../../api/drop-down-button/#select) event of the DropdownButton.

In the following example, Dialog will open while selecting `Other Folder...` item.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/dialog-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/dialog-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/drop-down-button/dialog-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/dialog-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/dialog-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/dialog-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/drop-down-button/dialog-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/dialog-cs1" %}
{% endif %}