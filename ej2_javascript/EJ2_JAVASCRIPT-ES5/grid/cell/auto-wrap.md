# Auto wrap

The auto wrap allows the cell content of the grid to wrap to the next line when it exceeds the boundary of the cell width. The Cell Content wrapping works based on the position of white space between words.
To enable auto wrap, set the [`allowTextWrap`](../../api/grid/#allowtextwrap) property to `true`.
You can configure the auto wrap mode by setting the [`textWrapSettings.wrapMode`](../../api/grid/textWrapSettings) property.

There are three types of [`wrapMode`](../../api/grid/textWrapSettings/#wrapmode). They are:

* **Both**: **Both** value is set by default. Auto wrap will be enabled for both the content and the header.
* **Header**: Auto wrap will be enabled only for the header.
* **Content**: Auto wrap will be enabled only for the content.

Note: When a column width is not specified, then auto wrap of columns will be adjusted with respect to the grid's width.

In the following example, the [`textWrapSettings.wrapMode`](../../api/grid/textWrapSettings/#wrapmode) is set to **Content**.

{% tab template="grid/autowrap", es5Template="autowrap" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    gridLines: 'Default',
    allowTextWrap: true,
    textWrapSettings: { wrapMode: 'Content' },
    columns: [
        { field: 'RoolNo', headerText: 'Rool No', width: 120 },
        { field: 'Name', headerText: 'Name of the inventor', width: 100 },
        { field: 'patentfamilies', headerText: 'No of patentfamilies', width: 100 },
        { field: 'Country', headerText: 'country', width: 130 },
        { field: 'mainfields', headerText: 'Main fields of Invention', width: 150 },
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}