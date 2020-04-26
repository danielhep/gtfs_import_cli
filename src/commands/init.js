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
    const res = await exec('cd gtfs-sql-importer && make init', {
      env: {
        PGHOST: flags.host,
        PGUSER: flags.user,
        PGPASSWORD: flags.password,
        PGDATABASE: flags.db
      }
    })
    // console.log(res)
  }
}

InitCommand.description = `
Initializes the database with tables necessary for importing a GTFS feed.
`

InitCommand.flags = {
  host: flags.string({ char: 'h', description: 'Database host.', env: 'PGHOST' }),
  user: flags.string({ char: 'u', description: 'Database user.', env: 'PGUSER' }),
  password: flags.string({ char: 'p', description: 'Database password.', env: 'PGPASSWORD' }),
  db: flags.string({ char: 'd', description: 'Database.', env: 'PGDATABASE' }),
  schemaName: flags.string({ char: 's', description: 'Set the name of the schema.', default: 'gtfs' })
}

module.exports = InitCommand
