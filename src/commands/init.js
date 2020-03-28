const { Command, flags } = require('@oclif/command')
const { cli } = require('cli-ux')
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

class InitCommand extends Command {
  async run () {
    const { flags } = this.parse(InitCommand)
    let db = flags.db
    if (!flags.db) {
      db = await cli.prompt('No database specified. What is your database URI?')
    }
    this.log('Creating database schema.')
    const res = await exec('cd gtfs-sql-importer && make init', { env: process.env })
    // console.log(res)
  }
}

InitCommand.description = `
Initializes the database with tables necessary for importing a GTFS feed.
`

InitCommand.flags = {
  db: flags.string({ char: 'd', description: 'Postgres DB URI', env: 'DB_URI' }),
  schemaName: flags.string({ char: 's', description: 'Set the name of the schema.', default: 'gtfs' })
}

module.exports = InitCommand
