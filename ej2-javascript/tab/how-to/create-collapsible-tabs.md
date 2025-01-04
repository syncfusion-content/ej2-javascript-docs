---
layout: post
title: Create collapsible tabs in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Create collapsible tabs in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Create collapsible tabs 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Create collapsible tabs in ##Platform_Name## Tab control

You can implement collapse and expand functionality in the Tab control by adding and removing a custom CSS class in the click event handler for each tab. Here's how to achieve this:

1. **Define a CSS class to hide the content:** Create a `collapse` class that sets the `display` property to `none`. Add this class to the content element in the [`created`](../../api/tab#created) event to initially hide it.

2. **Set up event handlers:**

   - Bind the [`selected`](../../api/tab#selected) event for the Tab to collapse the initially selected Tab item.
   - Bind a custom click handler for the Tab headers.

3. **Implement the collapse/expand functionality:** In the event handler, add and remove the `collapse` class to hide and show the corresponding Tab content.

Here's an example of how to create collapsible tabs:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/collapse-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/collapse-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/collapse-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/collapse-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/collapse-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/collapse-cs1" %}
{% endif %}
