---
layout: post
title: Custom Toolbar in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Custom Toolbar in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Custom Toolbar
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom Toolbar Items in ##Platform_Name## Rich Text Editor control

The Syncfusion Rich Text Editor allows you to customize the toolbar using the [`toolbarSettings`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#toolbarSettings) property. You can add custom commands with text, icons, or HTML templates and define their position in the toolbar.

## Adding a custom command  

This example demonstrates how to add a custom “Ω” command to the toolbar for inserting special characters. Clicking the Ω icon opens a special character list, allowing users to insert symbols into the editor.

### Custom toolbar configuration

To add a custom tool with a tooltip, define it in the [`items`](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/toolbarSettingsModel/#items) field of the `toolbarSettings` property.

```javascript
{
    tooltipText: 'Insert Symbol',
    // To disable the custom toolbar items on source code view
    command: 'Custom',
    undo: true,
    click: function() {
    },
    template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>'
}
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/custom-tool-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/custom-tool-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/custom-tool-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/custom-tool-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/custom-tool-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/custom-tool-cs1" %}
{% endif %}

> When rendering any control for the custom toolbar, like a dropdown, the focus may be lost, causing it to render outside the Rich Text Editor and triggering a blur event. This can interfere with proper functionalities like cursor focus. To prevent this issue, it is recommended to assign the `e-rte-elements` class to the control rendered in the custom toolbar.

## Enabling and disabling toolbar items

You can use the [enableToolbarItem](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#enabletoolbaritem) and [disableToolbarItem](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#disabletoolbaritem) methods to control the state of toolbar items. This methods takes a single item or an array of [items](#available-toolbar-items) as parameter.

> You can add the command name `Custom` to disable the custom toolbar items on source code view and other quicktoolbar operations.