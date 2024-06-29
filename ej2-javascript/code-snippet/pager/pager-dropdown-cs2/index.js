ej.grids.Pager.Inject(ej.grids.PagerDropDown);
var pager = new ej.grids.Pager({
  pageSize: 10,
  totalRecordsCount: 200,
  pageSizes: [10, 20, 50, 100],
});
pager.appendTo('#Pager');