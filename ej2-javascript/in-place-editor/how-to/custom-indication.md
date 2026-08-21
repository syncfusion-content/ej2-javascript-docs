---
layout: post
title: Mark unsaved value in ##Platform_Name## In-place Editor | Syncfusion
description: Mark unsaved ##Platform_Name## In-place Editor values by adding a custom CSS class to the value wrapper via the actionSuccess event when primaryKey is empty.
platform: ej2-javascript
control: Custom indication 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to mark unsaved value in ##Platform_Name## In-place Editor

You can add custom indication to unsaved input value by using the [actionSuccess](../../api/inplace-editor/index-default#actionsuccess) event, when data not submitted to the server.

In this sample, the `actionSuccess` event configured and the [URL](../../api/inplace-editor/index-default#url) property not included. Then submit button clicked, the current editor value saved into input and data sending to server action prevented due to the `URL` property not configured.

But `actionSuccess` event will trigger the handler function with `null` argument values. In handler function data property [primaryKey](../../api/inplace-editor/index-default#primarykey) value checked, whether it empty or not. If it is empty custom class, added in the `e-value-wrapper` element to customize its styles.

> To send input value to local, set the `URL` property as empty.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/custom-indication-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/in-place-editor/custom-indication-cs1" %}
{% endif %}