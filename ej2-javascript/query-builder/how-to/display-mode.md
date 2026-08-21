---
layout: post
title: Change display mode in ##Platform_Name## Query Builder UI | Syncfusion
description: Switch the ##Platform_Name## Query Builder UI between vertical and horizontal layouts using the displayMode property to fit the query editor into your page design.
platform: ej2-javascript
control: Display mode 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to change display mode in ##Platform_Name## Query Builder UI

Display options allows you to view the Query Builder in Vertically or Horizontally. For this, you should use the [`displayMode`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#displaymode) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs8" %}
{% endif %}

> The default view in the desktop mode is Horizontal.
> The default view in the mobile mode is Vertical.