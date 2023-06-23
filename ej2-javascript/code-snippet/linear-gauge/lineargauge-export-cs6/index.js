var gauge = new ej.lineargauge.LinearGauge({
        allowImageExport: true
}, '#element');

document.getElementById('export').onclick = () => {
        gauge.export('JPEG', 'Gauge', null, false).then((data) => {
            var base64 = data;
            document.writeln(base64);
        });
};

