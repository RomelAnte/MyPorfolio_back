/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
        table.string('last_name').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('description').notNullable();
        table.string('profile_image').notNullable();
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
