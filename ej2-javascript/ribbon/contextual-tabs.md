---
layout: post
title: Contextual Tabs in ##Platform_Name## Ribbon | Syncfusion
description: Learn how to add contextual tabs in the ##Platform_Name## Ribbon that appear contextually for the selected item, with built-in and custom Ribbon item support.
control: Ribbon
platform: ej2-javascript
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Contextual Tabs in ##Platform_Name## Ribbon

Ribbon Contextual Tabs are special tabs that appear only when a specific object or context is selected, such as a table, image, or chart. They provide users with a set of tools relevant only to the selected item. These tabs can host all built-in and custom Ribbon items to perform specific actions.

## Visible tabs

You can control the initial visibility of a contextual tab by setting the [visible](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonContextualTabSettingsModel#visible) property to `true` or `false`.

## Adding contextual tabs

You can utilize the [contextualTabs](https://ej2.syncfusion.com/documentation/api/ribbon#contextualTabs) property to add contextual tabs in the Ribbon. This property accepts an array of Ribbon tabs, where you can add multiple tabs based on your needs.

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

The [isSelected](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonContextualTabSettingsModel#isselected) property determines which contextual tab is active upon initialization. Setting this property to `true` makes the corresponding tab the currently selected one.

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

The Ribbon provides methods to dynamically manage the visibility of contextual tabs after the component has been initialized.

### Show Tab

The [showTab](https://ej2.syncfusion.com/documentation/api/ribbon#showTab) method makes a specific contextual tab visible in the Ribbon.

### Hide Tab

The [hideTab](https://ej2.syncfusion.com/documentation/api/ribbon#hideTab) method hides a specific contextual tab in the Ribbon.

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
