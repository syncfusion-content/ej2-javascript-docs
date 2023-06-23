L10n.load({
    'ar-AR': {
        'chart': {
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Zoom: 'زوم',
            Pan: 'مقلاة',
            Reset: 'إعادة تعيين',
            ResetZoom: ' زومإعادة تعيين'
        },
    }
});
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Year',
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Sales Amount in Millions',
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Product X', type: 'Column',
        marker: { dataLabel: { visible: true }}
    },{
        dataSource: chartData,
        xName: 'x', yName: 'y1',
        name: 'Product Y', type: 'Column',
         marker: { dataLabel: { visible: true }}
    }],
    title: 'Average Sales Comparison',
    locale: 'ar-AR',
    zoomSettings: {
        enableMouseWheelZooming: true,
        enableDeferredZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true
    },
}, '#element');

