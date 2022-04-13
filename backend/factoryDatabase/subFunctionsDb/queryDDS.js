const pg = require('pg')

const dddsTable = async () => { // Connect on database and make a query for ddds table

    const client = new pg.Client({ // Postgress client instance
        host: 'localhost',
        port: '5432',
        user: 'caua_user',
        password: 'caua#1',
        database: 'ddds_database',
    })


    await client.connect() // Await for client connect

    let ddds = await client.query('SELECT * from ddds').then(value => {return value.rows}) // Query the ddds table

    client.end() //End the client conection

    return ddds // Return the rows from table
}

module.exports = dddsTable