---
layout: post
title: Create wizard using tab in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Create wizard using tab in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Create wizard using tab 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Create wizard using tab in ##Platform_Name## Tab control

Tab items can be disabled dynamically by passing the index and boolean value to the [`enableTab`](../../api/tab#enabletab) method. You can also select an item from the tab by passing its index or HTML element to the [`select`](../../api/tab#select) method.

In the following Wizard sample, each Tab is integrated with required components to complete a reservation. Each field is provided with validation for all mandatory options to proceed to the next tab. The components are added into the content using the Tab item's template property.

```ts
    /* Initializing Tab with header and contents bind to template div for adding other components */
    tabObj = new Tab({ heightAdjustMode: 'None', height: 390, showCloseButton: false,
        selecting: tabSelected,
        items: [
            { header: { 'text': 'New Booking' }, content: '#booking' },
            { header: { 'text': 'Train List' }, content: '#selectTrain', disabled: true },
            { header: { 'text': 'Add Passenger' }, content: '#details', disabled: true },
            { header: { 'text': 'Make Payment' }, content: '#confirm', disabled: true }
        ]
    });
    tabObj.appendTo('#element');
```

Create the following contents for each tab in the wizard:

1. **Search tab:** Created with [DropDownList](../../drop-down-list/data-binding/) to select the source, destination, and type of ticket. A [DatePicker](../../datepicker/getting-started/) is used for choosing the date of journey.
2. **Train tab:** Based on the selected start and end points, a Grid is populated with a random list of available seats and train options. Initially, define the columns and row selected event for validation. After the source and destination are chosen, update the [dataSource](../../api/grid#datasource) for the Grid.
3. **Passenger tab:** A table with Textbox, Numeric, and DropDownList components for adding passenger name, age, gender, and preferred berth/seat. Add validation on entering passenger details to proceed.
4. **Payment tab:** Calculate the ticket cost based on location, passenger count, and ticket type. Generate data for the Grid with passenger details, train number, and ticket cost summary.

You can go back to each tab using buttons available in it. Tabs are [`disabled`](../../api/tab/tabItem#disabled) to prevent navigation through tab header click actions. Once you complete the wizard, all the data is cleared, and the wizard returns to the starting tab.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/disable-tab-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/disable-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/disable-tab-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/disable-tab-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/disable-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/disable-tab-cs1" %}
{% endif %}
