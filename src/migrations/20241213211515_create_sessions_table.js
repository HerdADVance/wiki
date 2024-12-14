
exports.up = function(knex) {
  return knex.schema.createTable('sessions', function(table) {
    table.text('sid').notNullable().collate('default'); // Session ID
    table.json('sess').notNullable(); // Session data
    table.timestamp('expire', { useTz: true }).notNullable(); // Expiration time

    // Set primary key constraint
    table.primary('sid');

    // Create an index on the expire column for faster lookups
    table.index('expire', 'IDX_session_expire');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sessions'); // Rollback function to drop the table
};
