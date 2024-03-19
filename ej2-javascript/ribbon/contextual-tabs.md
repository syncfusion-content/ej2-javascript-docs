---
layout: post
title: Ribbon Contextual Tabs in  ##Platform_Name## Menu control | Syncfusion
description: Checkout and learn about Ribbon Contextual Tabs with ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon contextual tabs

The Ribbon Contextual tabs are similar to the Ribbon tabs that are displayed on demand based on their needs, such as an image or a table tabs. It supports adding all built-in and custom ribbon items to perform specific actions.

## Visible tabs

You can utilize the [visible](../api/ribbon/ribbonContextualTabSettingsModel/#visible) property to control the visibility of each contextual tab.

## Adding contextual tabs

You can utilize the [contextualTabs](../api/ribbon/#contextualTabs) property to add contextual tabs in the Ribbon. This property accepts an array of Ribbon tabs, where you can add multiple tabs based on your needs.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/contextual-tabs/add-contextual-tabs/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/add-contextual-tabs/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/add-contextual-tabs" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/contextual-tabs/add-contextual-tabs/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/add-contextual-tabs/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/add-contextual-tabs" %}
{% endif %}

## Selected tabs

By using the [isSelected](../api/ribbon/ribbonContextualTabSettingsModel/#isselected) property you can control the selected state of each contextual tab and indicates which tab is currently active.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/contextual-tabs/selected-tab/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/selected-tab/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/selected-tab" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/contextual-tabs/selected-tab/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/selected-tab/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/selected-tab" %}
{% endif %}

## Methods

### Show tab

You can use the [showTab](../api/ribbon/#showTab) method to make the specific Contextual tab visible in the Ribbon.

### Hide tab

You can use the [hideTab](../api/ribbon/#hideTab) method to hide specific Contextual tab in the Ribbon.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/contextual-tabs/method/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/method/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/method" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/contextual-tabs/method/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/method/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/method" %}
{% endif %}
