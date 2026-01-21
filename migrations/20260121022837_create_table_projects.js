/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description');
        table.string('image_url');
        table.string('github_url');
        table.string('live_demo_url');
        table.boolean('is_featured').defaultTo(true);
        table.integer('order').defaultTo(0);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
};
