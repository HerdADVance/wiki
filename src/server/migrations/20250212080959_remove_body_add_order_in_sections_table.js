
exports.up = function(knex) {
  return knex.schema.table('sections', function(table) {
    table.dropColumn('body');
    table.integer('order');
    table.dropUnique(['title']);
  });
};

exports.down = function(knex) {
  return knex.schema.table('sections', function(table) {
    table.type('body').options;
    table.dropColumn('order');
    table.unique(['title']);
  });
};