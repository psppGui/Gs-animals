const { ipcRenderer, shell }=require("electron");

let linkSobre= document.querySelector("#sobre");
let linkComoUsar= document.querySelector("#como-usar");
let linkAnimais= document.querySelector("#animais");
let linkGitHub=document.querySelector("#gitGuilherme");

if(linkGitHub){
    addEventListener("click", function(){
        shell.openExternal("https://github.com/psppGui");
    });
};

linkSobre.addEventListener("click", function(){
    ipcRenderer.send("abrir-janela-sobre");
});

linkComoUsar.addEventListener("click", function(){
    ipcRenderer.send("abrir-janela-usar");
});

linkAnimais.addEventListener("click", function(){
    ipcRenderer.send("abrir-janela-animais");
});