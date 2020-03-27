const {Command, flags} = require('@oclif/command')

class InitCommand extends Command {
  async run() {
    const {flags} = this.parse(InitCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/danielhep/Git/Rapid/gtfs-sql-importer/gtfsimport/src/commands/init.js`)
  }
}

InitCommand.description = `
Initializes the database with tables necessary for importing a GTFS feed.
`

InitCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = InitCommand
