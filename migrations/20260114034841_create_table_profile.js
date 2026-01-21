/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('profile', function(table) {
        table.increments('id').primary();
        table.string('full_name').notNullable();
        table.text('bio');
        table.string('photo_url');
        table.integer('experience_years');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('profile');
};
