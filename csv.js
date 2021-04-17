const csvFilePath='flavors_of_cacao.csv'
const csv=require('csvtojson')

async function f() {
    console.log(await csv().fromFile(csvFilePath))
}

f()
