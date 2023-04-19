var circulargauge = new ej.circulargauge.CircularGauge({
        allowImageExport: true
}, '#element');
document.getElementById('export').onclick = () => {
        circulargauge.export('JPEG', 'Gauge', null, false).then((data) => {
            var base64 = data;
            document.writeln(base64);
        });
};

