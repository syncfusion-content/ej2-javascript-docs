---
layout: post
title: Clone Group/Rule in ##Platform_Name## Query Builder UI | Syncfusion
description: Duplicate rules or whole groups in the ##Platform_Name## Query Builder UI using cloneRule and cloneGroup methods to replicate complex query structures.
platform: ej2-javascript
control: Clone Group/Rule 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Clone Group/Rule in ##Platform_Name## Query Builder UI

The Query Builder functionality extends to cloning both individual rules and entire groups. Utilizing the clone options generates an exact duplicate of a rule or group adjacent to the original one. This feature enables replicating complex query structures effortlessly. The [`showButtons`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#showbuttons) property offers the ability to toggle the visibility of these cloning buttons, providing convenient control over the cloning process within the Query Builder interface.

Groups and rules can be cloned through the user interface and methods.

* Use the [`cloneGroup`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#clonegroup) method to clone a group.
* Use the [`cloneRule`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#clonerule) method to clone a rule.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/clone-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/clone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/clone-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/clone-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/clone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/clone-cs1" %}
{% endif %}