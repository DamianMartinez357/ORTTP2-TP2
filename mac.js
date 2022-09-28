//MODO ASINCRONICO CON CALLBACK
const fs = require('fs')



fs.readFile('./package.json','utf-8',(error,lectura) => {

    let archivoObjeto  = JSON.parse(lectura)
    let stats = fs.statSync('./package.json')
    let tamanio = stats["size"]
    
    let info = {
        contenidoStr: lectura,
        contenidoObj: archivoObjeto,
        size: tamanio
    }

        fs.writeFile('./infoMAC.txt', JSON.stringify(info, null,'\t'),'utf-8', (err) => {
    
    });
})

console.log('FIN DEL PROCESO MAC.JS')
