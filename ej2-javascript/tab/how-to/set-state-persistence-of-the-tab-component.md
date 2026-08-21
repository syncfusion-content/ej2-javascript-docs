---
layout: post
title: How to set state persistence in ##Platform_Name## Tab | Syncfusion
description: Learn how to persist tab state in the Syncfusion ##Platform_Name## Tab control for a smoother user experience.
platform: ej2-javascript
control: Set state persistence of the tab component 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to set state persistence in ##Platform_Name## Tab

When `enablePersistence` is set to `true`, the Tab component will maintain some of its model values across page refreshes. This means that the user's interactions with the Tab, such as the currently selected tab, will be preserved when the page is reloaded.

Here's an example demonstrating how to enable state persistence for the Tab component:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-persistence-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-persistence-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tab-persistence-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tab-persistence-cs1" %}
{% endif %}
