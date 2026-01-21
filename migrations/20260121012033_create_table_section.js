/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('section', function(table) {
        table.increments('id').primary();
        table.string('key').notNullable();
        table.string('title').notNullable();
        table.text('subtitle');
        table.boolean('is_active').defaultTo(true);
        table.integer('order').defaultTo(0);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('section');
};
