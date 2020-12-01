const showUsers = require('../../hooks/showUsers');
const useMessage = require('../../hooks/useMessage');

const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [useMessage()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [showUsers()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
