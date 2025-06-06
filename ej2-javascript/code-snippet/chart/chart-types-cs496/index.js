var piechart = new ej.charts.AccumulationChart({
  series: [
    {
      dataSource: [
        { x: 'Saudi Arabia', y: 58, text: '58%' },
        { x: 'Persian Gulf', y: 15, text: '15%' },
        { x: 'Canada', y: 13, text: '13%' },
        { x: 'Venezuela', y: 8, text: '8%' },
        { x: 'Mexico', y: 3, text: '3%' },
        { x: 'Russia', y: 2, text: '2%' },
        { x: 'Miscellaneous', y: 1, text: '1%' }
      ],
      xName: 'x', yName: 'y',
      dataLabel: {
        visible: true,
        name: 'text',
        font: { color: 'white' }
      },
    }
  ],
  legendSettings: {
    visible: false,
  },
  title: 'Oil and other liquid imports in USA',
  subTitle : 'In the year 2014 - 2015',
  titleStyle: {
    fontFamily: "Arial",
    fontStyle: 'italic',
    fontWeight: 'regular',
    color: "#E27F2D",
    size: '23px',
    position: 'Bottom'
  }
}, '#element');

