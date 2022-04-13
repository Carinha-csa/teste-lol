const express = require('express')

const dbFunctions = require('./factoryDatabase/mainDbFactory')
const cors = require('cors')




const app = express()

app.use(cors())

app.get('/', async(req, res) => {
    const dddsTable = await dbFunctions.queryDDSTable() // Await the query ddds result
    const contractTable = await dbFunctions.queryContracts() // Await the query contracts table result
    res.send({dddsTable, contractTable})
})

app.listen(3001, () => {
    console.log('Servidor está rodando')
})