---
layout: post
title: Open mode in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Open mode in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Open mode
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open mode in ##Platform_Name## Tooltip control

You can decide the mode on which the Tooltip is to be opened on a page, i.e., on hovering, focusing, or clicking on the target elements.

> On mobile devices, Tooltips appear when you tap and hold the element, even if the [`opensOn`](../api/tooltip#openson) option is assigned with `Hover`. Tooltips are also displayed as long as you continue to tap and hold the element. On lift, it disappears in the next 1.5 seconds. If there is another action before that time ends, then the Tooltip disappears.

The [`opensOn`](../api/tooltip#openson) property can take either a single or a combination of multiple values, separated by space, from the following options. The table below explains how the Tooltip opens on both desktop and mobile based on the value(s) assigned to the [`opensOn`](../api/tooltip#openson) property. By default, it takes the `auto` value.

| Values | Desktop | Mobile |
| ------------- | ------------- | ------------- |
| `Auto` | Tooltip appears when you hover over the target or when the target element receives the focus. | Tooltip opens on tap and hold of the target element. |
| `Hover` | Tooltip appears when you hover over the target. | Tooltip opens on tap and hold of the target element. |
| `Click` | Tooltip appears when you click a target element. | Tooltip appears when you single tap the target element. |
| `Focus` | Tooltip appears when you focus (say through the tab key) on a target element. | Tooltip appears with a single tap on the target element. |
| `Custom` | Tooltip is not triggered by any default action. So, you have to bind your own events and use either [`open`](../api/tooltip/#open) or [`close`](../api/tooltip/#close) public methods. | Same as Desktop. |

To open the Tooltip for multiple actions, say while hovering over or clicking on a target element, the [`opensOn`](../api/tooltip#openson) property can be assigned with multiple values, separated by space as `Hover Click`.

> The `auto` value cannot be used in combination for multiple values.

The following code example shows how to set the open mode for Tooltips.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/open-mode-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/open-mode-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/open-mode-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/open-mode-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/open-mode-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/open-mode-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/open-mode-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/open-mode-cs1" %}
{% endif %}

## Custom open mode

Other than the specified options, the `custom` mode allows the Tooltip to appear on-screen for user-defined custom actions such as `right-click`, `double-click`, and so on. In this mode, the Tooltip is not triggered by any default action; you must bind your own events and use either [`open`](../api/tooltip/#open) or [`close`](../api/tooltip/#close) public methods to show or hide the Tooltips.

The following code example shows how to define a custom open mode for the Tooltip.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/custom-open-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/custom-open-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/custom-open-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/custom-open-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/custom-open-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/custom-open-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/custom-open-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/custom-open-cs1" %}
{% endif %}

## Sticky mode

With this mode set to `true`, Tooltips can be made to stay on the screen as long as the close icon is pressed. In this mode, a close icon is attached at the top right corner of the Tooltip. This mode can be enabled or disabled using the [`isSticky`](../api/tooltip/#issticky) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/default/sticky-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/default/sticky-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/default/sticky-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/default/sticky-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/default/sticky-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/default/sticky-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/default/sticky-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/default/sticky-cs1" %}
{% endif %}

## Open/Close Tooltip with delay

Tooltip can be opened or closed after some delay by using the [`openDelay`](../api/tooltip#opendelay) and [`closeDelay`](../api/tooltip#closedelay) properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/default/open-close-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/default/open-close-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/default/open-close-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/default/open-close-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/default/open-close-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/default/open-close-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/default/open-close-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/default/open-close-cs1" %}
{% endif %}
