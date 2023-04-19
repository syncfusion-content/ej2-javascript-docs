var gauge = new ej.lineargauge.LinearGauge({
  annotations: [{
       content: '10',
       zIndex: '1',
       axisValue: 0
    }]
}, '#element');

document.getElementById('btn').onclick = () => {
    gauge.setAnnotationValue(0, '50', 50);
};

