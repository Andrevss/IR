const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  nome: {
    type: String
  },
  rendimentos: {
    type: String
  },
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);