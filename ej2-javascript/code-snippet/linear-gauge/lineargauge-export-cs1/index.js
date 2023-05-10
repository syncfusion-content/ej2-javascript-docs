var gauge = new ej.lineargauge.LinearGauge({
        allowImageExport: true
}, '#element');

document.getElementById('export').onclick = () => {
        gauge.export("PNG","Gauge");
};

