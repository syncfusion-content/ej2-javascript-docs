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

You can customize the icon and text of JavaScript Speed Dial button using [`openIconCss`](../api/speed-dial#openiconcss), [`closeIconCss`](../api/speed-dial#closeiconcss) and [`content`](../api/speed-dial#content) properties.

### Icon only

You can use the [`openIconCss`](../api/speed-dial#openiconcss) and [`closeIconCss`](../api/speed-dial#closeiconcss) properties to show icons in speed dial button. You can also show tooltip on hover to show additional details to end-user by setting `title` attribute.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/styles-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs7/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/speed-dial/styles-cs7/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs7" %}

### Text only

You can show only text in Speed Dial button by setting [`content`](../api/speed-dial#content) property  without setting icon properties..

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/styles-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs8/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/speed-dial/styles-cs7/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs8" %}

### Icon with text

You show icon and text in SpeedDial button using [`openIconCss`](../api/speed-dial#openiconcss), [`closeIconCss`](../api/speed-dial#closeiconcss) and [`content`](../api/speed-dial#content) properties together.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/styles-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs9/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/speed-dial/styles-cs9/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs9" %}

## Disabled

You can enable or disable the SpeedDial control using [`disabled`](../api/speed-dial#disabled) property.

```ts
import { SpeedDial } from '@syncfusion/ej2-buttons';

// Initialize the SpeedDial control in disabled state
let speeddial: SpeedDial = new SpeedDial({
    content: 'Edit',
    target: '#targetElement',
    disabled: true
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');
```

## cssClass

The JavaScript Speed Dial supports the following predefined styles that can be defined using the [`cssClass`](../api/speed-dial#cssclass) property. You can customize by setting the `cssClass` property with the below defined class.

| cssClass | Description |
| -------- | -------- |
| e-primary | Used to represent a primary action. |
| e-outline |  Used to represent an appearance of button with outline. |
| e-info |  Used to represent an informative action. |
| e-success | Used to represent a positive action. |
| e-warning | Used to represent an action with caution. |
| e-danger | Used to represent a negative action. |

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/styles-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs10/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/speed-dial/styles-cs10/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs10" %}

## Visible

You can set the Speed Dial button to visible/hidden state using [`visible`](../api/speed-dial#visible) property.

```ts
import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

// Initialize the SpeedDial control in hidden state
let speeddial: SpeedDial = new SpeedDial({
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
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/styles-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs11/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/speed-dial/styles-cs11/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs11" %}

## Opens on hover

You can use [`opensOnHover`](../api/speed-dial#opensonhover) property to open actions items on hover itself. By default action items displayed only when clicking the speed dial button.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/styles-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/styles-cs12/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/speed-dial/styles-cs12/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs12" %}
