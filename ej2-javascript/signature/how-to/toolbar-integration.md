---
layout: post
title: How to integrate with toolbar in ##Platform_Name## Signature | Syncfusion
description: Integrate the ##Platform_Name## Signature with the Toolbar control using the change event to toggle undo, redo, and clear actions.
platform: ej2-javascript
control: Toolbar integration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate with toolbar in ##Platform_Name## Signature

The Signature control integrates with the toolbar and the interaction performed using the `change` event of the toolbar. In that, [`canUndo`](https://ej2.syncfusion.com/documentation/api/signature/#canundo), [`canRedo`](https://ej2.syncfusion.com/documentation/api/signature/#canredo) and [`isEmpty`](https://ej2.syncfusion.com/documentation/api/signature/#isempty) methods were used to enable/disable undo, redo, and clear buttons.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/signature/toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/toolbar-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/signature/toolbar-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/signature/toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/toolbar-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/signature/toolbar-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/signature/toolbar-cs1" %}
{% endif %}