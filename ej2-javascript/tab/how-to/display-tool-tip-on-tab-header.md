---
layout: post
title: Display tool tip on tab header in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Display tool tip on tab header in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Display tool tip on tab header 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Display tool tip on tab header in ##Platform_Name## Tab control

You can display tooltip for the tab component header using [`beforeRender`](../../api/tooltip#beforerender) event of Essential JS 2 Tooltip component which can be viewed as hint texts on mouse hovers over tab.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tooltip-tab-header-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tooltip-tab-header-cs1" %}
{% endif %}
