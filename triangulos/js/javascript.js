function triangulos(){

    let l1=document.getElementById("lado1").value;
    let l2=document.getElementById("lado2").value;
    let l3=document.getElementById("lado3").value;
    let tipoTriangulo;

    if (l1==l2 && l2==l3) {
        tipoTriangulo="Equilatero";

    } else if (l1==l2 || l2==l3 || l1==l3) {
        tipoTriangulo="Isosceles";

    } else {
        tipoTriangulo="Escaleno";
    }

    document.getElementById("solucion").style.visibility="visible"
    document.getElementById("solucion").innerHTML="El triangulo es: "+tipoTriangulo;
}