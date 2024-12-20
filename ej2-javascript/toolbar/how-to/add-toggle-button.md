---
layout: post
title: Add toggle button in ##Platform_Name## Toolbar control | Syncfusion
description: Learn here all about Add toggle button in Syncfusion ##Platform_Name## Toolbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add toggle button 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add toggle button in ##Platform_Name## Toolbar control

JavaScript Toolbar supports adding a toggle button by using the [`template`](../../api/toolbar/item#template) property. Refer to the steps below:

* By using the Toolbar [`template`](../../api/toolbar/item#template) property, pass the required HTML string to render the toggle button.

```ts
    { template: '<button class="e-btn" id="media_btn"></button>' }
```

* Now render the toggle button into the targeted element in the JavaScript Toolbar's [`created`](../../api/toolbar#created) event handler and bind a click event to it. On clicking the toggle button, change the required icon and content based on the current active state.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toggle-button-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toggle-button-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toggle-button-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/toggle-button-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toggle-button-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/toggle-button-cs1" %}
{% endif %}