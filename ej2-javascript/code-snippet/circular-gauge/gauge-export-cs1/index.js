var circulargauge = new ej.circulargauge.CircularGauge({
        allowImageExport: true
}, '#element');
document.getElementById('export').onclick = () => {
        circulargauge.export('PNG','Gauge');
};

