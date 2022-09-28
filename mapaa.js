//MODO ASINCRONICO PROMISES ASYNC AWAIT
const fs = require('fs')

const pruebaConAsyncAwait = async () => {
    try {
        let lectura = (await fs.promises.readFile('./package.json')).toString()
        let archivoObjeto  = JSON.parse(lectura)
        let stats = fs.statSync('./package.json')
        let tamanio = stats["size"]
        let info = {
            contenidoStr: lectura,
            contenidoObj: archivoObjeto,
            size: tamanio
        }

        try {  
            await fs.promises.writeFile('./infoMAPAA.txt', JSON.stringify(info, null,'\t'),'utf-8')
        }
        catch(error) {console.log(error)}
    }
        catch( error ) {
        console.log(error)
    }
}

pruebaConAsyncAwait()
console.log('FIN DEL PROCESO MAPAA.JS')
