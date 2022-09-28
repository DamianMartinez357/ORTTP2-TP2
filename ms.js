//MODO SINCRONICO

const fs = require('fs')


try {

    let archivoString = fs.readFileSync('./package.json', 'utf-8')()
    let archivoObjeto  = JSON.parse(archivoString)
    let stats = fs.statSync('./package.json')
    let tamanio = stats["size"]

    let info = {
        contenidoStr: archivoString,
        contenidoObj: archivoObjeto,
        size: tamanio
}

    fs.writeFileSync('./infoMS.txt',JSON.stringify(info, null,'\t'),'utf-8')

} catch (error) {
    console.log(`Hubo un error al intentar leer el archivo, detalle: ${error.message}`)
}

console.log('FIN DEL PROCESO MS.JS')
