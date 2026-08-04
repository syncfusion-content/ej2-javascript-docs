const shapeData = { 
    dataOptions: { 
        type: 'GET', 
        url: 'https://cdn.syncfusion.com/maps/map-data/world-map.json'
    } 
};
var map = new ej.maps.Maps({
    layers: [{
        shapeData: shapeData
    }]
});
map.appendTo('#container');