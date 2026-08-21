---
layout: post
title: Render palette alone in ##Platform_Name## Color Picker | Syncfusion
description: Render only the palette area in the Syncfusion ##Platform_Name## Color Picker by setting mode to Palette and disabling the mode switcher.
platform: ej2-javascript
control: Render palette alone 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to render palette alone in ##Platform_Name## Color Picker

To render the `Palette` alone in ColorPicker, specify the [`mode`](../../api/color-picker/index-default#mode) property as `Palette`, and set the [`modeSwitcher`](../../api/color-picker/index-default#modeswitcher) property to `false`.

In the following sample, the [`showButtons`](../../api/color-picker/index-default#showbuttons) property is disabled to hide the control buttons and it renders only the `Palette` area.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/colorpicker/palette-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/palette-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/palette-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/colorpicker/palette-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/colorpicker/palette-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/palette-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/palette-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/colorpicker/palette-cs1" %}
{% endif %}

>> To render `Picker` alone specify the [`mode`](../../api/color-picker#mode) property as 'Picker'.