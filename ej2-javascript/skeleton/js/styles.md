---
layout: post
title: Styles in ##Platform_Name## Skeleton | Syncfusion
description: Customize ##Platform_Name## Skeleton appearance using cssClass for wave color, background, width, and height, and toggle visibility.
platform: ej2-javascript
control: Styles
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Styles in ##Platform_Name## Skeleton

You can customize skeleton control in the below ways.

## cssClass

You can customize the style of a Skeleton control by using [`cssClass`](../api/skeleton/index-default#cssclass). The appearance of JavaScript Skeleton can be customized by changing the wave color, background color, width, and height. For detailed information, refer `styles.css` file below.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/skeleton/styles-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/skeleton/styles-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/skeleton/styles-cs1" %}

## Visible

You can use the [`visible`](../api/skeleton/index-default#visible) property which defines the visible state of Skeleton.

```js
// Initialize Skeleton control in hidden state
var circle: Skeleton = new ej.notifications.Skeleton({
    shape: 'Circle',
    width: "60px",
    visible: false
});

// Render initialized Skeleton
circle.appendTo('#circleSkeleton');
```