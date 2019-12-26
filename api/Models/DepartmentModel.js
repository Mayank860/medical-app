const mongoose = require('mongoose');

const departmentSchema = {
    name: 'string',
    hospitalId:'',
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }
}
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const schema = new mongoose.Schema(departmentSchema,schemaOptions);
module.exports = mongoose.model('Department', schema);