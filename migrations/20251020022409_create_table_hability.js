/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('hability', function(table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
        table.string('name', 50).notNullable().unique();
        table.string('icon', 50).notNullable();
        table.integer('percentage').notNullable();
        table.integer('experience_years').notNullable();
        table.string('description', 255).notNullable();
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
