function calcNota(){
    // Entrada de datos 

    var notawp = Number(document.getElementById("notawp").value)
    var notajs = Number(document.getElementById("notajs").value)
    var trabajoWp=document.getElementById("wordpress")
    var trabajoJs=document.getElementById("js")
    
    // Calculo

    var notafinal = (0.75*notawp+0.25*notajs)

    // Comprobar si esta marcada la casilla

    if (trabajoWp.checked==true) {
        notafinal++;
    }

    if (trabajoJs.checked==true) {
        notafinal++;
    }

    // Comprobamos que el resultado esta dentro del rango

    if (notafinal > 10) {
        notafinal=10
    }

    // Salida

    document.getElementById("resultado").style.visibility="visible"
    document.getElementById("resultado").innerHTML="La nota final es: "+notafinal;

    if (notafinal >= 5 ) {
        document.getElementById("indicacion").style.visibility="visible"
        document.getElementById("indicacion").innerHTML="Enhorabuena, estás aprobado"
    } else {
        document.getElementById("indicacion").style.visibility="visible"
        document.getElementById("indicacion").innerHTML="Tienes que presentarte a la recuperación"
    }

}