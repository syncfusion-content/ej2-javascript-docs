var isInitial = true;
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold' }, { name: 'Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
    },
    width: '100%',
    height: 450,
    saveReport: function (args) {
        var reports = [];
        var isSaved = false;
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reports = JSON.parse(localStorage.pivotviewReports);
        }
        if (args.report && args.reportName && args.reportName !== '' && args.reportName !== 'Sample Report') {
            reports.map(function (item) {
                if (args.reportName === item.reportName) {
                    item.report = args.report;
                    isSaved = true;
                }
            });
            if (!isSaved) {
                reports.push(args);
            }
            localStorage.pivotviewReports = JSON.stringify(reports);
        }
    },
    fetchReport: function (args) {
        var reportCollection = [];
        var reeportList = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        reportCollection.map(function (item) { reeportList.push(item.reportName); });
        args.reportName = reeportList;
    },
    loadReport: loadReport,
    removeReport: function (args) {
        var reportCollection = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        for (var i = 0; i < reportCollection.length; i++) {
            if (reportCollection[i].reportName === args.reportName) {
                reportCollection.splice(i, 1);
            }
        }
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            localStorage.pivotviewReports = JSON.stringify(reportCollection);
        }
    },
    renameReport: function (args) {
        var reportCollection = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        if (args.isReportExists) {
            for (var i = 0; i < reportCollection.length; i++) {
                if (reportCollection[i].reportName === args.rename) {
                    reportCollection.splice(i, 1);
                }
            }
        }
        reportCollection.map(function (item) {
            if (args.reportName === item.reportName) {
                item.reportName = args.rename;
            }
        });
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            localStorage.pivotviewReports = JSON.stringify(reportCollection);
        }
    },
    dataBound: function () {
        if (pivotObj && isInitial) {
            isInitial = false;
            pivotObj.toolbarModule.action = 'Load';
            pivotObj.toolbarModule.reportList.value = 'Default report';
            loadReport({ reportName: 'Default report' });
        }
    },
    newReport: function () {
        pivotObj.setProperties({
            dataSourceSettings: { columns: [], rows: [], values: [], filters: [] }
        }, false);
    },
    toolbarRender: function (args) {
        args.customToolbar.splice(6, 0, {
            type: 'Separator'
        });
        args.customToolbar.splice(9, 0, {
            type: 'Separator'
        });
    },
    toolbar: ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
        'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'],
    allowExcelExport: true,
    allowConditionalFormatting: true,
    allowNumberFormatting: true,
    allowPdfExport: true,
    showToolbar: true,
    allowCalculatedField: true,
    displayOption: { view: 'Both' },
    showFieldList: true
});
pivotObj.appendTo('#PivotTable');

function loadReport(args) {
    var reportCollection = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item) {
        if (args.reportName === item.reportName) {
            args.report = item.report;
        }
    });
    if (args.report) {
        pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
    }
}