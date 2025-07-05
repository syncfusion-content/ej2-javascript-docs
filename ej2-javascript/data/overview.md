---
layout: post
title: Overview in ##Platform_Name## DataManager | Syncfusion
description: Learn here all about Overview in Syncfusion ##Platform_Name## DataManager of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Overview 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Overview in Syncfusion ##Platform_Name## DataManager

This section introduces the core concepts, architecture, and use cases of Syncfusion ##Platform_Name## DataManager, a versatile and extensible data management component designed to unify data operations across platforms.

## What is DataManager?

The Syncfusion ##Platform_Name## DataManager is a powerful data handling component provided by Syncfusion that simplifies working with data from different sources. It acts as a bridge between your application and various types of data sources, Whether your data is stored locally (like in an array or JSON) or fetched remotely from web services, APIs, or databases, DataManager provides a unified way to query, manipulate, and manage that data efficiently across these different sources. DataManager is a high-level data-handling utility provided by Syncfusion that acts as a bridge between your application and multiple data sources, whether they are local (arrays or JSON objects) or remote (REST APIs, OData services, GraphQL, etc.).

With DataManager, you can perform common data operations such as filtering, sorting, paging, grouping, and even CRUD (Create, Read, Update, and Delete) actions without worrying about the underlying complexities of the data source. This eliminates the need to write repetitive logic for handling different data formats or protocols, making it much easier to build data-driven, UI-rich applications.

Additionally, DataManager supports flexible integration through adaptors, which handle communication with different types of data services (like REST APIs, OData endpoints, or GraphQL servers). With adaptors, you can plug DataManager into various backend systems, and it will manage the request/response communication according to the protocol.

## Key features

**Unified data access:** Seamlessly access and manipulate both local and remote data sources through a consistent interface.

**Comprehensive querying:** Support for filtering, sorting, paging, grouping, and aggregation operations using **Query** class.

**CRUD operations:** Easily handle Create, Read, Update, and Delete operations, synchronizing with backend services.

**Adaptor-based architecture:** Built-in and customizable adaptors to support different data protocols such as REST, OData, and GraphQL.

**Client and server-side processing:** Flexibility to perform data operations on either the client or the server, depending on requirements.

**Easy integration:** Designed to integrate smoothly with Syncfusion UI components and various frameworks.

**Flexible data formats:** Handles various response formats and allows custom processing of data from different backends.

## When to use DataManager

Use Syncfusion ##Platform_Name## DataManager when your application requires a unified, efficient, and extensible way to manage and interact with data. It is especially valuable in the following scenarios:

**Seamless data binding :** When working with Syncfusion UI components like Grid, Chart, DropDownList, or ListView that require dynamic and scalable data interactions.

**Advanced data operations:** When you require advanced data operations like filtering, sorting, and paging, either client-side or server-side.

**Real-time or on-demand data updates:** When your app needs to respond to frequent data changes or fetch only the necessary data (e.g., lazy loading, load on demand).

**Multiple data source integration:** When your application must interact with different types of data sources, such as local JavaScript arrays, in-memory stores, remote JSON APIs, OData feeds, or third-party web services.

**Protocol and format abstraction:** When you want to abstract the complexity of dealing with various data protocols and response formats.

**CRUD operations with backend synchronization:** When performing CRUD (Create, Read, Update, and Delete) operations that must be persisted and synchronized with a backend service.

## Architecture overview

The Syncfusion ##Platform_Name## DataManager follows a streamlined request lifecycle to manage data operations, with built-in support for error handling to ensure robustness:

**Request lifecycle:**

**1. Query creation:** A query object is created using the **Query** class, specifying operations such as filtering, sorting, or paging.

**2. Request translation:** DataManager passes the query to an adaptor, which translates it into a format the server can understand (e.g., query parameters for REST, a GraphQL query string, etc.).

**3. Request execution:** The adaptor executes the request against the target data source:

   * **Remote:** Issues an HTTP call to the server endpoint.

   * **Local:** Performs a client-side operation on an in-memory array or local cache.

**4. Response handling:** The server returns a response, which the adaptor processes and formats into a structure DataManager can consume. Upon receiving a response, the adaptor processes the raw data parsing JSON, normalizing field names, or applying client-side transformations and returns a standardized result object.

**5. Data binding:** DataManager returns the processed result to the UI component or service for binding or further use.

**6. Error Handling:** If any step fails such as a network error, invalid response format, or server-side validation error the adaptor or DataManager triggers an error event (`actionFailure`).

**Adaptor role:**

Adaptors serve as intermediaries between the DataManager and the underlying data source. Their key responsibilities include:

* Transforming outgoing requests to match the specific format and structure required by the target data service (e.g., REST, OData, GraphQL).

* Parsing and normalizing incoming responses into a standard format that DataManager can process uniformly.

* Supporting a wide range of data protocols, including RESTful services, OData, Web API, and GraphQL.

* Providing extensibility to enable customization or integration with proprietary or unconventional data services.

* Easily subclass or override adaptor methods to integrate with proprietary back-ends, support unusual payload formats, or implement advanced features (batching, custom headers, offline caching, etc.).