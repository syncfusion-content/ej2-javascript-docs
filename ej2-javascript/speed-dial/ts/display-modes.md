---
layout: post
title: Display modes in ##Platform_Name## Speed dial control | Syncfusion
description: Learn here all about Display modes in Syncfusion ##Platform_Name## Speed dial control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Display modes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Display modes in ##Platform_Name## Speed dial control

The action items in JavaScript Speed Dial can be displayed in `Linear` and `Radial` display modes by setting [`mode`](../api/speed-dial#mode) property.

## Linear display mode

In `Linear` display mode, Speed Dial action items are displayed in a list-like format either horizontally or vertically. By default, Speed Dial items are displayed in `Linear` mode.

### Direction

You can open the action items on the top, left, up, and down side of the Speed Dial button by setting [`direction`](../api/speed-dial#direction) property. The default value is `Auto` where the action items are displayed based on the [`position`](../api/speed-dial#position)of the Speed Dial.

The `Linear` directions of Speed Dial are as follows:

* Left - Action items are displayed on the left side of the button.
* Right - Action items are displayed on the right side of the button.
* Up - Action items are displayed on the top of the button.
* Down - Action items are displayed on the bottom of the button.
* Auto - Action items display direction auto calculated based on `position` of the Speed Dial. If Speed Dial is position at bottom right, then action items displayed at top.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/linear-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/linear-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/speed-dial/linear-cs3/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/linear-cs3" %}

## Radial display mode (Radial Menu)

In `Radial` mode, Speed Dial action items are displayed in a circular pattern like a radial menu. For more details about radial mode, check out the link [here](https://ej2.syncfusion.com/documentation/speed-dial/radial-menu/).
