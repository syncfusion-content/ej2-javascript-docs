var circulargauge = new ej.circulargauge.CircularGauge({
        allowPrint: true
}, '#element');
document.getElementById('print').onclick = () => {
        circulargauge.print();
};

