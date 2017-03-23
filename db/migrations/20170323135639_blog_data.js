
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog_entries', function(table){
    table.increments();
    table.string('title');
    table.text('imageUrl');
    table.date('date'); // YYYY-MM-DD
    table.text('body');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog_entries');
};
