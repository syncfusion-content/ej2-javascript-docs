---
layout: post
title: Save in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Save in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Save 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Save in ##Platform_Name## Rich text editor control

To achieve this, we need to bind the `keydown` event to the Rich Text Editor content and capture the `ctrl + s` key press using its keyCode.
In the `keydown` event handler, the `updateValue` method is called to update the [`value`](../../api/rich-text-editor/#value) property and then we can save the content in the required database using the same.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/how-to-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/how-to-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to-cs2" %}
{% endif %}