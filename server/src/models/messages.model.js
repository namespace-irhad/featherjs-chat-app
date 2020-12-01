// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Messages extends Model {

  static get tableName() {
    return 'messages';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['text'],

      properties: {
        text: { type: 'string', minLength: 1, maxLength: 255 },
        userId: { type: 'integer' }
      }
    };
  }

  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = function (app) {
  const db = app.get('knex');

  db.schema.hasTable('messages').then(exists => {
    if (!exists) {
      db.schema.createTable('messages', table => {
        table.increments('id');
        table.integer('userId').notNullable();
        table.string('text').notNullable();
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
      })
        .then(() => console.log('Created messages table')) // eslint-disable-line no-console
        .catch(e => console.error('Error creating messages table', e)); // eslint-disable-line no-console
    }
  })
    .catch(e => console.error('Error creating messages table', e)); // eslint-disable-line no-console

  return Messages;
};
