/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('sections', function(table) {
        table.increments('id').primary();
        table.integer('page_id').unsigned();
        table.foreign('page_id').references('pages.id').onDelete('CASCADE');
        table.string('title').unique().notNullable();
        table.text('body');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sections');
};
