const { Client } = require('pg')
const client = new Client({
  user: 'sgpostgres',
  host: 'SG-devesh-purohit-6981-5812-pgsql-master.servers.mongodirector.com',
  database: 'postgres',
  password: 'LD4KEZran&iOmUlc',
  port: 5432,
})
module.exports = {client}

