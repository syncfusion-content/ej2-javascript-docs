---
layout: post
title: Data binding in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Data binding in ##Platform_Name## Pivotview control

## JSON

For JSON data binding, the `type` property under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) needs to be set as `JSON`. By default, the default value is assumed as `JSON`.

### Binding JSON data via local

In-order to bind local JSON data to the pivot table user can assign the local variable holding the JSON data to the [`dataSource`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs318/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs318/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs318" %}

Using local variable, the JSON data can also be bound to the pivot table using [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) option with the help of `JsonAdaptor`. Here the instance of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) holding JSON data is assigned to [`dataSource`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/). The use of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) is optional here.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs319/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs319/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs319" %}

In the meantime, the JSON data from the local *.json file type can also be connected to the pivot table via the file uploader option. Here, the resulting string after uploading the file needs to be converted to JSON data that can be assigned to the [`dataSource`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/). The following code example illustrates the same.

```javascript
import { PivotView } from '@syncfusion/ej2-pivotview';
import { Uploader } from '@syncfusion/ej2-inputs';

// Step 1: Initiate the file uploader
let uploadObj: Uploader = new Uploader({
});
uploadObj.appendTo('#fileupload');

let input = document.querySelector('input[type="file"]');
// Step 2: Add the event listener which fires when the *.JSON file is uploaded.
input.addEventListener('change', function (e: Event) {
    // Step 3: Initiate the file reader
    let reader: FileReader = new FileReader();
    reader.onload = function () {
        // Step 4: Getting the string output which is to be parsed as JSON.
        let result: any =JSON.parse(reader.result as string);
        let pivotGridObj: PivotView = new PivotView({
            dataSourceSettings: {
                // Step 5: The JSON result to be bound as data source.
                dataSource: result
                // Step 6: The appropriate report needs to be provided here.
            },
        });
        pivotGridObj.appendTo('#PivotTable');
    };
    reader.readAsText((input as any).files[0]);
});
```

### Binding JSON data via remote

In-order to bind remote JSON data, mention the endpoint [`URL`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#url) under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) property. The [`URL`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#url) property supports both direct downloadable file (*.json) and web service URL.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs320/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs320/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs320" %}

## CSV

For CSV data binding, the `type` property under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) needs to be set as `CSV` mandatorily.

> The CSV format is considered to be the most compact format compared to JSON since it is half the size of JSON. This helps to reduce the bandwidth while transferring to the browser.

### Binding CSV data via local

In-order to bind local CSV data to the pivot table, user needs to convert it as string array and then directly assign it to the [`dataSource`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs321/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs321/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs321" %}

In the meantime, the CSV data from the local *.csv file type can also be connected to the pivot table via the file uploader option. Here, the resulting string after uploading the file needs to be converted to string array that can be assigned to the [`dataSource`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/). The following code example illustrates the same.

```javascript
import { PivotView } from '@syncfusion/ej2-pivotview';
import { Uploader } from '@syncfusion/ej2-inputs';

// Step 1: Initiate the file uploader
let uploadObj: Uploader = new Uploader({
});
uploadObj.appendTo('#fileupload');
// Step 2: Add the event listener which fires when the *.CSV file is uploaded.
let input = document.querySelector('input[type="file"]');
input.addEventListener('change', function (e: Event) {
    // Step 3: Initiate the file reader
    let reader: FileReader = new FileReader();
    reader.onload = function () {
        // Step 4: Getting the string output which is to be converted as string[][].
        let result: string[][] = (reader.result as string).split('\n').map(function (line) {
            return line.split(',');
        });
        let pivotGridObj: PivotView = new PivotView({
            dataSourceSettings: {
                // Step 5: The string[][] result to be bound as data source.
                dataSource: result,
                type: 'CSV',
                // Step 6: The appropriate report needs to be provided here.
            },
        });
        pivotGridObj.appendTo('#PivotTable');
    };
    reader.readAsText((input as any).files[0]);
});
```

### Binding CSV data via remote

In-order to bind remote CSV data, mention the endpoint [`URL`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#url) under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) property. The [`URL`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#url) property supports both direct downloadable file (*.csv) and web service URL.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs322/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs322/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs322" %}

## Remote Data Binding

To interact with remote data source, provide the endpoint `url` within [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) along with appropriate [`adaptor`](https://ej2.syncfusion.com/documentation/data/adaptors/). By default, [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) uses [`ODataAdaptor`](https://ej2.syncfusion.com/documentation/data/adaptors/#odata-adaptor) for remote data-binding.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs323/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs323/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs323" %}

### Binding with OData services

OData is a standardized protocol for creating and consuming data. User can retrieve data from OData service using the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/). Refer to the following code example for remote data binding using OData service.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs324/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs324/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs324" %}

### Binding with OData V4 services

The OData V4 is an improved version of OData protocols, and the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) can be used to retrieve and consume OData V4 services. For more details on OData V4 services, refer to the [OData documentation](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind OData V4 service, use the [`ODataV4Adaptor`](https://ej2.syncfusion.com/documentation/data/adaptors/#odatav4-adaptor).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs325/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs325/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs325" %}

### Web API

User can use [`WebApiAdaptor`](https://ej2.syncfusion.com/documentation/data/adaptors/#web-api-adaptor) to bind pivot table with Web API created using OData endpoint.

```ts
import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { DataManager, WebApiAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://bi.syncfusion.com/northwindservice/api/orders',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: data,
        expandAll: true,
        filters: [],
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

```

### Querying in Data Manager

By default, the data manager retrieves all the data from the provider which is mapped in it. The data from the provider can be filtered, sorted, paged, etc. by setting the own query in [`defaultQuery`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#setdefaultquery) property in the data manager instance.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs326/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs326/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs326" %}

## Mapping

One can define field information like alias name (caption), data type, aggregation type, show and hide subtotals etc. using the [`fieldMapping`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#fieldmapping) property under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/). The available options are,

* [`name`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#name) - It is to specify the appropriate field name.
* [`caption`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#caption) - It is to set the alias name (caption) to the specific field. Instead of actual field name, the alias name (caption) will be set in the UI of the pivot table.
* [`type`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#type) - It is to display values in the pivot table with appropriate aggregation such as sum, product, count, average, minimum, maximum, etc. Its default value is **sum**. This option is applicable only for relational data source.
* [`axis`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#axis) - It will help to display the field in specified axis such as row/column/value/filter axis of the pivot table.
* [`showNoDataItems`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#shownodataitems) - It is to show all the members of a specific field to the pivot table, even if there are no data in the intersection of the row and column. The default value is **false**. This option is applicable only for relational data source.
* [`baseField`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#basefield) - For the aggregate types like "DifferenceFrom" or "PercentageOfDifferenceFrom" or "PercentageOfParentTotal", selective field is assigned for comparison via this property.
* [`baseItem`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#baseitem) - For the aggregate types like "DifferenceFrom" or "PercentageOfDifferenceFrom" or "PercentageOfParentTotal", selective member in a field is assigned for comparison via this property.
* [`expandAll`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#expandAll) - It is to expand or collapse all headers of a specific field in row and column axes of the pivot table. The default value is **false**.
* [`showSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#showsubtotals) - It is to show or hide sub-totals of a specific field in row and column axis of the pivot table. The default value is **true**.
* [`isNamedSet`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#isnamedset) - It is to set whether the specified field is named set or not. In general, the named set is a set of dimension members or a set expression (MDX query) to be created as a dimension in the SSAS OLAP cube itself. The default value is **false** and this option is applicable only for OLAP data source.
* [`isCalculatedField`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#iscalculatedfield) - It is to set whether the specified field is a calculated field or not. In general, a calculated field is created from the bound data source or using simple formula with basic arithmetic operators in the pivot table. The default value is **false** and this option is applicable only for OLAP data source.
* [`showFilterIcon`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#showfiltericon) - It is to show or hide the filter icon of a specific field which will be displayed on the button of the grouping bar and field list UI. This filter icon is used to filter the members of a specified field at runtime in the pivot table. The default value is **true**.
* [`showSortIcon`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#showsorticon) - It is to show or hide the sort icon of a specific field which will be displayed on the button of the grouping bar and field list UI. This sort icon is used to order members of a specified field either in ascending or descending at runtime. The default value is **true**.
* [`showRemoveIcon`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#showremoveicon) - It is to show or hide the remove icon of a specific field which will be displayed on the button of the grouping bar and field list UI. This remove icon is used to remove the specified field during runtime. The default value is **true**.
* [`showValueTypeIcon`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#showvaluetypeicon) - It is to show or hide the value type icon of a specific field which will be displayed on the button of the grouping bar and field list UI. This value type icon helps to select the appropriate aggregation type to specified value field at runtime. The default value is **true**.
* [`showEditIcon`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#showediticon) - It is to show or hide the edit icon of a specific field which will be displayed on the button of the grouping bar and field list UI. This edit icon is used to modify caption, formula, and format of a specified calculated field at runtime. The default value is **true**.
* [`allowDragAndDrop`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#allowdraganddrop) - It is to restrict specific field's button from being dragged on runtime in the grouping bar and field list UI. This will prevent from altering the current report. The default value is **true**.
* [`dataType`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#datatype) - It is to specify the type of the field like 'string', 'number', 'datetime', 'date', and 'boolean'.
* [`groupName`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/#groupname) - It is to display fields in the field list UI by grouping them under the desired folder name.

The main purpose of these mapping options is to configure each field that is not part of the initial pivot report. Even if any field that is part of this mapping is defined here, the value set in the initial report will have the highest preceding.

> This option is applicable only for relational data source.
In the below code sample, visibility of the field button icons are configured.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs327/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs327/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs327" %}

## Values in row axis

By default, the value fields are plotted in column axis. To plot those fields in row axis, use the [`valueAxis`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#valueaxis) property by setting its value as **row**. By default, it holds the value **column**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs328/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs328/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs328" %}

## Values at different positions

By default, the value fields are placed at the end of the row or column axis. To place those value fields in different positions, use the [`valueIndex`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#valueindex) property and set the value to an appropriate index position. Its default value is **-1**, which denotes the last position. The `valueIndex` property is dependent on the [`valueAxis`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#valueaxis) property.

> This support is only available for relational data sources. Also, enable the [`showValuesButton`](https://ej2.syncfusion.com/documentation/api/pivotfieldlist/#showvaluesbutton) property in the [grouping bar](./grouping-bar/#show-values-button) and [field list](./field-list/#show-values-button) UI to **true** to re-arrange the values fields at different positions via user interaction.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs329/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs329/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs329" %}

## Show 'no data' items

By default, the pivot table only shows the field item if it has data in its row or column combination. To show all items that do not have data in row and column combination in the pivot table, use the [`showNoDataItems`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptions/#shownodataitems) property by settings its value to true for the desired fields. In the following code sample, rows of the "Country" and "State" fields do not have data in all combination with "Date" column field.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs330/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs330/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs330" %}

## Always shows the value headers

To show the value header always in pivot table, even if it holds a single value, use the [`alwaysShowValueHeader`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#alwaysshowvalueheader) property by settings its value as **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs331/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs331/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs331" %}

## Customize empty value cells

User can show custom string in empty value cells using the [`emptyCellsTextContent`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#emptycellstextcontent) property in [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) of the pivot table. Since the property is of string data type, user can fill empty value cells with any value like "0", "-", "*", "(blank)", etc. Its common for all value fields and can be configured through code behind.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs332/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs332/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs332" %}

## Events

### Load

The event [`load`](https://ej2.syncfusion.com/documentation/api/pivotview#load) fires before initiate rendering of pivot table. In this event user can customize data source settings before initiating pivot table render module. It holds following parameters like `dataSourceSettings`, `fieldsType` and `pivotView`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs333/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs333/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs333" %}

### EnginePopulated

The event [`enginePopulated`](https://ej2.syncfusion.com/documentation/api/pivotview#enginepopulated) is triggered after engine is populated. It has following parameters - `dataSourceSettings`, `pivotFieldList` and `pivotValues`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs334/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs334/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs334" %}

### EnginePopulating

The event [`enginePopulating`](https://ej2.syncfusion.com/documentation/api/pivotview#enginepopulating) triggers  before the pivot engine starts to populate and allows to customize the pivot datasource settings. It has following parameter `dataSourceSettings`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs335/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs335/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs335" %}

## See Also

* [Aggregation](./aggregation)
* [Show/Hide Totals](./summary-customization)
* [Customize number, date, and time values](./how-to/customize-number-date-and-time-values)
* [Server Side Engine (Optional)](./server-side-pivot-engine)