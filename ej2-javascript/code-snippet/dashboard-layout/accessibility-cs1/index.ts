

import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize Dashboard Layout control
let portlet: DashboardLayout = new DashboardLayout({
    columns: 8,
    allowDragging: true,
    allowFloating: true,
    allowResizing: true,
    showGridLines: true,
    panels: [{ 'id': 'Panel0', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, header: '<div>Panel 0</div>', content: '<div class="content">Panel Content<div>' },
    { 'id': 'Panel1', 'sizeX': 3, 'sizeY': 2, 'row': 0, 'col': 1, header: '<div>Panel 1</div>', content: '<div class="content">Panel Content<div>' },
    { 'id': 'Panel2', 'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, header: '<div>Panel 2</div>', content: '<div class="content">Panel Content<div>' },
    { 'id': 'Panel3', 'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, header: '<div>Panel 3</div>', content: '<div class="content">Panel Content<div>' },
    { 'id': 'Panel4', 'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, header: '<div>Panel 4</div>', content: '<div class="content">Panel Content<div>' },
    { 'id': 'Panel5', 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, header: '<div>Panel 5</div>', content: '<div class="content">Panel Content<div>' },
    { 'id': 'Panel6', 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, header: '<div>Panel 6</div>', content: '<div class="content">Panel Content<div>' }
    ]
});
// render initialized Dashboard Layout
portlet.appendTo('#dashboard_layout');

