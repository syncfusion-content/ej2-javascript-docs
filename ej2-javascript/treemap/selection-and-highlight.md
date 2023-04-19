---
layout: post
title: Selection and highlight in ##Platform_Name## Treemap control | Syncfusion
description: Learn here all about Selection and highlight in Syncfusion ##Platform_Name## Treemap control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Selection and highlight 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Selection and highlight in ##Platform_Name## Treemap control

## Selection

Selection is used to select a particular group or item to differentiate from other items. Each item or each group can be selected and deselected while interacting with the items. The corresponding Treemap items are also selected while tapping a specific legend item, and vice versa.

The `fill` property is used to change the selected item color. The `color` and the `width` properties are used to customize the selected item border, and the selection is enabled by using the `enable` property  to **true** in the `selectionSettings`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/selectionAndHighlight-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/selectionAndHighlight-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/selectionAndHighlight-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/selectionAndHighlight-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/selectionAndHighlight-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/selectionAndHighlight-cs3" %}
{% endif %}

## Highlight

Highlight is used to highlight an item or group from other items or groups. Each item or each group can be highlighted by hovering the mouse over the items. The corresponding Treemap items are also be highlighted while hovering over a specific legend item, and vice versa.

The `fill` property is used to change the highlighted item color. The `color` and the `width` properties are used to customize the highlighted item border, and the highlight is enabled by setting the `enable` property to **true** in the `highlightSettings`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/selectionAndHighlight-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/selectionAndHighlight-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/selectionAndHighlight-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/selectionAndHighlight-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/selectionAndHighlight-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/selectionAndHighlight-cs4" %}
{% endif %}