import {  Pager, PagerDropDown } from '@syncfusion/ej2-grids';

Pager.Inject(PagerDropDown);

let pager: Pager = new Pager({
    pageSize: 10,
    totalRecordsCount: 200,
    pageSizes: [10, 20, 50, 100],
});

pager.appendTo('#Pager');
