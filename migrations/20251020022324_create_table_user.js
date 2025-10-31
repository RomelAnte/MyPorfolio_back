/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
        table.increments('id').primary();
        table.string('name', 50).notNullable().unique();
        table.string('last_name', 50).notNullable().unique();
        table.string('email', 100).notNullable().unique();
        table.string('password').notNullable();
        table.text('description').notNullable();
        table.string('profile_image', 100).notNullable();
        table.timestamps(true, true);
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user');
};
