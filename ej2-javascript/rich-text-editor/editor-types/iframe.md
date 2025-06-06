---
layout: post
title: IFrame Editing Mode  in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about IFrame Editing Mode  in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: IFrame Editing Mode  
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# IFrame Editing Mode in ##Platform_Name## Rich Text Editor control

The iframe editor in the Rich Text Editor control provides an isolated environment for content editing. It uses an iframe element to create a separate document, ensuring better compatibility and separation from the parent page's styles and scripts. In this mode, the editor displays only the body tag of the iframe, offering a clean and isolated workspace for content creation.

## Configuring the Iframe editor

To enable the iframe editor, you can use the [iframeSettings](../api/rich-text-editor/#iframesettings) property. When this option is enabled, the Rich Text Editor creates an iframe element as the content area during initialization.

Here's an example of how to enable the iframe editor:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/iframe-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/iframe-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs1" %}
{% endif %}

## Customizing IFrame attributes

You can add custom attributes to the body tag of the iframe using the attributes field of the [iframeSettings](../api/rich-text-editor/#iframesettings) property. This property accepts name/value pairs in string format, enabling you to override the default appearance of the content area.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/iframe-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/iframe-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs2" %}
{% endif %}

## Integrating external CSS and scripts

The Rich Text Editor allows you to apply an external CSS file to style the iframe element. This can be done using the [styles](../api/rich-text-editor/resources/#styles) field in the iframeSettings property. By including an external CSS file, you can easily change the appearance of the editor’s content to meet your specific requirements.

Likewise, add the external script file to the `< iframe >` element using the [scripts](../api/rich-text-editor/resources/#scripts) field of iframeSettings to provide the additional functionalities to the RichTextEditor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/iframe-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/iframe-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs3" %}
{% endif %}

> You can also explore our [iframe in Javascript Rich Text Editor example](https://ej2.syncfusion.com/demos/#/bootstrap5/rich-text-editor/iframe.html) that shows how to render the iframe in Javascript Rich Text Editor.

## Integrating Mention with Iframe

Rich Text Editor supports advanced features such as Mention control, even when it is rendered inside an iframe. To enable mention functionality within the iframe-mode Rich Text Editor, you need to correctly set the [target](https://ej2.syncfusion.com/documentation/api/mention/#target) of the Mention control.

Specifically, assign the `inputElement` of the Rich Text Editor to the target property of the Mention control. This ensures that the Mention popup is triggered correctly when the user types a designated character (such as @) inside the Rich Text Editor's editable area.

Here's an example of how to integrate Mention with Iframe editor,

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/mention-iframe/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/mention-iframe/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-iframe" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/mention-iframe/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/mention-iframe/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-iframe" %}
{% endif %}

## See also

* [Implementing Inline Editing](./inline-editing)
* [Using the Markdown Editor](../../markdown-editor)
