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

Tab items can be disabled dynamically by passing the index and boolean value with the [`enableTab`](../../api/tab#enabletab) method and also passing index or HTML element to select an item from the tab using [`select`](../../api/tab#select) method.

In the below Wizard sample, each Tab is integrated with required components to complete the reservation. Each field is provided with validation for all mandatory option to proceed to next tabs. Using Tab item's template property the components are added into content.

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

Create the following contents for each tab in the wizard.
1. **Search tab:**
   Created with [DropDownList](../../drop-down-list/data-binding/) to select the source, destination and type of ticket. A [DatePicker](../../datepicker/getting-started/) for choosing the date of journey.
2. **Train tab:**
   Based on the selected start and end point, populated Grid with random list of available seats and train list. Initially define the columns and row selected event for validating, after the source and destination chosen update the [dataSource](../../api/grid#datasource) for the Grid.
3. **Passenger tab:**
   A table with Textbox, Numeric, DropDownList for adding passenger name, age, gender and preferred berth/seat. Add validation on entering passenger details to proceed.
4. **Payment tab:**
   Calculate the ticket cost based on location, passenger count and ticket type. Generate data for Grid with passenger details, train number and ticket cost summary.

You can go back on each tab using buttons available in it and tabs are [`disabled`](../../api/tab/tabItem#disabled) to navigate through tab header click actions. Once you end the wizard all the data get cleared and wizard goes back to starting tab.

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
