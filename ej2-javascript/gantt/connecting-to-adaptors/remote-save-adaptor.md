---
layout: post
title: Remote Save Adaptor in ##Platform_Name## Gantt Chart Control | Syncfusion
description: Remote Save adaptor in Syncfusion ##Platform_Name## Gantt Chart loads data once and persists CRUD operations through a batch endpoint.
control: RemoteSave Adaptor
platform: ej2-javascript
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# RemoteSaveAdaptor in Syncfusion ##Platform_Name## Gantt Chart

The `RemoteSaveAdaptor` in the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Gantt Chart provides a hybrid data workflow. Use this adaptor when want to fetch the complete task set once, perform client-side operations for responsiveness, and persist edits back to the server via batch CRUD requests. Choose `RemoteSaveAdaptor` when fast client-side interaction is required while maintaining server-side data persistence. Unlike fully remote adaptors, it combines local data operations with remote synchronization.

This guide describes the conceptual project layout and patterns for wiring the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Gantt Chart to a backend that implements a batch CRUD endpoint.

**Project structure:**

- Frontend: a ##Platform_Name## Gantt Chart project that hosts the Gantt Chart and loads the full task dataset into a `DataManager` configured with `RemoteSaveAdaptor`.
- Backend: a web API that serves the complete task list and exposes a batch endpoint that accepts added/changed/deleted records in a single payload.

```
RemoteSaveAdaptor/
├── RemoteSaveAdaptor.client/        # Client-side app (HTML/JS or TS).
│   ├── index.html                   # Gantt Chart is rendered here.
│   ├── index.ts / index.js          # Add RemoteSaveAdaptor here.
│   └── styles.css                   # Gantt Chart styles.
└── RemoteSaveAdaptor.Server/        # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## Client-side setup using RemoteSave Adaptor

This section describes at a conceptual level, how the Gantt Chart consumes task data from remote save and submits task changes. Implementation and package installation steps are covered in platform‑specific setup guides and are intentionally omitted here.

### Step 1: Packages and dependencies

- Ensure the ##Platform_Name## Gantt Chart project includes the Syncfusion Gantt Chart and data packages required to render the Gantt Chart and to use the DataManager and RemoteSave Adaptor.
- Right‑click the **RemoteSaveAdaptor.client** folder in **Solution Explorer** and select **Open in Terminal** (available in newer Visual Studio versions), or open a Developer Command prompt/PowerShell from the Start menu and navigate manually to the **RemoteSaveAdaptor.client**. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

```bash
npm install @syncfusion/ej2-gantt --save
npm install @syncfusion/ej2-data --save
```

### Step 2: CSS and component styling

- Include the required Syncfusion theme and component styles so the Gantt Chart and its input controls render correctly. Add these imports to **styles.css**:

```ts
/* Basic Gantt Chart styles */
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-gantt/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";

/* For editing, toolbar, and dialog features */
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";

/* For rich text editor in dialog notes tab */
@import "../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css";
```

Reference the stylesheet in **index.html** along with the Gantt Chart container:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>##Platform_Name## Gantt Chart - Remote Save Adaptor</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    <div id="Gantt"></div>
    <script src="index.js"></script>
</body>
</html>
```

### Step 3: Configure DataManager with RemoteSave Adaptor

In the client entry file **index.ts** (or **index.js**), import `DataManager` and `RemoteSaveAdaptor` from `@syncfusion/ej2-data`. The `DataManager` serves as an abstraction layer that manages the data source configuration and coordinates data operations with the Gantt Chart.

**Configure the DataManager**

1. **Assign RemoteSaveAdaptor:** Set the `adaptor` property within the `dataSource` configuration to `new RemoteSaveAdaptor()`.

2. **Map CRUD operations**: CRUD operations within the Gantt Chart can be mapped to server-side controller actions using specific properties:
   - `batchUrl`: Specifies the URL for batch editing

3. **Load JSON data**: Fetch initial data from the server that contains all records.

**Configure the Gantt chart**

1. **Set dataSource:** Configure the `dataSource` property of Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Gantt Chart with a JSON object.

2. **Enable editing:** Use [editSettings](https://ej2.syncfusion.com/javascript/documentation/api/gantt/index-default#editsettings) to allow CRUD actions (allowEditing, allowAdding, allowDeleting).

3. **Add toolbar:** Configure [toolbar](https://ej2.syncfusion.com/javascript/documentation/api/gantt/index-default#toolbar) with items such as Add, Edit, Delete, Update, Cancel, and Search.

4. **Enable client-side features:**

    - [allowAdding](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editsettingsmodel#allowadding): Enables adding.

    - [allowDeleting](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editsettingsmodel#allowdeleting): Enables deleting.

    - [allowTaskbarEditing](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editsettingsmodel#allowtaskbarediting): Enables taskbar editing.

In this example, data is fetched from the server using the `fetch` method and assigned to the Gantt Chart's [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/gantt/index-default#datasource) property through the `DataManager` instance.



{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { Gantt, Edit, Selection, Toolbar } from '@syncfusion/ej2-gantt';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';

Gantt.Inject(Edit, Selection, Toolbar);
const serviceUrl: string = 'https://localhost:xxxx/api/gantt'; // Here xxxx represents the port number.
let data: DataManager;

function load() {
    fetch(serviceUrl)
        .then((response: Response) => response.json())
        .then((result: object[]) => {
            data = new DataManager({
                json: result,
                adaptor: new RemoteSaveAdaptor(),
                batchUrl: `${serviceUrl}/Batch`,
            });
            createGantt();

        })
        .catch((error: Error) => console.error('Error fetching data:', error));
}
function createGantt() {
    let gantt: Gantt = new Gantt({
        dataSource: data,
        height: '450px',
        allowSelection: true,
        taskFields: {
            id: 'taskId',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            parentID: 'parentId'
        },
        editSettings: {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            allowTaskbarEditing: true
        },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90, type: 'number' },
            { field: 'taskName', headerText: 'Task Name', textAlign: 'Left', width: 270, type: 'string' },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 150, format: 'yMd', type: 'dateTime' },
            { field: 'endDate', headerText: 'End Date', textAlign: 'Right', width: 150, format: 'dd/MM/yyyy hh:mm', type: 'dateTime' },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90, type: 'number' },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 120, type: 'number' }
        ]
    });
    gantt.appendTo('#Gantt');
}

load();
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
import { Gantt, Edit, Selection, Toolbar } from '@syncfusion/ej2-gantt';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';

Gantt.Inject(Edit, Selection, Toolbar);
const serviceUrl = 'https://localhost:7260/api/gantt'; // Here 7260 represents the port number.
let data;

function load() {
    fetch(serviceUrl)
        .then((response) => response.json())
        .then((result) => {
            data = new DataManager({
                json: result,
                adaptor: new RemoteSaveAdaptor(),
                batchUrl: `${serviceUrl}/Batch`,
            });
            createGantt();

        })
        .catch((error) => console.error('Error fetching data:', error));
}
function createGantt() {
    const gantt = new Gantt({
        dataSource: data,
        height: '450px',
        allowSelection: true,
        taskFields: {
            id: 'taskId',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            parentID: 'parentId'
        },
        editSettings: {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            allowTaskbarEditing: true
        },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90, type: 'number' },
            { field: 'taskName', headerText: 'Task Name', textAlign: 'Left', width: 270, type: 'string' },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 150, format: 'yMd', type: 'dateTime' },
            { field: 'endDate', headerText: 'End Date', textAlign: 'Right', width: 150, format: 'dd/MM/yyyy hh:mm', type: 'dateTime' },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90, type: 'number' },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 120, type: 'number' }
        ]
    });
    gantt.appendTo('#Gantt');
}

load();
{% endhighlight %}
{% endtabs %}

{% endif %}

## CRUD operations

The DataManager with RemoteSaveAdaptor supports Create, Read, Update, and Delete workflows for task entities. In Gantt Chart usage, these operations cover task creation, task edits (including taskbar edits and resulting scheduling recalculations), dependency creation or modification, and task deletion.

**Server-side batch endpoint**

The server receives a batch payload that contains `added`, `changed`, and `deleted` arrays. The batch endpoint applies each section in turn—assigning identifiers for new tasks if required, updating existing records, and removing deleted items—then returns a response the client can reconcile against its local state.

### Step 1: Server-side controller

Add the required controller method to **GanttController.cs**. Replace the entire controller with this complete version:

{% tabs %}
{% highlight cs tabtitle="GanttController.cs - Batch Handler" %}
using GanttServerSample.Models;
using Microsoft.AspNetCore.Mvc;

namespace GanttServerSample.Controllers
{
    [Route("api/[controller]")]
    public class GanttController : ControllerBase
    {
        /// <summary>
        /// GET endpoint – returns all Gantt tasks
        /// Used by the client Gantt Chart for initial data load
        /// </summary>
        [HttpGet]
        public List<GanttTask> GetGanttData()
        {
            return GanttData.GetAllTasks().ToList();
        }

        [HttpPost("Batch")]
        public IActionResult BatchUpdate([FromBody] CRUDModel<GanttTask> crud)
        {
            // INSERT
            if (crud.added != null && crud.added.Count > 0)
            {
                foreach (var task in crud.added)
                {
                    task.TaskId = GanttData.GetAllTasks().Max(x => x.TaskId) + 1;
                    GanttData.GetAllTasks().Add(task);
                }
            }
            // UPDATE
            if (crud.changed != null && crud.changed.Count > 0)
            {
                foreach (var task in crud.changed)
                {
                    var data = GanttData.GetAllTasks()
                        .FirstOrDefault(x => x.TaskId == task.TaskId);
                    if (data != null)
                    {
                        data.TaskName = task.TaskName;
                        data.StartDate = task.StartDate;
                        data.EndDate = task.EndDate;
                        data.Duration = task.Duration;
                        data.Progress = task.Progress;
                        data.ParentId = task.ParentId;
                    }
                }
            }
            // DELETE
            if (crud.deleted != null && crud.deleted.Count > 0)
            {
                foreach (var task in crud.deleted)
                {
                    var data = GanttData.GetAllTasks()
                        .FirstOrDefault(x => x.TaskId == task.TaskId);

                    if (data != null)
                    {
                        GanttData.GetAllTasks().Remove(data);
                    }
                }
            }
            return Ok(crud);
        }


    }
    public class CRUDModel<T> where T : class
    {
        public string? action { get; set; }
        public string? key { get; set; }
        public string? table { get; set; }
        public List<T>? added { get; set; }
        public List<T>? changed { get; set; }
        public List<T>? deleted { get; set; }
    }
}

{% endhighlight %}
{% endtabs %}

> Note: The sample above is a focused illustration of the batch handler shape. Implement project‑specific scheduling, dependency validation, and identifier assignment logic inside the batch method so server rules remain authoritative.

### Step 2: Client-side Gantt Chart configuration

The ##Platform_Name## Gantt Chart enables full CRUD functionality by configuring the required [toolbar](https://ej2.syncfusion.com/javascript/documentation/api/gantt/index-default#toolbar) buttons (`Add`, `Edit`, `Update`, `Delete`, and `Cancel`) and enabling adding, editing, updating, and deleting through the `editSettings` property. This setup allows the Gantt Chart to handle all basic data operations directly from the UI.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { Gantt, Edit, Selection, Toolbar } from '@syncfusion/ej2-gantt';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';

Gantt.Inject(Edit, Selection, Toolbar);
const serviceUrl: string = 'https://localhost:xxxx/api/gantt'; // Here xxxx represents the port number.
let data: DataManager;

function load() {
    fetch(serviceUrl)
        .then((response: Response) => response.json())
        .then((result: object[]) => {
            data = new DataManager({
                json: result,
                adaptor: new RemoteSaveAdaptor(),
                batchUrl: `${serviceUrl}/Batch`,
            });
            createGantt();

        })
        .catch((error: Error) => console.error('Error fetching data:', error));
}
function createGantt() {
    let gantt: Gantt = new Gantt({
        dataSource: data,
        height: '450px',
        allowSelection: true,
        taskFields: {
            id: 'taskId',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            parentID: 'parentId'
        },
        editSettings: {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            allowTaskbarEditing: true
        },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90, type: 'number' },
            { field: 'taskName', headerText: 'Task Name', textAlign: 'Left', width: 270, type: 'string' },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 150, format: 'yMd', type: 'dateTime' },
            { field: 'endDate', headerText: 'End Date', textAlign: 'Right', width: 150, format: 'dd/MM/yyyy hh:mm', type: 'dateTime' },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90, type: 'number' },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 120, type: 'number' }
        ]
    });
    gantt.appendTo('#Gantt');
}

load();
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
import { Gantt, Edit, Selection, Toolbar } from '@syncfusion/ej2-gantt';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';

Gantt.Inject(Edit, Selection, Toolbar);
const serviceUrl = 'https://localhost:7260/api/gantt'; // Here 7260 represents the port number.
let data;

function load() {
    fetch(serviceUrl)
        .then((response) => response.json())
        .then((result) => {
            data = new DataManager({
                json: result,
                adaptor: new RemoteSaveAdaptor(),
                batchUrl: `${serviceUrl}/Batch`,
            });
            createGantt();

        })
        .catch((error) => console.error('Error fetching data:', error));
}
function createGantt() {
    const gantt = new Gantt({
        dataSource: data,
        height: '450px',
        allowSelection: true,
        taskFields: {
            id: 'taskId',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            parentID: 'parentId'
        },
        editSettings: {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            allowTaskbarEditing: true
        },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90, type: 'number' },
            { field: 'taskName', headerText: 'Task Name', textAlign: 'Left', width: 270, type: 'string' },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 150, format: 'yMd', type: 'dateTime' },
            { field: 'endDate', headerText: 'End Date', textAlign: 'Right', width: 150, format: 'dd/MM/yyyy hh:mm', type: 'dateTime' },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90, type: 'number' },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 120, type: 'number' }
        ]
    });
    gantt.appendTo('#Gantt');
}

load();
{% endhighlight %}
{% endtabs %}

{% endif %}

## Run and verify (conceptual)

The solution contains two projects: **RemoteSaveAdaptor.Server** (ASP.NET Core backend) and **RemoteSaveAdaptor.client** (##Platform_Name## Gantt Chart client). Start the server first, then start the client.

### Run the server

1. In **Solution Explorer**, set **RemoteSaveAdaptor.Server** as the startup project.
2. Press <kbd>F5</kbd> (or click **Run**) to start the application in Visual Studio.
3. The server is accessible on a URL like **https://localhost:xxxx**. Verify the API returns data at **https://localhost:xxxx/api/gantt/Batch**, where **xxxx** is the port.

### Run the client

1. Right-click the **RemoteSaveAdaptor.client** folder in **Solution Explorer** and select **Open in Terminal** (available in newer Visual Studio versions). You can also open a Developer Command prompt/PowerShell and navigate manually to the **RemoteSaveAdaptor.client** directory.
2. Confirm that **package.json** is present in the folder.
3. Run the following command to start the client application:

```bash
npm start
```

4. The client app opens in the browser and the Gantt Chart displays data fetched from the backend API.

## Troubleshooting

| Issue                     | Cause                                                      | Solution                                                                                 |
|---------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Empty initial load        | GET task endpoint not returning required task records      | Verify endpoint returns records with required fields (ids, start/end dates, parent ids) |
| Batch requests not applied| Incorrect batchUrl or unsupported server payload            | Confirm `batchUrl` is correct and server accepts expected payload format                |
| Identifier mismatches     | Server not returning stable keys for new records            | Ensure server returns assigned ids so client can replace temporary ids                  |
| CORS or network errors    | Cross-origin requests blocked or misconfiguration              | Confirm CORS is enabled when frontend and backend are hosted separately                 |

## Complete sample repository

For the complete working implementation of this example, refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-javascript-gantt-chart-samples/tree/master/RemoteSaveAdaptor) repository.

## See also
- [Connect to OdataV4 services](./odatav4-adaptor)
- [RESTful CRUD Operations in ASP.NET Web Forms](./web-method-adaptor)
- [Data binding](https://ej2.syncfusion.com/javascript/documentation/gantt/data-binding)
