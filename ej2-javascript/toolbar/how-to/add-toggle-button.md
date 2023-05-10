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

JavaScript Toolbar supports to add a toggle Button by using the template property. Refer below steps

* By using Toolbar template property, pass required HTML String to render toggle button.

```ts
    { template: '<button class="e-btn" id="media_btn"></button>' }
```

* Now render the toggle Button into the targeted element in JavaScript Toolbar [`created`](../../api/toolbar#created) event handler and bind click event for it. On clicking the toggle Button, change the required icon and content based on current active state.

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