const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: { type: String, required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
  college: { type: Schema.Types.ObjectId, ref: 'College' }
});

module.exports = mongoose.model('Class', classSchema);