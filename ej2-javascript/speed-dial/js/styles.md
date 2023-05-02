---
layout: post
title: Styles in ##Platform_Name## Speed dial control | Syncfusion
description: Learn here all about Styles in Syncfusion ##Platform_Name## Speed dial control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Styles 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Styles in ##Platform_Name## Speed dial control

This section briefs different ways to style SpeedDial control.

## SpeedDial button

You can customize the icon and text of JavaScript(ES5) Speed Dial button using [`openIconCss`](../api/speed-dial#openiconcss), [`closeIconCss`](../api/speed-dial#closeiconcss) and [`content`](../api/speed-dial#content) properties.

### Icon only

You can use the [`openIconCss`](../api/speed-dial#openiconcss) and [`closeIconCss`](../api/speed-dial#closeiconcss) properties to show icons in speed dial button. You can also show tooltip on hover to show additional details to end-user by setting `title` attribute.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speed-dial/styles-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs1" %}

### Text only

You can show only text in Speed Dial button by setting [`content`](../api/speed-dial#content) property  without setting icon properties..

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speed-dial/styles-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs2" %}

### Icon with text

You show icon and text in SpeedDial button using [`openIconCss`](../api/speed-dial#openiconcss), [`closeIconCss`](../api/speed-dial#closeiconcss) and [`content`](../api/speed-dial#content) properties together.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speed-dial/styles-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs3" %}

## Disabled

You can enable or disable the SpeedDial control using [`disabled`](../api/speed-dial#disabled) property.

```js
// Initialize the SpeedDial control in disabled state
var speeddial = new ej.buttons.SpeedDial({
    content: 'Edit',
    target: '#targetElement',
    disabled: true
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');
```

## cssClass

The JavaScript(ES5) Speed Dial supports the following predefined styles that can be defined using the [`cssClass`](../api/speed-dial#cssclass) property. You can customize by setting the `cssClass` property with the below defined class.

| cssClass | Description |
| -------- | -------- |
| e-primary | Used to represent a primary action. |
| e-outline |  Used to represent an appearance of button with outline. |
| e-info |  Used to represent an informative action. |
| e-success | Used to represent a positive action. |
| e-warning | Used to represent an action with caution. |
| e-danger | Used to represent a negative action. |

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speed-dial/styles-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs4" %}

## Visible

You can set the Speed Dial button to visible/hidden state using [`visible`](../api/speed-dial#visible) property.

```js
// Initialize the SpeedDial control in hidden state
var speeddial = new ej.buttons.SpeedDial({
    content: 'Edit',
    target: '#targetElement',
    visible: false
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');
```

## Tooltip

You can show tooltip on hover to show additional details to end-user by setting [`title`](../api/speed-dial/speedDialItemModel/#title) to Speed Dial button.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speed-dial/styles-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs5" %}

## Opens on hover

You can use [`opensOnHover`](../api/speed-dial#opensonhover) property to open actions items on hover itself. By default action items displayed only when clicking the speed dial button.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speed-dial/styles-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs6" %}
