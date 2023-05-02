---
layout: post
title: Load tab items dynamically in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Load tab items dynamically in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Load tab items dynamically 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Load tab items dynamically in ##Platform_Name## Tab control

Tabs can be added dynamically by passing array of items and index value to the [`addTab`](../../api/tab#addtab) method.

```ts
    // New tab title and content inputs are fetched and stored in local variable
    let title: string = document.getElementById('tab-title').value;
    let content: string = document.getElementById('tab-content').value;

    // Required tab item object formed by using textbox inputs
    let item: Object =  { header: { text: title }, content: createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML };

    // Item object and the index argument passed into the addTab method to add a new tab
    tabObj.addTab([item], index);
```

In the following demo, you can add the tab content by clicking the **+**.  This **+** icon is added on the tab header using [`iconCss`](../../api/tab/header#iconcss) property.  Enter the new Tab heading and content details in the available text boxes, click 'Add Tab' button to pass the details as an array and here last index is calculated to append the new tab at the end.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/dynamic-tab-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/dynamic-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/dynamic-tab-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/dynamic-tab-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/dynamic-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/dynamic-tab-cs1" %}
{% endif %}
