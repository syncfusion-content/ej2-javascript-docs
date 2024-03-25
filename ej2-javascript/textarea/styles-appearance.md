---
layout: post
title: Style and appearance in ##Platform_Name## TextArea control | Syncfusion
description: Learn here all about Style and appearance in Syncfusion ##Platform_Name## TextArea control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Style and Appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sizing in ##Platform_Name## TextArea Control

you can adjust the size of the TextArea by applying specific classes:

| Property  | Description |
| -- | -- |
| Small  | Add the `e-small` class to the input element or its container to render a smaller-sized TextArea. |
| Bigger | Add the `e-bigger` class to the input element or its container to render a larger-sized TextArea. |

By applying these classes, users can easily customize the appearance of the TextArea to better fit their application's design requirements.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/style-appearance-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/style-appearance-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs1" %}
{% endif %}

## Filled and outline mode

The Filled and Outline modes can be enabled in the TextArea control by adding the `e-outline` or `e-filled` class to the [cssClass](../api/textarea/#cssClass) API.
By adding these classes, users can choose between a filled or outline appearance for the TextArea control, aligning with the design aesthetics of their application.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/style-appearance-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/style-appearance-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs2" %}
{% endif %}

>Note: Filled and Outline theme customization are available only with Material themes.

## Custom styling with cssClass API in TextArea

The `cssClass` Api provides a powerful way to apply custom styling to the TextArea control, allowing users to customize its appearance and layout according to their design requirements.

By utilizing the `cssClass` API, users can apply custom CSS classes to the TextArea control's container, enabling control over its styling properties such as color, padding, margins, borders, and more.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/style-appearance-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs3/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/style-appearance-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs3/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs3" %}
{% endif %}

## Setting the disabled state in TextArea

To disable the TextArea, you can utilize the [enabled](../api/textarea/#enabled) property. When set to `false`, the TextArea becomes disabled, preventing user interaction.

{% if page.publishingplatform == "typescript" %}

```ts
import { TextArea } from '@syncfusion/ej2-inputs';

// Initialize TextArea control
let textareaObj: TextArea = new TextArea({
    enabled: false
});
textareaObj.appendTo('#default');

```
{% elsif page.publishingplatform == "javascript" %}

```js
// Initialize TextArea control
var textareaObj= new ej.inputs.TextArea({
    enabled: false
});

textareaObj.appendTo('#default');

```
{% endif %}

## Set the readonly TextArea

To make the TextArea read-only , you can use the [readonly](../api/textarea/#readonly) property. When set to `true`, it prevents users from editing the content of the TextArea.

{% if page.publishingplatform == "typescript" %}

```ts
import { TextArea } from '@syncfusion/ej2-inputs';

// Initialize TextArea control
let textareaObj: TextArea = new TextArea({
    value: 'Readonly',
    readonly: true
});
textareaObj.appendTo('#default');

```
{% elsif page.publishingplatform == "javascript" %}

```js
// Initialize TextArea control
var textareaObj= new ej.inputs.TextArea({
    value: 'Readonly',
    readonly: true
});

textareaObj.appendTo('#default');

```
{% endif %}

## Set the rounded corner in TextArea

Render the TextArea with `rounded corner` by adding the `e-corner` class to the input parent element.

>This rounded corner is visible only in box model input component

```html

<div class="e-input-group e-corner">
    <textarea class="e-input" placeholder="Enter your comments"></textarea>
</div>

```

## Static Clear Button in TextArea

To display a static clear button in the TextArea control, you can add the `e-static-clear` class to the `cssClass` property. This class ensures that the clear button remains visible at all times, providing users with the ability to easily clear the TextArea content without needing to focus on the control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/style-appearance-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs4/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs4/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/style-appearance-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs4/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs4/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs4" %}
{% endif %}

## Customize the TextArea background color and text color

You can customize the TextArea styles such as background-color, text-color and border-color by overriding its default styles to achieve the desired appearance for the TextArea.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/style-appearance-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs6/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs6/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/style-appearance-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs6/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs6/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs6" %}
{% endif %}

## Change the floating label color of the TextArea

You can change the floating label color of the TextArea for both `success` and `warning` validation states by applying the following CSS styles.

```css

    /* For Success state */
    .e-float-input.e-success label.e-float-text,
    .e-float-input.e-success input:focus ~ label.e-float-text,
    .e-float-input.e-success input:valid ~ label.e-float-text {
      color: #22b24b;
    }

    /* For Warning state */
    .e-float-input.e-warning label.e-float-text,
    .e-float-input.e-warning input:focus ~ label.e-float-text,
    .e-float-input.e-warning input:valid ~ label.e-float-text {
      color: #ffca1c;
    }

```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/style-appearance-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs5/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs5/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/style-appearance-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs5/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs5/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs5" %}
{% endif %}

## Adding mandatory asterisk to placeholder

To add a mandatory asterisk (*) to the placeholder in the TextArea control, you can utilize CSS to append the asterisk after the placeholder text.

```css

/* To add asterick to float label in textarea */ 
.e-float-input.e-control-wrapper .e-float-text::after {
  content: '*'; /* Add asterisk after the placeholder */
  color: red; /* Customize asterisk color */
}

```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/style-appearance-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs7/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs7/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/style-appearance-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/style-appearance-cs7/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/style-appearance-cs7/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs7" %}
{% endif %}
