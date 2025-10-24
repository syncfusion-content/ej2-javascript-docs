---
layout: post
title: Text Selection Using Slider in ##Platform_Name## Rich text editor control | Syncfusion
description:  Learn how to select a character range using ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Text Selection
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---


# Text Selection Using Slider in ##Platform_Name## Rich Text Editor Control

The Syncfusion Rich Text Editor supports character range-based text selection using the **Syncfusion Slider** control. This feature allows users to select a specific range of characters (e.g., 33–45) within the editor content, which is then automatically highlighted.

This functionality is useful for scenarios where precise text selection is needed for operations such as copying, formatting, or analysis.

> **Note:** The example below assumes the Rich Text Editor contains plain text wrapped in a single `<p>` tag for simplicity.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/selection/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/selection/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/selection/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/selection/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

