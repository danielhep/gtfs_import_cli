const { Command, flags } = require('@oclif/command')
const { createPool, sql } = require('slonik')

class GenCommand extends Command {
  static args = [
    { name: 'feed_index', required: true }
  ]

  async run () {
    const { flags } = this.parse(GenCommand)
    const { args } = this.parse(GenCommand)

    const feedIndex = parseInt(args.feed_index)
    const pool = await createPool(`postgres://${flags.user}:${flags.password}@${flags.host}/${flags.db}`)

    Promise.all([
      pool.anyFirst(sql`
        SELECT stop_id FROM gtfs.stops
        WHERE feed_index = ${feedIndex}
      `),
      pool.any(sql`
        SELECT trip_id, stop_id, stop_sequence, departure_time FROM gtfs.stop_times
        WHERE feed_index = ${feedIndex}
        ORDER BY stop_sequence ASC
      `)
    ]).then((res) => {
      const stopIds = res[0]
      const stopTimes = res[1]
      const links = []
      for (const stopID of stopIds) {
        const stopTimesFiltered = stopTimes.filter(({ stop_id }) => stop_id === stopID)
        stopTimesFiltered.forEach((stopTime, i) => {
          if (stopTimesFiltered[i + 1]) {
            links.push({
              start_stop_id: stopID,
              end_stop_id: stopTimesFiltered[i + 1].stop_id,
              departure_time: stopTime.departure_time
            })
          }
        })
      }
    })
  }
}

GenCommand.description = `Describe the command here
...
Extra documentation goes here
`

GenCommand.flags = {
  host: flags.string({ char: 'h', description: 'Database host.', env: 'PGHOST' }),
  user: flags.string({ char: 'u', description: 'Database user.', env: 'PGUSER' }),
  password: flags.string({ char: 'p', description: 'Database password.', env: 'PGPASSWORD' }),
  db: flags.string({ char: 'd', description: 'Database.', env: 'PGDATABASE' })
}

module.exports = GenCommand
