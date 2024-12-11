exports.up = function(knex) {
  return knex.schema.alterTable('users', function(table) {
    table.string('password', 255).alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', function(table) {
    table.string('password', 25).alter();
  });
};