import { DashboardLayout, PanelModel } from '@syncfusion/ej2-layouts';

let dashboard: DashboardLayout = new DashboardLayout({
    cellSpacing: [20, 20],
    mediaQuery: 'max-width: 700px',
    columns: 5,
    panels: [
        {
            sizeX: 1,
            sizeY: 1,
            row: 0,
            col: 0,
            content: '<div class="content">0</div>',
            mobilePanelHeight: 0.25
        },
        {
            sizeX: 1,
            sizeY: 1,
            row: 0,
            col: 1,
            content: '<div class="content">1</div>',
            mobilePanelHeight: 0.5
        },
        {
            sizeX: 1,
            sizeY: 1,
            row: 1,
            col: 0,
            content: '<div class="content">2</div>',
            mobilePanelHeight: 0.75
        },
        {
            sizeX: 1,
            sizeY: 1,
            row: 2,
            col: 0,
            content: '<div class="content">3</div>',
            mobilePanelHeight: 1
        },
    ],
});
dashboard.appendTo('#defaultLayout');