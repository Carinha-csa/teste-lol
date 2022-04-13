const express = require('express')
const cors = require('cors')

const dbFunctions = require('./factoryDatabase/mainDbFactory')





const app = express() // Start the express service for back end

app.use(cors()) // Set the cors for don't conflit the requests

app.get('/', async(req, res) => { // Create a route for method HTTP GET for client side
    const dddsTable = await dbFunctions.queryDDSTable() // Await the query ddds result
    const contractTable = await dbFunctions.queryContracts() // Await the query contracts table result
    res.send({dddsTable, contractTable}) // send the response for user
})

app.listen(3001, () => { // Listen the por 3001 for backend
    console.log('Servidor está rodando')
})