/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('email', 255).unique().notNullable();
        table.string('username', 25).unique().notNullable();
        table.string('password', 25).notNullable();
        //table.integer('role');
        table.foreign('role_id').references('roles.id').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
