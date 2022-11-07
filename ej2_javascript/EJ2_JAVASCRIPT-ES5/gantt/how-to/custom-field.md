---
title: "How To"
component: "Gantt"
description: "Learn how to add Custom Fields in the General Tab in Add/Edit in the JS 2 Gantt component."
---

# Add Custom Fields in the General Tab in Add/Edit Dialog

Generally in Gantt, Custom fields are displayed in the Custom Tab of the Add/Edit dialogs. However, they can be included in the General Tab of Add/Edit Dialog Box using `actionBegin` and `actionComplete` events. These events are used to append the custom field to the dialog box. The following code snippets demonstrate the solution.

{% tab template="gantt/customfield", es5Template="customfield"%}

```typescript

import { Gantt, Edit, Toolbar } from '@syncfusion/ej2-gantt';
import { CheckBox } from "@syncfusion/ej2-buttons";
import { TextBox, NumericTextBox, MaskedTextBox } from "@syncfusion/ej2-inputs";
import { DatePicker, DateTimePicker } from "@syncfusion/ej2-calendars";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Toolbar);

var divElement;
var inputs = {
  booleanedit: CheckBox,
  dropdownedit: DropDownList,
  datepickeredit: DatePicker,
  datetimepickeredit: DateTimePicker,
  maskededit: MaskedTextBox,
  numericedit: NumericTextBox,
  stringedit: TextBox
};

let gantt: Gantt = new Gantt({
     dataSource: GanttData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        },
        editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        mode: "Auto"
    },
    columns: [
        { field: 'TaskID', width: '150' },
        { field: 'TaskName', width: '250' },
        { field: 'StartDate', width: '250' },
        { field: 'Duration', width: '250' },
        { field: 'Progress', width: '250' },
        { field: 'CustomField', width: '250' }
    ],
    toolbar: ['Add', 'Cancel', 'CollapseAll', 'Delete', 'Edit', 'ExpandAll', 'Update'],
    editDialogFields: [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes' }
    ],
    addDialogFields: [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes' }
    ],
    actionBegin: function(args) {
        if (args.requestType === "beforeOpenEditDialog" || args.requestType === "beforeOpenAddDialog" ) {
          var column = this.columnByField["CustomField"];
          divElement = this.createElement("div", {
            className: "e-edit-form-column"
          });
          var inputElement;
          inputElement = this.createElement("input", {
            attrs: {
              type: "text",
              id: this.controlId + "" + column.field,
              name: column.field,
              title: column.field
            }
          });
          divElement.appendChild(inputElement);
          var input = {
            enabled: true,
            floatLabelType: "Auto",
            placeholder: "CustomField",
            value: args.rowData.CustomField
          };
          var inputObj = new inputs[column.editType](input);
          inputObj.appendTo(inputElement);
        }
    },
      actionComplete: function(args) {
        if (args.requestType === "openEditDialog" || args.requestType === "openAddDialog") {
          var generalTab = document.getElementById(
            this.controlId + "GeneralTabContainer"
          );
          generalTab.appendChild(divElement);
        }
      }
});

gantt.appendTo('#Gantt');

```

{% endtab %}