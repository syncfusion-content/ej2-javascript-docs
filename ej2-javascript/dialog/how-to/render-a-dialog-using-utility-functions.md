---
layout: post
title: Render Dialog Using Utilities in ##Platform_Name## Dialog | Syncfusion
description: Learn here all about Render a dialog using utility functions in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Render a dialog using utility functions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Render Dialog Using Utilities in ##Platform_Name## Dialog | Syncfusion

The Dialog component provides built-in utility functions to render alert and confirm dialogs with minimal code. The utility functions are called via `DialogUtility.alert(...)` and `DialogUtility.confirm(...)`, accepting either a content string or an options object. The following options are used as an argument on calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of the Dialog like the [header](../../api/dialog#header) property. |
| content | Specifies the value that can be displayed in the Dialog's content area like the [content](../../api/dialog#content) property. |
| isModal | Specifies the Boolean value whether the Dialog can be displayed as modal or non-modal. For more details, refer to the [isModal](../../api/dialog#ismodal) property. |
| position | Specifies the value where the alert or confirm Dialog is positioned within the document, e.g., `{ X: 'center', Y: 'center' }`. For more details, refer to the [position](../../api/dialog  #position) property. |
| okButton | Configures the `OK button` that contains button properties with the click events. `okButton:{ iconCss:'prefix icon class for the button', cssClass:'custom class for the button', click: 'action for OK button click', text: 'OK' // <-- 'OK' is the default value}` |
| cancelButton | Configures the `Cancel button` that contains button properties with the click events. `cancelButton:{ iconCss:'prefix icon class for the button', cssClass:'custom class for the button', click: 'action for Cancel button click', text: 'Cancel' // <-- 'Cancel' is the default value}` |
| isDraggable | Specifies the value whether the alert or confirm Dialog can be dragged by the user. |
| showCloseIcon | When set to true, the close icon is shown in the Dialog component. |
| closeOnEscape | When set to true, you can close the Dialog by pressing the ESC key. |
| animationSettings | Specifies the animation settings of the Dialog component. |
| cssClass | Specifies the CSS class name that can be appended to the Dialog. |
| zIndex | Specifies the order of the Dialog, that is displayed in front of or behind another component. |
| open | Event which is triggered after the Dialog is opened. |
| close | Event which is triggered after the Dialog is closed. |

## Alert dialog

An alert dialog box is used to display warning messages to the users. Calling `DialogUtility.alert(content)` renders a default alert with an OK button. Use the following code to render a simple alert dialog in an application.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dialog-utility-alert-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-utility-alert-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dialog-utility-alert-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-utility-alert-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert-cs2" %}
{% endif %}

### Render an alert dialog with options

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert1-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert1-cs2" %}
{% endif %}

## Confirm dialog

A confirm dialog displays a specified message along with 'OK' and 'Cancel' buttons. Calling `DialogUtility.confirm(content)` renders a default confirm dialog with OK and Cancel buttons.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-confirm-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-confirm-cs2" %}
{% endif %}

### Render a confirmation dialog with options

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-confirm1-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-confirm1-cs3" %}
{% endif %}