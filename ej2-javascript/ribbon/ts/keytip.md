---
layout: post
title: Ribbon Keytip in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon Keytip with ##Platform_Name## Ribbon control of Syncfusion Essential ts 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Keytips

The Ribbon supports keyboard navigations to interact the ribbon items using the keytips which can be enabled by setting the [enableKeyTips](https://ej2.syncfusion.com/documentation/api/ribbon/#enablekeytips) property.

The keytips will be shown when the `Alt + Windows/Command` keys are pressed.

## Ribbon items keytip

You can add keytips to all the ribbon items by using the [keyTip](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#keytip) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/item-keytip/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/item-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/item-keytip" %}

## File menu keytip

You can add keytips to the file menu by using the [keyTip](https://ej2.syncfusion.com/documentation/api/ribbon/fileMenuSettings/#keytip) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/filemenu-keytip/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/filemenu-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/filemenu-keytip" %}

## Backstage menu keytip

You can add keytips to backstage menu items by using the [keyTip](https://ej2.syncfusion.com/documentation/api/ribbon/backStageMenu/#keytip) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/backstagemenu-keytip/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/backstagemenu-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/backstagemenu-keytip" %}

## Ribbon layout switcher keytip

You can add keytip to the layout switcher by using the [layoutSwitcherKeyTip](https://ej2.syncfusion.com/documentation/api/ribbon#layoutswitcherkeytip) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/layout-switcher-keytip/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/layout-switcher-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/layout-switcher-keytip" %}

## Ribbon launcher icon keytip

You can add keytip to the launcher icon by using the [launcherIconKeyTip](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroup/#keytip) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/launcher-keytip/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/launcher-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/launcher-keytip" %}

## Methods

### Show keytips

You can use the [showKeyTips](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonKeyTip/#showkeytips) method to shown the keytips dynamically.

In order to show specific keytips, pass the key string as an argument in the `showKeyTips('H')` method.

### Hide keytips

You can use the [hideKeyTips](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonKeyTip/#hidekeytips) method in Ribbon to remove the keytips dynamically. This will remove all the visible keytips.

## Guidelines for adding keytips

Before adding keytips to the ribbon items consider the following:

* Avoid using the same keytip setting on multiple items.

> For example: When you add the keytip text `H` or `HF` for the same items, it activates the first item occurrence of `H`, while any subsequent instances of `H` or `HF` are ignored.

* Do not use the same first letter for the single and double keytip items.

> For example: When accessing keytip text `F`, `FP` and `FPF` added for the different ribbon items and pressing `F` key, only the `F` key tip associated item will be activated while the `FP`, `FPF` configured ribbon items will be ignored.