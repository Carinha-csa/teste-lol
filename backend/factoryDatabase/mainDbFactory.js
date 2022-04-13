const queryDDSTable = require('./subFunctionsDb/queryDDS')
const queryContracts = require('./subFunctionsDb/queryContracts')

const dbFunctions = { //  Main factory for querys in Database
    queryDDSTable,
    queryContracts
}

module.exports = dbFunctions