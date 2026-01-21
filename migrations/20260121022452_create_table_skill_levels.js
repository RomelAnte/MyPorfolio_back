/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('skill_levels', function(table) {
        table.increments('id').primary();
        table.integer('skill_id').unsigned().references('id').inTable('skills').onDelete('CASCADE');
        table.integer('proficiency_percentage').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('skill_levels');
};
