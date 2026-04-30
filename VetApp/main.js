const {app, BrowserWindow, ipcMain}=require("electron");
app.on("ready", ()=>{
    let Browser = new BrowserWindow({
        width:1600,
        height:1200,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    })
    Browser.loadFile(`aplicativo/paginas/index.html`);
});
app.on("window-all-closed", ()=>{
    app.quit();
});

let sobreWindow=null;
ipcMain.on("abrir-janela-sobre", ()=>{
    if(sobreWindow==null){
        sobreWindow=new BrowserWindow({
            width:600,
            height:600,
            //webPreferences
            //webPreferencies
            webPreferences:{
                nodeIntegration:true,
                contextIsolation:false
            }
        });
        sobreWindow.on("closed", ()=>{
            sobreWindow=null;
        });
    }
    sobreWindow.loadFile(`aplicativo/paginas/sobre.html`);
});

let usarWindow=null;
ipcMain.on("abrir-janela-usar", ()=>{
    if(usarWindow==null){
        usarWindow=new BrowserWindow({
            width:600,
            height:600,
            webPreferences:{
                nodeIntegration:true,
                contextIsolation:false
            }
        });
        usarWindow.on("closed", ()=>{
            usarWindow=null;
        });
        usarWindow.loadFile(`aplicativo/paginas/usar.html`);
    }
});

let animaisWindow=null;
ipcMain.on("abrir-janela-animais", ()=>{
    if(animaisWindow==null){
        animaisWindow=new BrowserWindow({
            width:600,
            height:600,
            webPreferences:{
                nodeIntegration:true,
                contextIsolation:false
            }
        });
        animaisWindow.on("closed", ()=>{
            animaisWindow=null;
        });
        animaisWindow.loadFile(`aplicativo/paginas/animais.html`);
    }
});