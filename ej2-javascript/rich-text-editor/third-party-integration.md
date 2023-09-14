---
layout: post
title: Third party integration in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Third party integration in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Third party integration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Third party integration in ##Platform_Name## Rich text editor control

The Rich Text Editor can be integrated with third-party to suite the application scenario.

## Code-Mirror Integration

Rich Text Editor comes with a basic HTML source editor through view-source property. [`Code mirror`](https://codemirror.net/) plugin can be used to highlight the syntax of HTML. CodeMirror plugin for Rich Text Editor makes editing of HTML source code with a pleasant experience.

Import necessary CSS and JS files of CodeMirror to the HTML page.

Required JS files of code mirror.

```ts
 <script src="scripts/CodeMirror/codemirror.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/javascript.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/css.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/htmlmixed.js" type="text/javascript"></script>

```

Required CSS file of code mirror.

```ts
 <link href="scripts/CodeMirror/codemirror.min.css" rel="stylesheet" />

```

Add a custom icon for HTML source editor in the toolbar of Rich Text Editor using template option of [`toolbarSettings`](../api/rich-text-editor/#toolbarsettings) and define the code mirror plugins, and then pass the Rich Text Editor content as argument in [`actionComplete`](../api/rich-text-editor/#actioncomplete) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/code-mirror-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/code-mirror-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/code-mirror-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/code-mirror-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/code-mirror-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/code-mirror-cs2" %}
{% endif %}

## Embed.ly Integration

Rich Text Editor easily integrate with [`Embed.ly`](https://embed.ly/) which is probably the best service when it comes to embed the rich content such as Twitter, Facebook, Instagram and lots of other publishing platform embeds.

```ts

<script src="https://cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

```

In the following sample, the `Embed.ly` class `embedly-card` has been added to `<a>` tag in [`actionComplete`](../api/rich-text-editor/#actioncomplete) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/how-to-embedly-integration-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/how-to-embedly-integration-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to-embedly-integration-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/how-to-embedly-integration-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/how-to-embedly-integration-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to-embedly-integration-cs1" %}
{% endif %}
