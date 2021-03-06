
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_table', (tbl) => {
    
    tbl
    .increments()

    tbl
    .string('username', 128)
    .notNullable()

    tbl
    .string('password', 128)
    .notNullable()
    .unique();

    tbl
    .string('role', 128)
    .notNullable();


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_table')
};
