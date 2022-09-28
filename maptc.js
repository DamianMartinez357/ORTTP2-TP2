//MODO ASINCRONICO PROMISES THEN CATCH
const fs = require('fs')

function readFilePromise(file) {
    return new Promise((resolve,reject) => {
        fs.readFile(file,'utf-8', (error,datos) => {
            if(error) reject(error)
            else resolve(datos)
        })
    })
}


readFilePromise('./package1.json')
.then( lectura => {
    
    let archivoObjeto  = JSON.parse(lectura)
    let stats = fs.statSync('./package.json')
    let tamanio = stats["size"]
    let info = {
        contenidoStr: lectura,
        contenidoObj: archivoObjeto,
        size: tamanio
    }
    return info
})
.then( info => {
    
    fs.writeFile('./infoMAPTC.txt', JSON.stringify(info, null,'\t'),'utf-8', (err) => {})
})
.catch( error => console.log(error)) 

console.log('FIN DEL PROCESO MAPTC.JS')

