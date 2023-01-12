const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collegeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }]
});

module.exports = mongoose.model('College', collegeSchema);