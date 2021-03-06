gtfsimport
==========

CLI tool to import GTFS feeds from .zip to PostgreSQL database.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gtfsimport.svg)](https://npmjs.org/package/gtfsimport)
[![Downloads/week](https://img.shields.io/npm/dw/gtfsimport.svg)](https://npmjs.org/package/gtfsimport)
[![License](https://img.shields.io/npm/l/gtfsimport.svg)](https://github.com/danielhep/gtfsimport/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gtfsimport
$ gtfsimport COMMAND
running command...
$ gtfsimport (-v|--version|version)
gtfsimport/0.0.1 linux-x64 node-v13.7.0
$ gtfsimport --help [COMMAND]
USAGE
  $ gtfsimport COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gtfsimport gen`](#gtfsimport-gen)
* [`gtfsimport help [COMMAND]`](#gtfsimport-help-command)
* [`gtfsimport init`](#gtfsimport-init)
* [`gtfsimport load GTFS`](#gtfsimport-load-gtfs)

## `gtfsimport gen`

Describe the command here

```
USAGE
  $ gtfsimport gen

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/gen.js](https://github.com/danielhep/gtfsimport/blob/v0.0.1/src/commands/gen.js)_

## `gtfsimport help [COMMAND]`

display help for gtfsimport

```
USAGE
  $ gtfsimport help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `gtfsimport init`

Initializes the database with tables necessary for importing a GTFS feed.

```
USAGE
  $ gtfsimport init

OPTIONS
  -d, --db=db                  Database.
  -h, --host=host              Database host.
  -p, --password=password      Database password.
  -s, --schemaName=schemaName  [default: gtfs] Set the name of the schema.
  -u, --user=user              Database user.

DESCRIPTION
  Initializes the database with tables necessary for importing a GTFS feed.
```

_See code: [src/commands/init.js](https://github.com/danielhep/gtfsimport/blob/v0.0.1/src/commands/init.js)_

## `gtfsimport load GTFS`

Describe the command here

```
USAGE
  $ gtfsimport load GTFS

OPTIONS
  -d, --db=db              Database.
  -h, --host=host          Database host.
  -p, --password=password  Database password.
  -u, --user=user          Database user.

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/load.js](https://github.com/danielhep/gtfsimport/blob/v0.0.1/src/commands/load.js)_
<!-- commandsstop -->
