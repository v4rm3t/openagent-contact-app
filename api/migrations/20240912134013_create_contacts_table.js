// Description: This migration is responsible for creating the contacts table.

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('contacts', (table) => {
        table.increments('id').primary();
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
        table.string('email_address', 255).notNullable().unique();
        table.string('phone_number', 20).notNullable();
        table.text('additional_note', 500);
        table.boolean('verified').defaultTo(false);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('contacts');
};