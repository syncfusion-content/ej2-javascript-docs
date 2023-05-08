

import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize dashboardlayout component
let dashboard: DashboardLayout  = new DashboardLayout({
    cellSpacing: [10, 10],
    columns: 5
});
// render initialized dashboardlayout
dashboard.appendTo('#dashboard_inline');


