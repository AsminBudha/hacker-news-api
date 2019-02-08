/**
 * Create table-'user'.
 * Fields- id, email and password.
*/
exports.up = function (knex, Promise) {
  return knex.schema
    //<User>
    .createTable('user', function (tbl) {
      //PK
      tbl.increments('id');

      //Fields
      tbl.string('email', 255).notNullable();
      tbl.string('password', 255).notNullable();
    });
};

/**
 * Delete table-'user'.
*/
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('user');
};
