---
layout: post
title: Appointments in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Appointments in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Appointments 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Appointments in ##Platform_Name## Scheduler control

Appointments in the Scheduler can be anything scheduled for a specific time period. They can be created for various time ranges, and each appointment is categorized based on this range. The Scheduler events can be categorized as:

* Normal events
* Spanned events
* All-day events
* Recurring events

## Normal events

Normal events are appointments that occur within a specific time interval on a single day.

### Creating a normal event

Here's an example of how to create a normal event in the Scheduler using simple JSON data:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/event-cs1" %}
{% endif %}

## Spanned events

Spanned events are appointments that last more than 24 hours. They are typically displayed in the all-day row. This category also includes events that span multiple days but last less than 24 hours, which are displayed appropriately on both days.

> For example, if an appointment is scheduled from November 25, 2018, at 11:00 PM to November 26, 2018, at 2:00 AM (less than 24 hours), it will be split into two parts and displayed on both days.

### Customize the rendering of the spanned events

By default, Scheduler renders spanned events (appointments lasting more than 24 hours) in the all-day row. You can customize this behavior to display these events inside the work cells by modifying the [`spannedEventPlacement`](../api/schedule/eventSettings/#spannedeventplacement) option as `TimeSlot` within the [`eventSettings`](../api/schedule/eventSettings/) property. In this following example, shows how to render the spanned appointments inside the work cells as follows.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/event-cs3" %}
{% endif %}


## All-day events

All-day events are appointments that last an entire day, such as holidays. They are usually displayed in a separate all-day row below the date header section. In Timeline views, all-day appointments are shown in the main content area, as there is no separate all-day row in that view.

> To change a normal appointment into all-day event, set [`isAllDay`](../api/schedule/field/#isallday) field to true.

### Hide all-day row events

You can hide the all-day row appointments on the Scheduler UI using CSS customization:

```ts
    <style>
        .e-schedule .e-date-header-wrap .e-schedule-table thead {
           display: none;
        }
    </style>
```

> You can also enable scrolling for the all-day row. Please [refer here](./how-to/enable-scroll-option-on-all-day-section/) for more information.


## Expand all day appointments view on initial load

When you have a large number of appointments in the all-day view, you can display all all-day events using the [`dataBound`](../api/schedule#databound) event on initial load. This way, users don't have to click the toggle to expand all-day events.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs2" %}
{% endif %}

## Recurring events

Recurring events are appointments that repeat at regular intervals. They can occur daily, weekly, monthly, or yearly based on the specified recurrence rule. Recurring events are usually indicated by a repeat marker at the bottom-right corner.

### Creating a recurring event

Here's an example of how to create a recurring event in the Scheduler with a specific [`recurrenceRule`](../api/schedule/field/#recurrencerule). In the following example, an event is made to repeat on daily mode and ends after 5 occurrences.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/event-cs4" %}
{% endif %}

### Adding exceptions

You can exclude specific dates from a recurrence series by adding them to the [`recurrenceException`](../api/schedule/field/#recurrenceexception) field. These exception dates should be provided in ISO date-time format without hyphens (-) separating the date elements.

> For example, February 22, 2018, should be represented as "20180222". The time part, represented in UTC format, should have "Z" added after it without any space. For instance, "07:30:00 UTC" is represented as "073000Z".

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs5" %}
{% endif %}

### Editing an occurrence from a series

To edit a particular occurrence from an event series and display it on the initial load of the Scheduler, add the edited occurrence as a new event to the dataSource collection. Include an additional [`recurrenceID`](../api/schedule/field/#recurrenceid) field that maps to the ID value of the parent event.


In this example, a recurrent instance that appears on the 30th of January 2018 is changed with alternative timings. As a result, this date is removed from the parent repeating event, which runs from January 28th to February 4th, 2018. This can be accomplished by populating the [`recurrenceException`](../api/schedule/field/#recurrenceexception) column on the parent event with the excluded date value. Also, the edited occurrence event, which is created as a new event, should have a[`recurrenceID`](../api/schedule/field/#recurrenceid) field that points to the parent event's [`Id`](../api/schedule/field/#id) value.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs6" %}
{% endif %}

### Edit only the current and following events

To edit only the current and following events, enable the [`editFollowingEvents`](../api/schedule/eventSettings/#editfollowingevents) property within the [`eventSettings`](../api/schedule/eventSettings/) property. Add the edited occurrence as a new event to the dataSource collection with an additional [`followingID`](../api/schedule/field/#followingid) field that maps to the ID value of the immediate parent event.

In this example, a recurring instance that appears on the date 30th January 2018 and following dates is modified with a different subject. As a result, this date and following dates are removed from the parent repeating event, which repeats from January 28th to February 4th, 2018. This can be accomplished by modifying the [`recurrenceRule`](../api/schedule/field/#recurrencerule) field on the parent event with the until date value. Also, updated events that are produced as new events should have a [`followingID`](../api/schedule/field/#followingid) field that points to the immediate parent event's `Id` value.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs7" %}
{% endif %}

### Recurrence options and rules

Events can be repeated on a daily, weekly, monthly, or yearly basis using recurrence rules. The following details should be assigned to the [`recurrenceRule`](../api/schedule/field/#recurrencerule) property to generate recurring instances:

- Repeat type (daily/weekly/monthly/yearly)
- How many times it needs to be repeated
- The interval duration
- The time period for rendering the appointment

There are four repeat types available:

* **Daily** - Creates recurring instances on a daily basis.
* **Weekly** - Creates recurring instances on a weekly basis for selected days.
* **Monthly** - Creates recurring instances on a monthly basis for selected months and other provided recurrence criteria.
* **Yearly** - Creates recurring instances on a yearly basis.

### Recurrence properties

 The following table describes the properties used to create recurrence appointments with their respective time periods. Also, the valid rule string can be referred from [iCalendar](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications.

 > Refer [iCalendar](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications for valid recurrence rule string.

| Property | Purpose | Example |
|-------|---------| --------- |
| FREQ | Maintains the repeat type (Daily, Weekly, Monthly, Yearly) value of the appointment. | FREQ=DAILY;INTERVAL=1|
| INTERVAL | Maintains the interval value of the appointments. When you create the daily appointment at an interval of 2, the appointments are rendered on the days Monday, Wednesday and Friday (Creates an appointment on all days by leaving the interval of one day gap). | FREQ=DAILY;INTERVAL=2|
| COUNT | It holds the appointment’s count value. When the COUNT value is 10, then 10 instances of appointments are created in the recurrence series. | FREQ=DAILY;INTERVAL=1;COUNT=10|
| UNTIL | This property holds the end date value (in ISO format) denoting when the recurrence actually ends. | FREQ=DAILY;INTERVAL=1;UNTIL=20180530T041343Z;|
| BYDAY | It holds the day value(s), representing on which the appointments actually renders. Create the weekly appointment, and select the day(s) from the day options (Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday). When Monday is selected, the first two letters of the selected day "MO" is saved in the BYDAY property. When multiple days are selected, the values are separated by commas. | FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE;COUNT=10|
| BYMONTHDAY | This property is used to store the date value of the Month, while creating the Month recurrence appointment. When you create a Monthly recurrence appointment for every 3rd day of the month, then BYMONTHDAY holds the value 3 and creates the appointment on 3rd day of every month. | FREQ=MONTHLY;BYMONTHDAY=3;INTERVAL=1;COUNT=10|
| BYMONTH | This property is used to store the index value of the selected Month while creating the yearly appointments. When you create the yearly appointment on June month, the index value of June month 6 will get stored in the BYMONTH field. The appointment is created on every 6th month of a year. | FREQ=YEARLY;BYMONTHDAY=16;BYMONTH=6;INTERVAL=1;COUNT=10|
| BYSETPOS | This property is used to store the index value of the week. When you create the monthly appointment in second week of a month, the index value of the second week (2) is stored in BYSETPOS. | FREQ=MONTHLY;BYDAY=MO;BYSETPOS=2;COUNT=10|

> The default recurrence validation for appointments is similar to that in Outlook. This validation occurs during the creation, editing, dragging, dropping, or resizing of recurrence appointments, as well as when any single occurrence changes.

### Daily Frequency

| Description | Example |
|-------------|---------|
| Daily recurring event that never ends | FREQ=DAILY;INTERVAL=1 |
| Daily recurring event that ends after 5 occurrences | FREQ=DAILY;INTERVAL=1;COUNT=5 |
| Daily recurring event that ends exactly on 12/12/2018 | FREQ=DAILY;INTERVAL=1;UNTIL=20181212T041343Z |
| Daily event that recurs on alternative days and repeats for 10 occurrences | FREQ=DAILY;INTERVAL=2;COUNT=10 |

### Weekly Frequency

| Description | Example |
|-------------|---------|
| Weekly recurring event that repeats on every Monday, Wednesday and Friday and never ends | FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR |
| Repeats every week Thursday and ends after 10 occurrences | FREQ=WEEKLY;INTERVAL=1;BYDAY=TH; COUNT=10 |
| Repeats every week Monday and ends on 12/12/2018 | FREQ=WEEKLY;INTERVAL=1;BYDAY=MO; UNTIL=20181212T041343Z |
| Repeats on Monday, Wednesday and Friday of alternative weeks and ends after 10 occurrences | FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,WE,FR;COUNT=10 |

### Monthly Frequency

| Description | Example |
|-------------|---------|
| Monthly recurring event that repeats on every 15th day of a month and never ends | FREQ=MONTHLY; BYMONTHDAY=15;INTERVAL=1 |
| Monthly recurring event that repeats on every 16th day of a month and ends after 10 occurrences | FREQ=MONTHLY;BYMONTHDAY=16;INTERVAL=1;COUNT=10 |
| Repeats every 17th day of a month and ends on 12/12/2018 | FREQ=MONTHLY;BYMONTHDAY=17; INTERVAL=1;UNTIL=20181212T041343Z |
| Repeats every 2nd Friday of a month and never ends | FREQ=MONTHLY;BYDAY=FR;BYSETPOS=2; INTERVAL=1 |
| Repeats every 4th Wednesday of a month and ends after 10 occurrences | FREQ=MONTHLY;BYDAY=WE; BYSETPOS=4;INTERVAL=1;COUNT=10 |
| Repeats every 4th Friday of a month and ends on 12/12/2018 | FREQ=MONTHLY;BYDAY=FR;BYSETPOS=4; INTERVAL=1;UNTIL=20181212T041343Z; |

### Yearly Frequency

| Description | Example |
|-------------|---------|
| Yearly event that repeats on every 15th day of December month and never ends | FREQ=YEARLY; BYMONTHDAY=15;BYMONTH=12;INTERVAL=1 |
| Event that repeats on every 10th day of December month and ends after 10 occurrences | FREQ=YEARLY; BYMONTHDAY=10;BYMONTH=12;INTERVAL=1;COUNT=10 |
| Repeats on every 12th day of December month and ends on 12/12/2025 | FREQ=YEARLY;BYMONTHDAY=12; BYMONTH=12;INTERVAL=1;UNTIL=20251212T041343Z |
| Repeats on every 3rd Friday of December month and never ends | FREQ=YEARLY;BYDAY=FR;BYMONTH=12; BYSETPOS=3;INTERVAL=1 |
| Repeats on every 3rd Tuesday of December month and ends after 10 occurrences | FREQ=YEARLY; BYDAY=TU;BYMONTH=12;BYSETPOS=3;INTERVAL=1;COUNT=10 |
| Repeats on every 4th Wednesday of December month and ends on 12/12/2028 | FREQ=YEARLY;BYDAY=WE; BYMONTH=12;BYSETPOS=4;INTERVAL=1;UNTIL=20281212T041343Z |

### Recurrence Validation

The built-in validation support has been added by default for recurring appointments during its creation, edit, drag and drop or resize action. The following are the possible validation alerts that displays on Scheduler while creating or editing the recurring events.

| Validation messages | Description |
|-------|---------|
| The recurrence pattern is not valid. | This alert will raise, when the selected recurrence rule value is not a valid one. For example, when you try to select the end date value (using `Until` option) for a recurring event, which occurs before the start date, an alert will popup out saying that the chosen pattern is invalid. |
| The changes made to specific instances of this series will be cancelled and those events will match the series again. | This alert will raise, when you try to edit the whole series, whose occurrence might have been already edited. For example, If there are five occurrences and one of the occurrence is already edited. Now, when you try to edit the entire series, you will get this validation alert. |
| The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor. | This validation will occur, if the event duration is longer than the selected frequency. For example, if you create a recurring appointment with two days duration in `Daily` frequency with no intervals set to it, you may get this alert. |
| Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month. | When you try to create a recurring appointment on 31st of every month, where few months won’t have 31 days and in this scenario, you will get this alert. |
| Two occurrences of the same event cannot occur on the same day. | This validation will occur, when you try to edit or move any single occurrence to some other date, where another occurrence of the same event is already present. |

## Event fields

The Scheduler dataSource usually holds the event instances, where each of the instance includes a collection of appropriate [`fields`](../api/schedule/field). It is mandatory to map these fields with the equivalent fields of database, when remote data is bound to it. When the local JSON data is bound, then the field names defined within the instances needs to be mapped with the scheduler event fields correctly.

> To create an event on Scheduler, it is enough to define the `startTime` and `endTime`. Also `id` field becomes mandatory to process CRUD actions on appropriate events.

### Built-in fields

The built-in [`fields`](../api/schedule/field/) available on Scheduler event object are as follows.

| Field name | Description |
|-------|---------|
| id | The `id` field needs to be defined as mandatory and this field usually assigns a unique ID value to each of the events.|
| subject | The `subject` field is optional, and usually assigns the summary text to each of the events.|
| startTime | The `startTime` field defines the start time of an event and it is mandatory to provide it for any of the valid event objects.|
| endTime | The `endTime` field defines the end time of an event and it is mandatory to provide the end time for any of the valid event objects.|
| startTimezone | It maps the `startTimezone` field from the dataSource and usually accepts the valid IANA timezone names. It is assumed that the value provided for this field is taken into consideration while processing the `startTime` field. When this field is not mapped with any timezone names, then the events will be processed based on the timezone assigned to the Scheduler.|
| endTimezone | It maps the `endTimezone` field from the dataSource and usually accepts the valid IANA timezone names. It is assumed that the value provided for this field is taken into consideration while processing the `endTime` field. When this field is not mapped with any timezone names, then the events will be processed based on the timezone assigned to the Scheduler.|
| location | It maps the `location` field from the dataSource and the location text value will be displayed over the events.|
| description | It maps the `description` field from the dataSource and denotes the event description which is optional.|
| isAllDay | The `isAllDay` field is mapped from the dataSource and is used to denote whether an event is created for an entire day or for specific time alone. Usually, an event with `isAllDay` field set to true will be considered as an all-day event. |
| recurrenceID | It maps the `recurrenceID` field from dataSource and usually holds the ID value of the parent recurrence event. This field is applicable only for the edited occurrence events.|
| recurrenceRule | It maps the `recurrenceRule` field from dataSource and holds the recurrence rule value in a string format. Also, it uniquely identifies whether the event belongs to a recurring type or normal ones. |
| recurrenceException | It maps the `recurrenceException` field from dataSource and is used to hold the collection of exception dates, on which the recurring occurrences needs to be excluded. The `recurrenceException` should be specified in UTC format. |
| isReadonly | It maps the `isReadonly` field from dataSource. It is mainly used to make specific appointments as readonly when set to `true`. |
| isBlock | It maps the `isBlock` field from dataSource. It is used to block the particular time ranges in the Scheduler and prevents the event creation on those time slots. |

### Binding different field names

When the fields of event instances have the default mapping names, it is not mandatory to map them manually. However, if a Scheduler's dataSource contains the events collection with different field names, it is necessary to map them to their equivalent field names within the [`eventSettings`](../api/schedule/eventSettings/) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs8" %}
{% endif %}

> The mapper field `id` is of string type and has no additional validation options, whereas all other fields are of `Object` type and has additional options.

### Event field settings

Each field of the Scheduler events comes with additional settings, such as options to set default values, map to appropriate data source fields, validate each event field, and provide label values for those fields in the event window.

| Options | Description |
| ------- | ----------- |
| default | Accepts the default value to the applicable fields (Subject, Location and Description), when no values are provided to them from dataSource. |
| name | Accepts the field name to be mapped from the dataSource fields. |
| title | Accepts the label values to be displayed for the fields of event editor. |
| validation | Defines the validation rules to be applied on the event fields within the event editor. |

In the following example, the Subject field in the event editor will display the appropriate label as **Summary**. If no subject value is provided when saving an event, the appointment will be saved with the default subject value of **Add Summary**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs9" %}
{% endif %}

## Adding Custom fields

In addition to the default Scheduler fields, users can include any number of custom fields for appointments. The following code example demonstrates how to incorporate two custom fields, namely **Status** and **Priority**, within the event collection. It is not necessary to bind the custom fields within the [`eventSettings`](../api/schedule/eventSettings/); however, these additional fields can be easily accessed for internal processing as well as from the application end.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs10" %}
{% endif %}

## Customize the order of the overlapping events

By default, the scheduler renders overlapping events based on their start and end times. However, we can customize the order of overlapping events using the [`sortComparer`](../api/schedule/eventSettings/#sortcomparer) property, which is grouped under the [`eventSettings`](../api/schedule/eventSettings/) property. The following code example demonstrates how to sort appointments based on a custom field.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs11" %}
{% endif %}

## Preventing Overlapping Events

By default, the scheduler displays overlapping events according to their start and end times. To prevent overlapping, you can set the [`allowOverlap`](../api/schedule/#allowoverlap) property to `false`.

When this property is set to `false`, any new or updated events that overlap with existing ones will trigger an overlap alert. The overlapping events will be collected in the [`overlapEvents`](../api/schedule/popupOpenEventArgs/#overlapevents) within the [`PopupOpenEventArgs`](../api/schedule/popupOpenEventArgs/).

When the [`allowOverlap`](../api/schedule/#allowoverlap) property is set to `false`, the scheduler behaves as follows:

**Initial Load Behavior:**  Upon initial loading, the scheduler prioritizes non-overlapping events based on their duration and all-day status. Events with longer durations and those marked as all-day receive higher priority to ensure there are no overlaps.

**Recurring Appointments:**  If there are conflicts within a recurring appointment series during the initial load, the scheduler will display all occurrences of the series, except for the conflicting instance.

**Event Modifications:**  When a user edits, saves, or removes appointments, the scheduler checks for potential overlaps. If a conflict is detected, the action is blocked, and a conflict alert is displayed to the user to address the issue.

**Dynamic Recurrence Series Creation or Editing:**  When a user creates or edits a recurrence series dynamically, the scheduler will prevent any occurrences of the series from being added if a conflict is found within the series.

The following code example demonstrates how to enable the [`allowOverlap`](../api/schedule/#allowoverlap) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs40/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs40/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/event-cs40" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs40/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/event-cs40" %}
{% endif %}

**Limitations**

The [`allowOverlap`](../api/schedule/#allowoverlap) property checks for event overlaps only within the currently visible date range. Events scheduled outside the rendered date range are not included in the overlap check by default.

If you need to check for overlaps with events outside the visible date range, you can leverage the [`promise`](../api/schedule/actionBeginEventArgs/#promise) field within the [`actionBegin`](../api/schedule/#actionbegin) event to validate all events before proceeding. By implementing a custom validation method inside the [`actionBegin`](../api/schedule/#actionbegin) event, you can assign the result (a boolean) to the [`promise`](../api/schedule/actionBeginEventArgs/#promise) field. If the result is `true`, the action (e.g., adding or saving the event) will proceed; if `false`, the action will be blocked.

Additionally, you can use the public method [`openOverlapAlert`](../api/schedule/#openoverlapalert) to show an alert popup whenever an overlap occurs and the result is `false`.

The following code example demonstrates how to check for overlaps when an event is added. If an overlap is found, the event won't be added, and an alert will be shown.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs41/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs41/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/event-cs41" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs41/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs41/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/event-cs41" %}
{% endif %}

## Drag and drop appointments

Appointments can be rescheduled to any time by dragging and dropping them to the desired location. To utilize the drag-and-drop functionality, it is necessary to inject the `DragAndDrop` module and ensure that [`allowDragAndDrop`](../api/schedule#allowdraganddrop) is set to true in the Scheduler. In mobile mode, you can drag and drop events by tapping and holding an event, then dropping it at the desired location.

> By default, the drag-and-drop action is available in all Scheduler views except for the `Agenda`, `Month-Agenda`, and `Year` views.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs12/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs12/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs12/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs12/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs12" %}
{% endif %}

### Drag and drop multiple appointments

We can drag and drop multiple appointments by enabling the [`allowMultiDrag`](../api/schedule#allowmultidrag) property. We can select multiple appointments by holding the CTRL key. Once the events are selected, you can release the CTRL key and begin dragging the events.

Additionally, we can drag multiple events from one resource to another. If all the selected events belong to different resources, all of them will be moved to the single resource associated with the target event.

> **Note:** Dragging and dropping multiple events is not supported on mobile devices.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs13/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs13/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs13/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs13/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs13" %}
{% endif %}

### Disable the drag action

By default, you can drag and drop events within any of the applicable scheduler views. To disable this functionality, set the [`allowDragAndDrop`](../api/schedule#allowdraganddrop) property to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs14/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs14/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs14/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs14/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs14" %}
{% endif %}

### Preventing drag and drop on specific targets

It is possible to prevent the drag action on specific targets by specifying the target to be excluded in the [`excludeSelectors`](../api/schedule/dragEventArgs/#excludeselectors) option within the [`dragStart`](../api/schedule#dragstart) event. In this example, we have prevented the drag action on the all-day row.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs15/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs15/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs15/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs15/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs15" %}
{% endif %}

### Disable scrolling on drag action

By default, when dragging an appointment to the edges, either the top or bottom in the vertical Scheduler, or the left or right in the timeline Scheduler, the scrolling action occurs automatically. To prevent this scrolling, set the [`scroll`](../api/schedule/dragEventArgs/#scroll) value to `false` within the [`dragStart`](../api/schedule#dragstart) event arguments.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs16/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs16/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs16/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs16/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs16" %}
{% endif %}

### Controlling scroll speed while dragging an event

The scrolling speed while dragging an appointment to the edges of the Scheduler can be controlled within the [`dragStart`](../api/schedule#dragstart) event by setting the desired values for the [`scrollBy`](../api/schedule/scrollOptions/#scrollby) and [`timeDelay`](../api/schedule/scrollOptions/#timedelay) options. The default values are 30 minutes for `scrollBy` and 100 ms for `timeDelay`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs17/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs17/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs17/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs17/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs17" %}
{% endif %}

### Auto navigation of date ranges on dragging an event

When an event is dragged to either the left or right extreme edges of the Scheduler and held for a few seconds without being dropped, the auto-navigation of date ranges will be enabled. This allows the Scheduler to navigate back and forth between the current date range. By default, this action is set to `false`, and to enable it, you need to set [`navigation`](..api/schedule/dragEventArgs/#navigation) to `true` within the [`dragStart`](../api/schedule#dragstart) event.

By default, the navigation delay is set to 2000 ms. This delay determines how long a user must drag and hold the appointments at the extremities. You can also set your own delay value to allow users to navigate based on it by using the [`timeDelay`](../api/schedule/scrollOptions/#timedelay)option within the [`dragStart`](../api/schedule#dragstart) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs18/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs18/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs18/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs18/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs18" %}
{% endif %}

### Setting drag time interval

By default, when dragging an appointment, it moves in 30-minute intervals. To change the dragging time interval, pass the appropriate values to the [`interval`](../api/schedule/dragEventArgs/#interval) option within the [`dragStart`](../api/schedule#dragstart) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs19/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs19/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs19/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs19/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs19" %}
{% endif %}

### Drag and drop items from external source

It is possible to drag and drop unplanned items from any external source into the scheduler by manually saving the dropped items as new appointment data using the [`addEvent`](../api/schedule#addevent) method of the scheduler.

In this example, we use the tree view control as the external source, and the child nodes from the tree view component are dragged and dropped onto the scheduler. Therefore, it is necessary to utilize the [`nodeDragStop`] event of the TreeView component, where we can create an event object and save it using the [`addEvent`](../api/schedule#addevent) method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/external-drag-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/external-drag-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/external-drag-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/external-drag-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/external-drag-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/external-drag-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/external-drag-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/external-drag-cs1" %}
{% endif %}

### Opening the editor window on drag stop

There are scenarios in which you may want to open the editor filled with data at a newly dropped location and only proceed to save it when the `Save` button is clicked in the editor. Clicking the `Cancel` button should revert these changes. This can be accomplished using the [`dragStop`](../api/schedule#dragstop) event of the Scheduler.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs20/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs20/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs20" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs20/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs20/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs20" %}
{% endif %}

## Inline Appointment

The Scheduler offers a convenient way to add or edit appointment subjects using inline Add/Edit support. This feature allows users to quickly manage appointments without opening a separate dialog.

To add an appointment inline:

1. Single-click on any Scheduler cell or press the enter key on selected cells.
2. A text box will appear within the clicked cell with a blinking cursor.
3. Enter the appointment subject.
4. Press the enter key to save the appointment.

To edit an appointment inline:

1. Single-click on an existing appointment's subject.
2. The subject becomes editable.
3. Make your changes.
4. Press the enter key to update the appointment.

You can enable or disable this feature using the [`allowInline`](../api/schedule#allowinline) property. By default, it is set to false.

Important notes:
- When [`allowInline`](../api/schedule#allowinline) is enabled, [`showQuickInfo`](../api/schedule#showquickinfo) will be turned off.
- The quick popup will not appear when clicking on a work cell or an appointment if [`allowInline`](../api/schedule#allowinline) is set to `true`.
- In work cells, you can select multiple cells using the keyboard, then press the enter key to create an appointment wrapper.
- When creating an inline event, be aware of potential overlapping scenarios.

### Normal Event

For editing appointments, single-click the appointment subject. The `editable` option will be enabled in the UI, and the cursor will focus at the end of the text. Inline editing is available for all possible views.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs21" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs21" %}
{% endif %}

### Recurrence Event

When editing an occurrence from a recurrence series, it's only possible to edit a `single occurrence`, not the entire series.

## Appointment Resizing

Another way to reschedule an appointment is by resizing it. To use the resizing functionality, inject the `Resize` module and ensure that the [`allowResizing`](../api/schedule#allowresizing) property is set to true.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs22/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs22/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs22" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs22/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs22/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs22" %}
{% endif %}

### Disable the resize action

By default, resizing of events is allowed on all Scheduler views except Agenda and Month-Agenda view. To disable event resizing, set [`allowResizing`](../api/schedule#allowresizing) to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs23/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs23/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs23" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs23/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs23/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs23/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs23" %}
{% endif %}

### Disable scrolling on resize action

By default, while resizing an appointment, when its handler reaches the extreme edges of the Scheduler, scrolling action will takes place along with event resizing. To prevent this scrolling action, set false to `scroll` value within the `resizeStart` event.

By default, when resizing an appointment and its handler reaches the edge of the Scheduler, scrolling occurs along with event resizing. To prevent this scrolling action, set the [scroll](../api/schedule/resizeEventArgs/#scroll) value to `false` within the [`resizeStart`](../api/schedule#resizestart) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs24/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs24/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs24" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs24/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs24/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs24" %}
{% endif %}

### Controlling scroll speed while resizing an event

You can control the scrolling speed when resizing an appointment to the Scheduler edges. Set the desired value for the [`scrollBy`](../api/schedule/scrollOptions/#scrollby) option within the [`resizeStart`](../api/schedule#resizestart) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs25/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs25/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs25" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs25/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs25/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs25" %}
{% endif %}

### Setting resize time interval

By default, when resizing an appointment, it extends or shrinks at 30-minute intervals. To change this default resize interval, set appropriate values to the [`interval`](../api/schedule/resizeEventArgs/#interval) option within the [`resizeStart`](../api/schedule#resizestart) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs26/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs26/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs26/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs26" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs26/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs26/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs26/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs26" %}
{% endif %}

## Appointment customization

You can customize the appearance of Scheduler events using any of the following methods:

* [Using event templates](#using-template)
* [Using eventRendered event](#using-eventrendered-event)
* [Using custom CSS class](#using-custom-css-class)

### Using template

You can add text, images, and links to customize the appearance of events. Use the [`template`](../api/schedule/eventSettings/#template) option within the [`eventSettings`](../api/schedule/eventSettings/) property to format and change the default appearance of events. The following example customizes the appointment's default color and time format:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-template-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-template-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-template-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-template-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-template-cs1" %}
{% endif %}

> All built-in fields mapped to appropriate field properties within [`eventSettings`](../api/schedule/eventSettings/), as well as custom mapped fields from the Scheduler dataSource, can be accessed within the template code.

### Using eventRendered event

The [`eventRendered`](https://ej2.syncfusion.com/documentation/api/schedule#eventrendered) event triggers before an appointment renders on the Scheduler. Use this client-side event to customize the appearance of events based on specific criteria before rendering them on the Scheduler.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs27/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs27/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs27/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs27" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs27/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs27/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs27/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs27" %}
{% endif %}

### Using custom CSS class

You can also customize event appearance using the [`cssClass`](../api/schedule#cssclass) property of the Scheduler. The following example changes the background of appointments using cssClass:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs28/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs28/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs28/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs28" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs28/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs28/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs28/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs28" %}
{% endif %}

## Setting minimum height

You can set a minimal height for appointments on the Scheduler using the [`eventRendered`](../api/schedule#eventrendered) event when the start and end time duration is less than the default duration of a single slot.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs29/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs29" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs29/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs29" %}
{% endif %}

## Block Dates and Times

You can block a set of dates or specific time ranges on the Scheduler. To do this, define an appointment object within [`eventSettings`](../api/schedule/eventSettings/) with the required time range to block and set the [`isBlock`](../api/schedule/field/#isblock) field to true. Event objects with the isBlock field set to true will block all time cells within the specified time ranges through [`startTime`](../api/schedule/field/#starttime) and [`endTime`](../api/schedule/field/#endtime) fields.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs30/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs30/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs30/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs30" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs30/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs30/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs30/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs30" %}
{% endif %}

Block events can also be defined to repeat on several days as shown in the following code example.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs31/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs31/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs31" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs31/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs31/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs31" %}
{% endif %}

## Readonly

You can enable or disable interaction with Scheduler appointments using the [`readonly`](../api/schedule#readonly) property. When enabled, you can navigate between Scheduler dates and views and view appointment details in the quick info window. However, users cannot perform any CRUD actions on the Scheduler. By default, this property is set to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs32/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs32/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs32/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs32" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs32/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs32/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs32/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs32" %}
{% endif %}

## Make specific events readonly

In some scenarios, you may need to restrict CRUD actions on specific appointments based on certain conditions. For example, you can make past events readonly. This can be achieved by setting the [`isReadonly`](../api/schedule/field/#isreadonly) field of readonly events to `true`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs33/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs33/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs33/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs33" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs33/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs33/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs33/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs33" %}
{% endif %}

> By default, the event editor is prevented from opening on readonly events when the [`isReadonly`](../api/schedule/field/#isreadonly) field is set to `true`.

## Restricting event creation on specific time slots

You can restrict users from creating and updating more than one appointment on specific time slots. You can also disable CRUD actions on occupied time slots using the Scheduler's public method [`isSlotAvailable`](../api/schedule#isslotavailable).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/cell-dimension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/cell-dimension-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/cell-dimension-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/cell-dimension-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs1" %}
{% endif %}

> The **isSlotAvailable** method focuses on verifying appointments within the current view's date range. It does not evaluate availability for recurrence occurrences outside this particular date range.

## Differentiate the past time events

To differentiate the appearance of appointments based on specific criteria, such as displaying past hour appointments with different colors on the Scheduler, use the [`eventRendered`](../api/schedule#eventrendered) event, which triggers before the appointment renders on the Scheduler.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs34/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs34/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs34/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs34" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs34/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs34/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs34/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs34" %}
{% endif %}

## Appointments occupying entire cell

The Scheduler allows events to occupy the full height of the cell without its header part by setting `true` for the [`enableMaxHeight`](../api/schedule/eventSettings/#enablemaxheight) property.

You can show an indicator if more than one appointment is available in the same cell by setting `true` to the [`enableIndicator`](../api/schedule/eventSettings/#enableindicator) property. Its default value is `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs35/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs35/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs35/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs35" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs35/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs35/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs35/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs35" %}
{% endif %}

## Display tooltip for appointments

Tooltips can provide additional information about appointments in a formatted style. Here's how to work with tooltips:

### Show or hide built-in tooltip

The tooltip can be displayed for appointments by setting `true` to the [`enableTooltip`](../api/schedule/eventSettings/#enabletooltip) option within the [`eventSettings`](../api/schedule/eventSettings/) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs36/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs36/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs36/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs36" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs36/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs36/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-cs36/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-cs36" %}
{% endif %}

### Customizing event tooltip using template

You can customize the content and appearance of tooltips using templates. To do this:

1. Enable the default tooltip.
2. Use the [`tooltipTemplate`](../api/schedule/eventSettings/#tooltiptemplate) option within the [`eventSettings`](../api/schedule/eventSettings/) property to define your custom template.

Here's an example:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/tooltip-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/tooltip-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/tooltip-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/tooltip-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/tooltip-cs1" %}
{% endif %}

> Note: You can access all field names mapped from the Scheduler dataSource within your template, including `subject`, `description`, `location`, `startTime`, and `endTime`.

## Appointment filtering

You can filter appointments based on specific criteria using the [`query`](../api/schedule/eventSettings/#query) option in [`eventSettings`](../api/schedule/eventSettings/). 

Here's an example of how to filter and render only selected appointments:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-filter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-filter-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-filter-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-filter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/event-filter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-filter-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/event-filter-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/event-filter-cs1" %}
{% endif %}

## Appointment selection

Users can select appointments using either mouse or keyboard actions. Selected events are visually distinguished with a box shadow effect.

| Action | Description |
|-------|---------|
| Mouse click or Single tap on appointments | Selects a single appointment. |
| Ctrl + [Mouse click] or Ctrl + [Single tap] on appointments | Selects multiple appointments.|

## Deleting multiple appointments

After selecting multiple appointments, you can delete them all at once by pressing the `delete` key. 

Note: When deleting multiple selected occurrences of a recurring event series, only the selected occurrences will be deleted, not the entire series.

## Retrieve event details from the UI

You can access the information about an appointment's fields directly from its UI element. Use the public method [`getEventDetails`](../api/schedule#geteventdetails) by passing the appointment element as an argument.

Here's an example that displays the subject of a clicked appointment:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/events-public-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-public-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/events-public-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/events-public-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/events-public-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-public-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/events-public-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/events-public-cs1" %}
{% endif %}

## Get the current view appointments

To retrieve the appointments visible in the current Scheduler view, use the [`getCurrentViewEvents`](../api/schedule#getcurrentviewevents) public method. In the following example, the count of current view appointment collection rendered has been traced in [`dataBound`](../api/schedule#databound) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/events-public-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-public-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/events-public-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/events-public-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/events-public-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-public-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/events-public-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/events-public-cs2" %}
{% endif %}

## Get the entire appointment collections

To access all appointments rendered on the Scheduler, regardless of the current view, use the [`getEvents`](../api/schedule#getevents) public method. In the following example, the count of entire appointment collection rendered on the Scheduler has been traced in [`dataBound`](../api/schedule#databound) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/events-public-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-public-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/schedule/events-public-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/events-public-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/schedule/events-public-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-public-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/events-public-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/events-public-cs3" %}
{% endif %}

## Refresh appointments

If you need to update only the appointments without refreshing the entire Scheduler, use the [`refreshEvents`](../api/schedule#refreshevents) public method.

```ts
scheduleObj.refreshEvents();
```

This method is useful when you've made changes to the appointment data and want to reflect those changes in the UI without a full refresh.

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.
