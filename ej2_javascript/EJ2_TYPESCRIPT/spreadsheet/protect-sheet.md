---
title: "Protection"
component: "Spreadsheet"
description: "This section helps you to protect and unprotect the spreadsheet."
---

# Protection

Sheet protection helps you to prevent the users from modifying the data in the spreadsheet.

## Protect Sheet

Protect sheet feature helps you to prevent the unknown users from accidentally changing, editing, moving, or deleting data in a spreadsheet. And you can also protect the sheet with password.

You can use the [`isProtected`](../api/spreadsheet/#isProtected) property to enable or disable the Protecting functionality.

> The default value for `isProtected` property is `false`.

By default in protected sheet, selecting, formatting, inserting, deleting functionalities are disabled. To enable some of the above said functionalities
the `protectSettings` options are used in a protected spreadsheet.

The available `protectSettings` options in spreadsheet are,

| Options | Uses |
|-----|------|
| `Select Cells` | Used to perform Cell Selection. |
| `Format Cells` | Used to perform Cell formatting. |
| `Format Rows` | Used to perform Row formatting. |
| `Format Columns` | Used to perform Column formatting. |
| `Insert Link` | Used to perform Hyperlink Insertions. |

> The default value for all `protectSettings` options are `false`.

By default, the `Protect Sheet` module is injected internally into the Spreadsheet to perform sheet protection function.

**User Interface**:

In the active Spreadsheet, the sheet protection can be done by any of the following ways:

* Select the Protect Sheet item in the Ribbon toolbar under the Data Tab, and then select your desired options.
* Right-click the sheet tab, select the Protect Sheet item in the context menu, and then select your desired options.
* Use the [`protectSheet()`](../api/spreadsheet/#protectSheet) method programmatically.

The following example shows `Protect Sheet` functionality with password in the Spreadsheet control.

{% tab template="spreadsheet/protect-sheet", sourceFiles="app.ts,index.html", es5Template="protect-sheet", iframeHeight="450px", isDefaultActive=true %}

```typescript
import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { budgetData, salaryData } from './datasource.ts';

let columns: ColumnModel[] = [{ width: 100 }, { width: 100 },{ width: 100},
    { width: 100 }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns,isProtected: true, protectSettings: {selectCells: true} },
                {name: 'Salary', ranges: [{ dataSource: salaryData }], columns: columns}],
    dataBound: function () {
                spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
                spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
                spreadsheet.protectSheet(1, { selectCells: false}, "syncfusion"); // protect sheet with password
            }
        }
    }
});
spreadsheet.appendTo('#spreadsheet');
```

{% endtab %}

### Limitations of Protect sheet

* Password encryption is not supported

## Unprotect Sheet

Unprotect sheet is used to enable all the functionalities that are already disabled in a protected spreadsheet.

**User Interface**:

In the active Spreadsheet, the sheet Unprotection can be done by any of the following ways:

* Select the `Unprotect Sheet` item in the Ribbon toolbar under the Data Tab.
* Right-click the sheet tab, select the `Unprotect Sheet` item in the context menu.
* Use the [`unprotectSheet()`](../api/spreadsheet/#unprotectSheet) method programmatically.

## Unlock the particular cells in the protected sheet

In protected spreadsheet, to make some particular cell or range of cells are editable, you can use [`lockCells()`](../api/spreadsheet/#lockCells) method, with the parameter `range` and `isLocked` property as false.

{% tab template="spreadsheet/protect-sheet", sourceFiles="app.ts,index.html", es5Template="lock-cell", iframeHeight="450px" %}

```typescript
import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { budgetData, salaryData } from './datasource.ts';

let columns: ColumnModel[] = [{ width: 100 }, { width: 100 },{ width: 100},
    { width: 100 }]

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns,isProtected: true, protectSettings: {selectCells: true} },
                {name: 'Salary', ranges: [{ dataSource: salaryData }], columns: columns}],
    dataBound: function () {
                spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
                spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
            }
        }
    }
});
spreadsheet.appendTo('#spreadsheet');
let dialogObj: Dialog = new Dialog({
        header: 'Spreadsheet',
        target: document.getElementById('spreadsheet'),
        content: '"A1:F3" range of cells has been unlocked.',
        showCloseIcon: true,
        isModel: true,
        visible: false,
        width: '500px',
        buttons: [{
            click: lockCells,
            buttonModel: { content: 'Ok', isPrimary: true }
        }];
    });
dialogObj.appendTo('#dialog');
let button: Button = new Button({content: 'Unlock cells'});
button.appendTo('#button');
document.getElementById('button').onclick = (): void => {
    dialogObj.show();
}
function lockCells(): void {
    spreadsheet.lockCells('A1:F3', false);
    dialogObj.hide();
}
```

{% endtab %}

## Protect Workbook

Protect workbook feature helps you to protect the workbook so that users cannot insert, delete, rename, hide the sheets in the spreadsheet.
You can use the [`password`](../api/spreadsheet/#password) property to protect workbook with password.
You can use the [`isProtected`](../api/spreadsheet/#isProtected) property to protect or unprotect the workbook without the password.

> The default value for `isProtected` property is `false`.

**User Interface**:

In the active Spreadsheet, you can protect the worksheet by selecting the Data tab in the Ribbon toolbar and choosing the `Protect Workbook` item. Then, enter the password and confirm it and click on OK.

The following example shows `Protect Workbook` by using the [`isProtected`](../api/spreadsheet/#isProtected) property in the Spreadsheet control.

{% tab template="spreadsheet/protect-workbook/default", sourceFiles="app.ts,index.html", es5Template="default", iframeHeight="450px" %}

```typescript
import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { budgetData } from './datasource.ts';

let columns: ColumnModel[] = [{ width: 100 }, { width: 100 },{ width: 100},
    { width: 100 }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    // To protect the workbook
    isProtected: true,
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns }],
    dataBound: function () {
                spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
                spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
            }
        }
    }
});
spreadsheet.appendTo('#spreadsheet');
```

{% endtab %}

The following example shows `Protect Workbook` by using the [`password`](../api/spreadsheet/#password) property in the Spreadsheet control. To unprotect the workbook, click the unprotect workbook button in the data tab and provide the password as syncfusion in the dialog box.

{% tab template="spreadsheet/protect-workbook/default", sourceFiles="app.ts,index.html", es5Template="password", iframeHeight="450px" %}

```typescript
import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { budgetData } from './datasource.ts';

let columns: ColumnModel[] = [{ width: 100 }, { width: 100 },{ width: 100},
    { width: 100 }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    //To protect the workbook with password
    password: "syncfusion",
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns }],
    dataBound: function () {
                spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
                spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
            }
        }
    }
});
spreadsheet.appendTo('#spreadsheet');
```

{% endtab %}

## Unprotect Workbook

Unprotect Workbook is used to enable the insert, delete, rename, move, copy, hide or unhide sheets feature  in the spreadsheet.

**User Interface**:

In the active Spreadsheet, the workbook Unprotection can be done in any of the following ways:

* Select the `Unprotect Workbook` item in the Ribbon toolbar under the Data Tab and provide the valid password in the dialog box.

## See Also

* [Hyperlink](./link)