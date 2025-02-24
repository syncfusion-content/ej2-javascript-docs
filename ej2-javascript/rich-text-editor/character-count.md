---
layout: post
title: Character count in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Character count in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Character count
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Character Count in ##Platform_Name## Rich Text Editor control

The Character Count feature in the Rich Text Editor allows you to track and display the number of characters entered in the editor. This feature is particularly useful when you need to limit the content length or provide visual feedback to users about their input.

## How to Enable Character Count

To enable the character count feature, set the [showCharCount](../api/rich-text-editor/#showcharcount) property to `true`. By default, this property is set to `false`.

When enabled, the character count is displayed at the bottom right corner of the editor.

> To create Rich Text Editor with [showCharCount](../api/rich-text-editor/#showcharcount) feature, inject the Count module to the Rich Text Editor using the `RichTextEditor.Inject(Count)` method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs17" %}
{% endif %}

## Understanding Character Count Color Indicators

The character count color will be modified based on the characters in the Rich Text Editor.

| Status | Description |
|----------------|---------|
| normal | The character count color remains black until 70% of the maxLength count is reached.|
| warning | When the character count reaches 70% of the maxLength, the color changes to orange, indicating that the maximum limit is approaching.|
| error |Once the character count hits 90% of the maxLength, the color turns red, signaling that the limit is nearly reached.|

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/character-count-limit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/character-count-limit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/character-count-limit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs17character-count-limit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/character-count-limit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/character-count-limit-cs1" %}
{% endif %}

## Setting Maximum Character Limit

You can restrict the number of characters entered in the editor by setting the [maxLength](../api/rich-text-editor/#maxlength)property to a specific numeric value. When set, the maximum allowable character count is displayed alongside the current count at the bottom right of the editor.

If `maxLength` is not set, there is no limit to the character count in the editor.

## Retrieving Character Count Programmatically

You can programmatically get the current character count in the editor using the [getCharCount](../api/rich-text-editor/#getcharcount) public method.

```typescript

  let editorCount: number = this.editor.getCharCount();

```

## See Also

* [How to Customize Character Count and Styles in Rich Text Editor](https://ej2.syncfusion.com/documentation/rich-text-editor/style#customizing-the-rich-text-editors-character-count)