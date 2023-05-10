---
layout: post
title: Render a dialog using utility functions in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Render a dialog using utility functions in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Render a dialog using utility functions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Render a dialog using utility functions in ##Platform_Name## Dialog control

The dialog component provides built-in utility functions to render the alert and confirm dialogs with the minimal code. The following options are used as an argument on calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of dialog like the [header](../../api/dialog/#header) property.|
| content | Specifies the value that can be displayed in dialog's content area like the [content](../../api/dialog/#content) property. |
| isModal | Specifies the Boolean value whether the dialog can be displayed as modal or non-modal. For more details, refer to the [isModal](../../api/dialog/#ismodal) property.|
| position | Specifies the value where the alert or confirm dialog is positioned within the document. For more details, refer to the [position](../../api/dialog/#position) property { X: 'center', Y: 'center'}|
| okButton | Configures the `OK button` that contains button properties with the click events. `okButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for OK button click', text: 'Yes' // <-- Default value is 'OK'}`|
| cancelButton | Configures the `Cancel button` that contains button properties with the click events. `cancelButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for ‘Cancel’ button click', text: 'No' // <-- Default value is 'Cancel'}`|
| isDraggable |Specifies the value whether the alert or confirm dialog can be dragged by the user.|
| showCloseIcon | When set to true, the close icon is shown in the dialog component. |
| closeOnEscape |When set to true, you can close the dialog by pressing ESC key. |
| animationSettings |Specifies the animation settings of the dialog component. |
| cssClass | Specifies the CSS class name that can be appended to the dialog. |
| zIndex | Specifies the order of the dialog, that is displayed in front or behind of another component. |
| open | Event which is triggered after the dialog is opened. |
| Close | Event which is triggered after the dialog is closed. |

## Alert dialog

An alert dialog box is used to display warning like messages to the users. Use the following code to render a simple alert dialog in an application.

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

A confirm dialog displays a specified message along with ‘OK’ and ‘Cancel’ button.

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