var input = document.querySelector("#inputEntrada"); 
input.focus();

var textoEncriptado = "";

var saleTexto = document.querySelector("#imprimeTexto");

function encriptar(){
    var texto = "";
    var textoEncriptado = input.value; 

    for (var posicion = 0; posicion < textoEncriptado.length; posicion++){
        if(textoEncriptado[posicion]=="a"){
            texto = texto.concat("ai");
        }
        else if(textoEncriptado[posicion]=="e"){
            texto = texto.concat("enter");
        }
        else if(textoEncriptado[posicion]=="i"){
            texto = texto.concat("imes");
        }
        else if(textoEncriptado[posicion]=="o"){
            texto = texto.concat("ober");
        }
        else if(textoEncriptado[posicion]=="u"){
            texto = texto.concat("ufat");
        }
        else{
            texto = texto.concat(textoEncriptado[posicion]);
        }
        
    }
    saleTexto.value = texto;

    input.value = ""; 
    saleTexto.focus();
}

function desencriptar(){
    var texto = "";
    var textoEncriptado = input.value; 

    for (var posicion = 0; posicion < textoEncriptado.length; posicion++){
        if((textoEncriptado[posicion]=="a")&&(textoEncriptado[posicion+1]=="i")){
            texto = texto.concat("a");
            posicion = posicion + 1;
        }
        else if((textoEncriptado[posicion]=="e")&&(textoEncriptado[posicion+1]=="n")&&(textoEncriptado[posicion+2]=="t")&&(textoEncriptado[posicion+3]=="e")&&(textoEncriptado[posicion+4]=="r")){
            texto = texto.concat("e");
            posicion = posicion + 4;
        }
        else if((textoEncriptado[posicion]=="i")&&(textoEncriptado[posicion+1]=="m")&&(textoEncriptado[posicion+2]=="e")&&(textoEncriptado[posicion+3]=="s")){
            texto = texto.concat("i");
            posicion = posicion + 3;
        }
        else if((textoEncriptado[posicion]=="o")&&(textoEncriptado[posicion+1]=="b")&&(textoEncriptado[posicion+2]=="e")&&(textoEncriptado[posicion+3]=="r")){
            texto = texto.concat("o");
            posicion = posicion + 3;
        }
        else if((textoEncriptado[posicion]=="u")&&(textoEncriptado[posicion+1]=="f")&&(textoEncriptado[posicion+2]=="a")&&(textoEncriptado[posicion+3]=="t")){
            texto = texto.concat("u");
            posicion = posicion + 3;
        }
        else{
            texto = texto.concat(textoEncriptado[posicion]);
        }
        
    }
    saleTexto.value = texto; 
}

function copiar(){
    
    var copiarTexto = document.querySelector("#imprimeTexto");
    copiarTexto.select();
    document.execCommand("copy");

    input.value = ""; 
    input.focus();
}

var btnEncriptar = document.querySelector(".btnEncriptar"); 
btnEncriptar.onclick = encriptar;

var btnDesEncriptar = document.querySelector(".btnDesencriptar"); 
btnDesEncriptar.onclick = desencriptar; 

var btnCopiar = document.querySelector("#btn3");
btnCopiar.onclick = copiar;