/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('experiences', function(table) {
        table.increments('id').primary();
        table.string('role').notNullable();
        table.string('company').notNullable();
        table.date('start_date').notNullable();
        table.date('end_date');
        table.text('description');
        table.boolean('is_current').defaultTo(false);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('experiences');
};
