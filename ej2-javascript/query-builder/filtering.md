---
layout: post
title: Filtering in ##Platform_Name## Query Builder UI | Syncfusion
description: Add or remove conditions and groups in the ##Platform_Name## Query Builder UI using addRules, deleteRules, addGroups, and deleteGroups methods.
platform: ej2-javascript
control: Filtering 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in ##Platform_Name## Query Builder UI

The Query Builder allows creating or deleting conditions and groups. Use [`showButtons`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#showbuttons) to enable or disable these buttons.

Conditions and groups can be created or deleted through the user interface and methods.

* Use the [`addRules`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#addrules) and [`deleteRules`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#deleterules) methods to create or delete conditions.
* Use the [`addGroups`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#addgroups) and [`deleteGroups`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#deletegroups) methods to create or delete groups.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/filtering-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/filtering-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/filtering-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/filtering-cs1" %}
{% endif %}