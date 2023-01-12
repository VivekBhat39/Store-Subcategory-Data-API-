const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  class: { type: Schema.Types.ObjectId, ref: 'Class' }
});

module.exports = mongoose.model('Student', studentSchema);