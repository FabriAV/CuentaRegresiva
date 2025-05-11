var hoy= new Date();
var fechafutura= new Date(2026,5,26);
var diferenciamili=fechafutura.getTime()-hoy.getTime();
var TTsegundos= Math.floor(diferenciamili/1000);       
    
var dias=Math.floor(TTsegundos/(60*60*24));
var horas=Math.floor((TTsegundos % (60*60*24))/(60*60));
var min=Math.floor((TTsegundos%(60*60))/(60));
var seg=TTsegundos%60;

var segundo1=document.getElementById("segundo1");
var segundo2=document.getElementById("segundo2");
var minuto1=document.getElementById("minuto1");
var minuto2=document.getElementById("minuto2");
var hora1= document.getElementById("hora1");
var hora2= document.getElementById("hora2");
var dia1= document.getElementById("dia1");
var dia2= document.getElementById("dia2");
var dia3= document.getElementById("dia3");

Segundos();
Minutos();
Horas();
Dias();
setInterval(Segundos,1000);


function Segundos(){
    if(seg<0){
        seg=59;
        min--;
        Minutos();
    }
    if(seg<10){
        var txtseg= `0${seg}`;
    }else{
        txtseg=seg;
    }
    cadenaseg=String(txtseg)
    listadeseg= cadenaseg.split('');
    segundo1.innerHTML=listadeseg[0];
    segundo2.innerHTML=listadeseg[1];
    seg--;
    
}

function Minutos(){
    if(min<0){
        min=59;
        horas--;
        Horas();
    }
    if(min<10){
        var txtmin= `0${min}`;
    }else{
        txtmin=min;
    }
    cadenaseg=String(txtmin);
    listamin=cadenaseg.split('');
    minuto1.innerHTML=listamin[0];   
    minuto2.innerHTML=listamin[1];
}

function Horas(){
    if(horas<0){
        horas=23
        dias--;
        Dias(); 
        
    }
    if (horas<10) {
        txthoras=`0${horas}`;
    }else{
        txthoras=horas;
    }
    cadenahoras=String(txthoras);
    listahoras= cadenahoras.split('');
    hora1.innerHTML= listahoras[0];
    hora2.innerHTML= listahoras[1];
}

function Dias(){
    if (dias<0) {
        dias=0
    }
    
    if(dias>99){
        txtdias=dias;
    }else if(dias<10){
        txtdias=`00${dias}`;
    }else{
        txtdias=`0${dias}`
    }
    cadenadias=String(txtdias);
    listadias= cadenadias.split('');
    dia1.innerHTML= listadias[0];
    dia2.innerHTML= listadias[1];
    dia3.innerHTML=listadias[2];
    
    if(parseInt(dia1.innerText)==0){
        dia1.style.display="none";
    }
    if(parseInt(dia2.innerText)==0 && parseInt(dia1.innerText)==0){
        dia2.style.display="none";
    }
    if(parseInt(dia3.innerText)==0 && parseInt(dia1.innerText)==0 && parseInt(dia2.innerText)==0 ){
        dia3.style.display="none";
    }

    if(parseInt(dia3.innerText)==0 && parseInt(dia1.innerText)==0 && parseInt(dia2.innerText)==0){
        document.getElementById("separadordias").style.display="none";
        document.getElementById("diastexto").style.display="none";
    }
}

