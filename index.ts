'use strict';

import { protonServer } from '@arlojay-studios/neutron-atomic'

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
        'db': './db/users.db'
    }
});

/**
 * Server / DB Init
 * @param {String} dbPath
 * @param {String} port
 * @returns {protonDB}
 */

export class Wrapper {
    private server: protonServer;

    constructor(dbPath: string) {
        this.server = new protonServer(dbPath);
    }

    public main(port: number): Promise<[Express.Application, any] | string> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.server.init(port));
            } catch (err) {
                reject(err);
            }
        }) 
    }
}

const atomic = new Wrapper(argv.db);
console.log(atomic.main(argv.port));