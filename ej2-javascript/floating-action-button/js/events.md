---
layout: post
title: Events in ##Platform_Name## Floating action button control | Syncfusion
description: Learn here all about Events in Syncfusion ##Platform_Name## Floating action button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Events 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## Floating action button control

This section explains the available events in Floating Action Button control.

## created

Event triggers after the creation of Floating Action Button.

```js
// Initialize the Floating Action Button control
var fab = new ej.buttons.Fab({
    iconCss: 'e-icons e-edit',
    content:'Edit',
    created:()=>{
        //Your required action here
    }
});

// Render initialized Floating Action Button
fab.appendTo('#fab');
```

## onclick

Event triggers when the Floating Action Button is clicked.

```js
// Initialize the Floating Action Button control
var fab = new ej.buttons.Fab({
    iconCss: 'e-icons e-edit',
    content:'Edit'
});

// Render initialized Floating Action Button
fab.appendTo('#fab');

// onclick event handler
fab.element.onclick = function() {
    //Your required action here
};
```

Below example demonstrates the click event of the Floating Action Button.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/floating-action-button/events-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/events-cs2/index.html %}
{% endhighlight %}.
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/floating-action-button/events-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/events-cs2" %}
