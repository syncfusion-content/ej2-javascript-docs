---
layout: post
title: Events in ##Platform_Name## Rating control | Syncfusion
description: Learn here all about Events in Syncfusion ##Platform_Name## Rating control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Events 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## Rating control

This section describes the rating events that will be triggered when appropriate actions are performed. The following events are available in the rating control.

## beforeItemRender

The rating control triggers the [`beforeItemRender`](../api/rating#beforeitemrender) event before rendering each rating item. The [`RatingItemEventArgs`](../api/rating/ratingItemEventArgs/) passed as an event argument provides the details of the item to be rendered.

```js
// Initialize the Rating control.
var rating = new ej.inputs.Rating({
    beforeItemRender: (args)=> {
       //Your required action here
    }
});

// Render initialized Rating.
rating.appendTo('#rating');

```

## created

The rating control triggers the [`created`](../api/rating#created) event when the rendering of the rating control is completed.

```js
// Initialize the Rating control.
var rating = new ej.inputs.Rating({
    created: ()=> {
       //Your required action here
    }
});

// Render initialized Rating.
rating.appendTo('#rating');

```

## onItemHover

The rating control triggers the [`onItemHover`](../api/rating#onitemhover) event when the rating item is hovered. The [`RatingHoverEventArgs`](../api/rating/ratingHoverEventArgs/) passed as an event argument provides the details of the hovered item.

```js
// Initialize the Rating control.
var rating = new ej.inputs.Rating({
    onItemHover: (args)=> {
       //Your required action here
    }
});

// Render initialized Rating.
rating.appendTo('#rating');

```

## valueChanged

The rating control triggers the [`valueChanged`](../api/rating/#valuechanged) event when the value of the rating is changed. The [`RatingChangedEventArgs`](../api/rating/ratingChangedEventArgs/) passed as an event argument provides the details when value is changed.

```js
// Initialize the Rating control.
var rating = new ej.inputs.Rating({
    valueChanged: (args)=> {
       //Your required action here
    }
});

// Render initialized Rating.
rating.appendTo('#rating');

```

Below example demonstrates the valueChanged event of the Rating control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rating/events-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/events-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/events-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/events-cs1" %}
