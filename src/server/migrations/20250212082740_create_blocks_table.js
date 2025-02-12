/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('blocks', function(table) {
        table.increments('id').primary();
        table.integer('section_id').unsigned();
        table.foreign('section_id').references('sections.id').onDelete('CASCADE');
        table.integer('blocktype_id').unsigned();
        table.foreign('blocktype_id').references('blocktypes.id').onDelete('CASCADE');
        table.text('body');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('blocks');
};
