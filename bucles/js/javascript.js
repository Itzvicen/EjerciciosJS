function agrandaP() {
    let parrafos=document.getElementsByTagName("p");
    for (i=0;i<parrafos.length;i++) {
        parrafos[i].style.fontSize="1.2em";
    }
}

function reset(){
    let parrafos=document.getElementsByTagName("p");
    for (i=0;i<parrafos.length;i++) {
        parrafos[i].style.fontSize="1em";
    }
}

function reduceP() {
    let parrafos=document.getElementsByTagName("p");
    for (i=0;i<parrafos.length;i++) {
        parrafos[i].style.fontSize="0.8em";
    }
}