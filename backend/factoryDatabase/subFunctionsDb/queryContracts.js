const pg = require('pg')


const queryContracts = async () => {

    const client = new pg.Client({ // new client instance
        host: 'localhost',
        port: '5432',
        user: 'caua_user',
        password: 'caua#1',
        database: 'ddds_database',
    })

    await client.connect() // await for client connection
    
    const contracts = await client.query('SELECT * FROM contracts').then(value => {return value.rows}) // query for contracts table

    await client.end()  // end the client connection

    return contracts
}


module.exports = queryContracts