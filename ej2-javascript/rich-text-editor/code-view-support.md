---
layout: post
title: Code View in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Code View in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Code View
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Code View Support in ##Platform_Name## Rich Text Editor Component

Rich Text Editor includes the ability for users to directly edit HTML code via `Source View` in the text area. If you made any modification in Source view directly, the changes will be reflected in the Rich Text Editor's content. So, the users will have more flexibility over the content they have created.

## Configuring Source Code Tool in the Toolbar

You can add the `SourceCode` tool in the Rich Text Editor using the `toolbarSettings` [items](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/toolbarSettingsModel/#items) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/code-mirror-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/code-mirror-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/code-mirror-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/code-mirror-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/code-mirror-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/code-mirror-cs1" %}
{% endif %}

>This functionality can also be enabled through the use of the [CodeMirror](https://codemirror.net/) plugin. It helps to highlight the HTML content and ensures that any modifications in the code view are instantly reflected in the preview mode.

The Rich Text Editor provides the [showSourceCode](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#showsourcecode) method, which allows you to toggle programmatically between the code view and the formatted text view. When invoked, this method switches the editor’s view to the opposite state.

## See Also

* [Integrating Code-Mirror for Enhanced Syntax Highlighting](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/third-party-integration#codemirror-integration)