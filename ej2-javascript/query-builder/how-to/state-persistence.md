---
layout: post
title: State persistence in ##Platform_Name## Query Builder UI | Syncfusion
description: Persist the ##Platform_Name## Query Builder UI rule in the browser localStorage across page reloads by setting the enablePersistence property to true.
platform: ej2-javascript
control: State persistence 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to maintain state persistence in ##Platform_Name## Query Builder UI

State persistence maintains the current state in the browser’s `localStorage` even if the browser is refreshed or moved to the next page within the browser. The Query Builder’s `rule` object is stored in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/documentation/state-persistence) property is set to true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs12" %}
{% endif %}