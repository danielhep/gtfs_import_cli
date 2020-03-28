const {Command, flags} = require('@oclif/command')

class LoadCommand extends Command {
  async run() {
    const {flags} = this.parse(LoadCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/danielhep/Git/Rapid/gtfsimport/src/commands/load.js`)
  }
}

LoadCommand.description = `Describe the command here
...
Extra documentation goes here
`

LoadCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = LoadCommand
