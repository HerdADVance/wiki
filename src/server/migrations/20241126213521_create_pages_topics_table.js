/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pages_topics', function(table) {
        table.increments('id').primary();
        table.integer('page_id').unsigned().references('pages.id');
        table.integer('topic_id').unsigned().references('topics.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pages_topics');
};
