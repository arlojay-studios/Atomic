'use strict';

/**
 * Init
 * @param {Number} port
 *  Which port the server will run on.
 * Usage: --port [port]
 * @param {Boolean} parity
 *  Whether or not the server will be used as a backup. Data retention is 7 days.
 * Usage: --parity [true|false]
 * @param {String} dbPath
 *  Where the DB resides on the file system
 * Usage: --db ['/path/to/db']
 * @private
 */

const argv = require('minimist')(process.argv.slice(1), {
    'default': {
        'port': 3000,
        'parity': false,
        'db': '../db/users.db'
    }
});

/**
 * CommonJS Imports
 * @public
 */

import * as neutron from "@arlojay-studios/neutron-atomic"
import * as proton from "@arlojay-studios/proton-atomic"

/**
 * Server startup and DB linking
 * @param {number} port
 * @returns {protonDB}
 * @public
 */

async function main(): Promise<protonDB> {
    
    const server = new neutron.protonServer(argv.db)
    return await server.init(argv.port);
}

main();