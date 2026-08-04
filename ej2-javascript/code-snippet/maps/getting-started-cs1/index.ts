
import { Maps } from '@syncfusion/ej2-maps';

// Define GeoJSON data source (loading from CDN)
const shapeData: object = { 
    dataOptions: { 
        type: 'GET', 
        url: 'https://cdn.syncfusion.com/maps/map-data/world-map.json'
    } 
};

// Create the Maps control with one layer
const map: Maps = new Maps({
    layers: [
        {
            shapeData: shapeData
        }
    ]
});

// Render the map into the <div> with id="container"
map.appendTo('#container');