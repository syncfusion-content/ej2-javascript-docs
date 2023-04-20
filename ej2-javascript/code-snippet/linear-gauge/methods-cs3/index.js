var gauge = new ej.lineargauge.LinearGauge({
  axes:[{
        pointers:[{
            value: 10
        }]
    }]
}, '#element');

document.getElementById('btn').onclick = () => {
    gauge.refresh();
};

