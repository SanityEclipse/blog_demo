var knex = require('./knex')

function getEntries() {
  return knex('blog_entries').orderBy('date', 'desc');
}
function createEntries(entries) {
  return getEntries().insert(entries, 'id')
}

module.exports = {
  getEntries,
  createEntries
}
