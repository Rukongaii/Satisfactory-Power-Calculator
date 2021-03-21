
function updateSlider(){
    var x = document.getElementById('slider').value;
    document.getElementById('OverclockOutput').innerHTML = x + ' %';
}

function calculatePowerConsumption(){
    var initPowerCons = document.getElementById('InitPowerBox').value;
    var clock = document.getElementById('slider').value;

    var output = initPowerCons * Math.pow((clock / 100), 1.6)
    var rounded = Math.round((output + Number.EPSILON) * 100) / 100
    document.getElementById('OutputDisplay').innerHTML = rounded + ' MW'
}