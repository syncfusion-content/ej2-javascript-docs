//Render iframe Button
var iframeContent = new ej.buttons.Button({
    cssClass: 'e-outline',
    isPrimary: true
});
iframeContent.appendTo('#iframeContent');

//Render map Button
var MapButton = new ej.buttons.Button({
    cssClass: 'e-outline',
    isPrimary: true
});
MapButton.appendTo('#Map');

//Render iframe Tooltip
var TooltipContent = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    content: '<iframe src="https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard" id="tooltipFrame"></iframe>',
    position: 'BottomCenter',
    opensOn: 'Click',
    width: '350',
    height: '250'
});
TooltipContent.appendTo('#iframeContent');

var dafaultData = [{
        "drillColor": '#C13664',
        "continent": "North America",
        "CategoryName": "Books",
        "Sales": 10882,
        'color': '#71B081'
    },
    {
        "drillColor": '#9C3367',
        "continent": "South America",
        "CategoryName": "Books",
        "Sales": 13776,
        'color': '#5A9A77'
    },
    {
        "drillColor": '#80306A',
        "continent": "Africa",
        "CategoryName": "Books",
        "Sales": 18718.0,
        'color': '#498770'
    },
    {
        "drillColor": '#622D6C',
        "continent": "Europe",
        "CategoryName": "Books",
        "Sales": 3746,
        'color': '#39776C'
    },
    {
        "drillColor": '#462A6D',
        "continent": "Asia",
        "CategoryName": "Books",
        "Sales": 10688,
        'color': '#266665'
    },
    {
        "drillColor": '#2A2870',
        "continent": "Australia",
        "CategoryName": "Books",
        "Sales": 30716,
        'color': '#124F5E '
    }
];

//Render Map component
var maps = new ej.maps.Maps({
    zoomSettings: {
        enable: false
    },
    legendSettings: {
        visible: false
    },
    width: '336',
    height: '235',
    layers: [{
        shapeData: new ej.maps.MapAjax('./map_data.json'),
        shapePropertyPath: 'continent',
        shapeDataPath: 'continent',
        dataSource: dafaultData,
        shapeSettings: {
            autofill: true
        }
    }, ],
});

//Create an element and append initialized map object to the created element
var map = document.createElement("div");
maps.appendTo(map);
//Render map Tooltip
var mapTooltip = new ej.popups.Tooltip({
    opensOn: 'Click',
    position: 'BottomCenter',
    cssClass: 'mapTooltip',
    content: map,
    width: '350',
    height: '250'
});
mapTooltip.appendTo('#Map');


