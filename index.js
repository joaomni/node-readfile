const fs = require('fs')

fs.readFile('./utils/file.txt', (errorFile1, resultFile1) => {
    if(errorFile1) {
        console.error('Deu ruim no arquivo1')
        return;
    }
    fs.readFile('./utils/file2.txt', (errorFile2, resultFile2) => {
        if(errorFile2) {
            console.error('Deu ruim no arquivo2')
            return;
        }
        fs.readFile('./utils/file3.txt', (errorFile3, resultFile3) => {
            if(errorFile3) {
                console.error('Deu ruim no arquivo3')
                return;
            }

            const content = `${resultFile1}\n${resultFile2}\n${resultFile3}`
        
            fs.writeFile('./utils/bolsonaro.txt', content, (errorWrite, resultWrite) => {
                if(errorWrite) {
                    console.error('Deu ruim na gravação')
                    return;
                }

                console.log('Arquivo salvo com sucesso!')
            })
        })
    })
})