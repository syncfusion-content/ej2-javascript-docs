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

You can add tabs dynamically to the Tab control by passing an array of items and an index value to the [`addTab`](../../api/tab#addtab) method. Here's how you can do it:

```ts
// Fetch new tab title and content from input elements
let tabTitle: string = document.getElementById('tab-title').value;
let content: string = document.getElementById('tab-content').value;

// Create a tab item object using the input values
let item: Object = { 
    header: { text: tabTitle }, 
    content: createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML 
};

// Add the new tab at the specified index
tabObj.addTab([item], index);
```

In the following example, we'll demonstrate how to add tabs dynamically:

1. A "+" icon is added to the tab header using the [`iconCss`](../../api/tab/header#iconcss) property.
2. When you click the "+" icon, you can enter the new tab's heading and content in the provided text boxes.
3. Clicking the 'Add Tab' button will create a new tab with the entered details.
4. The new tab is appended at the end of the existing tabs.

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
