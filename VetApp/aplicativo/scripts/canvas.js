const quadro=document.querySelector("#primeiro-canvas");
const lapis=quadro.getContext("2d");

limparTela=function(){
    lapis.clearRect(0, 0, 1200, 500);
}

let x=20;
cachorro=function(){    
    const logoDog= new Image();
    logoDog.onload=function(){
        lapis.drawImage(logoDog, x, 120, 200, 180);
    }
    logoDog.src="../imagens/animais.png";
}

function animar(){
    limparTela();
    cachorro();
    x++;
    if(x == 1220){x=-20;}
}

setInterval(animar, 10);




