---
layout: post
title: Custom views in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about Custom views with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Custom views
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom views in ##Platform_Name## AI AssistView control

## Adding custom views

By using the `views` property you can define the collection of different assist view models in the AI AssistView. You can customize the default and the custom views added.

### Setting view type

You can set the type of view by using the `type` property. It accepts two values such as `Assist`, and `Custom`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { AIAssistView } from "@syncfusion/ej2-interactive-chat";
let aiAssistView: AIAssistView = new AIAssistView({
    views: [
        { type: 'Assist' },
        { type: 'Custom' }
    ],
});
aiAssistView.appendTo('#aiAssistView');
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
var aiAssistView = new ej.interactivechat.AIAssistView({
    views: [
        { type: 'Assist' },
        { type: 'Custom' }
    ],
});
aiAssistView.appendTo('#aiAssistView');
{% endhighlight %}
{% endtabs %}

{% endif %}

### Setting name

You can use the `name` property to specifies the header name of the `Assist` or `Custom` views in the AI AssistView.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { AIAssistView } from "@syncfusion/ej2-interactive-chat";
let aiAssistView: AIAssistView = new AIAssistView({
    views: [
        { name: "Prompt" },
        { name: 'Response' }
    ],
});
aiAssistView.appendTo('#aiAssistView');
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
var aiAssistView = new ej.interactivechat.AIAssistView({
    views: [
        { name: "Prompt" },
        { name: 'Response' }
    ],
});
aiAssistView.appendTo('#aiAssistView');
{% endhighlight %}
{% endtabs %}

{% endif %}

### Setting iconCSS

You can customize the view icons by using the `iconCss` property. By default the `e-assistview-icon` class is added as built-in header icon for the AI AssistView.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { AIAssistView } from "@syncfusion/ej2-interactive-chat";
let aiAssistView: AIAssistView = new AIAssistView({
    views: [
        { iconCss: 'e-icons e-assistview-icon' },
        { iconCss: 'e-icons e-comment-show', type: 'Custom' }
    ],
});
aiAssistView.appendTo('#aiAssistView');
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
var aiAssistView = new ej.interactivechat.AIAssistView({
    views: [
        { iconCss: 'e-icons e-assistview-icon' },
        { iconCss: 'e-icons e-comment-show', type: 'Custom' }
    ],
});
aiAssistView.appendTo('#aiAssistView');
{% endhighlight %}
{% endtabs %}

{% endif %}

The following example illustrates how types, name, and iconCss are used in a AI AssistView control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/views/type/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/views/type/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/views/type" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/views/type/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/views/type/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/views/type" %}
{% endif %}

### Setting view template 

You can use the `viewTemplate` property to add the view content of the multiple views added in the AI AssistView.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/views/view-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/views/view-template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/views/view-template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/views/view-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/views/view-template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/views/view-template" %}
{% endif %}

## Setting active view

You can use the `activeView` property to set the active view in the AI AssistView. By default, the value is `0`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/views/active-view/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/views/active-view/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/views/active-view" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/views/active-view/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/views/active-view/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/views/active-view" %}
{% endif %}
