---
title: "Formatting"
component: "Spreadsheet"
description: "This section shows how to format the cells and its data in the Essential JS 2 spreadsheet"
---

# Formatting

Formatting options make your data easier to view and understand. The different types of formatting options in the Spreadsheet are,
* Number Formatting
* Text Formatting
* Cell Formatting

## Number Formatting

Number formatting provides a type for your data in the Spreadsheet. Use the [`allowNumberFormatting`](../api/spreadsheet/#allownumberformatting) property to enable or disable the number formatting option in the Spreadsheet. The different types of number formatting supported in Spreadsheet are,

| Types | Format |
|-------|---------|
| General(default) | NA |
| Number | `0.00` |
| Currency | `$#,##0.00` |
| Accounting | `_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)` |
| ShortDate | `mm-dd-yyyy` |
| LongDate | `dddd, mmmm dd, yyyy` |
| Time | `h:mm:ss AM/PM` |
| Percentage | `0.00%` |
| Fraction | `# ?/?` |
| Scientific |`0.00E+00`  |
| Text | `@` |

Number formatting can be applied in following ways,
* Using the `format` property in `cell`, you can set the desired format to each cell at initial load.
* Using the [`numberFormat`](../api/spreadsheet/#numberformat) method, you can set the number format to a cell or range of cells.
* Selecting the number format option from ribbon toolbar.

### Custom Number Formatting

Spreadsheet supports custom number formats to display your data as numbers, dates, times, percentages, and currency values. If the pre-defined number formats do not meet your needs, you can set your own custom formats using custom number formats dialog or `numberFormat` method.

The different types of custom number formatting supported in Spreadsheet are,

| Types | Format |
|-------|---------|
| General(default) | NA |
| Number | `0` |
| Number | `0.00` |
| Number | `#,##0` |
| Number | `#,##0.00` |
| Number | `#,##0_);(#,##0)` |
| Number | `#,##0_);[Red](#,##0)` |
| Number | `#,##0.00_);(#,##0.00)` |
| Number | `#,##0.00_);[Red](#,##0.00)` |
| Currency | `$#,##0_);($#,##0)` |
| Currency | `$#,##0_);[Red]($#,##0)` |
| Currency | `$#,##0.00_);($#,##0.00)` |
| Currency | `$#,##0.00_);[Red]($#,##0.00)` |
| Percentage | `0%` |
| Percentage | `0.00%` |
| Scientific |`0.00E+00`  |
| Scientific |`##0.0E+0`  |
| Fraction | `# ?/?` |
| Fraction | `# ??/??` |
| ShortDate | `dd-mm-yy` |
| Custom | `dd-mmm-yy` |
| Custom | `dd-mmm` |
| Custom | `mmm-yy` |
| Custom | `h:mm AM/PM` |
| Custom | `h:mm:ss AM/PM` |
| Custom | `h:mm` |
| Custom | `h:mm:ss` |
| Custom | `dd-mm-yy h:mm` |
| Custom | `mm:ss` |
| Custom | `mm:ss.0` |
| Text | `@` |
| Custom | `[h]:mm:ss` |
| Accounting | `_($* #,##0_);_($* (#,##0);_($* "-"_);_(@_)` |
| Accounting | `_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)` |
| Accounting | `_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)` |
| Accounting | `_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)` |

Custom Number formatting can be applied in following ways,
* Using the [`numberFormat`](../api/spreadsheet/#numberformat) method, you can set your own custom number format to a cell or range of cells.
* Selecting the custom number format option from custom number formats dialog or type your own format in dialog input and then click apply button. It will apply the custom format for selected cells.

The following code example shows the number formatting in cell data.

{% tab template="spreadsheet/format/number", sourceFiles="app.ts,index.html,datasource.ts", es5Template="es5-number-format", iframeHeight="450px", isDefaultActive=true %}

```typescript
import { Spreadsheet, SheetModel, ColumnModel, RowModel, getFormatFromType, NumberFormatType } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 140 }, { width: 140 }, { width: 160 }, { width: 160 }, { width: 160 }, { width: 120 }];

let rows: RowModel[] = [{
    height: 35, customHeight: true,
    cells: [{ value: 'Sales Team Summary', colSpan: 6,
    style: { verticalAlign: 'middle', textAlign: 'center', fontSize: '16pt', fontWeight: 'bold',
        border: '1px solid #e0e0e0', backgroundColor: '#EEEEEE', color: '#279377' }}]
},
{
    index: 10, cells: [{ index: 1, value: 'Total:', style: { fontWeight: 'bold', fontStyle: 'italic' } },
    // If the format string is not known, you can get the format string using `getFormatFromType` function like below
    { formula: '=SUM(C3:C10)', format: getFormatFromType(<NumberFormatType>'Accounting') },
    // Applied number format to C11, D11 & E11 through cell binding
    { formula: '=SUM(D3:D10)', format: '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)' },
    { formula: '=SUM(E3:E10)', format: '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)' }]
}];

let sheets: SheetModel[] = [{
    ranges: [{ dataSource: data, startCell: 'A2' }],
    columns: columns, rows: rows, showGridLines: false, selectedRange: 'U15'
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    // Applied number formatting to the range of cells using 'numberFormat' method once the component is loaded
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', textAlign: 'center', color: '#ffffff', borderBottom: '1px solid #e0e0e0' }, 'A2:F2');
        spreadsheet.cellFormat({ borderTop: '1px solid #e0e0e0', backgroundColor: '#EEEEEE' }, 'A11:F11');
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A2:F11', 'Outer');
        // Applied Accounting format to the cells from C3 to E10 range.
        spreadsheet.numberFormat('_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)', 'C3:E10');
        // Applied Percentage format to the cells from C3 to E11 range.
        spreadsheet.numberFormat('0%', 'F3:F10');
        // applied the custom number format for cell form D3 to D10 range
        spreadsheet.numberFormat('[Red][<=2000]$#,##0.00;[Blue][>2000]$#,##0.00', 'D3:D10');
        // applied the custom number format for cell from F3 to F10 range
        spreadsheet.numberFormat('#,##0.00_);[Red](#,##0.00)', 'F3:F10');
    },
    // Removed the unwanted support for this samples
    showRibbon: false, showFormulaBar: false, showSheetTabs: false, allowInsert: false, allowDelete: false
});

spreadsheet.appendTo('#spreadsheet');
```

{% endtab %}

## Text and cell formatting

Text and cell formatting enhances the look and feel of your cell. It helps to highlight a particular cell or range of cells from a whole workbook. You can apply formats like font size, font family, font color, text alignment, border etc. to a cell or range of cells. Use the [`allowCellFormatting`](../api/spreadsheet/#allowcellformatting) property to enable or disable the text and cell formatting option in Spreadsheet. You can set the formats in following ways,
* Using the `style` property, you can set formats to each cell at initial load.
* Using the [`cellFormat`](../api/spreadsheet/#cellformat) method, you can set formats to a cell or range of cells.
* You can also apply by clicking the desired format option from the ribbon toolbar.

### Fonts

Various font formats supported in the spreadsheet are font-family, font-size, bold, italic, strike-through, underline and font color.

### Text Alignment

You can align text in a cell either vertically or horizontally using the  `textAlign` and `verticalAlign` property.

### Indents

To enhance the appearance of text in a cell, you can change the indentation of a cell content using `textIndent` property.

### Fill color

To highlight cell or range of cells from whole workbook you can apply background color for a cell using `backgroundColor` property.

### Borders

You can add borders around a cell or range of cells to define a section of worksheet or a table. The different types of border options available in the spreadsheet are,

| Types | Actions |
|-------|---------|
| Top Border | Specifies the top border of a cell or range of cells.|
| Left Border | Specifies the left border of a cell or range of cells.|
| Right Border | Specifies the right border of a cell or range of cells.|
| Bottom Border | Specifies the bottom border of a cell or range of cells.|
| No Border | Used to clear the border from a cell or range of cells.|
| All Border | Specifies all border of a cell or range of cells.|
| Horizontal Border | Specifies the top and bottom border of a cell or range of cells.|
| Vertical Border | Specifies the left and right border of a cell or range of cells.|
| Outside Border | Specifies the outside border of a range of cells.|
| Inside Border | Specifies the inside border of a range of cells.|

You can also change the color, size, and style of the border. The size and style supported in the spreadsheet are,

| Types | Actions |
|-------|---------|
| Thin | Specifies the `1px` border size (default).|
| Medium | Specifies the `2px` border size.|
| Thick | Specifies the `3px` border size.|
| Solid | Used to create the `solid` border (default).|
| Dashed | Used to create the `dashed` border.|
| Dotted | Used to create the `dotted` border.|
| Double | Used to create the `double` border.|

Borders can be applied in the following ways,
* Using the  `border`, `borderLeft`, `borderRight`, `borderBottom` properties, you can set the desired border to each cell at initial load.
* Using the `setBorder` method, you can set various border options to a cell or range of cells.
* Selecting the border options from ribbon toolbar.

The following code example shows the style formatting in text and cells of the spreadsheet.

{% tab template="spreadsheet/format/cell", sourceFiles="app.ts,index.html,datasource.ts", es5Template="es5-cell-format", iframeHeight="450px" %}

```typescript
import { Spreadsheet, SheetModel, ColumnModel, RowModel, CellStyleModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 100 }, { width: 200 }, { width: 110 }, { width: 140 }, { width: 90 }];

let rows: RowModel[] = [{
        height: 40, customHeight: true,
        cells: [{ value: 'Order Summary', colSpan: 5,
        // Applied styles to 'A1' cell through cell property binding
        style: { fontFamily: 'Axettac Demo', verticalAlign: 'middle', textAlign: 'center', fontSize: '18pt', fontWeight: 'bold', color: '#279377', border: '1px solid #e0e0e0' }
    }] },
    {
        // Applied styles to 'C2' cell through cell property binding
        height: 30, cells: [{ index: 2, style: { textAlign: 'right' } }]
    },
    { height: 30 }, { height: 30 }, { height: 30 }, { height: 30 }, { height: 30 },
    { height: 30 }, { height: 30 }, { height: 30 }, { height: 30 }, { height: 30 }];

let sheets: SheetModel[] = [{
    ranges: [{ dataSource: data, startCell: 'A2' }],
    columns: columns, rows: rows, showGridLines: false, selectedRange: 'U15'
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    // Applied cell formatting to the range of cells using 'cellFormat' method once the component is loaded
    created: (): void => {
        // Setting common styles to table header cells
        spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', color: '#ffffff' }, 'A2:E2');
        // Setting common styles to whole table cells
        spreadsheet.cellFormat({ verticalAlign: 'middle', fontFamily: 'Axettac Demo' }, 'A2:E12');
        // Column wise styles setting
        spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A12');
        // Setting text-indent to 2 and 4 column
        let style: CellStyleModel = { textAlign: 'left', textIndent: '8pt' };
        spreadsheet.cellFormat(style, 'B2:B12');
        spreadsheet.cellFormat(style, 'D2:D12');
        spreadsheet.cellFormat({ fontStyle: 'italic', textAlign: 'right' }, 'C3:C12');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'E2:E12');
        // Applied border to range of cells using 'setBorder' method
        spreadsheet.setBorder({ borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }, 'A2:E2');
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A4:E11', 'Horizontal');
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A3:E12', 'Outer');
        spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E3:E4');
        spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E9');
        spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E12');
        spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E5');
        spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E8');
        spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E11');
        spreadsheet.cellFormat({ color: '#62c9e8' }, 'E6');
        spreadsheet.cellFormat({ color: '#62c9e8' }, 'E10');
        spreadsheet.cellFormat({ color: '#ff5b5b' }, 'E7');
    },
    // Removed the unwanted support for this samples
    showRibbon: false, showFormulaBar: false, showSheetTabs: false, allowEditing: false, allowInsert: false, allowDelete: false
});

spreadsheet.appendTo('#spreadsheet');
```

{% endtab %}

### Limitations of Formatting

The following features are not supported in Formatting:

* Insert row/column between the formatting applied cells.
* Formatting support for row/column.

## Conditional Formatting

Conditional formatting helps you to format a cell or range of cells based on the conditions applied. You can enable or disable conditional formats by using the [`allowConditionalFormat`](../api/spreadsheet/#allowConditionalFormat) property.

> The default value for the `allowConditionalFormat` property is `true`.

### Apply Conditional Formatting

You can apply conditional formatting by using one of the following ways,

* Select the conditional formatting icon in the Ribbon toolbar under the Home Tab.
* Using the [`conditionalFormat()`](../api/spreadsheet/#conditionalFormat) method to define the condition.
* Using the `conditionalFormats` in sheets model.

Conditional formatting has the following types in the spreadsheet,

### Highlight cells rules

Highlight cells rules option in the conditional formatting enables you to highlight cells with a preset color depending on the cell's value.

The following options can be given for the highlight cells rules as type,

> 'GreaterThan', 'LessThan', 'Between', 'EqualTo', 'ContainsText', 'DateOccur', 'Duplicate', 'Unique'.

The following preset colors can be used for formatting styles,

> `"RedFT"` - Light Red Fill with Dark Red Text,
> `"YellowFT"` - Yellow Fill with Dark Yellow Text,
> `"GreenFT"` - Green Fill with Dark Green Text,
> `"RedF"` - Red Fill,
> `"RedT"` - Red Text.

### Top bottom rules

Top bottom rules option in the conditional formatting allows you to apply formatting to the cells that satisfy a statistical condition with other cells in the range.

The following options can be given for the top bottom rules as type,

> 'Top10Items', 'Bottom10Items', 'Top10Percentage', 'Bottom10Percentage', 'BelowAverage', 'AboveAverage'.

### Data Bars

You can apply data bars to represent the data graphically inside a cell. The longest bar represents the highest value and the shorter bars represent the smaller values.

The following options can be given for the data bars as type,

> 'BlueDataBar', 'GreenDataBar', 'RedDataBar', 'OrangeDataBar', 'LightBlueDataBar', 'PurpleDataBar'.

### Color Scales

Using color scales, you can format your cells with two or three colors, where different color shades represent the different cell values. In the Green-Yellow-Red(GYR) Color Scale, the cell that holds the minimum value is colored as red. The cell that holds the median is colored as yellow, and the cell that holds the maximum value is colored as green. All other cells are colored proportionally.

The following options can be given for the color scales as type,

> 'GYRColorScale', 'RYGColorScale', 'GWRColorScale', 'RWGColorScale', 'BWRColorScale', 'RWBColorScale', 'WRColorScale', 'RWColorScale', 'GWColorScale', 'WGColorScale', 'GYColorScale', 'YGColorScale'.

### Icon Sets

Icon sets will help you to visually represent your data with icons. Every icon represents a range of values. In the Three Arrows(colored) icon, the green arrow icon represents the values greater than 67%, the yellow arrow icon represents the values between 33% to 67%, and the red arrow icon represents the values less than 33%.

The following options can be given for the icon sets as type,

> 'ThreeArrows', 'ThreeArrowsGray', 'FourArrowsGray', 'FourArrows', 'FiveArrowsGray', 'FiveArrows', 'ThreeTrafficLights1', 'ThreeTrafficLights2', 'ThreeSigns', 'FourTrafficLights', 'FourRedToBlack', 'ThreeSymbols', 'ThreeSymbols2', 'ThreeFlags', 'FourRating', 'FiveQuarters', 'FiveRating', 'ThreeTriangles', 'ThreeStars', 'FiveBoxes'.

### Custom Format

Using the custom format for conditional formatting you can set cell styles like color, background color, font style, font weight, and underline.

In the MAY and JUN columns, we have applied conditional formatting custom format.

> In the Conditional format, custom format supported for Highlight cell rules and Top bottom rules.

### Clear Rules

You can clear the defined rules by using one of the following ways,

* Using the “Clear Rules” option in the Conditional Formatting button of HOME Tab in the ribbon to clear the rule from selected cells.
* Using the [`clearConditionalFormat()`](../api/spreadsheet/#clearConditionalFormat) method to clear the defined rules.

{% tab template="spreadsheet/conditional-formatting", sourceFiles="app.ts,index.html,datasource.ts", es5Template="es5-conditional-formatting", iframeHeight="450px" , isDefaultActive=true %}

```typescript
import { Spreadsheet, SheetModel, ColumnModel, RowModel } from '@syncfusion/ej2-spreadsheet';
import { conditionalFormatData } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let sheets: SheetModel[] = [{
    name: 'Car Sales Record',
    ranges: [{ dataSource: conditionalFormatData }],
    conditionalFormats: [
            { type: 'GreaterThan', cFColor: 'RedFT', value: '700', range: 'B2:B9' },
            { type: 'Bottom10Items', cFColor: 'YellowFT', value: '4', range: 'C2:C9' },
            { type: 'BlueDataBar', range: 'D2:D9' }
        ],
    columns: [{ width: 120 }]}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    // Removed the unwanted support for this samples
    showFormulaBar: false,
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:N1');
        spreadsheet.conditionalFormat({ type: "RYGColorScale", range: 'E2:E9' });
        spreadsheet.conditionalFormat({ type: "ThreeArrows", range: 'H2:H9' });
        //Custom format
        spreadsheet.conditionalFormat({ type: 'Top10Items', value: '1',
            format: { style: { color: '#ffffff', backgroundColor: '#009999', fontWeight: 'bold'}}, range: 'F2:F9' });
        spreadsheet.conditionalFormat({ type: 'Bottom10Items', value: '1',
            format: { style: { color: '#ffffff', backgroundColor: '#c68d53', fontWeight: 'bold'}}, range: 'G2:G9' });
    }
});

spreadsheet.appendTo('#spreadsheet');
```

{% endtab %}

### Limitations of Conditional formatting

The following features have some limitations in Conditional Formatting:

* Insert row/column between the conditional formatting.
* Conditional formatting with formula support.
* Copy and paste the conditional formatting applied cells.
* Custom rule support.

## See Also

* [Rows and columns](./rows-and-columns)
* [Hyperlink](./link)
* [Sorting](./sort)
* [Filtering](./filter)
* [`Ribbon customization`](./ribbon#ribbon-customization)
