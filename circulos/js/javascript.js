function circulos(){
    /* variables */

    const pi = Math.PI;
    var radio = Number(document.getElementById("radio").value);

    /* Calculo interno */
    longitud = 2 * pi * radio;
    area = pi * Math.pow(radio,2);
    volumen = (4 / 3) * pi * Math.pow(radio,3)

    /* Mostrar el resultado */
    document.getElementById("resultados").style.visibility="visible"
    document.getElementById("resultLong").innerHTML="La longitud del circulo es: "+longitud.toFixed(2)+" cm";
    document.getElementById("resultArea").innerHTML="El area del circulo es: "+area.toFixed(2)+" cm²";
    document.getElementById("resultVol").innerHTML="El volumen del circulo es: "+volumen.toFixed(2)+" cm³";
    
}

function calidos() {
    document.body.style.backgroundColor="orange"
    document.body.style.color="yellow"
}

function frios () {
    document.body.style.backgroundColor="lightblue"
    document.body.style.color="purple"
}

function light () {
    document.body.style.backgroundColor="lightgrey"
    document.body.style.color="grey"
}

function dark () {
    document.body.style.backgroundColor="black"
    document.body.style.color="gainsboro"
}