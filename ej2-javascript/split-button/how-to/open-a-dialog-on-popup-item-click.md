---
layout: post
title: How to open a dialog on popup item click in ##Platform_Name## Split Button | Syncfusion
description: Learn how to open a ##Platform_Name## Dialog when a ##Platform_Name## Split Button popup item is clicked using the select event.
platform: ej2-javascript
control: Open a dialog on popup item click 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to open a dialog on popup item click in ##Platform_Name## Split Button

This section explains about how to open a dialog on SplitButton popup item click. This can be achieved by handling dialog open in [`select`](../../api/split-button/#select) event of the SplitButton.

In the following example, Dialog will open while selecting `Update...` item.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/split-button/dialog-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/dialog-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/split-button/dialog-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/dialog-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/split-button/dialog-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/dialog-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/split-button/dialog-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/split-button/dialog-cs1" %}
{% endif %}