---
layout: post
title: Import export in ##Platform_Name## Query builder control | Syncfusion
description: Learn here all about Import export in Syncfusion ##Platform_Name## Query builder control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Import export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Importing and Exporting in ##Platform_Name## Query builder control

Importing facilitates the viewing or editing of predefined conditions available in JSON, SQL, and MongoDB query formats, while exporting enables obtaining the created rules in the query builder as JSON, SQL, and MongoDB queries.

## Importing

Importing enables users to bring predefined conditions into the system for viewing or editing, available in formats such as JSON, SQL, and MongoDB query. It facilitates the quick incorporation of pre-defined rules or parameters into workflows, streamlining the setup process by importing directly from external sources or saved configurations.

### Importing from JSON Object

Importing from JSON enables users to bring predefined conditions encoded in JSON format into the system. This feature streamlines the process by providing a standardized format for importing data, ensuring compatibility, and ease of use.

#### Initial rendering

To initially apply conditions, you can establish the [`rule`](https://ej2.syncfusion.com/documentation/api/query-builder/#rule) by importing a structured JSON object and defining its properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs14" %}
{% endif %}

#### Post rendering

You can set the conditions from structured JSON object through the [`setRules`](https://ej2.syncfusion.com/documentation/api/query-builder/#setrules) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/import-json-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-json-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/import-json-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/import-json-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-json-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/import-json-cs1" %}
{% endif %}

### Importing from SQL

Importing from SQL involves integrating predefined conditions or data stored in a SQL database into the Query Builder. This enables the direct integration of SQL queries, thereby improving workflow efficiency and data accuracy within the application. SQL importing supports various types, including Inline SQL, Parameter SQL, and Named Parameter SQL.

#### Importing from Inline SQL Query

Importing from Inline SQL involves integrating SQL queries directly into the Query Builder. This method streamlines the process by enabling users to input SQL statements directly into the application for analysis, manipulation, or further processing within the Query Builder. Conditions can be set from Inline SQL queries using the [`setRulesFromSql`](https://ej2.syncfusion.com/documentation/api/query-builder/#setrulesfromsql) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/import-sql-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-sql-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/import-sql-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/import-sql-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-sql-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/import-sql-cs1" %}
{% endif %}

#### Importing from Parameter SQL Query

Importing from Parameter SQL involves integrating SQL queries with parameters directly into the Query Builder. This method allows users to input SQL statements containing parameters, which can be dynamically filled in during execution. It streamlines the process by enabling flexible and customizable querying within the application. Conditions can be set from Parameter SQL queries using the [`setParameterizedSql`](https://ej2.syncfusion.com/documentation/api/query-builder/#setparameterizedsql) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/import-sql-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-sql-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/import-sql-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/import-sql-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-sql-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/import-sql-cs2" %}
{% endif %}

#### Importing from Named Parameter SQL Query

Importing from Named Parameter SQL involves integrating SQL queries with named parameters directly into the Query Builder. This method enables users to input SQL statements containing named parameters, providing flexibility and customization during execution. It streamlines the process by allowing dynamic parameter assignment within the application's query environment. Conditions can be set from Named Parameter SQL queries using the [`setParameterizedNamedSql`](https://ej2.syncfusion.com/documentation/api/query-builder/#setparameterizednamedsql) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/import-sql-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-sql-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/import-sql-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/import-sql-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-sql-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/import-sql-cs3" %}
{% endif %}

### Importing from MongoDB Query

Importing from MongoDB Query involves integrating MongoDB queries directly into the Query Builder. This enables users to input MongoDB query statements directly into the application, allowing for seamless integration and manipulation of MongoDB data within the Query Builder environment. It streamlines the process by facilitating direct access to MongoDB data for analysis, filtering, and further processing within the application. Conditions can be set from Named Parameter SQL queries using the [`setMongoQuery`](https://ej2.syncfusion.com/documentation/api/query-builder/#setmongoquery) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/import-mongo-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-mongo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/import-mongo-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/import-mongo-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-mongo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/import-mongo-cs1" %}
{% endif %}

## Exporting

Exporting from the Query Builder allows users to preserve or store the created conditions. The defined conditions can be exported using various methods, including:

### Exporting to JSON Object

You can extract the established conditions in the Query Builder and convert them into a structured JSON object format using the [`getRules`](https://ej2.syncfusion.com/documentation/api/query-builder/#getrules) method. This process enables users to save or transfer the conditions for further use or analysis in other applications or systems that support JSON data.

### Exporting to SQL Query

Exporting to SQL involves converting the defined conditions within the Query Builder into SQL queries. This functionality allows users to generate SQL code representing the conditions set in the Query Builder, which can then be executed directly on a SQL database or used for further analysis and processing. SQL exporting supports various types, including Inline SQL, Parameter SQL, and Named Parameter SQL.

#### Exporting to Inline SQL Query

Exporting to Inline SQL Query entails embedding the defined conditions from the Query Builder directly into SQL statements within the exported code. This method ensures that the conditions are seamlessly integrated into the SQL query syntax, enabling straightforward execution or further processing within SQL database systems. This can be achieved using the [`getSqlFromRules`](https://ej2.syncfusion.com/documentation/api/query-builder/#getsqlfromrules) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/export-cs1" %}
{% endif %}

#### Exporting to Parameter SQL Query

Exporting to Parameter SQL involves incorporating the defined conditions from the Query Builder into SQL queries with parameters. This method allows for dynamic value assignment during execution, enhancing flexibility and adaptability in query processing within SQL database. This can be accomplished using the [`getParameterizedSql`](https://ej2.syncfusion.com/documentation/api/query-builder/#getparameterizedsql) method for exporting to Parameter SQL query.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/export-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/export-cs2" %}
{% endif %}

#### Exporting to Named Parameter SQL Query

Exporting to Named Parameter SQL entails integrating the defined conditions from the Query Builder into SQL queries with named parameters. This method offers enhanced readability and flexibility during execution by using named placeholders for parameter values. Named Parameter SQL facilitates easier maintenance and modification of queries, making it convenient for dynamic parameter assignment within SQL database. This can be accomplished using the method [`getParameterizedNamedSql`](https://ej2.syncfusion.com/documentation/api/query-builder/#getparameterizednamedsql) for exporting to Named Parameter SQL query.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/export-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/export-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/export-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/export-cs3" %}
{% endif %}

### Exporting to MongoDB Query

Exporting to MongoDB Query involves converting the defined conditions within the Query Builder into MongoDB query syntax. This process allows users to generate MongoDB queries representing the conditions set in the Query Builder, which can then be executed directly on a MongoDB database or used for further analysis and processing. This can be accomplished using the [`getMongoQuery`](https://ej2.syncfusion.com/documentation/api/query-builder/#getmongoquery) method for exporting to MongoDB query.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/export-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/export-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/export-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/export-cs4" %}
{% endif %}