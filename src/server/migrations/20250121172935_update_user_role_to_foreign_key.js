
exports.up = function(knex) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('role');
    table.integer('role_id').unsigned();
    table.foreign('role_id').references('id').inTable('roles').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', function(table) {
    table.dropForeign('role_id');
    table.dropColumn('role_id');
    table.integer('role');
  });
};
