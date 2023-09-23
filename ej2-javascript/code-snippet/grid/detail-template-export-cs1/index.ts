

import { Grid, DetailRow, Toolbar, PdfExport, PdfExportProperties, ExportDetailTemplateEventArgs } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

Grid.Inject(DetailRow, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    exportDetailTemplate: exportDetailTemplate,
    columns: [
        { field: 'Category', headerText: 'Category', width: 140 },
        { field: 'ProductID', headerText: 'Product ID', width: 120 },
        { field: 'Status', headerText: 'Status', width: 120 }
    ],
    height: 273
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args['item'].id === 'Grid_pdfexport') {
        let exportProperties: PdfExportProperties = {
           hierarchyExportMode: "Expanded"
        };
        grid.pdfExport(exportProperties);
    }
}

function exportDetailTemplate(args: ExportDetailTemplateEventArgs) {
    args.value = {
        columnCount: 2,
        columnHeader: [
            {
                cells: [{
                    index: 0, colSpan: 2, value: 'Product Details',
                    style: { backColor: '#ADD8E6', pdfTextAlignment: 'Center', bold: true }
                }]
            }
        ],
        rows: [
            {
                cells: [
                    {
                        index: 0, rowSpan: 4, image: { base64: args.parentRow.data['ProductImg'], width: 80 }
                    },
                    {
                        index: 1, value: "Offers: " + args.parentRow.data['Offers'],
                        style: { fontColor: '#0A76FF', fontSize: 15 }
                    },
                ]
            },
            {
                cells: [
                    {
                        index: 1, value: 'Available: ' + args.parentRow.data['Available']
                    }]
            },
            {
                cells: [
                    {
                        index: 1, value: 'Contact: ',
                        hyperLink: {
                            target: 'mailto:' + args.parentRow.data['Contact'],
                            displayText: args.parentRow.data['Contact']
                        }
                    }]
            },
            {
                cells: [
                    {
                        index: 1, value: 'Ratings: ' + args.parentRow.data['Ratings'],
                        style: { fontColor: '#0A76FF', fontSize: 15 }
                    }
                ]
            },
            {
                cells: [
                    {
                        index: 0, value: args.parentRow.data['productDesc'],
                        style: { pdfTextAlignment: 'Center' }
                    },
                    { index: 1, value: args.parentRow.data['ReturnPolicy'] }
                ]
            },
            {
                cells: [
                    {
                        index: 0, value: args.parentRow.data['Cost'],
                        style: { bold: true, pdfTextAlignment: 'Center' }
                    },
                    { index: 1, value: args.parentRow.data['Cancellation'] }
                ]
            },
            {
                cells: [
                    {
                        index: 0, value: args.parentRow.data['Status'],
                        style: {
                            fontColor: args.parentRow.data['Status'] === 'Available' ? '#00FF00' : '#FF0000',
                            pdfTextAlignment: 'Center', fontSize: 15
                        }
                    },
                    {
                        index: 1, value: args.parentRow.data['Delivery'],
                        style: { fontColor: '#0A76FF', fontSize: 15 }
                    }
                ]
            }
        ],
    };
}



