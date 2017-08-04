
exports.up = function(knex, Promise) {
  knex.schema.createTable('collections', function (table) {
    table.increments()
    table.string('title')
    table.string('author')
    table.string('imgSrc')
    table.enu('type', ['movie', 'book', 'music'])
    table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('collections')
};
