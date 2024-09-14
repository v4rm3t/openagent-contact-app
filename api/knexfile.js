// Description: Knex configuration file for SQLite database

const path = require('path');
const SQLITE_FILENAME = process.env.SQLITE_FILENAME || 'contacts.sqlite3';

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  // Development and production configurations 
    development: {
        client: 'sqlite3',
        connection: {
          filename: path.resolve(__dirname, 'db', SQLITE_FILENAME) // SQLite database file
        },
        useNullAsDefault: true, // Required for SQLite databases
        migrations: {
          directory: path.resolve(__dirname, 'migrations')  // Migrations folder
        },
    },
    production: {
        client: 'sqlite3',
        connection: {
          filename: path.resolve(__dirname, 'db', SQLITE_FILENAME) // SQLite database file
        },
        useNullAsDefault: true, // Required for SQLite databases
        migrations: {
          directory: path.resolve(__dirname, 'migrations')  // Migrations folder
        },
    },
};