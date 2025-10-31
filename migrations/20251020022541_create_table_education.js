/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('education', function(table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
        table.string('institution', 100).notNullable();
        table.string('degree', 100).notNullable();
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('education');
};
