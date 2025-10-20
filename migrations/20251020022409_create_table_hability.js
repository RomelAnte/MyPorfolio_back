/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('hability', function(table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
        table.string('name').notNullable().unique();
        table.integer('percentage').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('hability');
};
