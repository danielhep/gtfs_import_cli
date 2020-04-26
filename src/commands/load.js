const { Command, flags } = require('@oclif/command')

const { cli } = require('cli-ux')
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

class LoadCommand extends Command {
  static args = [
    { name: 'gtfs', required: true }
  ]

  async run () {
    const { flags } = this.parse(LoadCommand)
    const { args } = this.parse(LoadCommand)

    this.log(`Loading from ${args.gtfs}.`)
    const res = await exec(`cd gtfs-sql-importer && make load GTFS=${args.gtfs}`, { env: process.env })
    this.log('Loaded.')
    this.log(res)
  }
}

LoadCommand.description = `Describe the command here
...
Extra documentation goes here
`

LoadCommand.flags = {
  host: flags.string({ char: 'h', description: 'Database host.', env: 'PGHOST' }),
  user: flags.string({ char: 'u', description: 'Database user.', env: 'PGUSER' }),
  password: flags.string({ char: 'p', description: 'Database password.', env: 'PGPASSWORD' }),
  db: flags.string({ char: 'd', description: 'Database.', env: 'PGDATABASE' })
}

module.exports = LoadCommand
