var circulargauge = new ej.circulargauge.CircularGauge({
        allowPdfExport: true
}, '#element');
document.getElementById('export').onclick = () => {
        circulargauge.export("PDF", "Gauge");
};

