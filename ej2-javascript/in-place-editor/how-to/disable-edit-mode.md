---
layout: post
title: Disable edit mode in ##Platform_Name## In-place Editor | Syncfusion
description: Disable the ##Platform_Name## In-place Editor edit mode with the disabled property and toggle it on or off from an external checkbox.
platform: ej2-javascript
control: Disable edit mode 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to disable edit mode in ##Platform_Name## In-place Editor

The edit mode of In-place Editor can be disabled by setting the [disabled](../../api/inplace-editor/index-default#disabled) property value to `true`. In the following sample, when check or uncheck the checkbox, In-place Editor control will disable or enable the edit mode.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/disable-edit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/disable-edit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/disable-edit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/disable-edit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/disable-edit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/in-place-editor/disable-edit-cs1" %}
{% endif %}