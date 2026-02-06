---
layout: post
title: State persistence in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about State persistence in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# State Persistence in Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls can persist their state across page refreshes and navigation. Enable this feature by setting the [`enablePersistence`](https://ej2.syncfusion.com/documentation/api/base/component/#enablepersistence) property to `true` on the desired control. When enabled, the control's state is serialized and stored in the browser's `localStorage` (typically on the page `unload` event), then restored when the control reinitializes.

Note: `localStorage` has size limits and is scoped per origin. Avoid persisting large data structures (for example, full data sources); prefer persisting UI state such as paging, selection, sorting, and filter settings.

The following example demonstrates enabling persistence for the Grid control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/state-persistence-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/state-persistence-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/state-persistence-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/state-persistence-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/state-persistence-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/state-persistence-template-cs1" %}
{% endif %}

## State Persistence supported controls and properties

The table below lists Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls that support state persistence and the properties that are stored in `localStorage` when persistence is enabled.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>control Name</b></td>
<td><b>Properties</b></td>
</tr>
<tr>
<td>Grid</td>
<td>
<ul>
<li>Columns</li>
<li>filterSettings</li>
<li>searchSettings</li>
<li>groupSettings</li>
<li>pageSettings</li>
<li>selectedRowIndex</li>
<li>scrollPosition</li>
</ul>
</td>
</tr>
<tr>
<td>Accordion</td>
<td>
<ul>
<li>expandedIndices</li>
</ul>
</td>
</tr>
<tr>
<td>Tabs</td>
<td>
<ul>
<li>selectedItem</li>
</ul>
</td>
</tr>
<tr>
<td>Schedule</td>
<td>
<ul>
<li>currentView</li>
<li>selectedDate</li>
<li>scrollLeft</li>
<li>scrollTop</li>
</ul>
</td>
</tr>
<tr>
<td>Kanban</td>
<td>
<ul>
<li>columns</li>
<li>dataSource</li>
<li>swimlaneToggleArray</li>
</ul>
</td>
</tr>
<tr>
<td>Chart</td>
<td>
<ul>
<li>zoomFactor</li>
<li>zoomPosition</li>
</ul>
</td>
</tr>
<tr>
<td>Maps</td>
<td>
<ul>
<li>zoomSettings</li>
</ul>
</td>
</tr>
<tr>
<td>Pivot Table</td>
<td>
<ul>
<li>dataSourceSettings</li>
<li>pivotValues</li>
<li>gridSettings</li>
<li>chartSettings</li>
<li>displayOption</li>
</ul>
</td>
</tr>
<tr>
<td>TreeGrid</td>
<td>
<ul>
<li>columns</li>
<li>pageSettings</li>
<li>searchSettings</li>
<li>filterSettings</li>
<li>selectedRowIndex</li>
<li>sortSettings</li>
</ul>
</td>
</tr>
<tr>
<td>Switch, Checkbox</td>
<td>
<ul>
<li>checked</li>
</ul>
</td>
</tr>
<tr>
<td>RadioButton</td>
<td>
<ul>
<li>checked</li>
<li>value</li>
</ul>
</td>
</tr>
<tr>
<td>ColorPicker, ListBox, In-placeEditor, RichTextEditor, <br>
Autocomplete, Calendar, ComboBox, DatePicker, DropDownList, <br>
MaskedTextBox, NumericTextBox, Textbox, TimePicker, Multiselect, <br> 
DateTimePicker, Slider, Dropdown Tree</td>
<td>
<ul>
<li>value</li>
</ul>
</td>
</tr>
<tr>
<td>QueryBuilder</td>
<td>
<ul>
<li>rule</li>
</ul>
</td>
</tr>
<tr>
<td>Splitter</td>
<td>
<ul>
<li>paneSettings</li>
</ul>
</td>
</tr>
<tr>
<td>DateRangePicker</td>
<td>
<ul>
<li>startDate</li>
<li>endDate</li>
<li>value</li>
</ul>
</td>
</tr>
<tr>
<td>Uploader</td>
<td>
<ul>
<li>filesData</li>
</ul>
</td>
</tr>
<tr>
<td>ListView</td>
<td>
<ul>
<li>cssClass</li>
<li>enableRtl</li>
<li>htmlAttributes</li>
<li>enable</li>
<li>fields</li>
<li>animation</li>
<li>headerTitle</li>
<li>sortOrder</li>
<li>showIcon</li>
<li>height</li>
<li>width</li>
<li>showCheckBox</li>
<li>checkBoxPosition</li>
</ul>
</td>
</tr>
<tr>
<td>TreeView</td>
<td>
<ul>
<li>selectedNodes</li>
<li>checkedNodes</li>
<li>expandedNodes</li>
</ul>
</td>
</tr>
<tr>
<td>Dashboard Layout</td>
<td>
<ul>
<li>panels</li>
</ul>
</td>
</tr>
<tr>
<td>File Manager</td>
<td>
<ul>
<li>view</li>
<li>path</li>
<li>selectedItems</li>
</ul>
</td>
</tr>
<tr>
<td>Sidebar</td>
<td>
<ul>
<li>type</li>
<li>position</li>
<li>isOpen</li>
</ul>
</td>
</tr>
</table>

<!-- markdownlint-enable MD033 -->

See the following control documentation to learn more about state persistence and control-specific behavior.

* [Schedule](https://ej2.syncfusion.com/documentation/schedule/state-persistence)
* [TreeGrid](https://ej2.syncfusion.com/documentation/treegrid/state-persistence/state-persistence)
* [Pivot Table](https://ej2.syncfusion.com/documentation/pivotview/state-persistence)
* [Gantt](https://ej2.syncfusion.com/documentation/gantt/state-persistence)
* [Grid](https://ej2.syncfusion.com/documentation/grid/state-persistence/state-persistence)
* [Kanban](https://ej2.syncfusion.com/documentation/kanban/persistence)
* [QueryBuilder](https://ej2.syncfusion.com/documentation/query-builder/how-to/state-persistence)
* [Tabs](https://ej2.syncfusion.com/documentation/tab/how-to/set-state-persistence-of-the-tab-component)
