const mongoose = require('mongoose');

// Setup Schema
const modelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  constituency: {
    type: String,
    required: true,
  },
});

// Export Model
const Model = (module.exports = mongoose.model('model', modelSchema));

module.exports.get = function(callback, limit) {
  Model.find(callback).limit(limit);
};
