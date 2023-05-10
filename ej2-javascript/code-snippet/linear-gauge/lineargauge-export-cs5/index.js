var gauge = new ej.lineargauge.LinearGauge({
        allowPdfExport: true
}, '#element');

document.getElementById('export').onclick = () => {
        gauge.export("PDF", "Gauge", 0);
};

