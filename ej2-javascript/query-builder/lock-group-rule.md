---
layout: post
title: Lock Group/Rule in ##Platform_Name## Query Builder UI | Syncfusion
description: Lock rules or whole groups in the ##Platform_Name## Query Builder UI to prevent editing of field, operator, and value using lockRule and lockGroup.
platform: ej2-javascript
control: Lock Group/Rule 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Lock Group/Rule in ##Platform_Name## Query Builder UI

The Query Builder provides the functionality to lock individual rules or entire groups. When a rule is locked, its field, operator, and value cannot be modified, effectively disabling these components. Similarly, locking a group disables all elements contained within it. This feature offers greater control over query configurations, ensuring that specific rules or groups remain unchanged. Additionally, the visibility of locking buttons can be managed through the [`showButtons`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#showbuttons) property, allowing seamless control over the locking mechanism.

Groups and rules can be locked through the user interface and methods.

* Use the [`lockGroup`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#lockgroup) method to lock a group.
* Use the [`lockRule`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#lockrule) method to lock a rule.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/lock-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/lock-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/lock-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/lock-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/lock-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/lock-cs1" %}
{% endif %}