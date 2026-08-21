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

The Query Builder provides the functionality to lock individual rules or entire groups. When a rule is locked, it prevents users from modifying its field, operator, and value, effectively disabling these components. Similarly, locking a group disables all elements contained within it. This feature offers users greater control over their query configurations, ensuring that specific rules or groups remain unchanged. Additionally, users can manage the visibility of locking buttons through the [`showButtons`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#showbuttons) function, allowing for seamless control over the locking mechanism

You can lock groups and rules by interacting through the user interface and methods.

* Use the [`lockGroup`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#lockgroup) method to lock group.
* Use [`lockRule`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#lockrule) method to lock rule.

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