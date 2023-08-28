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

The rating control triggers the [`beforeItemRender`](../api/rating/#beforeitemrender) event before rendering each rating item. The [`RatingItemEventArgs`](../api/rating/ratingItemEventArgs/) passed as an event argument provides the details of the item to be rendered.

```ts
import { Rating, RatingItemEventArgs } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Rating control.
let rating: Rating = new Rating({
    beforeItemRender: (args: RatingItemEventArgs)=> {
       //Your required action here
    }
});

// Render initialized Rating.
rating.appendTo('#rating');

```

## created

The rating control triggers the [`created`](../api/rating/#created) event when the rendering of the rating control is completed.

```ts
import { Rating } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Rating control.
let rating: Rating = new Rating({
    created: ()=> {
       //Your required action here
    }
});

// Render initialized Rating.
rating.appendTo('#rating');

```

## onItemHover

The rating control triggers the [`onItemHover`](../api/rating/#onitemhover) event when the rating item is hovered. The [`RatingHoverEventArgs`](../api/rating/ratingHoverEventArgs/) passed as an event argument provides the details of the hovered item.

```ts
import { Rating, RatingHoverEventArgs } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Rating control.
let rating: Rating = new Rating({
    onItemHover: (args: RatingHoverEventArgs)=> {
       //Your required action here
    }
});

// Render initialized Rating.
rating.appendTo('#rating');

```

## valueChanged

The rating control triggers the [`valueChanged`](../api/rating/#valuechanged) event when the value of the rating is changed. The [`RatingChangedEventArgs`](../api/rating/ratingChangedEventArgs/) passed as an event argument provides the details when value is changed.

```ts
import { Rating, RatingChangedEventArgs } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Rating control.
let rating: Rating = new Rating({
    valueChanged: (args: RatingChangedEventArgs )=> {
       //Your required action here
    }
});

// Render initialized Rating.
rating.appendTo('#rating');

```

Below example demonstrates the valueChanged event of the Rating control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/events-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/events-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/events-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/events-cs2" %}
