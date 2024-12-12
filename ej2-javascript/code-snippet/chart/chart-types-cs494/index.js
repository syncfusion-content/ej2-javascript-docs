var chart = new ej.charts.AccumulationChart({
    series: [
        {
            type: 'Pyramid',
            dataSource: [
                { x: 'Australia', y: 20, text: 'Australia 20%' },
                { x: 'France',    y: 22, text: 'France 22%' },
                { x: 'China',     y: 23, text: 'China 23%' },
                { x: 'India',     y: 24, text: 'India 24%' },
                { x: 'Japan',     y: 25, text: 'Japan 25%' },
                { x: 'Germany',   y: 27, text: 'Germany 27%' }
            ],
            xName: 'x', yName: 'y',
            dataLabel: { name: 'text', visible: true, position: 'Inside' },
            accessibility: {
                accessibilityDescription: 'This pyramid chart represents the sales distribution of cars by region, with each section representing a different region and its respective sales percentage.',
                accessibilityRole: 'presentation'
            }
        }
    ],
    title: 'Sales Distribution of Car by Region'
}, '#element');