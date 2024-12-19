
exports.up = function(knex) {
    return knex.schema.table('sessions', function(table) {
        table.renameColumn('expire', 'expired');
    });
};

exports.down = function(knex) {
    return knex.schema.table('sessions', function(table) {
        table.renameColumn('expired', 'expire');
    });
};