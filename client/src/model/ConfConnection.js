const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5433,
    //password: "A.2018.s",
    database: "UserDB"
})

module.exports = client